import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../redux/reducers/user";

const getBookingURL = `${process.env.REACT_APP_APP_URL}/get-bookings`;
const apiKey = process.env.REACT_APP_API_KEY;

const CourtBookingDetailsPage = () => {
  const { user_token } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Define state variables for past and upcoming bookings
  const [pastBookings, setPastBookings] = useState([]);
  const [upcomingBookings, setUpcomingBookings] = useState([]);

  const [selectedItem, setSelectedItem] = useState(0);

  useEffect(() => {
    console.log("user_token: ", user_token);
    const requestConfig = {
      headers: {
        "x-api-key": apiKey,
      },
    };

    const requestBody = {
      token: user_token,
    };

    const fetchData = async () => {
      try {
        const response = await axios.post(
          getBookingURL,
          requestBody,
          requestConfig
        );
        console.log(response);

        const { pastBookings, upcomingBookings } = response.data.body;
        setPastBookings(response.data.body.pastBookings);
        setUpcomingBookings(response.data.body.upcomingBookings);

        console.log("pastBookings: ", pastBookings);
        console.log("upcomingBookings: ", upcomingBookings);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          navigate("/");
          dispatch(setUser(null));
        }
      }
    };

    fetchData();
  }, [user_token]);

  const tableItems = [
    {
      label: "Upcoming bookings",
      items: upcomingBookings.map((booking) => ({
        _id: booking._id,
        court: booking.court,
        bookingSlot: booking.bookingSlot,
        bookingDate: new Date(booking.bookingDate).toLocaleDateString(),
        membership: booking.membership._id,
        user: booking.user,
      })),
    },
    {
      label: "Past Bookings",
      items: pastBookings.map((booking) => ({
        _id: booking._id,
        court: booking.court,
        bookingSlot: booking.bookingSlot,
        bookingDate: new Date(booking.bookingDate).toLocaleDateString(),
        membership: booking.membership._id,
        user: booking.user,
      })),
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 bg-white rounded-2xl mt-20">
      <div className="max-w-lg pt-5">
        <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
          Your Bookings
        </h3>
        <p className="text-gray-600 mt-2">
          Please find below details about your bookings.
        </p>
      </div>
      <div className="text-sm mt-12 overflow-x-auto">
        <ul
          rol="tablist"
          className="w-full border-b flex items-center gap-x-3 overflow-x-auto"
        >
          {tableItems.map((item, idx) => (
            <li
              key={idx}
              className={`py-2 border-b-2 ${
                selectedItem === idx
                  ? "border-indigo-600 text-indigo-600"
                  : "border-white text-gray-500"
              }`}
            >
              <button
                role="tab"
                aria-selected={selectedItem === idx ? true : false}
                aria-controls={`tabpanel-${idx + 1}`}
                className="py-2.5 px-4 rounded-lg duration-150 hover:text-indigo-600 hover:bg-gray-50 active:bg-gray-100 font-medium"
                onClick={() => setSelectedItem(idx)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        <table className="w-full table-auto text-left">
          <thead className="text-gray-600 font-medium border-b">
            <tr>
              <th className="py-4 pr-6">Booking ID</th>
              <th className="py-4 pr-6">Court</th>
              <th className="py-4 pr-6">Booking Slot</th>
              <th className="py-4 pr-6">Booking Date</th>
              <th className="py-4 pr-6">Membership ID</th>
              <th className="py-4 pr-6">User ID</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {tableItems[selectedItem].items.map((item, idx) => (
              <tr key={idx}>
                <td className="pr-6 py-4 whitespace-nowrap">{item._id}</td>
                <td className="pr-6 py-4 whitespace-nowrap">{item.court}</td>
                <td className="pr-6 py-4 whitespace-nowrap">
                  {item.bookingSlot}
                </td>
                <td className="pr-6 py-4 whitespace-nowrap">
                  {item.bookingDate}
                </td>
                <td className="pr-6 py-4 whitespace-nowrap">
                  {item.membership}
                </td>
                <td className="pr-6 py-4 whitespace-nowrap">{item.user}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourtBookingDetailsPage;
