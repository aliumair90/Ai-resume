import Navbar from "@/components/Navbar";
import SearchBar from "../components/SearchBar";

const page = () => {
  return (
    <>
      <Navbar />
      <div className=" flex flex-col justify-center  items-center pt-20 pb-10 bg-gray-100">
        <h1 className=" text-2xl md:text-5xl font-bold ">
          Find your dream job now
        </h1>
        <p className="text-base md:text-2xl font-normal pt-5">
          5 lakh+ jobs for you to explore
        </p>
      </div>
      <SearchBar />
    </>
  );
};

export default page;
