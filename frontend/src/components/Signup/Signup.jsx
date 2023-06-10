import { React, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import logo from "../../assets/logo/Logo_Text_SBS.svg";
import { GoUnverified } from "react-icons/go";
import PasswordChecklist from "react-password-checklist";
import { GooeyCircleLoader } from "react-loaders-kit";

const signupURL = `${process.env.REACT_APP_APP_URL}/register`;

const apiKey = process.env.REACT_APP_API_KEY;

const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [matchPassword, setMatchPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isPasswordMatch, setIsPasswordMatch] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [matchPasswordTouched, setMatchPasswordTouched] = useState(false);
  const [visible, setVisible] = useState(false);
  const [modalState, setModalState] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [termsChecked, setTermsChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const loaderProps = {
    loading,
    size: 80,
    colors: ["#f6b93b", "#5e22f0", "#ef5777"],
  };

  const handleSetPassword = (event) => {
    setPassword(event.target.value);
  };

  function handleSetMatchPassword(event) {
    setMatchPassword(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    console.log(
      `isPasswordValid: ${isPasswordValid}, isPasswordMatch: ${isPasswordMatch}`
    );

    if (!isPasswordValid) {
      toast.error("Password does not meet criteria");
      return;
    }

    if (!isPasswordMatch) {
      toast.error("Password does not match");
      return;
    }

    if (!termsChecked) {
      toast.error("Please accept the Terms and Conditions");
      return;
    }

    const requestConfig = {
      headers: {
        "x-api-key": apiKey,
      },
    };

    const requestBody = {
      name: name,
      email: email,
      password: password,
    };

    axios
      .post(signupURL, requestBody, requestConfig)
      .then((response) => {
        setLoading(false);
        toast.success("User Registered");
        setModalMessage(response.data.message);
        setModalState(true);
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
      <div className=" max-w-xl w-full text-gray-600">
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
              Sign up to your account
            </h3>
            <p className="">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="text"
                  autoComplete="name"
                  placeholder="Enter your full name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
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
                  placeholder="Enter your email address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
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
                  placeholder="Enter your password"
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
            <div className="sm:col-span-3">
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
                  placeholder="Enter your password again"
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
          </div>

          <div className="mt-5">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox"
                required
                checked={termsChecked}
                onChange={(e) => setTermsChecked(e.target.checked)}
              />
              <span className="ml-2">
                I agree to the{" "}
                <Link to="/policies" className="text-blue-600">
                  Terms and Conditions
                </Link>
              </span>
            </label>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <Link to="/">
                <button className="group relative w-full h-[40px] flex justify-center py-2 px-4 text-sm text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg">
                  Back to Homepage
                </button>
              </Link>
            </div>
            <div>
              {loading ? (
                <div className="flex justify-center mt-4">
                  <GooeyCircleLoader {...loaderProps} />
                </div>
              ) : (
                <div className="sm:col-span-3">
                  <button
                    type="submit"
                    className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Register
                  </button>
                </div>
              )}
            </div>
          </div>
        </form>
        {modalState && (
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="fixed inset-0 w-full h-full bg-black opacity-40"></div>
            <div className="flex items-center min-h-screen px-4 py-8">
              <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                <div className="mt-3">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto bg-yellow-100 rounded-full">
                    <GoUnverified />
                  </div>
                  <div className="mt-2 text-center">
                    <h4 className="text-lg font-medium text-gray-800">
                      Verify Your registered email address
                    </h4>
                    {modalMessage && (
                      <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                        {modalMessage}
                      </p>
                    )}
                  </div>
                </div>
                <div className="items-center gap-2 mt-3 sm:flex">
                  <Link to="/">
                    <button
                      className="w-full mt-2 p-2.5 flex-1 text-white bg-indigo-600 rounded-md outline-none ring-offset-2 ring-indigo-600 focus:ring-2"
                      onClick={() => setModalState(false)}
                    >
                      Go Back to
                      <br />
                      Home Page
                    </button>
                  </Link>
                  <Link to="/signup">
                    <button
                      className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                      onClick={() => setModalState(false)}
                    >
                      Incorrect Email?
                      <br />
                      Register Again!
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Signup;
