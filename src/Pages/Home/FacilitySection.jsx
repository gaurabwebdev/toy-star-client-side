import React from "react";

const FacilitySection = () => {
  return (
    <div className="mx-10 my-5 grid grid-cols-1 md:grid-cols-3 gap-3">
      <div className="flex flex-col justify-center items-center gap-5 p-3  border-2 border-gray-200 rounded h-48 hover:bg-red-300 hover:text-white duration-300 ease-in-out cursor-pointer">
        <p className="text-3xl"> Live Chat </p>
        <img
          className="w-20 h-20"
          src="https://i.ibb.co/cvjWtkT/support.png"
          alt="support"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-5 p-3  border-2 border-gray-200 rounded h-48 hover:bg-red-300 hover:text-white duration-300 ease-in-out cursor-pointer">
        <p className="text-3xl"> 21 Days Refund Policy </p>
        <img
          className="w-20 h-20"
          src="https://i.ibb.co/DRn52Wy/refund.png"
          alt="support"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-5 p-3  border-2 border-gray-200 rounded h-48 hover:bg-red-300 hover:text-white duration-300 ease-in-out cursor-pointer">
        <p className="text-3xl"> Effective Service Warranty </p>
        <img
          className="w-20 h-20"
          src="https://i.ibb.co/dDWVBMf/insurance.png"
          alt="support"
        />
      </div>
    </div>
  );
};

export default FacilitySection;
