import React from "react";

const Map = () => {
  return (
    <>
      <div className="grid md:grid-cols-1 grid-cols-3 gap-2 text-themeWhite mb-2">
        <div className="text-left cursor-pointer bg-transparent border-4 border-blue-900 shadow-sm shadow-gray-700 px-4 lg:px-2 md:text-center py-6 hover:border-0 hover:bg-blue-500 hover:scale-105 active:scale-100">
          <button className="text-md lg:text-sm md:text-lg font-bold">
            Clouds
          </button>
        </div>

        <div className="text-left cursor-pointer bg-transparent border-4  border-green-900 shadow-sm shadow-gray-700 px-4 lg:px-2 md:text-center py-6 hover:border-0 hover:bg-green-600 hover:scale-105 active:scale-100">
          <button className="text-md lg:text-sm md:text-lg font-bold">
            Precipitation
          </button>
        </div>

        <div className="text-left cursor-pointer bg-transparent border-4 border-violet-900 shadow-sm shadow-gray-700 px-4 lg:px-2 md:text-center py-6 hover:border-0 hover:bg-violet-700 hover:scale-105 active:scale-100">
          <button className="text-md lg:text-sm md:text-lg font-bold">
            Temp.
          </button>
        </div>
      </div>

      <div className="bg-themeGrey bg-opacity-50 mt-2 shadow-gray-700 shadow-md rounded-lg">
        <p className="text-xl text-center text-themeWhite font-semibold md:px-5 px-14 py-10">
          MAP HERE
        </p>
        <div className="h-96" data-aos="flip-right">
          <lottie-player
            src="https://assets8.lottiefiles.com/private_files/lf30_noclpt6t.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
    </>
  );
};

export default Map;
