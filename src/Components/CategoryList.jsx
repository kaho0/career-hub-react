import React, { useEffect, useState } from "react";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Job Category List</h2>
        <p className="text-gray-600 mb-12 text-center">
          Explore thousands of job opportunities with all the information you
          need. <br></br>It's your future. Come find it. Manage all your job
          applications from start to finish.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <img
                src={category.logo}
                alt={category.category_name}
                className="mx-auto mb-4 h-16 w-16"
              />
              <h3 className="text-xl font-semibold mb-2">
                {category.category_name}
              </h3>
              <p className="text-gray-500">{category.availability}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
