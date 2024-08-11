import React from "react";

const Blogs = () => {
  return (
    <div className="blogs-page container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Career Blogs</h1>
      <div className="blog-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="blog-post p-6 bg-gray-100 rounded shadow">
          <h2 className="text-xl font-semibold">
            How to Write a Winning Resume
          </h2>
          <p className="mt-2">
            Crafting the perfect resume can make all the difference in landing
            your dream job. Here’s how to make yours stand out.
          </p>
          <a href="#" className="text-blue-500 mt-4 block">
            Read more...
          </a>
        </div>
        <div className="blog-post p-6 bg-gray-100 rounded shadow">
          <h2 className="text-xl font-semibold">
            Top 10 Interview Tips for Success
          </h2>
          <p className="mt-2">
            Ace your next job interview with these top tips from career experts.
          </p>
          <a href="#" className="text-blue-500 mt-4 block">
            Read more...
          </a>
        </div>
        <div className="blog-post p-6 bg-gray-100 rounded shadow">
          <h2 className="text-xl font-semibold">Navigating a Career Change</h2>
          <p className="mt-2">
            Thinking about switching careers? Here’s what you need to know to
            make a smooth transition.
          </p>
          <a href="#" className="text-blue-500 mt-4 block">
            Read more...
          </a>
        </div>
        <div className="blog-post p-6 bg-gray-100 rounded shadow">
          <h2 className="text-xl font-semibold">The Future of Remote Work</h2>
          <p className="mt-2">
            As remote work becomes more common, learn how to adapt and thrive in
            this new environment.
          </p>
          <a href="#" className="text-blue-500 mt-4 block">
            Read more...
          </a>
        </div>
        <div className="blog-post p-6 bg-gray-100 rounded shadow">
          <h2 className="text-xl font-semibold">Skills to Learn in 2024</h2>
          <p className="mt-2">
            Discover the top skills that will be in high demand in the coming
            year.
          </p>
          <a href="#" className="text-blue-500 mt-4 block">
            Read more...
          </a>
        </div>
        <div className="blog-post p-6 bg-gray-100 rounded shadow">
          <h2 className="text-xl font-semibold">
            How to Balance Work and Life
          </h2>
          <p className="mt-2">
            Learn strategies to maintain a healthy work-life balance in a
            fast-paced world.
          </p>
          <a href="#" className="text-blue-500 mt-4 block">
            Read more...
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
