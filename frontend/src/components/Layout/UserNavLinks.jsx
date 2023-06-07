import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";


const UserNavLinks = () => {
  

  const links = [
    {
      name: "Membership",
      submenu: true,
      sublink: [
        {
          name: "Your Memberships",
          path: "/user/your-memberships",
        },
        {
          name: "Renew Memberships",
          path: "/user/renew-memberships",
        },
        {
          name: "Buy New Memberships",
          path: "/user/buy-new-memberships",
        },
      ],
    },
    {
      name: "Courts",
      submenu: true,
      sublink: [
        { name: "Your Court Bookings", path: "/user/your-court-bookings" },
        { name: "Book a Court", path: "/user/book-a-court" },
      ],
    },
  ];

  const [heading, setHeading] = useState("");
  

  return (
    <>
      {links.map((links) => (
        <div>
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className="py-7 flex justify-between items-center md:pr-0 pr-5 group"
              onClick={() =>
                heading !== links.name ? setHeading(links.name) : setHeading("")
              }
            >
              {links.name}
              <span className="text-xl md:hidden inline">
                {heading === links.name ? <BsChevronDown /> : <BsChevronUp />}
              </span>
              <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <BsChevronDown />
              </span>
            </h1>
            {links.submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div
                      className="w-4 h-4 left-3 absolute 
                    mt-1 bg-white rotate-45"
                    ></div>
                  </div>
                  <div className="bg-white p-5">
                    {links.sublink.map((sublink) => (
                      <div>
                        <li className="text-sm text-gray-600 my-2.5">
                          <Link
                            to={sublink.path}
                            className="hover:text-indigo-600"
                          >
                            {sublink.name}
                            
                          </Link>
                        </li>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Mobile View */}

          <div
            className={`
          ${heading === links.name ? "md:hidden" : "hidden"}
          `}
          >
            {links.sublink.map((slink) => (
              <div>
                <div>
                  <h1 className="py-4 pl-7 font-normal md:pr-0 pr-5 flex justify-between items-center md:pr-0 pr-5">
                    <Link to={slink.path} className="hover:text-indigo-600">{slink.name}</Link>
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default UserNavLinks;
