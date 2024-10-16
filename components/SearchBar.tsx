"use client"; // Required for Next.js 13+ Client Components

import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [experience, setExperience] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Logic for handling search input
    console.log({ search, experience, location });
  };

  return (
    <div className="flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleSearch}
        className="  h-full flex items-center bg-white rounded-full shadow-lg px-6 py-4"
      >
        {/* Search input */}
        <div className="flex items-center space-x-4">
          <FaSearch className="text-gray-400 text-2xl" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Enter skills / designations / companies"
            className=" max-w-auto outline-none border-none bg-transparent placeholder-gray-400 text-gray-600 text-xl"
          />
        </div>

        <div className="h-6 border-l mx-4 border-gray-300"></div>

        {/* Experience Dropdown */}
        <div className="relative">
          <select
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="outline-none bg-transparent text-gray-600  text-xl cursor-pointer"
          >
            <option value="" disabled>
              Select experience
            </option>
            <option value="1">1 Year</option>
            <option value="2">2 Years</option>
            <option value="3">3 Years</option>
            <option value="5">5+ Years</option>
          </select>
        </div>

        <div className="h-6 border-l mx-4 border-gray-300"></div>

        {/* Location input */}
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
          className="outline-none border-none bg-transparent placeholder-gray-400 text-gray-600 text-xl"
        />

        <div className="ml-">
          <button
            type="submit"
            className="bg-blue-600 text-white px-10 py-2 rounded-full hover:bg-blue-700 transition duration-200 text-xl"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
