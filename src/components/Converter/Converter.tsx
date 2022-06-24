import React, { useState } from "react";
import { BsArrowLeftRight, BsArrowDownUp } from "react-icons/bs";

const Converter = () => {
  const [celsius, setCelsius] = useState<number>();
  const [fahrenheit, setFahrenheit] = useState<number>();

  const handleCelsiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = parseFloat(e.target.value);
    let temp = (parseFloat(e.target.value) * 9) / 5 + 32;

    if (isNaN(val)) {
      setCelsius(0);
      setFahrenheit(0);
    } else {
      temp = Math.round(temp * 1e2) / 1e2;
      setCelsius(val);
      setFahrenheit(temp);
    }
  };

  const handleFahrenheitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = parseFloat(e.target.value);
    let temp = ((parseFloat(e.target.value) - 32) * 5) / 9;

    if (isNaN(val)) {
      setCelsius(0);
      setFahrenheit(0);
    } else {
      temp = Math.round(temp * 1e2) / 1e2;
      setFahrenheit(val);
      setCelsius(temp);
    }
  };

  return (
    <div className="bg-themeGrey bg-opacity-50 mt-5 mb-12 shadow-gray-700 shadow-md rounded-lg">
      <h3 className="text-2xl text-center text-themeWhite font-semibold md:px-5 px-14 py-10">
        Calculation
      </h3>
      <form>
        <div className="flex flex-row lg:flex-col lg:h-auto justify-around text-center text-white">
          <div className="lg:flex lg:flex-col mb-5 lg:mx-auto">
            <label className="p-2 text-light text-2xl">Celsius</label>

            <input
              value={celsius}
              className="mx-2 w-1/2 bg-transparent border border-white lg:w-auto"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleCelsiusChange(e)
              }
            />
          </div>
          <div className="mx-auto text-3xl pb-3 text-blue-400 md:text-center lg:my-5">
            <BsArrowLeftRight className="lg:hidden md:hidden" />
            <BsArrowDownUp className="xl:hidden 2xl:hidden 3xl:hidden lg:inline-block md:inline-block" />
          </div>
          <div className="mb-5 lg:mx-auto">
            <label className="mr-1 lg:m-0 p-2 text-light text-2xl">
              Fahrenheit
            </label>
            <input
              value={fahrenheit}
              className="mx-2 w-1/2 bg-transparent border border-white lg:w-auto"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleFahrenheitChange(e)
              }
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Converter;
