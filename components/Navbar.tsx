"use client";
import { useState } from "react";
import Link from "next/link";
import { FaChevronDown, FaChevronUp, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="mx-10">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-5xl font-extrabold">
              Rezi
            </Link>
            <div className="px-10 hidden md:flex space-x-8 items-center">
              <DropdownMenu
                title="AI Resume"
                items={[
                  {
                    name: "AI Resume Builder",
                    description: "Write, review, tailor, format your resume",
                  },
                  {
                    name: "AI Resume Editor",
                    description: "Improve resume bullet points instantly",
                    badge: "New",
                  },
                  {
                    name: "AI Resume Summary Generator",
                    description: "Instantly generate your resume’s summary",
                  },
                  {
                    name: "AI Keyword Scanner",
                    description: "Optimize resume with targeted keywords",
                  },
                  {
                    name: "ATS Resume Checker",
                    description: "Check resume content for best practices",
                  },
                ]}
              />
              <DropdownMenu
                title="AI Job Search"
                items={[
                  {
                    name: "AI Cover Lettre Writer",
                    description: "Create cover letter based on resume",
                  },
                  {
                    name: "AI Interview Practice",
                    description: "Practice interview questions based on resume",
                    badge: "New",
                  },
                  {
                    name: "AI Resignation Letter",
                    description: "Create resignation Instantly",
                  },
                ]}
              />
              <DropdownMenu
                title="Example & Templates"
                items={[
                  {
                    name: "Resume Templates",
                    description: "Check out our ATS optimized resume formats",
                  },
                  {
                    name: "Resume Examples",
                    description: "Cloneable resume templates",
                  },
                  {
                    name: "Cover Letter Examples",
                    description: "Cloneable cover letter templates",
                  },
                  {
                    name: "Resignation Letter Examples",
                    description: "Cloneable resignation letter templates",
                  },
                ]}
              />
              <DropdownMenu
                title="Resources"
                items={[
                  { name: "How to write a Resume" },
                  { name: "How to write a Cover Letter" },
                  { name: "How to write a Resignation Letter" },
                  { name: "Rezi Reddit Community" },
                  { name: "User Guides" },
                  { name: "Blogs" },
                ]}
              />
              <p className="text-gray-500">Pricing</p>
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="text-gray-700 focus:outline-none"
            >
              <FaBars size={24} />
            </button>
          </div>

          {/* Buttons for Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-gray-600 hover:text-gray-900">
              Log in
            </Link>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700">
              Create Free Resume
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-20">
          <div className="fixed left-0 top-0 w-3/4 sm:w-64 h-full bg-white shadow-lg z-30 p-6">
            <div className="flex justify-between items-center mb-6">
              <Link href="/" className="text-2xl font-bold">
                Rezi
              </Link>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="text-gray-700 focus:outline-none"
              >
                <FaTimes size={24} />
              </button>
            </div>

            {/* Sidebar Links with Dropdowns */}
            <div className="space-y-4">
              <MobileDropdownMenu
                title="AI Resume"
                items={[
                  {
                    name: "AI Resume Builder",
                    description: "Write, review, tailor, format your resume",
                  },
                  {
                    name: "AI Resume Editor",
                    description: "Improve resume bullet points instantly",
                    badge: "New",
                  },
                  {
                    name: "AI Resume Summary Generator",
                    description: "Instantly generate your resume’s summary",
                  },
                  {
                    name: "AI Keyword Scanner",
                    description: "Optimize resume with targeted keywords",
                  },
                  {
                    name: "ATS Resume Checker",
                    description: "Check resume content for best practices",
                  },
                ]}
              />
              <MobileDropdownMenu
                title="AI Job Search"
                items={[
                  {
                    name: "AI Cover Lettre Writer",
                    description: "Create cover letter based on resume",
                  },
                  {
                    name: "AI Interview Practice",
                    description: "Practice interview questions based on resume",
                    badge: "New",
                  },
                  {
                    name: "AI Resignation Letter",
                    description: "Create resignation Instantly",
                  },
                ]}
              />
              <MobileDropdownMenu
                title="Examples & Templates"
                items={[
                  {
                    name: "Resume Templates",
                    description: "Check out our ATS optimized resume formats",
                  },
                  {
                    name: "Resume Examples",
                    description: "Cloneable resume templates",
                  },
                  {
                    name: "Cover Letter Examples",
                    description: "Cloneable cover letter templates",
                  },
                  {
                    name: "Resignation Letter Examples",
                    description: "Cloneable resignation letter templates",
                  },
                ]}
              />
              <MobileDropdownMenu
                title="Resources"
                items={[
                  { name: "How to write a Resume" },
                  { name: "How to write a Cover Letter" },
                  { name: "How to write a Resignation Letter" },
                  { name: "Rezi Reddit Community" },
                  { name: "User Guides" },
                  { name: "Blogs" },
                ]}
              />
            </div>

            {/* Sidebar Buttons */}
            <div className="mt-8">
              <Link href="/login">
                {/* Button text here */}
                <a className="block text-gray-600 hover:text-gray-900 mb-4">
                  Log in
                </a>
              </Link>
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Create Free Resume
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

// Desktop Dropdown Menu
function DropdownMenu({ title, items = [] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center text-gray-700 hover:text-gray-900 focus:outline-none">
        {title}
        <span className="ml-2">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>

      <div
        className={`absolute left-0 mt-4 w-[24rem] bg-white border rounded-md shadow-lg z-10 transition-all duration-300 ease-in-out transform ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      >
        {items.length > 0 ? (
          items.map((item, index) => (
            <div
              key={index}
              className="px-4 py-3 hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-800">{item.name}</span>
                {item.badge && (
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full ml-2">
                    {item.badge}
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))
        ) : (
          <p className="px-4 py-2 text-sm text-gray-600">No items available</p>
        )}
      </div>
    </div>
  );
}

// Mobile Dropdown Menu
function MobileDropdownMenu({ title, items = [] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 pb-4">
      <button
        className="flex items-center justify-between w-full text-gray-800 hover:text-gray-900 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span>{isOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
      </button>
      {isOpen && (
        <div className="mt-2">
          {items.length > 0 ? (
            items.map((item, index) => (
              <div
                key={index}
                className="px-4 py-2 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-800">{item.name}</span>
                  {item.badge && (
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full ml-2">
                      {item.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))
          ) : (
            <p className="px-4 py-2 text-sm text-gray-600">
              No items available
            </p>
          )}
        </div>
      )}
    </div>
  );
}
