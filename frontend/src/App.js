import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import {Store} from "./redux/store";
import { loadUser } from "./redux/actions/user";

/** import all components */
import {
  HomePage,
  AboutUsPage,
  FacilitiesPage,
  ContactUsPage,
  FAQsPage,
  LoginPage,
  SignUpPage,
  ActivatePage,
  AdminPage,
  CreateContentPage,
  DraftSendEmailPage,
  UserLayout,
  PageNotFoundPage,
} from "./Routes.js";

/** root routes */
const App = () => {
  // useEffect(() => {
  //   // Store.dispatch(loadUser());
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutUs" element={<AboutUsPage />} />
        <Route path="/facilities" element={<FacilitiesPage />} />

        <Route path="/contactUs" element={<ContactUsPage />} />
        <Route path="/faqs" element={<FAQsPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/activate" element={<ActivatePage />} />

        <Route path="/user/*" element={<UserLayout />} />

        <Route path="/admin" element={<AdminPage />} />
        <Route path="/createContent" element={<CreateContentPage />} />
        <Route path="/draftSendEmail" element={<DraftSendEmailPage />} />

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
