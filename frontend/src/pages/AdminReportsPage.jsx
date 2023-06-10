import axios from 'axios';
import React from 'react';

const getMembershipsURL = `${process.env.REACT_APP_APP_URL}/get-all-memberships`;
const apiKey = process.env.REACT_APP_API_KEY;


const AdminReportsPage = () => {

  const requestConfig = {
    headers: {
      "x-api-key": apiKey,
    },
  };

  const handleMembershipDownload = () => {
    axios.get(getMembershipsURL, requestConfig).then((response) => {
      console.log(response);
      console.log("Download membership records");
    }).catch((error) => {
      console.log(error);
    });
    // Handle logic to download membership records

    console.log("Download membership records");
  };

  const handleTransactionDownload = () => {
    // Handle logic to download transaction records
    console.log("Download transaction records");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Admin Dashboard</h1>
        <button 
          onClick={handleMembershipDownload}
          className="mb-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Download Membership Records
        </button>
        <button 
          onClick={handleTransactionDownload}
          className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Download Transaction Records
        </button>
      </div>
    </div>
  );
};

export default AdminReportsPage;
