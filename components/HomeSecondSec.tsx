import React from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa"; // Importing an icon from react-icons

const HomeSecondSec = () => {
  return (
    <div className=" pt-32  text-center md:text-left pb-0">
      <div className="container mx-auto">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row py-5 px-14">
          <div className="w-full ">
            <h2 className="mini-headline text-lg font-medium">
              AI Resume Builder
            </h2>
            <p className="text-4xl font-bold text-gray-600">
              Powered by OpenAI's GPT-4 NLP model.
            </p>
            <p className="mt-4">
              GPT-4 is an AI language model so powerful, it was at first deemed
              too dangerous to unleash on the world. Now you can use it to write
              your resume. And while that may seem like overkill, GPT-4 is
              uniquely well-suited for generating structured documents such as
              resumes. Try it for free and see the results for yourself.
            </p>
            <hr className="my-4" />
            <ul className="list-none pl-0 space-y-2">
              <li className="flex items-center">
                <FaCheckCircle className="text-blue-500 mr-2" />
                The world’s most powerful natural language processing model
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-blue-500 mr-2" />
                Trained on hundreds of billions of words
              </li>
            </ul>
            <div className="flex  mt-8">
              <a
                href="/ai/resume/"
                className="btn-primary rounded-full bg-blue-500 text-white px-6 py-3"
              >
                Try AI Resume Writer
              </a>
            </div>
          </div>

          <div className="w-full mb-3 md:text-right">
            <Image
              src="https://d1civoyjepycei.cloudfront.net/static/img/ai_writer_features/open_ai.9a9809c281e2.png"
              alt="A professional resume built by OpenAI"
              width={600} // Ensure width is provided
              height={400}
              className="w-full"
              loading="lazy"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col-reverse md:flex-row px-14 pb-5">
          <div className="w-full mb-3">
            <Image
              src="https://d1civoyjepycei.cloudfront.net/static/img/ai_writer_features/ai_resume_letter_writer.b5e3f346ae52.gif"
              alt="AI Resume Writer Cover"
              width={500}
              height={600}
              className="w-full"
              loading="lazy"
            />
          </div>
          <div className="w-full ">
            <h2 className="mini-headline text-2xl font-semibold">
              Automatic Resume Writer
            </h2>
            <p className="text-4xl font-bold">
              How does the AI Resume Writer work?
            </p>
            <p className="mt-4">
              You can use our AI-powered resume builder to automatically
              generate your entire resume. The AI Resume Writer can write
              professional sections for your resume summary, work experience,
              and education, with a consistent tone throughout the document. Try
              it for free and get your AI-generated CV ready in seconds.
            </p>
            <hr className="my-4" />
            <ul className="list-none pl-0 space-y-2">
              <li className="flex items-center">
                <FaCheckCircle className="text-blue-500 mr-2" />
                Automatically writes great bullet points for your resume
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-blue-500 mr-2" />
                Quick &amp; easy resume generator
              </li>
            </ul>
            {/* Button added here */}
            <div className="flex  mt-8">
              <a
                href="/ai/resume/"
                className="btn-primary rounded-full bg-blue-500 text-white px-6 py-3"
              >
                Try AI Resume Writer
              </a>
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div className="flex flex-col md:flex-row py-5 px-14">
          <div className="w-full">
            <h2 className="mini-headline text-2xl font-semibold">
              AI Cover Letter Generator
            </h2>
            <p className="text-4xl font-bold">
              Use AI to generate a matching cover letter.
            </p>
            <p className="mt-4">
              Once you’ve polished your resume, you can use our AI Cover Letter
              Writer to quickly generate a great cover letter that visually
              matches your resume. The AI Writer takes into consideration the
              content of your resume and generates a full-fledged cover letter
              in seconds.
              <a
                href="/en/ai-cover-letter-writer/"
                target="_blank"
                className="text-blue-600 underline"
              >
                Learn more about the AI Cover Letter Writer.
              </a>
            </p>
            <hr className="my-4" />
            <ul className="list-none pl-0 space-y-2">
              <li className="flex items-center">
                <FaCheckCircle className="text-blue-500 mr-2" />
                Let AI generate the first draft of your cover letter
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-blue-500 mr-2" />
                Customizable templates to match your resume
              </li>
            </ul>
          </div>
          <div className="w-full mb-3 md:text-right">
            <Image
              src="https://d1civoyjepycei.cloudfront.net/static/img/ai_writer_features/ai_how_works.9310123cdaf4.png"
              alt="Resume Check"
              width={500} // Added width
              height={400}
              className="w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSecondSec;
