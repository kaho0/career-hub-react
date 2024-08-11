import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const Statistics = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/path-to-your-api/statistics");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="statistics-page container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Statistics</h1>

      <div className="stats grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="stat-item p-6 bg-gray-100 rounded shadow">
          <h2 className="text-xl font-semibold">Total Jobs Posted</h2>
          <p className="text-4xl font-bold mt-2">{data.totalJobsPosted || 0}</p>
        </div>
        <div className="stat-item p-6 bg-gray-100 rounded shadow">
          <h2 className="text-xl font-semibold">Total Applications</h2>
          <p className="text-4xl font-bold mt-2">
            {data.totalApplications || 0}
          </p>
        </div>
        <div className="stat-item p-6 bg-gray-100 rounded shadow">
          <h2 className="text-xl font-semibold">Companies Involved</h2>
          <p className="text-4xl font-bold mt-2">
            {data.companiesInvolved || 0}
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Monthly Growth</h2>
        <p className="mt-2">
          Our platform continues to grow every month, with more job postings,
          applications, and successful hires.
        </p>

        {/* Line Chart for Monthly Growth */}
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={data.monthlyGrowth || []}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="jobsPosted" stroke="#8884d8" />
            <Line type="monotone" dataKey="applications" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>

        {/* Bar Chart for Jobs Filled */}
        <h2 className="text-2xl font-semibold mt-8">Jobs Filled</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data.jobsFilled || []}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="filled" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
