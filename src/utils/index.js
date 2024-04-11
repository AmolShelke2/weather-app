import cloudy from "../assets/weather-clouds.png";
import thunderRain from "../assets/weather-cloud-thunder-rain.png";
import cloud from "../assets/weather-cloud.png";
import sun from "../assets/weather-sun.png";

export const API_KEY = "5c12b6ec686b184c8b1b22767f7ce623";

export const weatherStatus = [
  {
    id: 1,
    time: "12:00",
    icon: cloudy,
    temperature: "24",
  },
  {
    id: 2,
    time: "12:00",
    icon: thunderRain,
    temperature: "24",
  },
  {
    id: 3,
    time: "12:00",
    icon: cloud,
    temperature: "24",
  },
  {
    id: 4,
    time: "12:00",
    icon: sun,
    temperature: "24",
  },
  {
    id: 5,
    time: "12:00",
    icon: cloudy,
    temperature: "24",
  },
];

export function kelvinToCelsius(kelvin) {
  return kelvin - 273.15;
}
