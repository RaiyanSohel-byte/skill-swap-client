import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import Loading from "../components/Loading";
import useAuth from "../hooks/useAuth";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router";

const MyBookings = () => {
  const axiosInstance = useAxios();
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axiosInstance.get(`/bookings?email=${user.email}`).then((res) => {
      setBookings(res.data);
    });
  }, [axiosInstance, user]);
  if (!bookings) {
    return <Loading />;
  }
  return (
    <div className="py-20 max-w-[1200px] mx-auto">
      <h3 className="title">My Bookings</h3>
      <div className="overflow-x-auto pt-4">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Skill Name</th>
              <th>Price</th>
              <th>Provider Name</th>
              <th>Provider Email</th>
              <th>Show Details</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, i) => (
              <tr key={booking._id}>
                <th>{i + 1}</th>
                <td>{booking.skillName}</td>
                <td>$ {booking.price}</td>
                <td>{booking.providerName}</td>
                <td>{booking.providerEmail}</td>

                <td>
                  <Link to={`/${booking.skillId}`} className="btn">
                    <FaSearch />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
