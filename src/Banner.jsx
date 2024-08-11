import React from "react";
import userImage from "./assets/user.png"; // Import the image

const Banner = () => {
  return (
    <div className="bg-white py-20 flex flex-col md:flex-row items-center justify-between px-6 lg:px-16">
      <div className="max-w-lg">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
          One Step Closer To Your{" "}
          <span className="text-purple-500">Dream Job</span>
        </h1>
        <p className="text-gray-600 mb-6">
          Explore thousands of job opportunities with all the information you
          need. It's your future. Come find it. Manage all your job applications
          from start to finish.
        </p>
        <button className="px-6 py-3 bg-purple-600 text-white rounded-md shadow">
          Get Started
        </button>
      </div>
      <div className="hidden md:block mt-10 md:mt-0">
        <img
          src={userImage} // Use the imported image
          alt="Person"
          className="w-full md:w-auto"
        />
      </div>
    </div>
  );
};

export default Banner;
