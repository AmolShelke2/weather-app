import React from "react";

export const AdditionalInfo = () => {
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
              Precipitation
            </h4>
            <p className="text-[#003339] text-[16px] leading-[18px] font-extrabold">
              3%
            </p>
          </div>
          <div>
            <h4 className="text-[#96969A] text-sm mb-2 font-medium">
              Humidity
            </h4>
            <p className="text-[#003339] text-[16px] leading-[18px] font-extrabold">
              74%
            </p>
          </div>
          <div>
            <h4 className="text-[#96969A] text-sm mb-2 font-medium">Windy</h4>
            <p className="text-[#003339] text-[16px] leading-[18px] font-extrabold">
              18 km/h{" "}
            </p>
          </div>
        </div>
      </div>

      {/* last component */}
      <div className="px-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold leading-[24px] text-[#003339] mb-4">
            Temprature
          </h3>

          <select name="Last Month" className="w-[140px] py-2 px-4 border">
            <option value="Last month">Last month</option>
          </select>
        </div>
      </div>
    </div>
  );
};
