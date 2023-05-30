import React, { useState } from "react";
import heroImage from "../../assets/images/HeroImage.jpg";
import { NavLink, Link } from "react-router-dom";
import { navigation } from "../../static/data";
import logo from "../../assets/logo/Logo_Text_SBS.svg";

const Hero = () => {
  const [state, setState] = useState(false);

  return (
    <>
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
          className={`flex-1 justify-between mt-12 md:text-sm md:font-medium md:flex md:mt-0 ${
            state
              ? "absolute inset-x-0 px-4 border-b bg-white md:border-none md:static"
              : "hidden"
          }`}
        >
          <div className="items-center space-y-5 md:flex md:space-x-6 md:space-y-0 md:ml-12">
            {navigation.map((item, idx) => (
              <li className="text-gray-500 hover:text-indigo-600" key={idx}>
                <NavLink to={item.path}>{item.title}</NavLink>
              </li>
            ))}
          </div>
          <div className="items-center space-y-5 md:flex md:space-x-6 md:space-y-0 md:ml-12">
            <li className="order-2 py-5 md:py-0">
              <Link
                to="/login"
                className="py-2 px-5 rounded-lg font-medium text-black text-center bg-white-600 border hover:text-white hover:bg-indigo-500 active:bg-indigo-700 duration-150 block md:py-3 md:inline"
              >
                Log in
              </Link>
            </li>
            <li className="order-3 py-5 md:py-0">
              <Link
                to="/signup"
                className="py-2 px-5 rounded-lg font-medium text-white text-center bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 duration-150 block md:py-3 md:inline shadow-lg hover:shadow-none"
              >
                Sign up
              </Link>
            </li>
          </div>
        </ul>
      </nav>
      <section className="py-28">
        <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
          <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
            <h1 className="text-sm text-indigo-600 font-medium">
              Over 200 successful deals
            </h1>
            <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
              <span>Welcome to </span> <br />
              <span className="text-blue-600 font-bold">BARNA </span>
              <span className="text-yellow-600 font-bold">SPORTS </span>
              <span className="text-red-600 font-bold">PARK </span> <br />
            </h2>
            <p>
              Where we bring together sports and community to provide an
              exceptional experience for all. With our state-of-the-art
              facilities, discover the perfect space to play, learn, and grow.
            </p>
            <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <Link
                to="/signup"
                className="block py-2 px-4 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none"
              >
                Become a member
              </Link>
              <Link
                to="/volunteer"
                className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex"
              >
                Register as Volunteer
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
            <img src={heroImage} className=" md:rounded-tl-[108px]" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
