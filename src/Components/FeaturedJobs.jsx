import React, { useEffect, useState } from "react";
import Job from "./Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <div>
        <h2 className="text-4xl font-bold text-center p-4  text-[#7E90FE]">
          Featured Jobs : {jobs.length}
        </h2>
        <p className="p-4 text-center text-xl text-gray-500">
          Explore thousands of job opportunities with all the information you
          need.<br></br> It's your future.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-3">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job} />
        ))}
      </div>

      <div
        className={`${
          dataLength === jobs.length ? "hidden" : "flex"
        } justify-center mb-3`}
      >
        <button
          onClick={() => setDataLength(jobs.length)}
          className="btn btn-primary m-5"
        >
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
