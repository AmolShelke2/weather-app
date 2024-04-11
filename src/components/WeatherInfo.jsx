import React, { useEffect, useState } from "react";
import { AdditionalInfo } from "./AdditionalInfo";
import { API_KEY } from "../utils";

export const WeatherInfo = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

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

      <AdditionalInfo
        humidity={weatherData?.main.humidity}
        wind={weatherData?.wind.speed}
        precipitation={weatherData?.main.temp}
      />
    </div>
  );
};
