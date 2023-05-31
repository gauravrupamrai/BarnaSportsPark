import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { GoVerified } from "react-icons/go";
import {VscError} from "react-icons/vsc";
import {BiErrorAlt} from "react-icons/bi";
import {FiUserCheck} from "react-icons/fi";

const ActivatePage = () => {
  const [statusData, setStatusData] = useState({});
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const status = searchParams.get("status") || "error";
    let newStatusData = {};

    switch (status) {
      case "success":
        newStatusData = {
          head: "Success",
          icon: <GoVerified />,
          message: "Your account has been activated. You can now login.",
          button: "Login Now",
          route: "/login"
        };
        break;
      case "invalid_token":
        newStatusData = {
          head: "Invalid Token",
          icon: <BiErrorAlt />,
          message: "Your token is expired or invalid. Please register again.",
          button: "Register Again",
          route: "/signup"
        };
        break;
      case "user_already_exists":
        newStatusData = {
          head: "User Already Exists",
          icon: <FiUserCheck />,
          message: "You already have an account. Please login.",
          button: "Login Now",
          route: "/login"
        };
        break;
      case "internal_server_error":
      case "error":
      default:
        newStatusData = {
          head: "Error",
          icon: <VscError />,
          message: "Something went wrong. Please try again later.",
          button: "Go to Homepage",
          route: "/"
        };
        break;
    }

    setStatusData(newStatusData);
  }, [location]);

  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="fixed inset-0 w-full h-full bg-black opacity-40"></div>
      <div className="flex items-center min-h-screen px-4 py-8">
        <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
          <div className="mt-3">
            {statusData.icon && (
              <div className="flex items-center justify-center w-12 h-12 mx-auto bg-green-100 rounded-full">
                {statusData.icon}
              </div>
            )}
            <div className="mt-2 text-center">
              {statusData.head && (
                <h4 className="text-lg font-medium text-gray-800">{statusData.head}</h4>
              )}
              {statusData.message && (
                <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                  {statusData.message}
                </p>
              )}
            </div>
          </div>
          <div className="items-center gap-2 mt-3 sm:flex">
            {statusData.route && (
              <Link to={statusData.route}>
                {statusData.button && (
                  <button className="w-full mt-2 p-2.5 flex-1 text-white bg-indigo-600 rounded-md outline-none ring-offset-2 ring-indigo-600 focus:ring-2">
                    {statusData.button}
                  </button>
                )}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivatePage;
