import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import UserMembershipDetails from "./UserMembershipDetails.jsx";

const getMembershipURL = `${process.env.REACT_APP_APP_URL}/get-membership`;
const apiKey = process.env.REACT_APP_API_KEY;

const UserMembership = () => {
  const { user_data } = useSelector((state) => state.user);
  const membershipData = user_data.user.memberships;
  const[membershipLoading, setMembershipLoading] = useState(false);
  const [selectedMembership, setSelectedMembership] = useState(null);

  const handleViewDetails = (membershipId) => {
        setMembershipLoading(true);
    
    const requestConfig = {
        headers: {
          "x-api-key": apiKey,
        },
      };

      const requestBody = {
        token: user_data.token,
        membershipId: membershipId,
      };

      axios.post(getMembershipURL, requestBody, requestConfig).then((response) => {
        console.log(response);
        setSelectedMembership(response.data.body);
        setMembershipLoading(false);
      }).catch((error) => {
        console.log(error);
        console.log(error.response.data.message)
        setMembershipLoading(false);
      });


  };

  return (
    <div className="max-w-screen-xl bg-white rounded-xl mt-4 mx-auto px-4 md:px-8">
    {membershipData.length > 0 ? (
        <>
      <div className="items-start justify-between md:flex"></div>
      <div className="mt-12 relative h-max overflow-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 pr-6">Membership ID</th>
              <th className="py-3 pr-6">Membership Type</th>
              <th className="py-3 pr-6">Membership Expires</th>
              <th className="py-3 pr-6"></th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {membershipData.map((item, idx) => (
              <tr key={idx}>
                <td className="pr-6 py-4 whitespace-nowrap">
                  {item.membershipId}
                </td>
                <td className="pr-6 py-4 whitespace-nowrap capitalize">
                  {item.membershipType}
                </td>
                <td className="pr-6 py-4 whitespace-nowrap">Expiry Date</td>
                <td className="text-right whitespace-nowrap">
                  <button className="py-1.5 px-3 text-gray-600 hover:text-gray-500 duration-150 hover:bg-gray-50 border rounded-lg" onClick={() => handleViewDetails(item.membershipId)}>
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </>
      ) : (
        <div className="mt-12 text-center text-gray-600">
          No memberships found.
        </div>
      )}

      {selectedMembership && <UserMembershipDetails membership={selectedMembership} />}
    </div>
  );
};

export default UserMembership;
