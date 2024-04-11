import React from "react";
import { AdditionalInfo } from "./AdditionalInfo";
import { weatherStatus } from "../utils";

export const WeatherInfo = ({ weatherData }) => {
  return (
    <div>
      {/* city info */}
      <div className="flex items-center justify-around my-10">
        {/* text-info */}
        <div>
          {weatherData && (
            <>
              <h2 className="font-bold text-[35px] leading-[45px] text-[#003339] tracking-[0.25px]">
                {weatherData.name}, {weatherData.sys.country}
              </h2>
              <p className="text-[#96969A] text-lg font-bold mt-4">
                {new Date(weatherData.dt * 1000).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>

              <div className="flex gap-2 items-center mt-4">
                <img
                  src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                  alt="weather-info"
                />
                <p>{weatherData.weather[0].main}</p>
              </div>
            </>
          )}
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

      <div className="w-full flex gap-1  lg:justify-between px-2 lg:px-6 lg:gap-4 bg-[#003339] text-white mt-8 mb-12 rounded-2xl">
        {weatherStatus.map((weather) => (
          <div
            className="flex flex-col items-center gap-1 py-4 px-4"
            key={weather.icon}>
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

      <AdditionalInfo
        humidity={weatherData?.main.humidity}
        wind={weatherData?.wind.speed}
        precipitation={weatherData?.main.temp}
      />
    </div>
  );
};
