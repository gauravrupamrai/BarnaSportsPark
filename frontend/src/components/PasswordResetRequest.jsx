import { React, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import logo from "../assets/logo/Logo_Text_SBS.svg";
import { GooeyCircleLoader } from "react-loaders-kit";

const resetRequestURL = `${process.env.REACT_APP_APP_URL}/reset-password-request`;

const apiKey = process.env.REACT_APP_API_KEY;

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);

  const loaderProps = {
    loading,
    size: 80,
    colors: ['#f6b93b', '#5e22f0', '#ef5777']
}

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const requestConfig = {
      headers: {
        "x-api-key": apiKey,
      },
    };

    const requestBody = {
      email: email,
    };

    axios
      .post(resetRequestURL, requestBody, requestConfig)
      .then((response) => {
        setLoading(false);
        navigate("/");
        toast.success(
          `Reset email has been sent on ${email}. Please check your email.`
        );
        console.log("Response:", response);
        console.log("Response Data Message:", response.data.message);
        console.log("Response Data:", response.data);
        console.log("Response Data Token:", response.data.body.token);
        console.log("Response Data User:", response.data.body.user);
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.status === 401 || error.response.status === 403) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Something went wrong. Please try again later.");
        }
      });
  };

  return (
    <main className="bg-white w-full h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-sm w-full text-gray-600">
        <div className="text-center">
          <Link to="/">
            <img
              src={logo}
              width={200}
              className="mx-auto"
              alt="Barna Sports Park"
            />
          </Link>
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Forgot your password?
            </h3>
            <p className="">
              Please insert your registered email in the input below and we will
              send an email with the link to reset your password.
            </p>
          </div>
        </div>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <div className="mt-1">
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
          { loading ? (
            <div className="flex justify-center mt-4">
            <GooeyCircleLoader {...loaderProps} />
          </div>
          ) : (
            <button
              type="submit"
              className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Request reset link
            </button>
          )}
          </div>
          
          <div>
            <Link to="/">
              <button className="group relative w-full h-[40px] flex justify-center py-2 px-4 text-sm text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg">
                Back to Homepage
              </button>
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
