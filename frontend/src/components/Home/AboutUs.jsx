import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section className="py-16">
      <div className="max-w-screen-xl mx-auto md:px-8">
        <div className="flex md:flex-row items-center gap-x-12 sm:px-4 md:px-0 lg:flex flex-col-reverse">
          <div className="flex-1 lg:block">
            <img
              src="https://plus.unsplash.com/premium_photo-1661284917589-d96587cbe886?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              className="md:max-w-lg sm:rounded-lg sm:max-w-xs p-4 md:p-0"
              alt=""
            />
          </div>
          <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
            <h3 className="text-indigo-600 font-semibold">Know About Us</h3>
            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Building Community through Sports and Recreation
            </p>
            <p className="mt-3 text-gray-600">
              At Barna Sports Park, we are committed to providing high-quality
              facilities and programs that meet the needs of our community. Our
              park is owned by the people of Barna and is run by a dedicated
              management committee known as Barna Co-Op. We rely on the support
              of our community to keep our facilities in top condition and to
              continue to develop new offerings that serve the needs of our
              residents.
            </p>
            <Link
              to="/aboutUs"
              className="inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium"
            >
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
