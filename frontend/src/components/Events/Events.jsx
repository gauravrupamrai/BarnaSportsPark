import React from "react";

const Events = () => {
  const jobs = [
    {
      title: "Saturday Social Tennis",
      desc: "Saturday Social Tennis at Barna Tennis Courts is a weekly event where members can engage in friendly matches organized by Coach Teo. Beginners play from 11am-12pm, while experienced players meet from 12pm-1pm. To participate, members need to pre-book via the event's WhatsApp group due to limited availability. The fee is €3, payable on the day. For more info or to join the group, contact Coach Teo at 085 1628988.",
      date: "Every Saturday",
      type: "For Adults Only",
      location: "Barna Sports Park, Galway",
      href: "/events",
    },
    {
      title: "Saturday Play and Stay",
      desc: "Saturday Play and Stay is a weekly social tennis event for juniors at Barna Tennis Courts. Under Coach Teo's guidance, kids engage in enjoyable tennis matches and games, applying the skills they've learned. It's held from 11am-12pm for under 8s, and 12pm-1pm for those aged 9 and above. A €3 fee per child applies, payable to the coach. Pre-booking via the event's WhatsApp group is required due to limited slots. Contact Coach Teo at 085 1628988 for more details or to join the group.",
      date: "Every Saturday",
      type: "For Kids Only",
      location: "Barna Sports Park, Galway",
      href: "/events",
    },
    {
      title: "Club Night - Tuesday",
      desc: "Join us for an enjoyable club night every Tuesday from 6pm to 7.30pm.",
      date: "Every Tuesday",
      type: "For Adults Only",
      location: "Barna Sports Park, Galway",
      href: "/events",
    },
    {
      title: "Wednesday Club Morning",
      desc: "Start your day right with a club morning session on Wednesdays from 10am to 11am.",
      date: "Every Wednesday",
      type: "For Adults Only",
      location: "Barna Sports Park, Galway",
      href: "/events",
    },
    {
      title: "Thursday Cardio Tennis",
      desc: "Get active and improve your fitness with our cardio tennis session every Thursday from 10am to 11am.",
      date: "Every Thursday",
      type: "For Adults Only",
      location: "Barna Sports Park, Galway",
      href: "/events",
    },
    {
      title: "Friday Beginners",
      desc: "A dedicated session for beginners to learn and develop their tennis skills. Join us on Fridays from 9am to 10am.",
      date: "Every Friday",
      type: "For Adults Only",
      location: "Barna Sports Park, Galway",
      href: "/events",
    },
    {
      title: "One-to-One Adult Lessons",
      desc: "Enhance your tennis skills with personalized one-to-one lessons from our experienced coach, Al Waterson. Open to all levels (beginners, intermediate, and advanced). Contact Al directly to arrange a lesson.",
      date: "By Appointment",
      type: "For Adults Only",
      location: "Barna Sports Park, Galway",
      href: "/events",
    },
    {
      title: "Junior Tennis Lessons",
      desc: "Weekly lessons for junior members held on Tuesdays and Wednesdays. Choose from a 6-week package or pay per lesson. Limited spots available. Contact Coach Teo for availability and payment details.",
      type: "For Junior Members",
      location: "Barna Sports Park, Galway",
      date: "By Appointment",
      href: "/events",
    },
    {
      title: "Junior Tennis (Age 4-6)",
      desc: "Develop fundamental tennis skills in a fun environment. Tuesdays & Wednesdays, 2pm - 2.45pm.",
      type: "For Junior Members (Age 4-6)",
      location: "Barna Sports Park, Galway",
      date: "By Appointment",
      href: "/events",
    },
    {
      title: "Junior Tennis (Age 7-9)",
      desc: "Further enhance tennis skills with engaging lessons. Tuesdays & Wednesdays, 2.45pm - 3.30pm.",
      type: "For Junior Members (Age 7-9)",
      location: "Barna Sports Park, Galway",
      date: "By Appointment",
      href: "/events",
    },
    {
      title: "Junior Tennis (Age 9-11)",
      desc: "Build confidence and technique in tennis. Tuesdays & Wednesdays, 3.30pm - 4.15pm.",
      type: "For Junior Members (Age 9-11)",
      location: "Barna Sports Park, Galway",
      date: "By Appointment",
      href: "/events",
    },
    {
      title: "Junior Tennis (Age 11+)",
      desc: "Tailored lessons for older juniors to refine their tennis abilities. Tuesdays & Wednesdays, 4.15pm - 5pm.",
      type: "For Junior Members (Age 11+)",
      location: "Barna Sports Park, Galway",
      date: "By Appointment",
      href: "/events",
    },
  ];

  return (
    <div>
      <section className="py-10">
        <div className="max-w-screen-xl mx-auto px-4 md:text-center md:px-8 ">
          <div className=" md:mx-auto">
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Barna Sports Park Events: Join Us for Exciting Activities!
            </h3>
            <p className="mt-3 text-gray-600">
              Discover a range of engaging tennis events and lessons offered
              exclusively to Barna Sports Park members. From social tennis
              sessions for adults to fun-filled lessons for junior members, our
              events are designed to foster skill development, community
              connections, and memorable experiences on the court.
            </p>
          </div>
        </div>
      </section>
      <section className="mb-10 max-w-screen-lg mx-auto px-4 md:px-8">
        <ul className="mt-12 space-y-6">
          {jobs.map((item, idx) => (
            <li key={idx} className="p-5 bg-white rounded-md shadow-sm">
              <a href={item.href}>
                <div>
                  <div className="justify-between sm:flex">
                    <div className="flex-1">
                      <h3 className="text-xl font-medium text-indigo-600">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 mt-2 pr-2">{item.desc}</p>
                    </div>
                    <div className="mt-5 space-y-4 text-sm sm:mt-0 sm:space-y-2">
                      <span className="flex items-center text-gray-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {item.date}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 items-center space-y-4 text-sm sm:flex sm:space-x-4 sm:space-y-0">
                    <span className="flex items-center text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        />
                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                      </svg>
                      {item.type}
                    </span>
                    <span className="flex items-center text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item.location}
                    </span>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Events;
