import React, { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaWifi } from "react-icons/fa";
import { IoCellular, IoBatteryFull } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";

export const CurrentLocation = () => {
  const { name, country } = useParams();

  useEffect(() => {
    window.onpopstate = () => {
      window.location.reload();
    };
  }, []);

  return (
    <div className="h-screen bg-hero-pattern bg-cover bg-center bg-no-repeat w-full px-4">
      {/* top header */}
      <div className="w-full py-4  flex justify-between items-center mb-2">
        <span className="text-white text-[16px] font-normal">9.41</span>

        <div className="flex items-center gap-2">
          <IoCellular size={22} className="text-white cursor-pointer" />
          <FaWifi size={22} className="text-white cursor-pointer" />
          <IoBatteryFull size={22} className="text-white cursor-pointer" />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Link to={"/"}>
          <AiOutlineClose size={25} className="text-white cursor-pointer" />
        </Link>

        <Link to={"/"}>
          <button className="bg-[#FF2D55] text-white px-6 py-2 rounded-lg cursor-pointer">
            Live
          </button>
        </Link>
      </div>

      {/* current location container */}
      <div className="mt-[120px] px-2">
        <div className="flex gap-4 bg-locationBtn py-4 w-[80%] px-4 rounded-lg bg-opacity-5 mb-8">
          <CiLocationOn size={24} className="text-white cursor-pointer" />

          <p className="text-white uppercase font-bold text-lg tracking-wider">
            Current Location
          </p>
        </div>
        <p className="text-[45px] font-bold leading-[60px] tracking-wider text-white">
          {name}, <br /> {country}
        </p>
      </div>
    </div>
  );
};
