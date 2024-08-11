import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { PiSubtitlesThin } from "react-icons/pi";
import {
  MdOutlineLocalPhone,
  MdOutlineMarkEmailUnread,
  MdOutlineShareLocation,
} from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "./LocalStorage";

const JobDetails = () => {
  const jobs = useLoaderData();

  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);

  if (!job) {
    return <div>Job not found</div>;
  }

  const handleApplyJob = () => {
    saveJobApplication(idInt);
    toast.success("Application submitted successfully!");
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Job Details</h1>
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Job Description</h2>
          <p className="text-base text-gray-700">{job.job_description}</p>

          <h2 className="text-2xl font-semibold mt-6">Job Responsibility</h2>
          <p className="text-base text-gray-700 mt-2">
            {job.job_responsibility}
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            Educational Requirements
          </h2>
          <p className="text-base text-gray-700 mt-2">
            {job.educational_requirements}
          </p>

          <h2 className="text-2xl font-semibold mt-6">Experience</h2>
          <p className="text-base text-gray-700 mt-2">{job.experiences}</p>
        </div>

        <div className="p-6 bg-gray-100 border border-gray-200 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Job Details</h2>
          <p className="text-base flex items-center">
            <HiOutlineCurrencyDollar className="text-lg mr-2" />
            <strong>Salary:</strong> {job.salary}
          </p>
          <p className="text-base flex items-center mt-2">
            <PiSubtitlesThin className="text-lg mr-2" />
            <strong>Job Title:</strong> {job.job_title}
          </p>

          <h2 className="text-xl font-semibold mt-6">Contact Information</h2>
          <p className="text-base mt-2 flex items-center">
            <MdOutlineLocalPhone className="text-lg mr-2" />
            <strong>Phone:</strong> {job.contact_information.phone}
          </p>
          <p className="text-base mt-2 flex items-center">
            <MdOutlineMarkEmailUnread className="text-lg mr-2" />
            <strong>Email:</strong> {job.contact_information.email}
          </p>
          <p className="text-base mt-2 flex items-center">
            <MdOutlineShareLocation className="text-lg mr-2" />
            <strong>Address:</strong> {job.contact_information.address}
          </p>

          <button
            onClick={handleApplyJob}
            className="w-full mt-6 py-3 bg-purple-600 text-white font-semibold rounded-lg"
          >
            Apply Now
          </button>
        </div>
      </div>
      <ToastContainer position="top-right" />
    </div>
  );
};

export default JobDetails;
