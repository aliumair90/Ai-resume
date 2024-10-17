import Image from "next/image";
import {
  FaRegFileAlt,
  FaRegAddressCard,
  FaUserEdit,
  FaRocketchat,
  FaClipboardList,
  FaUserFriends,
  FaInfoCircle,
} from "react-icons/fa";

const FeaturesSection = () => {
  return (
    <section
      id="scroll"
      className="section pb-0 bg-blue-600 px-14  mt-16 rounded-2xl mx-auto w-[90%]"
    >
      <div className="py-10">
        <div className="features-grid grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Feature 1 */}
          <div className="feature-item bg-black col-span-1 md:col-span-2 p-6 rounded-xl text-white shadow-xl transform hover:scale-105 transition duration-500 ease-in-out">
            <h4 className="text-2xl font-bold mb-4 fade-in">
              AI-Powered Resume Builder
            </h4>
            <p className="mb-4 text-lg fade-in">
              Create professional resumes effortlessly with our AI-powered tool.
              Get personalized suggestions and templates tailored to your
              industry.
            </p>
            <div className="button-wrapper-main pt-8">
              <a
                href="/ai/resume-builder"
                className="bg-blue-500 text-white py-2 px-4 rounded-2xl hover:bg-blue-600 hover:scale-110 transition-all duration-300 ease-in-out"
              >
                Learn more
              </a>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="feature-item bg-white p-6 rounded-2xl shadow-xl text-gray-800 transform hover:scale-105 transition duration-500 ease-in-out">
            <div className="feature-icon-wrapper mb-4 flex justify-center">
              <FaRegAddressCard className="text-blue-500 text-3xl animate-bounce" />
            </div>
            <h5 className="text-xl font-bold mb-2 fade-in">
              AI Cover Letter Generator
            </h5>
            <p className="fade-in">
              Generate tailored cover letters that effectively highlight your
              skills and experiences to make a lasting impression.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="feature-item bg-white p-6 rounded-2xl shadow-xl text-gray-800 transform hover:scale-105 transition duration-500 ease-in-out">
            <div className="feature-icon-wrapper mb-4 flex justify-center">
              <FaUserEdit className="text-blue-500 text-3xl animate-bounce" />
            </div>
            <h5 className="text-xl font-bold mb-2 fade-in">
              Personalized Job Insights
            </h5>
            <p className="fade-in">
              Receive customized job recommendations and insights based on your
              resume and career goals.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="feature-item bg-white p-6 rounded-2xl shadow-xl text-gray-800 transform hover:scale-105 transition duration-500 ease-in-out">
            <div className="feature-icon-wrapper mb-4 flex justify-center">
              <FaRocketchat className="text-blue-500 text-3xl animate-bounce" />
            </div>
            <h5 className="text-xl font-bold mb-2 fade-in">
              Interview Preparation Tools
            </h5>
            <p className="fade-in">
              Access tips and resources to prepare for interviews and ace your
              next job opportunity.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="feature-item bg-white p-6 rounded-2xl shadow-xl text-gray-800 transform hover:scale-105 transition duration-500 ease-in-out">
            <div className="feature-icon-wrapper mb-4 flex justify-center">
              <FaClipboardList className="text-blue-500 text-3xl animate-bounce" />
            </div>
            <h5 className="text-xl font-bold mb-2 fade-in">
              User-Friendly Interface
            </h5>
            <p className="fade-in">
              Enjoy a seamless experience with our intuitive design, making it
              easy for anyone to create stunning resumes and cover letters.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="feature-item bg-white p-6 rounded-2xl shadow-xl text-gray-800 transform hover:scale-105 transition duration-500 ease-in-out">
            <div className="feature-icon-wrapper mb-4 flex justify-center">
              <FaUserFriends className="text-blue-500 text-3xl animate-bounce" />
            </div>
            <h5 className="text-xl font-bold mb-2 fade-in">
              Networking Opportunities
            </h5>
            <p className="fade-in">
              Connect with industry professionals and expand your network to
              discover new job opportunities.
            </p>
          </div>

          {/* Feature 7 */}
          <div className="feature-item bg-white p-6 rounded-2xl shadow-xl text-gray-800 transform hover:scale-105 transition duration-500 ease-in-out">
            <div className="feature-icon-wrapper mb-4 flex justify-center">
              <FaInfoCircle className="text-blue-500 text-3xl animate-bounce" />
            </div>
            <h5 className="text-xl font-bold mb-2 fade-in">
              Job & Interview Information
            </h5>
            <p className="fade-in">
              Stay informed about the latest job trends, interview tips, and
              best practices to enhance your job search.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
