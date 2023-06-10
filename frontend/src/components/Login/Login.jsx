import { React, useState } from "react";
import { useDispatch } from 'react-redux';
import { GooeyCircleLoader } from "react-loaders-kit";


import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../styles/styles";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import logo from "../../assets/logo/Logo_Text_SBS.svg";
import { setUser } from "../../redux/reducers/user";

const loginURL = `${process.env.REACT_APP_APP_URL}/login`;

const apiKey = process.env.REACT_APP_API_KEY;

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const loaderProps = {
    loading,
    size: 80,
    colors: ['#f6b93b', '#5e22f0', '#ef5777']
}


  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    console.log("URL:", loginURL);

    const requestConfig = {
      headers: {
        "x-api-key": apiKey,
      },
    };

    const requestBody = {
      email: email,
      password: password,
    };

    console.log("Request Body:", requestBody);
    console.log("Request Config:", requestConfig);

    axios
      .post(loginURL, requestBody, requestConfig)
      .then((response) => {
        setLoading(false);
        toast.success("User logged in successfully.");
        console.log("Response:", response);
        console.log("Response Data Message:", response.data.message);
        console.log("Response Data:", response.data);
        console.log("Response Data Token:", response.data.body.token);
        console.log("Response Data User:", response.data.body.user);
        dispatch(setUser(response.data.body))
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.status === 401 || error.response.status === 403) {
          toast.error(error.response.data.message);
        } else {
          if(error.response.data.message){
            toast.error(error.response.data.message);
          }else {
            toast.error('Something went wrong. Please try again later');
          }
          
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
              Log in to your account
            </h3>
            <p className="">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Sign up
              </Link>
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
                placeholder="Enter your registered email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
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
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
            </div>
          </div>
          <div className={`${styles.noramlFlex} justify-between`}>
            <div className={`${styles.noramlFlex}`}>
              <input
                type="checkbox"
                name="remember-me"
                id="remember-me"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <Link
                to="/forgot-password"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Forgot your password?
              </Link>
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
              Login
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
