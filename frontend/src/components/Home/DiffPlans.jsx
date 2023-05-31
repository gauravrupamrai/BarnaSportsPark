import React from "react";
import { Link } from "react-router-dom";

const DiffPlans = () => {
  const team = [
    {
      avatar:
        "https://images.unsplash.com/photo-1614743758466-e569f4791116?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=350&q=80",
      name: "Adult Membership",
      price: "85",
      desc: " For just €85 per year, adult members get unlimited access to all our facilities and can participate in our adult sports, and other programs.",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1535726858289-9ffe2dff6f52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80",
      name: "Child Membership",
      price: "40",
      desc: "Kids aged 12 and under can join for just €40 per year, giving them access to our playgrounds, and other age-appropriate activities.",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1611024847487-e26177381a3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      name: "Family Membership",
      price: "150",
      desc: "Our most popular option, family membership costs €150 per year and covers up to 2 adults and 4 children from the same household together!",
    },
  ];

  return (
    <section className="pt-16 pb-48 mb-10 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="text-center">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Simply click on the "Join Now" button to get started!
          </h3>
          <p className="text-gray-600 mt-3">
            We offer three types of membership - Adult, Child, and Family - to
            suit your needs
          </p>
        </div>
        <div className="mt-12 space-y-6 justify-center gap-6 sm:flex sm:space-y-0">
        <ul className="grid gap-10 sm:grid-cols-1 md:grid-cols-3">
            {team.map((item, idx) => (
              <li key={idx}>
                <div className="relative w-full h-84 sm:h-52 md:h-56">
                  <img
                    src={item.avatar}
                    className="w-full h-80 object-cover object-center shadow-md rounded-xl"
                    alt=""
                  />
                  
                  <div className="absolute inset-0 bg-black bg-opacity-60 rounded-xl flex items-center justify-center h-80">
                    <div className="text-white text-center p-4">
                      <h4 className="text-lg font-bold">{item.name}</h4>
                      <p className="mt-2 p-4">{item.desc}</p>
                      <Link to="/signup">
                      <button className="px-4 py-2 text-black bg-white bg-opacity-90 rounded-lg duration-150 hover:bg-indigo-700 hover:text-white active:shadow-lg">
                        Join Now!
                      </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DiffPlans;
  