import React from "react";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
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
    <div className="card bg-base-100 shadow-md p-4 flex flex-col justify-between text-sm">
      <figure className="flex justify-center items-center h-24 mb-2">
        <img className="max-h-full max-w-[50%]" src={logo} alt="Company" />
      </figure>
      <div className="card-body flex flex-col justify-between p-2">
        <div className="mb-2">
          <h2 className="card-title text-base mb-1">{job_title}</h2>
          <p className="text-xs text-gray-500 mb-2">{company_name}</p>
          <div className="flex justify-between">
            <button className="px-3 py-1 font-medium border text-[#7E90FE] rounded-lg border-[#7E90FE]">
              {remote_or_onsite}
            </button>
            <button className="px-3 py-1 font-medium border text-[#7E90FE] rounded-lg border-[#7E90FE]">
              {job_type}
            </button>
          </div>
        </div>
        <div className="flex justify-between mb-2">
          <h2 className="flex items-center text-xs text-gray-600">
            <IoLocationOutline className="text-lg mr-1" />
            {location}
          </h2>
          <h2 className="flex items-center text-xs text-gray-600">
            <HiOutlineCurrencyDollar className="text-lg mr-1" />
            {salary}
          </h2>
        </div>
        <div className="card-actions">
          <Link to={`/job/${id}`}>
            <button className="btn btn-primary font-medium w-full py-2 text-sm">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
