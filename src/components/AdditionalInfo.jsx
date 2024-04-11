import React from "react";
import copyPath from "../assets/copy-path.png";

export const AdditionalInfo = ({ precipitation, humidity, wind }) => {
  return (
    <div>
      {/* additional weather info */}
      <div className="border-y-2 h-[160px] p-4 mb-6">
        <h3 className="text-xl font-bold leading-[24px] text-[#003339] mb-4">
          Additional info
        </h3>

        <div className="flex justify-between items-center gap-4">
          <div>
            <h4 className="text-[#96969A] text-sm mb-2 font-medium">
              Temprature
            </h4>
            <p className="text-[#003339] text-[16px] leading-[18px] font-extrabold">
              {precipitation}
            </p>
          </div>
          <div>
            <h4 className="text-[#96969A] text-sm mb-2 font-medium">
              Humidity
            </h4>
            <p className="text-[#003339] text-[16px] leading-[18px] font-extrabold">
              {humidity}
            </p>
          </div>
          <div>
            <h4 className="text-[#96969A] text-sm mb-2 font-medium">Windy</h4>
            <p className="text-[#003339] text-[16px] leading-[18px] font-extrabold">
              {wind} km/h{" "}
            </p>
          </div>
        </div>
      </div>

      {/* last component */}
      <div className="h-[250px] w-full relative">
        <div className="flex justify-between items-center px-4">
          <h3 className="text-xl font-bold leading-[24px] text-[#003339] mb-4">
            Temprature
          </h3>

          <select name="Last Month" className="w-[140px] py-2 px-4 border">
            <option value="Last month">Last month</option>
          </select>
        </div>

        <div className="relative mt-4">
          <img src={copyPath} alt="path" className="w-full" />
        </div>
      </div>
    </div>
  );
};
