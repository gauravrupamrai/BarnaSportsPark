import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const contentGetURL = `${process.env.REACT_APP_APP_URL}/get-notice-for-home`;
const apiKey = process.env.REACT_APP_API_KEY;

const NotificationBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [noticesNews, setNoticesNews] = useState([]);

  useEffect(() => {

    console.log(contentGetURL)
    const requestConfig = {
      headers: {
        "x-api-key": apiKey,
      },
    };

    const fetchData = async () => {
      try {
        const response = await axios.get(contentGetURL, requestConfig);
        setNoticesNews(response.data.body);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  if (!isOpen) return null;

  return (
    <div className="bg-indigo-600">
      <div className="max-w-screen-xl mx-auto px-4  flex items-start justify-evenly text-white items-center md:px-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
          />
        </svg>

        {noticesNews.map((items, idx) => (
          <div
            key={idx}
            className="flex-1 justify-center flex items-start  items-center"
          >
            <div className="flex p-1.5 px-4 rounded-full bg-indigo-800 items-center justify-center font-medium text-sm">
              {items.contentType}
            </div>
            <p className="font-medium p-2">
              {items.contentTitle}{" "}
              <Link
                to="/newsNotice"
                className="font-semibold underline duration-150 hover:text-indigo-100 inline-flex items-center gap-x-1"
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </p>
          </div>
        ))}

        <button
          className="p-2 rounded-lg duration-150 hover:bg-indigo-500 ring-offset-2 focus:ring"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(false);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NotificationBar;
