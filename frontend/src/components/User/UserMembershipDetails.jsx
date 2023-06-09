import axios from "axios";
import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PUBLIC_KEY}`);
const renewMembershipURL = `${process.env.REACT_APP_APP_URL}/user-renew-membership`;
const apiKey = process.env.REACT_APP_API_KEY;

const UserMembershipDetails = ({ membership }) => {
  const { user_token } = useSelector((state) => state.user);
  const handleRenewMembership = () => {
    const requestConfig = {
      headers: {
        "x-api-key": apiKey,
      },
    };

    const requestBody = {
      token: user_token,
      membershipId: membership._id,
    };

    axios.post(renewMembershipURL, requestBody, requestConfig)
      .then((response) => {
        console.log(response);
        // Handle successful renewal
        const { checkoutSessionId } = response.data.body;
        stripePromise.then((stripe) => {
          stripe
            .redirectToCheckout({
              sessionId: checkoutSessionId,
            })
            .then((res) => {
              if (res.error) {
                console.log(res.error.message);
              }
            });
        });
      })
      .catch((error) => {
        console.log(error);
        // Handle renewal error
        console.log("error: ", error);
        if (error.response.status === 401 || error.response.status === 403) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Something went wrong. Please try again later.");
        }
      });
  };

  return (
    <div className="mt-5 border-0 border-t-4">
      <div className="px-4 pt-5 sm:px-0 flex justify-between items-center">
      <div>
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            Membership Information
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            Your Membership details.
          </p>
        </div>
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
          onClick={handleRenewMembership}
        >
          Renew Membership
        </button>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Membership ID
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {membership._id}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Membership Type
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 capitalize">
              {membership.membershipType}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Member 1 Name
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {membership.member1Name}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Date of Birth
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {membership.member1DateOfBirth}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Membership Expiry
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {membership.membershipExpiry}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default UserMembershipDetails;
