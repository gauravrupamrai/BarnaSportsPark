import React, { useEffect, useRef, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { navigation } from "../../static/data";
import logo from "../../assets/logo/Logo_Text_SBS.svg";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../redux/reducers/user";
import {IoMdArrowDropdown} from "react-icons/io";

const NavigationBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, user_data } = useSelector((state) => state.user);
  console.log(isAuthenticated, user_data); // Add this line
  const [state, setState] = useState(false);

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (
        isDropdownVisible &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isDropdownVisible]);

  const logOut = () => {
    dispatch(setUser(null));
    navigate("/");
  };
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
                <li
                  className="text-gray-500 hover:text-indigo-600 pl-2 md:pl-0"
                  key={idx}
                >
                  <NavLink to={item.url}>{item.title}</NavLink>
                </li>
              ))}
              <li className="relative text-gray-500 hover:text-indigo-600 pl-2 md:pl-0">
                <button
                  onClick={() => setIsDropdownVisible(!isDropdownVisible)}
                  className="flex items-center focus:outline-none"
                >
                  More <IoMdArrowDropdown />
                </button>
                {isDropdownVisible && (
                  <ul
                    ref={dropdownRef}
                    className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <li className="px-4 py-2 text-gray-500 hover:text-indigo-600">
                      <Link to="/events">Events</Link>
                    </li>
                    <li className="px-4 py-2 text-gray-500 hover:text-indigo-600">
                      <Link to="/policies">Policies</Link>
                    </li>
                    <li className="px-4 py-2 text-gray-500 hover:text-indigo-600">
                      <Link to="/newsNotice">Notices & News</Link>
                    </li>
                    <li className="px-4 py-2 text-gray-500 hover:text-indigo-600">
                      <Link to="/faqs">FAQs</Link>
                    </li>
                    
                    <li className="px-4 py-2 text-gray-500 hover:text-indigo-600">
                      <Link to="/contactus">Contact Us</Link>
                    </li>
                  </ul>
                )}
              </li>
            </div>
            {isAuthenticated ? (
              <div className="items-center space-y-5 md:flex md:space-x-6 md:space-y-0 md:ml-12 mt-5 md:mt-0">
                <li className="order-2 py-3 md:py-0">
                  <Link
                    to="/user"
                    className="py-2 px-5 rounded-lg font-medium text-white text-center bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 duration-150 block md:py-3 md:inline shadow-lg hover:shadow-none"
                  >
                    Hi {user_data.user.name}
                  </Link>
                </li>
                <li className="order-3 py-3 md:py-0">
                  <button
                    onClick={() => {
                      dispatch(setUser(null));
                      navigate("/");
                    }}
                    className="py-2 px-5 rounded-lg font-medium text-black text-center bg-white-600 border hover:text-white hover:bg-indigo-500 active:bg-indigo-700 duration-150 block md:py-3 md:inline"
                  >
                    Logout
                  </button>
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
