import React from "react";
import user from "../../assets/images/user.png";

const Banner = () => {
  return (
    <div className="my-20">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="space-y-5 flex-1 text-center lg:text-left">
          <h1 className="text-5xl font-semibold lg:text-6xl">
            One Step Closer To Your <span className="logo">Dream Job</span>
          </h1>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="capitalize custom-btn mx-auto lg:mx-0">
            Get Started
          </button>
        </div>
        <div className="flex-1 ">
          <img className=" w-full mx-auto" src={user} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
