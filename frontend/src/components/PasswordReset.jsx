import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function PasswordReset() {
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  setToken(urlParams.get('token'));

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/reset-password', { token, newPassword: password });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Reset your password</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input id="password" name="password" type="password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="New password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Reset password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PasswordReset;
