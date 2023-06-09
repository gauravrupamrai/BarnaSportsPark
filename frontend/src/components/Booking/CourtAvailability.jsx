import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Court from "./Court.jsx";

const getAvailabilityURL = `${process.env.REACT_APP_APP_URL}/get-court-booking`;
const bookCourtURL = `${process.env.REACT_APP_APP_URL}/book-court`;
const apiKey = process.env.REACT_APP_API_KEY;

const CourtAvailability = () => {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [courts, setCourts] = useState([]);
  const [bookingData, setBookingData] = useState(null);
  const { user_token } = useSelector((state) => state.user);

  useEffect(() => {
    fetchCourtAvailability();
  }, [date]);

  const fetchCourtAvailability = async () => {
    const requestConfig = {
      headers: {
        "x-api-key": apiKey,
      },
    };

    const requestBody = {
      token: user_token,
      bookingDate: date,
    };

    axios
      .post(getAvailabilityURL, requestBody, requestConfig)
      .then((response) => {
        setCourts(response.data.availableSlots);
      })
      .catch((error) => {
        console.log("error: ", error);
        if (error.response.status === 401 || error.response.status === 403) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Something went wrong. Please try again later.");
        }
      });
  };

  const bookCourt = async (court, slot) => {
    const requestConfig = {
      headers: {
        "x-api-key": apiKey,
      },
    };

    const requestBody = {
      token: user_token,
      courtID: court,
      userID: user_token,
      membershipID: user_token,
      slotID: slot,
      date: date,
    };

    axios
      .post(bookCourtURL, requestBody, requestConfig)
      .then((response) => {
        setBookingData(response.data);
        fetchCourtAvailability();
        toast.success("Court booked successfully!");
      })
      .catch((error) => {
        console.log("error: ", error);
        if (error.response.status === 401 || error.response.status === 403) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Something went wrong. Please try again later.");
        }
      });
  };

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Tennis Court Booking System</h1>
        <label>
          Select Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="form-input ml-2"
          />
        </label>
        {courts.map((court, i) => (
          <Court
            key={i}
            court={court.name}
            slots={court.slots}
            bookCourt={bookCourt}
          />
        ))}
        {bookingData && (
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-6"
            role="alert"
          >
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline"> Court booked successfully!</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourtAvailability;
