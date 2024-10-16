// pages/signup.js

import Navbar from "./Navbar";
// Importing the Google and Apple icons
import { FaGoogle, FaApple, FaFacebookF } from "react-icons/fa";

export default function SignUpPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-blue-100 flex items-center justify-center">
        <div className="bg-white shadow-lg flex rounded-lg overflow-hidden w-4/5 md:w-3/5">
          {/* Left section - Form */}
          <div className="w-1/2 p-8">
            <h2 className="text-3xl font-bold mb-4">Signup</h2>
            <form>
              <div className="flex space-x-4 mb-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border border-gray-300 rounded-lg p-2 w-full"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border border-gray-300 rounded-lg p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-300 rounded-lg p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  placeholder="Password"
                  className="border border-gray-300 rounded-lg p-2 w-full"
                />
                <p className="text-sm text-gray-500">
                  Password must be at least 8 characters
                </p>
              </div>
              <button className="bg-blue-600 text-white rounded-lg py-2 px-4 w-full font-bold hover:bg-blue-700">
                SIGNUP
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-4">
              Already a member?{" "}
              <a href="/login" className="text-blue-600">
                Signin
              </a>
            </p>

            {/* Continue with Google and Apple */}
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
          </div>

          {/* Right section - Info */}
          <div className="w-1/2 bg-blue-600 text-white p-8 flex flex-col justify-center items-center relative">
            <h2 className="text-2xl font-bold mb-2">Explore your activity</h2>
            <p className="text-sm mb-8 text-center">
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <div className="absolute top-0 right-0 p-6">
              <img
                src="https://i.imgur.com/kWmyZvb.jpg"
                alt="Profile"
                className="rounded-lg w-24 h-24"
              />
            </div>
            <div className="absolute bottom-0 left-0 p-6">
              <img
                src="/profile2.jpg"
                alt="Profile"
                className="rounded-lg w-16 h-16"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
