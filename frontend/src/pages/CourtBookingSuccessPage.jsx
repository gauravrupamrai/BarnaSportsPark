import React from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo/Logo_Text_SBS.svg";

const CourtBookingSuccessPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingData = location.state.bookingData;

  const goToHomepage = () => {
    navigate("/");
  };

  const printPage = () => {
    window.print();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-md">
        <div>
          <Link to="/">
            <img
              src={logo}
              width={200}
              className="mx-auto"
              alt="Barna Sports Park"
            />
          </Link>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Court Booking Successful!
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Here are your booking details:
          </p>
          <p className="mt-2 text-center text-sm text-gray-600 break-words">
            Date: {bookingData.bookingDate}
          </p>
          <p className="mt-2 text-center text-sm text-gray-600 break-words">
            Court: {bookingData.court}
          </p>
          <p className="mt-2 text-center text-sm text-gray-600 break-words">
            Slot: {bookingData.bookingSlot}
          </p>
          <p className="mt-2 text-center text-sm text-gray-600 break-words">
            Booking ID: {bookingData._id}
          </p>
          <p className="mt-2 text-center text-sm text-gray-600 break-words">
            Membership Id: {bookingData.membership}
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <button
            onClick={printPage}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Print This Page
          </button>
          <button
            onClick={goToHomepage}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Back to Homepage
          </button>
          <Link to = "/courtBooking" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
          <button
            
          >
            Make a new Booking
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourtBookingSuccessPage;
