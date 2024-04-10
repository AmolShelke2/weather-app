import React, { useEffect } from "react";
import cloudy from "../assets/weather-clouds.svg";
import { weatherStatus } from "../utils";
import { AdditionalInfo } from "./AdditionalInfo";

export const WeatherInfo = ({ searchTerm }) => {
  return (
    <div>
      {/* city info */}
      <div className="flex items-start gap-6 lg:gap-0 lg:items-center justify-around my-10">
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
            className="rounded-lg h-[110px] w-[130px] sm:h-[550px] sm:w-[500px]"
          />
        </div>
      </div>

      {/* weather status */}
      <div className="w-full flex gap-1  lg:justify-between px-2 lg:px-6 lg:gap-4 bg-[#003339] text-white mt-8 mb-12 rounded-2xl">
        {weatherStatus.map((weather) => (
          <div className="flex flex-col items-center gap-1 py-4 px-4">
            <span className="text-lg font-normal">{weather.time}</span>
            <img
              src={weather.icon}
              alt="weather-icon"
              className="object-contain"
            />
            <p>{weather.temperature}</p>
          </div>
        ))}
      </div>
      <AdditionalInfo />
    </div>
  );
};
