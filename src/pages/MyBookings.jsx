import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loading from "../components/Loading";
import useAuth from "../hooks/useAuth";
import { FaSearch, FaDollarSign } from "react-icons/fa";
import { Link } from "react-router";
import useAxiosSecure from "../hooks/useAxiosSecure";

const MyBookings = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axiosSecure.get(`/bookings?email=${user.email}`);
        setBookings(res.data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBookings();
  }, [axiosSecure, user]);

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
      <h3 className="text-4xl md:text-5xl font-extrabold text-teal-700 text-center mb-10 flex items-center justify-center gap-3">
        My Bookings
      </h3>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="overflow-x-auto bg-white rounded-xl shadow-2xl border border-teal-100"
      >
        <table className="table w-full table-lg">
          <TableHead />
          <tbody>
            <AnimatePresence>
              {bookings.length > 0 ? (
                bookings.map((booking, i) => (
                  <motion.tr
                    key={booking._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
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
                        to={`/skillDetails/${booking.skillId}`}
                        className="btn btn-sm bg-teal-500 hover:bg-teal-600 text-white border-none rounded-full transition-colors font-semibold"
                      >
                        <FaSearch className="text-sm" /> View
                      </Link>
                    </td>
                  </motion.tr>
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
            </AnimatePresence>
          </tbody>
        </table>
      </motion.div>
    </div>
  );
};

export default MyBookings;
