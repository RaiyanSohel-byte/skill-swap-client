import React, { useState, useEffect } from "react";
import { use } from "react";
import {
  FaEnvelope,
  FaUserEdit,
  FaDog,
  FaChartLine,
  FaDollarSign,
  FaUserTie,
} from "react-icons/fa";
import { useSpring, animated } from "@react-spring/web";

import { AuthContext } from "../contexts/AuthContext/AuthContext";

import userImg from "../assets/user.png";
import { Link } from "react-router";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { LucideLayoutDashboard, LucideListCheck } from "lucide-react";
import useAxios from "../hooks/useAxios";

const StatCard = ({ icon, title, value, color }) => {
  const colorClasses = {
    teal: "bg-teal-100 text-teal-700 border-teal-200",
    green: "bg-green-100 text-green-700 border-green-200",
    blue: "bg-blue-100 text-blue-700 border-blue-200",
  };

  return (
    <div
      className={`p-5 rounded-xl border flex items-center gap-4 ${colorClasses[color]}`}
    >
      <div className="text-3xl">{icon}</div>
      <div>
        <p className="text-sm font-medium opacity-80">{title}</p>
        <p className="text-3xl font-bold">{value}</p>
      </div>
    </div>
  );
};

const COLORS = ["#0D9488", "#14B8A6", "#4FD1C5", "#99F6E4"];
const PriceDistributionChart = ({ data }) => {
  const priceData = data.reduce((acc, item) => {
    const price = parseFloat(item.price);
    let tier;
    if (price < 50) tier = "Low (< $50)";
    else if (price < 150) tier = "Medium ($50-$149)";
    else tier = "High ($150+)";

    const existing = acc.find((d) => d.name === tier);
    if (existing) {
      existing.value += 1;
    } else {
      acc.push({ name: tier, value: 1 });
    }
    return acc;
  }, []);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border rounded shadow-md text-sm">
          <p className="font-semibold">{payload[0].name}</p>
          <p>Bookings: {payload[0].value}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={priceData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          labelLine={false}
          label={({ name, percent }) =>
            `${name}: ${(percent * 100).toFixed(0)}%`
          }
        >
          {priceData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend layout="vertical" verticalAlign="middle" align="right" />
      </PieChart>
    </ResponsiveContainer>
  );
};

const TopSkillsChart = ({ data }) => {
  const skillCounts = data.reduce((acc, item) => {
    acc[item.skillName] = (acc[item.skillName] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.keys(skillCounts)
    .map((name) => ({ skillName: name, bookings: skillCounts[name] }))
    .sort((a, b) => b.bookings - a.bookings)
    .slice(0, 5);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={chartData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        layout="vertical"
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
        <XAxis type="number" stroke="#6B7280" />
        <YAxis
          dataKey="skillName"
          type="category"
          stroke="#6B7280"
          width={100}
        />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="bookings"
          fill="#14B8A6"
          name="Bookings"
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

const ProviderBookingsChart = ({ data }) => {
  const providerCounts = data.reduce((acc, item) => {
    const key = item.providerName || "N/A";
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.keys(providerCounts)
    .map((name) => ({ providerName: name, bookings: providerCounts[name] }))
    .sort((a, b) => b.bookings - a.bookings);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={chartData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
        <XAxis
          dataKey="providerName"
          angle={-15}
          textAnchor="end"
          height={50}
          interval={0}
          stroke="#6B7280"
        />
        <YAxis dataKey="bookings" stroke="#6B7280" />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="bookings"
          fill="#0D9488"
          name="Bookings"
          radius={[5, 5, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

const ProfileCard = () => {
  const { user } = use(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fade = useSpring({
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    config: { tension: 180, friction: 18 },
  });

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch("http://localhost:5000/bookings");
        if (!response.ok) {
          throw new Error("Failed to fetch bookings data");
        }
        const data = await response.json();
        setBookings(data);
      } catch (err) {
        console.error("Fetch Error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const totalBookings = bookings.length;
  const totalRevenue = bookings.reduce(
    (sum, booking) => sum + parseFloat(booking.price || 0),
    0
  );

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 max-w-[1200px] mx-auto">
      <animated.div
        style={fade}
        className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        <div className="bg-white rounded-3xl shadow-2xl border border-teal-100 p-8 flex flex-col items-center text-center h-fit">
          <img
            src={user?.photoURL || userImg}
            alt="Profile"
            className="w-36 h-36 rounded-full object-cover border-4 border-teal-400 shadow-xl"
          />

          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            {user?.displayName || "Unnamed Pet Lover"}
          </h2>

          <p className="flex items-center gap-2 mt-3 text-lg text-gray-600 break-all font-medium">
            <FaEnvelope className="text-teal-600" /> {user?.email}
          </p>

          <Link
            to="/profile/update-profile"
            className="
              mt-8
              inline-flex items-center gap-3
              px-7 py-3
              bg-teal-500 text-white font-semibold
              rounded-full shadow-lg hover:bg-teal-600
              transition-all duration-300 transform hover:scale-[1.03]
            "
          >
            <FaUserEdit className="text-lg" /> Update Profile
          </Link>
        </div>

        <div className="md:col-span-2 bg-white rounded-3xl shadow-2xl border border-teal-100 p-8">
          <h1 className="text-4xl font-bold text-teal-700 mb-8 flex items-center gap-3">
            <LucideLayoutDashboard /> Account Dashboard
          </h1>

          {/* DASHBOARD STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <StatCard
              icon={<LucideListCheck />}
              title="Total Bookings"
              value={totalBookings}
              color="teal"
            />
            <StatCard
              icon={<FaDollarSign />}
              title="Total Revenue"
              value={`$${totalRevenue.toFixed(2)}`}
              color="green"
            />
            <StatCard
              icon={<FaUserTie />}
              title="Unique Providers"
              value={new Set(bookings.map((b) => b.providerEmail)).size}
              color="blue"
            />
          </div>

          {/* GRAPHS SECTION */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
              <FaChartLine className="text-xl text-teal-600" /> Activity
              Analytics
            </h2>

            {loading ? (
              <div className="text-center p-8 text-xl text-teal-600">
                <LucideListCheck className="animate-spin inline mr-2" /> Loading
                charts...
              </div>
            ) : error ? (
              <div className="text-center p-8 text-red-600">
                Error loading charts: {error}.
              </div>
            ) : totalBookings === 0 ? (
              <div className="bg-white border-2 border-dashed border-teal-200 rounded-xl p-8 text-gray-600 text-lg italic text-center">
                No booking data available to generate charts.
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Top 5 Skills */}
                <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-lg border border-teal-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Top 5 Most Booked Skills
                  </h3>
                  <TopSkillsChart data={bookings} />
                </div>

                {/* Price Distribution */}
                <div className="lg:col-span-1 bg-white p-6 rounded-2xl shadow-lg border border-teal-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Price Distribution
                  </h3>
                  <PriceDistributionChart data={bookings} />
                </div>

                {/* Provider Bookings  */}
                <div className="lg:col-span-1 bg-white p-6 rounded-2xl shadow-lg border border-teal-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Bookings Per Provider
                  </h3>
                  <ProviderBookingsChart data={bookings} />
                </div>
              </div>
            )}
          </div>
        </div>
      </animated.div>
    </div>
  );
};

export default ProfileCard;
