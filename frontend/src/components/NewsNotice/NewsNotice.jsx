import axios from "axios";
import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import { format } from "date-fns";

const contentGetURL = `${process.env.REACT_APP_APP_URL}/get-notices`;
const apiKey = process.env.REACT_APP_API_KEY;

const NewsNotice = () => {
  const [noticesNews, setNoticesNews] = useState([]);

  useEffect(() => {
    console.log(contentGetURL);
    const requestConfig = {
      headers: {
        "x-api-key": apiKey,
      },
    };

    const fetchData = async () => {
      try {
        const response = await axios.get(contentGetURL, requestConfig);
        setNoticesNews(response.data.body);
        console.log(response.data.body);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const posts = [
    {
      title: "What is SaaS? Software as a Service Explained",
      desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people what they did for their anxiety, and some",
      date: "Thursday, December 9th 2021",
      href: "javascript:void(0)",
    },
    {
      title: "A Quick Guide to WordPress Hosting",
      desc: "According to him, Ã¢â‚¬Å“I'm still surprised that this has happened. But we are surprised because we are so surprised.Ã¢â‚¬ÂMore revelations about Whittington will be featured in the film",
      date: "Thursday, December 9th 2021",
      href: "javascript:void(0)",
    },
    {
      title: "7 Promising VS Code Extensions Introduced in 2022",
      desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks. I realized today that I have all this stuff that",
      date: "Thursday, December 9th 2021",
      href: "javascript:void(0)",
    },
    {
      title: "How to Use Root C++ Interpreter Shell to Write C++ Programs",
      desc: "The powerful gravity waves resulting from the impact of the planets' moons Ã¢â‚¬â€ four in total Ã¢â‚¬â€ were finally resolved in 2015 when gravitational microlensing was used to observe the",
      date: "Thursday, December 9th 2021",
      href: "javascript:void(0)",
    },
  ];

  return (
    <div>
      <section className="py-10">
        <div className="max-w-screen-xl mx-auto px-4 md:text-center md:px-8 ">
          <div className=" md:mx-auto">
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Barna Sports Park: News, Notices, and Important Updates
            </h3>
            <p className="mt-3 text-gray-600">
              Welcome to the News, Notices, and Important Updates page for Barna
              Sports Park! Here, you will find the latest news, essential
              notices, and important alerts related to Barna Sports Park. Stay
              informed about facility maintenance schedules, temporary closures,
              safety guidelines, and any other crucial information that may
              affect your visit. This page serves as a valuable resource to keep
              visitors up-to-date and ensure a smooth experience at Barna Sports
              Park. Check back regularly for the latest updates to stay informed
              and make the most of your time at our exceptional sports facility.
            </p>
          </div>
        </div>
      </section>
      <section className=" mx-auto px-4 max-w-screen-xl md:px-8">
        <div className=" gap-4 divide-y md:divide-y-0">
          {noticesNews
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .map((item, idx) => (
              <article
                className="bg-white items-center rounded-xl my-10 p-10 md:pt-0"
                key={idx}
              >
                <div className="flex items-center gap-10">
                  <span className="block text-gray-400 pt-5 text-sm">
                    {format(new Date(item.createdAt), "EEEE, MMMM do, yyyy")}
                  </span>
                  <button className="p-1.5 w-20 mt-4 px-4 rounded-full bg-indigo-500 text-white font-medium text-sm">
                    {item.contentType}
                  </button>
                </div>
                <div className="mt-2">
                  <h3 className="text-xl text-gray-900 font-semibold hover:underline">
                    {item.contentTitle}
                  </h3>
                  <p className="text-gray-400 mt-1 leading-relaxed">
                    {parse(item.content)}
                  </p>
                </div>
              </article>
            ))}
        </div>
      </section>
    </div>
  );
};

export default NewsNotice;
