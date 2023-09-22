import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <Card className=" backdrop-blur-3xl bg-white/5 text-white">
      <CardBody>
        <div className="my-4">
          <img src={logo} alt="" />
        </div>
        <Typography variant="h3" className="mb-2">
          {job_title}
        </Typography>
        <Typography>{company_name}</Typography>
        <div className="my-2">
          <button className="btn btn-outline btn-success">
            {remote_or_onsite}
          </button>
          <button className="btn btn-outline btn-success ml-3">
            {job_type}
          </button>
        </div>
        <div className="flex flex-col lg:flex-row   ">
          <span className="flex items-center">
            <MdOutlineLocationOn className="text-xl mr-4 my-3" />
            {location}
          </span>
          <span className="flex items-center ml-0 lg:ml-10">
            <AiOutlineDollar className="text-xl mr-4" />
            Salary: {salary}
          </span>
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Link to={`/job/${id}`}>
          <button className="custom-btn">view details</button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default Job;
