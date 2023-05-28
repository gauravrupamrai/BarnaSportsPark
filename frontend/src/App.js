import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Store from "./redux/store";
import { loadUser } from "./redux/actions/user";
import UserLayout from "./components/Layout/UserLayout.jsx";

/** import all componenents */
import {
  HomePage,
  LoginPage,
  SignUpPage,
  ActivatePage,
  PageNotFoundPage,
  VerifyEmailPage,
  CreateContentPage,
  UserPage,
  UserProfilePage,
  AdminPage
} from "./Routes.js";

/** root routes */
const App = () => {

  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/activate" element={<ActivatePage />} />
        <Route path="/verifyemail" element={<VerifyEmailPage />} />
        <Route path="/createcontent" element={<CreateContentPage />} />
        <Route path="/user" element={<UserPage />} />
            <Route path="/userprofile" element={<UserProfilePage />} />
        <Route path="/admin" element={<AdminPage />} />
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
