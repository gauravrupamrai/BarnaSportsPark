import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ActivatePage = () => {
  const [status, setStatus] = useState('');
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setStatus(searchParams.get('status') || 'error');
  }, [location]);

  const renderMessage = () => {
    switch (status) {
      case 'success':
        return (
          <p className="text-green-500 text-2xl font-bold">
            Your account has been created successfully
          </p>
        );
      case 'invalid_token':
        return (
          <p className="text-red-500 text-2xl font-bold">
            Your token is expired
          </p>
        );
      case 'user_already_exists':
        return (
          <p className="text-red-500 text-2xl font-bold">
            User already exists
          </p>
        );
      case 'internal_server_error':
        return (
          <p className="text-red-500 text-2xl font-bold">
            Internal server error
          </p>
        );
      case 'error':
        return (
          <p className="text-red-500 text-2xl font-bold">
            Error
          </p>
        );
      default:
        return (
          <p className="text-red-500 text-2xl font-bold">
            Something went wrong
          </p>
        );
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        {renderMessage()}
      </div>
    </div>
  );
};

export default ActivatePage;
