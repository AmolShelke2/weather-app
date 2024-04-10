import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { WeatherInfo } from "./WeatherInfo";

export const MainContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="bg-white w-full lg:max-w-[1200px] lg:mx-auto py-4 px-2">
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
            className="border w-[300px] px-2 rounded-md text-black py-2 placeholder:capitalize focus:border focus:border-gray-400 focus:outline-none"
          />
          <AiOutlineSearch
            size={25}
            className="cursor-pointer text-gray-600 absolute right-2"
          />
        </div>
      </div>

      <WeatherInfo searchTerm={searchTerm} />
    </div>
  );
};
