import React from "react";
import UserNavbar from "./UserNavbar.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  UserPage,
  UserMembershipPage,
  RenewMembershipPage,
  UpdateMembershipPage,
  BuyMembershipPage,
  MembershipSuccessPage,
  UserCourtBookingPage,
  BookACourtPage,
  PageNotFoundPage,
  MembershipFailedPage,
} from "../../Routes.js";

const UserLayout = () => {
  function RequireMembership({ children }) {
    let { isMembership } = useSelector((state) => state.user);
    return isMembership === true ? (
      children
    ) : (
      <Navigate to="/user/buy-new-memberships" replace />
    );
  }

  return (
    <>
      <UserNavbar />
      <Routes>
        <Route path="/" element={<UserPage />} />

        <Route path="/your-memberships" element={<UserMembershipPage />} />
        <Route path="/renew-memberships" element={<RenewMembershipPage />} />
        <Route path="/update-memberships" element={<UpdateMembershipPage />} />
        <Route path="/buy-new-memberships" element={<BuyMembershipPage />} />

        <Route
          path="/your-court-bookings"
          element={
            <RequireMembership>
              <UserCourtBookingPage />
            </RequireMembership>
          }
        />
        <Route
          path="/book-a-court"
          element={
            <RequireMembership>
              <BookACourtPage />
            </RequireMembership>
          }
        />
        <Route path="*" element={<PageNotFoundPage />} />
      </Routes>
    </>
  );
};

export default UserLayout;
