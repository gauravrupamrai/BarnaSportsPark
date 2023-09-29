import axios from 'axios';
import React, { useState } from 'react';
import Papa from 'papaparse';

const getMembershipsURL = `${process.env.REACT_APP_APP_URL}/get-all-memberships`;
const getTransactionsURL = `${process.env.REACT_APP_APP_URL}/get-all-transactions`;
const getUsersURL = `${process.env.REACT_APP_APP_URL}/get-all-users`;
const apiKey = process.env.REACT_APP_API_KEY;

const AdminReportsPage = () => {

  const requestConfig = {
    headers: {
      "x-api-key": apiKey,
    },
  };

  const [membershipCsvData, setMembershipCsvData] = useState(null);
  const [transactionCsvData, setTransactionCsvData] = useState(null);
  const [userCsvData, setUserCsvData] = useState(null);
  const [membershipLoading, setMembershipLoading] = useState(false);
  const [transactionLoading, setTransactionLoading] = useState(false);
  const [userLoading, setUserLoading] = useState(false);

  const handleMembershipDownload = () => {
    setMembershipLoading(true);
    axios.get(getMembershipsURL, requestConfig).then((response) => {
      setMembershipLoading(false);
      const csv = Papa.unparse(response.data.body);
      setMembershipCsvData(csv);
    }).catch((error) => {
      setMembershipLoading(false);
      console.log(error);
    });
  };

  const handleTransactionDownload = () => {
    setTransactionLoading(true);
    axios.get(getTransactionsURL, requestConfig).then((response) => {
      setTransactionLoading(false);
      const csv = Papa.unparse(response.data.body);
      setTransactionCsvData(csv);
    }).catch((error) => {
      setTransactionLoading(false);
      console.log(error);
    });
  };

  const handleUserDownload = () => {
    setUserLoading(true);
    axios.get(getUsersURL, requestConfig).then((response) => {
      setUserLoading(false);
      const csv = Papa.unparse(response.data.body);
      setUserCsvData(csv);
    }).catch((error) => {
      setUserLoading(false);
      console.log(error);
    });
  };

  const downloadButton = (csvData, fetchAction, downloadName, loading) => {
    return csvData ? (
      <a 
        href={`data:text/csv;charset=utf-8,${encodeURIComponent(csvData)}`}
        download={downloadName}
        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 mt-4"
      >
        Download {downloadName}
      </a>
    ) : (
      <button 
        onClick={fetchAction}
        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 mt-4"
      >
        {loading ? 'Loading...' : `Fetch ${downloadName}`}
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-md">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Admin Dashboard
          </h2>
        </div>
        <div className="rounded-md shadow-sm  space-y-6">
          {downloadButton(membershipCsvData, handleMembershipDownload, "membership_records.csv", membershipLoading)}
          {downloadButton(transactionCsvData, handleTransactionDownload, "transaction_records.csv", transactionLoading)}
          {downloadButton(userCsvData, handleUserDownload, "user_records.csv", userLoading)}
        </div>
      </div>
    </div>
  );
};

export default AdminReportsPage;
