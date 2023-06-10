import React from "react";
import { GiTennisCourt } from "react-icons/gi";
import { MdSportsTennis } from "react-icons/md";

const Facilities = () => {
  const featuresGround = [
    {
      icon: <GiTennisCourt />,
      title: "Community-Created",
      desc: "'Lios na NÓg' playground was brought to life after four years of dedicated fundraising, hard work, and negotiation by a voluntary group. This playground stands as a testament to the powerful community spirit in Barna, showcasing what can be achieved when people come together with a common goal.",
    },
    {
      icon: <MdSportsTennis />,
      title: "Safe and Fun Environment",
      desc: " Designed with the safety and enjoyment of children in mind, the playground offers a variety of engaging play structures suitable for children of different age groups. This space encourages physical activity, creativity, and social interaction among children.",
    },
  ];

  const featuresCourt = [
    {
      icon: <GiTennisCourt />,
      title: "Polymeric Surfaced Courts",
      desc: "Our three polymeric surfaced courts are not just designed for tennis, but also have integrated basketball courts. They are ideal for community members looking for multi-sport experiences.",
    },
    {
      icon: <MdSportsTennis />,
      title: "Textile Surfaced Courts",
      desc: "Experience the thrill of the game on our two new, high-performance textile surfaced courts, designed for optimal bounce, superior grip, and minimal impact on joints, delivering a premium playing experience for every tennis enthusiast at Barna Sports Park.",
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
        </div>
      </section>

      <section className="py-14 bg-white">
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
                At Barna Sports Park, we are proud to offer five high-quality
                tennis courts with distinct features
              </p>
            </div>
            <div className="mt-12 max-w-lg lg:max-w-none">
              <ul className="space-y-8">
                {featuresCourt.map((item, idx) => (
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
              src="https://images.unsplash.com/photo-1631120763845-71cfae7f4dc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=867&q=80"
              className="w-full shadow-lg rounded-lg border"
            />
          </div>
        </div>
      </section>
      <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-16 justify-between md:px-8 lg:flex">
        <div className="mt-12 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1575783970733-1aaedde1db74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80"
              className="w-full shadow-lg rounded-lg border"
            />
          </div>
          <div>
            <div className="max-w-xl space-y-3">
              <h3 className="text-indigo-600 font-semibold">Features</h3>
              <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                Playground: 'Lios na nÓg'
              </p>
              <p>
                Inaugurated in January 2015, 'Lios na NÓg' is more than just a
                playground. It's a testament to our community spirit and
                commitment to positive change.
              </p>
            </div>
            <div className="mt-12 max-w-lg lg:max-w-none">
              <ul className="space-y-8">
                {featuresGround.map((item, idx) => (
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
          
        </div>
      </section>
    </div>
  );
};

export default Facilities;
