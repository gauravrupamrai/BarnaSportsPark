import React from 'react';
import { useLocation } from 'react-router-dom';

const VerifyEmail = () => {
  const location = useLocation();
  const responseMessage = location.state && location.state.responseMessage;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md px-4 py-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Verify Email Page</h2>
        {responseMessage && (
          <p className="text-center text-green-500 mb-4">{responseMessage}</p>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;
