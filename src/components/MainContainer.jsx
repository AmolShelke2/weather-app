import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import cloudy from "../assets/weather-clouds.svg";

export const MainContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="bg-white w-full max-w-[1200px] mx-auto py-4">
      {/* search and menu icon */}
      <div className="flex justify-between items-center py-2">
        <div>
          <AiOutlineMenu size={24} className="cursor-pointer text-gray-600" />
        </div>
        <div className="flex items-center relative">
          <input
            type="text"
            placeholder="search city...."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            className="border w-[300px] px-2 rounded-md text-black py-2 placeholder:capitalize focus:outline-none"
          />
          <AiOutlineSearch
            size={25}
            className="cursor-pointer text-gray-600 absolute right-2"
          />
        </div>
      </div>

      {/* city info */}
      <div className="flex items-center justify-around mt-10">
        {/* text-info */}
        <div>
          <h2 className="font-bold text-[35px] leading-[45px] text-[#003339] tracking-[0.25px]">
            New york <br /> United States
          </h2>
          <p className="text-[#96969A] text-lg font-bold mt-4">Apr 10, 2024</p>

          <div className="flex gap-2 mt-4">
            <img src={cloudy} alt="weather-info" />
            <p>Cloudy</p>
          </div>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1556541845-443e0c6e8e66?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="city"
            height={300}
            width={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};
