import React from "react";
import UserNavbar from "./UserNavbar.jsx";
import { Routes, Route } from "react-router-dom";

import {
    UserPage,

    UserMembershipPage,
    RenewMembershipPage,
    UpdateMembershipPage,
    BuyMembershipPage,

    UserCourtBookingPage,
    BookACourtPage,

    UserCoachingSession,
    BookACoachingSessionPage,

    UserEventBookingPage,
    BookAnEventPage,
    UpdateAnEventPage,

  PageNotFoundPage,
} from "../../Routes.js";

const UserLayout = () => {

  return (
    <>
      <UserNavbar />
      <Routes>
        <Route path="/" element={<UserPage />} />

        <Route path="/your-memberships" element={<UserMembershipPage />} />
        <Route path="/renew-memberships" element={<RenewMembershipPage />} />
        <Route path="/update-memberships" element={<UpdateMembershipPage />} />
        <Route path="/buy-new-memberships" element={<BuyMembershipPage />} />

        <Route path="/your-court-bookings" element={<UserCourtBookingPage />} />
        <Route path="/book-a-court" element={<BookACourtPage />} />

        <Route path="/your-coaching-sessions" element={<UserCoachingSession />} />
        <Route path="/book-a-coaching-session" element={<BookACoachingSessionPage />} />

        <Route path="/your-events-booking" element={<UserEventBookingPage />} />
        <Route path="/book-events" element={<BookAnEventPage />} />
        <Route path="/update-event" element={<UpdateAnEventPage />} />
        
        <Route path="*" element={<PageNotFoundPage />} />
      </Routes>
    </>
  );
};

export default UserLayout;
