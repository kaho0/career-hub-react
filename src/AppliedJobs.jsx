import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredApplication } from "./LocalStorage";
import { MdOutlineShareLocation } from "react-icons/md";
import { CiDollar } from "react-icons/ci";
import { SiTerraform } from "react-icons/si";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleJobsFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
    setDropdownOpen(false); // Close dropdown after selection
  };

  useEffect(() => {
    const storedJobIds = getStoredApplication();
    if (jobs.length > 0) {
      const jobsApplied = jobs.filter((job) => storedJobIds.includes(job.id));
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied); // Initialize displayJobs with all applied jobs
    }
  }, [jobs]);

  return (
    <div className="max-w-6xl mx-auto mt-10 p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">
          Jobs I applied: {appliedJobs.length}
        </h2>
        <div className="relative">
          <button
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md shadow"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            Filter By
          </button>
          {dropdownOpen && (
            <ul className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleJobsFilter("all")}
              >
                All
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleJobsFilter("remote")}
              >
                Remote
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleJobsFilter("onsite")}
              >
                Onsite
              </li>
            </ul>
          )}
        </div>
      </div>
      <div className="space-y-4">
        {displayJobs.map((job) => (
          <div
            key={job.id}
            className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm"
          >
            <div className="flex items-center w-full">
              <img
                src={job.logo}
                alt={job.company_name}
                className="w-28 h-28 mr-4 object-contain" // Make sure the image is properly contained
              />
              <div className="flex flex-col justify-between w-full">
                <h3 className="text-xl font-semibold">{job.job_title}</h3>
                <p className="text-gray-600">{job.company_name}</p>
                <div className="flex justify-start space-x-4 mt-2 text-gray-500">
                  <span className="flex items-center">
                    <MdOutlineShareLocation className="mr-1" /> {job.location}
                  </span>
                  <span className="flex items-center">
                    <SiTerraform className="mr-1" />
                    {job.remote_or_onsite}
                  </span>
                  <span className="flex items-center">
                    <CiDollar className="mr-1" /> Salary: {job.salary}
                  </span>
                  <span></span>
                </div>
              </div>
            </div>
            <div className="ml-4">
              <button className="px-6 py-2 bg-purple-600 text-white rounded-md shadow">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
