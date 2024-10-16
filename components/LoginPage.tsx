"use client"; // Required for Next.js 13 and above
import { useState } from "react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import icons for Google, Apple, and Facebook
import { FaGoogle, FaApple, FaFacebookF } from "react-icons/fa";
import Navbar from "./Navbar";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here (e.g., API call)
    console.log({ email, password });
  };

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-blue-100 flex items-center justify-center">
        <div className="bg-white shadow-lg flex rounded-lg overflow-hidden w-4/5 md:w-3/5">
          {/* Left section - Carousel */}
          <div className="w-1/2 bg-gray-200 p-6 flex flex-col justify-center text-black">
            <Slider {...settings}>
              <div className="h-full flex items-center justify-center">
                <img
                  src="/images/resume1.png"
                  alt="Slide 1"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="h-full flex items-center justify-center">
                <img
                  src="/images/resume2.png"
                  alt="Slide 2"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="h-full flex items-center justify-center">
                <img
                  src="/images/resume3.png"
                  alt="Slide 3"
                  className="w-full h-full object-contain"
                />
              </div>
            </Slider>
            <div className="mt-6 text-center">
              <h2 className="text-2xl font-semibold">Explore your activity</h2>
              <p className="mt-2">
                Discover the benefits of organizing your projects seamlessly.
              </p>
            </div>
          </div>

          {/* Right section - Login Form */}
          <div className="w-1/2 p-8 bg-white flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="w-full">
              <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
                Log In
              </h2>

              <div className="mb-6">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border border-gray-300 rounded-lg w-full p-3 shadow-sm focus:outline-none focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-6">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="border border-gray-300 rounded-lg w-full p-3 shadow-sm focus:outline-none focus:border-blue-500"
                  placeholder="Enter your password"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white rounded-lg py-3 font-bold hover:bg-blue-700 transition duration-200 shadow-md"
              >
                Log In
              </button>

              <div className="mt-4 text-center">
                <Link
                  href="/forgot-password"
                  className="text-sm text-blue-600 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <div className="my-6 flex items-center">
                <hr className="flex-grow border-gray-300" />
                <span className="mx-4 text-gray-500">or log in with</span>
                <hr className="flex-grow border-gray-300" />
              </div>

              {/* Google, Apple, and Facebook circular icons */}
              <div className="flex justify-center space-x-4">
                {/* Google button */}
                <button
                  type="button"
                  className="bg-white border border-gray-300 rounded-full p-4 flex items-center justify-center transition-transform duration-300 transform hover:scale-110"
                >
                  <FaGoogle className="text-red-600 text-2xl" />
                </button>

                {/* Apple button */}
                <button
                  type="button"
                  className="bg-black rounded-full p-4 flex items-center justify-center transition-transform duration-300 transform hover:scale-110"
                >
                  <FaApple className="text-white text-2xl" />
                </button>

                {/* Facebook button */}
                <button
                  type="button"
                  className="bg-blue-600 rounded-full p-4 flex items-center justify-center transition-transform duration-300 transform hover:scale-110"
                >
                  <FaFacebookF className="text-white text-2xl" />
                </button>
              </div>

              <div className="mt-4 text-center">
                <Link
                  href="/signup"
                  className="text-sm text-blue-600 hover:underline"
                >
                  Don't have an account? Sign Up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
