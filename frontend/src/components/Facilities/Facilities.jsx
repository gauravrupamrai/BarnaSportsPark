import React from "react";
import {GiTennisCourt} from "react-icons/gi";
import {MdSportsTennis} from "react-icons/md";

const Facilities = () => {
  const features = [
    {
      icon: <GiTennisCourt />,
      title: "Polymeric Surfaced Courts",
      desc: "Our three polymeric surfaced courts are not just designed for tennis, but also have integrated basketball courts. They are ideal for community members looking for multi-sport experiences.",
    },
    {
      icon: <MdSportsTennis />,
      title: "Textile Surfaced Courts",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus.",
    },
  ];

  return (
    <div>
      <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 md:text-center md:px-8 ">
          <div className=" md:mx-auto">
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Explore the Sports Facilities Designed with You in Mind
            </h3>
            <p className="mt-3 text-gray-600">
              At Barna Sports Park, we pride ourselves on offering a wide range
              of high-quality sports facilities that cater to both children and
              adults. From our state-of-the-art tennis courts to the cherished
              'Lios na NnÓg' playground, every aspect of our park has been
              carefully designed and maintained to ensure a fun, safe, and
              rewarding experience. Whether you're a serious athlete or just
              looking for a friendly, community-centric place to stay active,
              our facilities have something for everyone. Explore our range of
              facilities below to discover how Barna Sports Park can serve your
              sporting needs.
            </p>
          </div>
          <div className="flex gap-3 items-center mt-4 md:justify-center">
            <a
              href="#history"
              className="inline-block py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none"
            >
              History of Barna Sports Park
            </a>
            <a
              href="#owners"
              className="inline-block py-2 px-4 text-gray-800 font-medium duration-150 border hover:bg-gray-50 active:bg-gray-100 rounded-lg"
            >
              Who Owns Barna Sports Park?
            </a>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 text-center text-gray-600 md:px-8">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              State-of-the-Art Tennis Facilities
            </h3>
            <p className="mt-3">
              Our tennis facilities are second to none, designed to cater to all
              levels of tennis enthusiasts. Whether you are a beginner or an
              experienced player, our tennis courts offer a top-notch tennis
              experience right at the heart of our community.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-16 justify-between md:px-8 lg:flex">
          <div>
            <div className="max-w-xl space-y-3">
              <h3 className="text-indigo-600 font-semibold">Features</h3>
              <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Our Multifaceted Tennis Facilities
              </p>
              <p>
              At Barna Sports Park, we are proud to offer five high-quality tennis courts with distinct features
              </p>
            </div>
            <div className="mt-12 max-w-lg lg:max-w-none">
              <ul className="space-y-8">
                {features.map((item, idx) => (
                  <li key={idx} className="flex gap-x-4">
                    <div className="flex-none w-12 h-12 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg text-gray-800 font-semibold">
                        {item.title}
                      </h4>
                      <p className="mt-3">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <img
              src="https://res.cloudinary.com/floatui/image/upload/v1670150563/desktop_dte2ar.png"
              className="w-full shadow-lg rounded-lg border"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
