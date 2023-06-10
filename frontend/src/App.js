import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import {Store} from "./redux/store";
// import { loadUser } from "./redux/actions/user";
import { useSelector } from "react-redux";
/** import all components */
import {
  HomePage,
  AboutUsPage,
  FacilitiesPage,
  ContactUsPage,
  FAQsPage,
  PoliciesPage,
  LoginPage,
  SignUpPage,
  ActivatePage,
  AdminPage,
  CreateContentPage,
  DraftSendEmailPage,
  UserLayout,
  PageNotFoundPage,
  PasswordResetPage,
  PasswordResetRequestPage,
  MembershipSuccessPage,
  MembershipFailedPage,
  AssignFOBPage,
  VolunteerPage,
  NewsNoticePage,
  EventsPage,
  MembershipPage,
  AdminLayout,

} from "./Routes.js";

/** root routes */
const App = () => {
  function RequireAdmin({ children }) {
    const { user_data } = useSelector((state) => state.user);
    return user_data.user.role === "admin" ? children : <Navigate to="/login" replace />;
  }

  function RequireAuth({ children }) {
    const { isAuthenticated } = useSelector((state) => state.user);
    return isAuthenticated === true ? (
      children
    ) : (
      <Navigate to="/login" replace />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutUs" element={<AboutUsPage />} />
        <Route path="/facilities" element={<FacilitiesPage />} />
        <Route path="/newsNotice" element={<NewsNoticePage />} />

        <Route path="/contactUs" element={<ContactUsPage />} />
        <Route path="/faqs" element={<FAQsPage />} />
        <Route path="/policies" element={<PoliciesPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/membership" element={<MembershipPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/activate" element={<ActivatePage />} />
        <Route path="/forgot-password" element={<PasswordResetRequestPage />} />
        <Route path="/reset-password" element={<PasswordResetPage />} />

        <Route path="/membership/success" element={<MembershipSuccessPage />} />
        <Route path="/membership/failed" element={<MembershipFailedPage />} />

        <Route path="/volunteer" element={<VolunteerPage />} />

        <Route
          path="/user/*"
          element={
            <RequireAuth>
              <UserLayout />
            </RequireAuth>
          }
        />

        <Route
          path="/admin/*"
          element={
            <RequireAdmin>
              <AdminLayout />
            </RequireAdmin>
          }
        />
        <Route path="/createContent" element={<CreateContentPage />} />
        <Route path="/draftSendEmail" element={<DraftSendEmailPage />} />
        <Route path="/assignFOB" element={<AssignFOBPage />} />

        <Route path="*" element={<PageNotFoundPage />} />
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
  );
};

export default App;
