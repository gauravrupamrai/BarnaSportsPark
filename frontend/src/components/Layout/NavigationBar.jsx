import { useEffect, useState } from "react";
import logo from "../../assets/logo/Logo_Text_SBS.svg";
import { navigation } from "../../static/data";
import { NavLink, Link } from "react-router-dom";

const NavigationBar = () => {
  const [state, setState] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setActive(true);
      } else {
        setActive(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-50" : null
        }
         transition 800px:flex items-center justify-between w-full h-[70px] bg-white border-b min-[840px]:text-sm min-[840px]:border-none`}
      >
        <div className="items-center px-4 max-w-screen-xl mx-auto min-[840px]:flex min-[840px]:px-8">
          <div className="flex items-center justify-between py-3 min-[840px]:py-5 min-[840px]:block">
            <Link to="/">
              <img src={logo} width={120} height={50} alt="Float UI logo" />
            </Link>
            <div className="min-[840px]:hidden">
              <button
                className="text-gray-500 hover:text-gray-800"
                onClick={() => setState(!state)}
              >
                {state ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={`flex-1 items-center pb-3 mt-8 min-[840px]:block min-[840px]:pb-0 min-[840px]:mt-0 ${
              state ? "block z-50" : "hidden"
            } bg-white min-[840px]:bg-transparent `}
          >
            <ul className="justify-end items-center space-y-6 min-[840px]:flex min-[840px]:space-x-6 min-[840px]:space-y-0">
              {navigation.map((item, idx) => {
                return (
                  <li key={idx} className="text-gray-700 hover:text-indigo-600">
                    <NavLink
                      to={item.url}
                      className="block hover:text-blue-800"
                      activeClassName="text-red-800"
                    >
                      {item.title}
                    </NavLink>
                  </li>
                );
              })}
              <span className="hidden w-px h-6 bg-gray-300 min-[840px]:block"></span>
              <div className="space-y-3 items-center gap-x-6 min-[840px]:flex min-[840px]:space-y-0">
                <li>
                  <Link
                    to="/login"
                    className="block py-3 text-center text-gray-700 hover:text-indigo-600 border rounded-lg min-[840px]:border-none"
                  >
                    Log in
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signup"
                    className="block py-3 px-4 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow min-[840px]:inline"
                  >
                    Sign in
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
