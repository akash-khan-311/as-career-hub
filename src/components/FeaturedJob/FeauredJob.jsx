import React, { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeauredJob = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);
  useEffect(() => {
    fetch("./data/jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <div>
        <h2 className="text-5xl font-semibold text-center">Featured Job</h2>
        <p className="text-center my-3">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-10">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job} />
        ))}
      </div>
      <div
        className={
          dataLength === jobs.length ? "hidden" : "flex justify-center mb-10"
        }
      >
        <button
          onClick={() => setDataLength(jobs.length)}
          className="custom-btn "
        >
          Show All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeauredJob;
