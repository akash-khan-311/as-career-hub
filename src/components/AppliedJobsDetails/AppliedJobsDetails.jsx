import React from "react";

const AppliedJobsDetails = ({ job }) => {
  const {
    job_title,
    job_type,
    location,
    logo,
    remote_or_onsite,
    salary,
    company_name,
  } = job;
  console.log(job);
  return (
    <div>
      <div className="backdrop-blur-lg rounded-lg lg:p-10 p-3 bg-white/10 my-5 flex flex-col lg:flex-row items-center justify-between">
        <div className="flex flex-col lg:flex-row items-center  ">
          <div className="backdrop-blur-2xl bg-white/40 p-6 w-60 h-40 rounded-xl  flex justify-center items-center">
            <img className=" " src={logo} alt="" />
          </div>
          <div className="ml-5 space-y-2 text-center lg:text-left">
            <h3 className="text-3xl font-semibold">{job_title}</h3>
            <p>{company_name}</p>
            <div>
              <button className="btn btn-outline btn-success">
                {remote_or_onsite}
              </button>
              <button className="btn btn-outline btn-success ml-3">
                {job_type}
              </button>
            </div>
            <div className="flex justify-center lg:justify-start flex-col lg:flex-row">
              <p>{location}</p>
              <p className="lg:ml-5 ml-0">
                <span className="font-semibold">Salary : </span>
                {salary}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 lg:mt-0">
          <button className="custom-btn">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobsDetails;
