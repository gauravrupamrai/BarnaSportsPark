import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import env from "react-dotenv";
import { Toaster, toast } from 'react-hot-toast';

const loginURL = process.env.REACT_APP_LOGIN_URL;
console.log('loginURL: ', loginURL);

const apiKey = process.env.REACT_APP_API_KEY;
console.log('apiKey: ', apiKey);

export default function Username() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic

    console.log('email: ', email);
    console.log('password: ', password);
    console.log('Submit button clicked');

    const requestConfig = {
      headers: {
        'x-api-key': apiKey
      }
    }

    const requestBody = {
      email: email,
      password: password
    }
    console.log('requestBody: ', requestBody);
    console.log('requestConfig: ', requestConfig);
    console.log('loginURL: ', loginURL);

    axios.post(loginURL, requestBody, requestConfig).then((response) => {
      toast.success('Login successful');
    }).catch((error) => {
      if(error.response.status === 401 || error.response.status === 403){
        toast.error(error.response.data.message);
      } else {
        toast.error('Something went wrong. Please try again later.');
      }
    });

  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  // required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link to="/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </Link>
              </div>
              <div className="text-sm">
                <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                  <span className='text-red-500'>Not a member?</span> Register here.
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
