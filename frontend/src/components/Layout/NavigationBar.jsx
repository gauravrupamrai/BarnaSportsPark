import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { navigation } from "../../static/data";
import logo from "../../assets/logo/Logo_Text_SBS.svg";
import { useSelector } from "react-redux";

const NavigationBar = () => {
  const {isAuthenticated, user} = useSelector((state) => state.user);
  console.log(isAuthenticated, user); // Add this line
  const [state, setState] = useState(false);

  return (
    <>
    <div className="bg-white pb-5">
      <nav className="relative items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 md:flex md:space-x-6">
        <div className="flex justify-between">
          <Link to="/">
            <img src={logo} width={120} height={50} alt="Float UI logo" />
          </Link>
          <button
            className="text-gray-500 outline-none md:hidden"
            onClick={() => setState(!state)}
          >
            {state ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        <ul
          className={`flex-1 justify-between pt-4 md:pt-0 md:text-sm md:font-medium md:flex md:mt-0 h-screen md:h-auto ${
            state
              ? "absolute inset-x-0 px-4 border-b bg-white md:border-none md:static"
              : "hidden"
          }`}
        >
          <div className="items-center space-y-5 md:flex md:space-x-6 md:space-y-0 md:ml-12">
            {navigation.map((item, idx) => (
              <li className="text-gray-500 hover:text-indigo-600 pl-2 md:pl-0" key={idx}>
                <NavLink to={item.url}>{item.title}</NavLink>
              </li>
            ))}
          </div>
          {isAuthenticated ? (
            <div className="items-center space-y-5 md:flex md:space-x-6 md:space-y-0 md:ml-12 mt-5 md:mt-0">
            <li className="order-2 py-3 md:py-0">
              <Link
                to="/user"
                className="py-2 px-5 rounded-lg font-medium text-white text-center bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 duration-150 block md:py-3 md:inline shadow-lg hover:shadow-none"
              >
                Hi {user.user.name}
              </Link>
            </li>
            <li className="order-3 py-3 md:py-0">
            <Link
                to="/logout"
                className="py-2 px-5 rounded-lg font-medium text-black text-center bg-white-600 border hover:text-white hover:bg-indigo-500 active:bg-indigo-700 duration-150 block md:py-3 md:inline"
              >
                Logout
              </Link>
            </li>
          </div>
          ) : (
            <div className="items-center space-y-5 md:flex md:space-x-6 md:space-y-0 md:ml-12 mt-5 md:mt-0">
            <li className="order-2 py-3 md:py-0">
              <Link
                to="/login"
                className="py-2 px-5 rounded-lg font-medium text-black text-center bg-white-600 border hover:text-white hover:bg-indigo-500 active:bg-indigo-700 duration-150 block md:py-3 md:inline"
              >
                Log in
              </Link>
            </li>
            <li className="order-3 py-3 md:py-0">
              <Link
                to="/signup"
                className="py-2 px-5 rounded-lg font-medium text-white text-center bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 duration-150 block md:py-3 md:inline shadow-lg hover:shadow-none"
              >
                Sign up
              </Link>
            </li>
          </div>
          )}
        </ul>
      </nav>
      </div>
    </>
  );
};

export default NavigationBar;
