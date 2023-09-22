import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplications } from "../../uitility/LocalStorage";
import AppliedJobsDetails from "../AppliedJobsDetails/AppliedJobsDetails";
import { Select, Option } from "@material-tailwind/react";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setdisplayJobs] = useState([]);

  const handleJobFilter = (filter) => {
    if (filter === "All") {
      setdisplayJobs(appliedJobs);
    } else if (filter === "Remote") {
      const remote = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setdisplayJobs(remote);
    } else if (filter === "Onsite") {
      const onsite = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setdisplayJobs(onsite);
    }
  };

  useEffect(() => {
    const storedJobsIds = getStoredJobApplications();
    if (jobs) {
      const jobsApplied = [];
      for (const id of storedJobsIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied);
      setdisplayJobs(jobsApplied);
    }
  }, []);
  return (
    <div>
      <div className="backdrop-blur-2x bg-white/30 w-2/3 mx-auto rounded-2xl my-5">
        <h1 className="text-4xl lg:text-7xl text-center py-10">Applied Jobs</h1>
      </div>
      <div>
        <div className="flex justify-end">
          <div className="">
            <Select className="text-2xl  text-white" label="Filter">
              <Option onClick={() => handleJobFilter("All")}>All</Option>
              <Option onClick={() => handleJobFilter("Remote")}>Remote</Option>
              <Option onClick={() => handleJobFilter("Onsite")}>Onsite</Option>
            </Select>
          </div>
        </div>
        {displayJobs.map((job) => (
          <AppliedJobsDetails key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
