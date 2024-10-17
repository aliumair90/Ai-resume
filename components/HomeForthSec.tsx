// components/HomeForthSec.js
import React, { useEffect, useState } from "react";

// CountingNumber component
const CountingNumber = ({ targetNumber }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // Duration of the counting in milliseconds
    const incrementTime = 50; // Time between increments in milliseconds
    const totalSteps = duration / incrementTime; // Total increments
    const incrementCount = Math.ceil(targetNumber / totalSteps); // Calculate increment per step

    const intervalId = setInterval(() => {
      setCount((prevCount) => {
        const nextCount = prevCount + incrementCount;
        if (nextCount >= targetNumber) {
          clearInterval(intervalId);
          return targetNumber; // Ensure it doesn't exceed the target
        }
        return nextCount;
      });
    }, incrementTime);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [targetNumber]);

  // Format the number for K values
  const formatCount = (number) => {
    if (number >= 1000) {
      return `${(number / 1000).toFixed(0)}K`;
    }
    return number.toString();
  };

  return <span>{formatCount(count)}</span>;
};

// Main Component
const HomeForthSec = () => {
  return (
    <div className="w-layout-blockcontainer base-container container px-14 mt-20 mb-28">
      <div className="grid grid-cols-2 gap-8 opacity-100 transform transition-all">
        {/* Column One: Trusted by Clients Section */}
        <div className="opacity-100">
          <div className="trusted-by-clients">
            <div className="flex items-center mb-4">
              <div className="dot bg-black rounded-full h-2 w-2 mr-2"></div>
              <p className="subtitle-main text-gray-600">Trusted by Clients</p>
            </div>
            <h3 className="text-2xl font-semibold no-margin">
              Join our community today and discover how we can support your
              career or hiring goals.
            </h3>
          </div>
          {/* Numbers Section */}
        </div>

        {/* Column Two: Company Logos Section */}
        <div className="w-full">
          <img
            className="w-full"
            src="/images/community.png"
            alt="join ai community"
          />
        </div>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-4 gap-4 mt-14 opacity-100 ">
        <div className="statistics-card text-center">
          <h2 className="numbers-two text-4xl font-bold">
            <CountingNumber targetNumber={500000} />
          </h2>
          <p className="statistics-text-three text-gray-600">Job Listings</p>
        </div>
        <div className="statistics-card text-center">
          <h2 className="numbers-two text-4xl font-bold">
            <CountingNumber targetNumber={300000} />
          </h2>
          <p className="statistics-text-three text-gray-600">
            Registered Users
          </p>
        </div>
        <div className="statistics-card text-center">
          <h2 className="numbers-two text-4xl font-bold">
            <CountingNumber targetNumber={260000} />
          </h2>
          <p className="statistics-text-three text-gray-600">Employers</p>
        </div>
        <div className="statistics-card text-center">
          <h2 className="numbers-two text-4xl font-bold">
            <CountingNumber targetNumber={18} />+
          </h2>
          <p className="statistics-text-three text-gray-600">
            Years in Industry
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeForthSec;
