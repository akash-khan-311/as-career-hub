import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { saveJobApplications } from "../../uitility/LocalStorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);

  const handleAppliedJob = () => {
    saveJobApplications(idInt);
    toast.success("Application Submited Successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div>
      <div className="backdrop-blur-2x bg-white/30 w-2/3 mx-auto rounded-2xl my-5">
        <h1 className="text-4xl lg:text-7xl text-center py-10">Job Details</h1>
      </div>
      <div className="flex gap-5 flex-col lg:flex-row">
        <div className="flex-1 my-10 backdrop-blur-2xl p-6 bg-white/10 rounded-md ">
          <p className="">
            <span className="text-xl font-semibold">Job Description : </span>
            {job.job_description}
          </p>
          <p className="my-5">
            <span className="text-xl font-semibold ">Responsibility : </span>
            {job.job_responsibility}
          </p>
          <p className="my-5">
            <span className="text-xl font-semibold ">
              Educational Requirments :{" "}
            </span>
            {job.educational_requirements}
          </p>
          <p className="my-5">
            <span className="text-xl font-semibold ">Experience: </span>
            {job.experiences}
          </p>
        </div>
        <div className=" w-full lg:w-[400px]  my-10 backdrop-blur-2xl bg-white/10 p-6">
          <div className="">
            <h2 className="text-2xl">Job Details</h2>
            <hr className="my-2" />
            <div>
              <p>
                <span className="font-semibold">Job Title</span>:{" "}
                {job.job_title}
              </p>
              <p>
                <span className="font-semibold">Salary:</span>: {job.salary}
              </p>
            </div>
            <div className="mt-5">
              <h2 className="text-2xl">Contact Information</h2>
              <hr className="my-2" />
              <div>
                <p>
                  <span className="font-semibold">Phone : </span>
                  {job.contact_information.phone}
                </p>
                <p>
                  <span className="font-semibold">Email : </span>
                  {job.contact_information.email}
                </p>
                <p>
                  <span className="font-semibold">Address : </span>
                  {job.contact_information.address}
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <button onClick={handleAppliedJob} className="custom-btn w-full">
              Apply Now
            </button>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default JobDetails;
