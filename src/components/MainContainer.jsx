import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { WeatherInfo } from "./WeatherInfo";
import { API_KEY } from "../utils";
import { useNavigate } from "react-router-dom";
import { IoBatteryFull, IoCellular } from "react-icons/io5";
import { FaWifi } from "react-icons/fa";

export const MainContainer = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const apiKey = API_KEY;

        if (latitude !== null && longitude !== null) {
          const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

          const response = await fetch(apiUrl);
          const data = await response.json();
          setWeatherData(data);
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    getWeatherData();
  }, [latitude, longitude]);

  const handleShowScreenTwo = (name, country) => {
    navigate(
      `/current-location/${weatherData?.name}/${weatherData?.sys.country}`
    );
  };

  console.log(weatherData);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error("Error getting geolocation:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const handleSearchCity = async () => {
    try {
      const apiKey = API_KEY;
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${apiKey}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="bg-white w-full lg:max-w-[1200px] lg:mx-auto py-4">
      {/* top  */}
      <div className="w-full flex justify-between items-center mb-2 px-4">
        <span className="text-black text-[16px] font-normal">9.41</span>

        <div className="flex items-center gap-2">
          <IoCellular size={22} className="text-black cursor-pointer" />
          <FaWifi size={22} className="text-black cursor-pointer" />
          <IoBatteryFull size={22} className="text-black cursor-pointer" />
        </div>
      </div>
      {/* search and menu icon */}
      <div className="flex justify-between items-center py-2 px-2">
        <div onClick={handleShowScreenTwo}>
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
            onClick={handleSearchCity}
          />
        </div>
      </div>

      <WeatherInfo weatherData={weatherData} />
    </div>
  );
};
