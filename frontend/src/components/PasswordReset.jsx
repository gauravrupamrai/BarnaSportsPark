import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo/Logo_Text_SBS.svg";
import { toast } from "react-toastify";
import PasswordChecklist from "react-password-checklist";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { GooeyCircleLoader } from "react-loaders-kit";

const passwordResetURL = `${process.env.REACT_APP_APP_URL}/reset-password`;
const apiKey = process.env.REACT_APP_API_KEY;

function PasswordReset() {
  const [password, setPassword] = useState("");
  const [matchPassword, setMatchPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isPasswordMatch, setIsPasswordMatch] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [matchPasswordTouched, setMatchPasswordTouched] = useState(false);
  const [visible, setVisible] = useState(false);

  const [token, setToken] = useState("");

  const [loading, setLoading] = useState(false);

  const loaderProps = {
    loading,
    size: 80,
    colors: ['#f6b93b', '#5e22f0', '#ef5777']
}

  const location = useLocation();
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(location.search);
  useEffect(() => {
    setToken(urlParams.get("token"));
  }, []);

  const handleSetPassword = (event) => {
    setPassword(event.target.value);
  };

  function handleSetMatchPassword(event) {
    setMatchPassword(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!isPasswordValid) {
      toast.error("Password does not meet criteria");
      return;
    }

    if (!isPasswordMatch) {
      toast.error("Password does not match");
      return;
    }

    const requestConfig = {
      headers: {
        "x-api-key": apiKey,
      },
    };

    const requestBody = {
      token: token,
      newPassword: password,
    };

    axios
      .post(passwordResetURL, requestBody, requestConfig)
      .then((response) => {
        setLoading(false);
        navigate("/login");
        toast.success("Password changed successfully.");
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.status === 409 || error.response.status === 401) {
          console.log(error.response.data.message);
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
              Reset your password
            </h3>
          </div>
        </div>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="mt-1 relative">
              <input
                name="password"
                type={visible ? "text" : "password"}
                autoComplete="current-password"
                required
                value={password}
                onChange={handleSetPassword}
                onBlur={() => setPasswordTouched(true)}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              {visible ? (
                <AiOutlineEye
                  className="absolute right-2 top-2 cursor-pointer"
                  size={25}
                  onClick={() => setVisible(false)}
                />
              ) : (
                <AiOutlineEyeInvisible
                  className="absolute right-2 top-2 cursor-pointer"
                  size={25}
                  onClick={() => setVisible(true)}
                />
              )}
              {passwordTouched && (
                <div className="mt-4">
                  <PasswordChecklist
                    rules={[
                      "capital",
                      "specialChar",
                      "minLength",
                      "lowercase",
                      "number",
                    ]}
                    minLength={10}
                    value={password}
                    iconSize={14}
                    onChange={(isValid) => {
                      console.log(`isPasswordValid: ${isValid}`);
                      setIsPasswordValid(isValid);
                    }}
                  />
                </div>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <div className="mt-1 relative">
              <input
                name="confirmPassword"
                type={visible ? "text" : "password"}
                autoComplete="current-password"
                required
                value={matchPassword}
                onChange={handleSetMatchPassword}
                onBlur={() => setMatchPasswordTouched(true)}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              {visible ? (
                <AiOutlineEye
                  className="absolute right-2 top-2 cursor-pointer"
                  size={25}
                  onClick={() => setVisible(false)}
                />
              ) : (
                <AiOutlineEyeInvisible
                  className="absolute right-2 top-2 cursor-pointer"
                  size={25}
                  onClick={() => setVisible(true)}
                />
              )}
              {matchPasswordTouched && (
                <div className="mt-4">
                  <PasswordChecklist
                    rules={["match"]}
                    minLength={10}
                    value={password}
                    valueAgain={matchPassword}
                    iconSize={14}
                    onChange={(isMatch) => {
                      console.log(`isPasswordMatch: ${isMatch}`);
                      setIsPasswordMatch(isMatch);
                    }}
                  />
                </div>
              )}
            </div>
          </div>
          {/* </div> */}
          <div>
          { loading ? (
            <div className="flex justify-center mt-4">
            <GooeyCircleLoader {...loaderProps} />
          </div>
          ) : (
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Reset password
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
}

export default PasswordReset;
