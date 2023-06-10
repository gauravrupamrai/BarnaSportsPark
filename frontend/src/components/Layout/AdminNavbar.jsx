import React, { useState } from "react";
import logo from "../../assets/logo/Logo_Text_SBS.svg";
import { Link, useNavigate } from "react-router-dom";
import AdminNavLinks from "./AdminNavLinks.jsx";
import { HiOutlineLogout } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import { Divide as Hamburger } from "hamburger-react";
import { setUser } from "../../redux/reducers/user";

const AdminNavbar = () => {
  const { isAuthenticated, user_data } = useSelector((state) => state.user);
  console.log(isAuthenticated, user_data);
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (!user_data) {
    navigate("/");
    return null;
  }

  return (
    <nav className="bg-white shadow">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <img
            src={logo}
            alt="Barna Sports Park Logo"
            className="md:cursor-pointer h-10"
          />
          <div className="text-3xl md:hidden" onClick={() => setOpen(!isOpen)}>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8">
          <li>
            <Link to="/user" className="py-7 px-3 inline-block">
              Admin
            </Link>
          </li>
          <AdminNavLinks />
        </ul>
        <div className="md:block hidden">
          <button
            onClick={() => {
              dispatch(setUser(null));
              navigate("/");
            }}
            className="py-2 px-5 rounded-lg font-medium text-black text-center bg-white-600 border hover:text-white hover:bg-indigo-500 active:bg-indigo-700 duration-150 block md:py-3 md:inline"
          >
            Logout <HiOutlineLogout className="inline-block" />
          </button>
        </div>

        {/* Mobile Nav */}

        <ul
          className={`
      md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4 duration-500 ${
        isOpen ? "left-0" : "left-[-100%]"
      }
      `}
        >
          <li>
            <Link to="/user" className="py-7 px-3 inline-block">
              Hello Admin!
            </Link>
          </li>
          <AdminNavLinks />
          <div className="py-5">
            Logout <HiOutlineLogout className="inline-block" />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default AdminNavbar;
