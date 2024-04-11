import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { WeatherInfo } from "./WeatherInfo";
import { Link } from "react-router-dom";
import { API_KEY } from "../utils";
import { useNavigate } from "react-router-dom";

export const MainContainer = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
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

  const handleShowScreenTwo = () => {
    navigate(`/current-location/${weatherData?.name}`);
  };

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

  return (
    <div className="bg-white w-full lg:max-w-[1200px] lg:mx-auto py-4">
      {/* search and menu icon */}
      <div className="flex justify-between items-center py-2 px-2">
        <div onClick={handleShowScreenTwo}>
          <AiOutlineMenu size={24} className="cursor-pointer text-gray-600" />
        </div>

        <AiOutlineSearch size={25} className="cursor-pointer text-gray-600" />
      </div>

      <WeatherInfo weatherData={weatherData} />
    </div>
  );
};
