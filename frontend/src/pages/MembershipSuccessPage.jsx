import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import logo from "../assets/logo/Logo_Text_SBS.svg";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setUser } from "../redux/reducers/user";
import { toast } from "react-toastify";

const getProfileURL = `${process.env.REACT_APP_APP_URL}/get-redux-values`;
const apiKey = process.env.REACT_APP_API_KEY;

const MembershipSuccessPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchParams = new URLSearchParams(location.search);
  const [sessionId, setSessionId] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const { user_token } = useSelector((state) => state.user);

  useEffect(() => {
    setSessionId(searchParams.get("session_id"));
    setTransactionId(searchParams.get("transaction_id"));
  }, [location]);

  const goToHomepage = () => {

    const requestConfig = {
      headers: {
        "x-api-key": apiKey,
      },
    };

    const finalURL = `${getProfileURL}?token=${user_token}`;

    axios.get(finalURL, requestConfig).then((response) => {
      navigate("/");
      dispatch(setUser(response.data.body))
      
    }).catch((error) => {
      console.log(error);
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

  const printPage = () => {
    window.print();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-md">
        <div>
          <Link to="/">
            <img
              src={logo}
              width={200}
              className="mx-auto"
              alt="Barna Sports Park"
            />
          </Link>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Membership Purchase Successful!
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Thank you for your purchase. Your membership is now active.
          </p>
          <p className="mt-2 text-center text-sm text-gray-600 break-words">
            Session ID: {sessionId}
          </p>
          <p className="mt-2 text-center text-sm text-gray-600 break-words">
            Transaction ID: {transactionId}
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <button
            onClick={printPage}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Print This Page
          </button>
          <button
            onClick={goToHomepage}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Back to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default MembershipSuccessPage;
