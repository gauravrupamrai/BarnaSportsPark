import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logo/Only_Logo.svg"

const Admin = () => {
  const navigate = useNavigate();
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <img className="mx-auto h-12 w-auto" src={logo} alt="Barna Sports Park" />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Welcome Admin!
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Let's manage the application efficiently.
                    </p>
                </div>
                <button 
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => navigate("/admin/reports")}
                >
                    Go to Reports
                </button>
                <button 
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => navigate("/admin/create-notices")}
                >
                    Create Notices
                </button>
                <button 
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => navigate("/admin/send-email")}
                >
                    Send Emails
                </button>
            </div>
        </div>
    );
};

export default Admin;
