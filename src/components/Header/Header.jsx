import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { RxSlash } from "react-icons/rx";
import { AuthContext } from "../../CoontextApi/UserContext";
import toast, { Toaster } from "react-hot-toast";

const Header = () => {
  const { user, userLogOut } = useContext(AuthContext);
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/jobs">Jobs</NavLink>
      </li>
      <li>
        <NavLink to="/applied">Applied Jobs</NavLink>
      </li>
      <li>
        <NavLink to="/statics">Statics</NavLink>
      </li>
      <li>
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
    </>
  );
 
  const handleLogout = () => {
    userLogOut()
      .then(() => {
        toast.success("user Logged out");
      })
      .catch(() => {
        toast.error("something went wrong , Please Try Again");
      });
  };
  return (
    <div className=" backdrop-blur-sm bg-white/10">
      <div className="navbar container mx-auto">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
              {user ? (
                <li>{user?.displayName}</li>
              ) : (
                <>
                  <div className="space-y-3 mt-2">
                    <Link to={"/login"} className="custom-btn ">
                      Login
                    </Link>
                    <Link to={"/register"} className="custom-btn">
                      Register
                    </Link>
                  </div>
                </>
              )}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-3xl lg:text-5xl">
            <span className="logo">AS</span> Career
          </a>
        </div>
        <div className="navbar-center  hidden lg:flex">
          <ul className="menu menu-horizontal text-xl px-1">{links}</ul>
        </div>
        {user ? (
          <div className="navbar-end">
            <li className="list-none text-xl">{user?.displayName}</li>
            <button onClick={handleLogout} className="custom-btn ml-4">
              Log Out
            </button>
          </div>
        ) : (
          <div className="navbar-end hidden md:flex items-center">
            <Link to={"/login"} className="text-xl hover:underline ">
              Login
            </Link>
            <RxSlash className="text-2xl hidden lg:block" />
            <Link to={"/register"} className="text-xl hover:underline">
              Register
            </Link>
          </div>
        )}
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </div>
  );
};

export default Header;
