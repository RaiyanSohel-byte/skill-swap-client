import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import Loading from "../components/Loading";
import useAuth from "../hooks/useAuth";
import { FaSearch, FaBookOpen, FaDollarSign } from "react-icons/fa"; // Added FaBookOpen and FaDollarSign for flair
import { Link } from "react-router";

const MyBookings = () => {
  const axiosInstance = useAxios();
  const { user } = useAuth();

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axiosInstance.get(`/bookings?email=${user.email}`);
        setBookings(res.data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBookings();
  }, [axiosInstance, user]);

  if (loading) {
    return <Loading />;
  }

  const TableHead = () => (
    <thead className="bg-teal-50 text-teal-700 uppercase text-sm font-semibold border-b-2 border-teal-200">
      <tr>
        <th className="rounded-tl-lg">Serial</th>
        <th>Skill Name</th>
        <th>Price</th>
        <th>Provider Name</th>
        <th>Provider Email</th>
        <th className="rounded-tr-lg text-center">Details</th>
      </tr>
    </thead>
  );

  return (
    <div className="py-20 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-0">
      {/* Title */}
      <h3 className="text-4xl md:text-5xl font-extrabold text-teal-700 text-center mb-10 flex items-center justify-center gap-3">
        My Bookings
      </h3>

      {/* Data Table */}
      <div className="overflow-x-auto bg-white rounded-xl shadow-2xl border border-teal-100">
        <table className="table w-full table-lg">
          <TableHead />
          <tbody>
            {bookings.length > 0 ? (
              bookings.map((booking, i) => (
                <tr
                  key={booking._id}
                  className="hover:bg-teal-50/50 border-gray-100"
                >
                  <th className="font-semibold text-gray-700">{i + 1}</th>
                  <td className="font-medium text-gray-800">
                    {booking.skillName}
                  </td>
                  <td className="font-bold text-teal-600 flex items-center gap-1">
                    <FaDollarSign className="text-sm" />{" "}
                    {parseFloat(booking.price).toFixed(2)}
                  </td>
                  <td>{booking.providerName}</td>
                  <td className="break-all text-sm text-gray-600">
                    {booking.providerEmail}
                  </td>

                  <td className="text-center">
                    <Link
                      to={`/${booking.skillId}`}
                      className="btn btn-sm bg-teal-500 hover:bg-teal-600 text-white border-none rounded-full transition-colors font-semibold"
                    >
                      <FaSearch className="text-sm" /> View
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="text-center py-10 text-xl text-gray-500 italic"
                >
                  You have no active bookings.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
