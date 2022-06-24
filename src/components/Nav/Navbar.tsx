import React from "react";
import { BsCloudSun } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="w-screen flex flex-row justify-center bg-themeGrey text-white shadow-md shadow-gray-800">
      <BsCloudSun
        style={{ color: "skyblue", fontSize: "2rem" }}
        className="cursor-pointer"
      />
      <h1 className="text-xl my-3 mx-1 cursor-pointer text-">Weather App</h1>
    </div>
  );
};

export default Navbar;
