import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { AiOutlineArrowRight, AiOutlineArrowDown } from "react-icons/ai";
import moment from "moment";
import { DateTime } from "luxon";

const CurrentForecast = () => {
  const [toggleConditions, setToggleConditions] = useState<boolean>(false);
  const currentWeatherData = useAppSelector(
    (state) => state.weather.currentWeatherData
  );
  const oneApiData = useAppSelector((state) => state.weather.oneApiWeatherData);

  let timezone = oneApiData[0]?.timezone;
  let location: string = `${currentWeatherData[0]?.name}, ${currentWeatherData[0]?.sys?.country}`;
  let currentWeather: string =
    currentWeatherData[0]?.weather[0]?.description.toUpperCase();

  let temperature: number = currentWeatherData[0]?.main?.temp;
  let temperatureMax: number = currentWeatherData[0]?.main?.temp_max;
  let temperatureLow: number = currentWeatherData[0]?.main?.temp_min;

  let windSpeed: number = currentWeatherData[0]?.wind?.speed;
  let humidity: number = currentWeatherData[0]?.main?.humidity;
  let pressure: number = currentWeatherData[0]?.main?.pressure;
  let sunrise: any = DateTime.fromSeconds(currentWeatherData[0]?.sys?.sunrise)
    .setZone(timezone)
    .toFormat("hh:mm:ss");
  let sunset: any = DateTime.fromSeconds(currentWeatherData[0]?.sys?.sunset)
    .setZone(timezone)
    .toFormat("hh:mm:ss");

  let weatherIcon: string = currentWeatherData[0].weather[0].icon;

  return (
    <div className="h-1/2">
      <h1 className="text-2xl md:text-xl text-white p-3 m-5">
        Todays Forecast for: &nbsp;
        <span className="font-bold text-3xl">{location}</span>
      </h1>
      <div className="flex flex-row md:flex-col-reverse justify-between px-10 text-white w-full ">
        <div className="grid-col-1">
          <h3 className="text-md flex flex-row justify-between">
            <span> Current Weather: &nbsp;</span>
            <b className="text-bold text-blue-600"> {currentWeather} </b>
          </h3>
          <h3 className="text-md flex flex-row justify-between">
            <span> Current Temperature: &nbsp;</span>
            <b className="text-bold text-orange-600"> {temperature} C </b>
          </h3>
          <h3 className="text-md flex flex-row justify-between">
            <span> Max Temperature: &nbsp;</span>
            <b className="text-bold text-red-600"> {temperatureMax} C </b>
          </h3>
          <h3 className="text-md flex flex-row justify-between">
            <span> Min Temperature: &nbsp;</span>
            <b className="text-bold text-blue-300"> {temperatureLow} C </b>
          </h3>
          {toggleConditions ? (
            <>
              <div className="flex flex-row text-sm hover:cursor-pointer mt-3">
                <AiOutlineArrowDown
                  className="mr-3"
                  style={{ fontSize: "1rem" }}
                  onClick={() => setToggleConditions(false)}
                />
                <span>Hide More Conditional Data</span>
              </div>

              <h3 className="text-md flex flex-row justify-between">
                <span> Wind Speed: &nbsp;</span>
                <b className="text-bold text-slate-500"> {windSpeed} </b>
              </h3>
              <h3 className="text-md flex flex-row justify-between">
                <span> Humidity: &nbsp;</span>
                <b className="text-md text-bold text-green-600">{humidity}</b>
              </h3>
              <h3 className="text-md flex flex-row justify-between">
                <span> Pressure: &nbsp;</span>
                <b className="text-bold text-rose-600"> {pressure} </b>
              </h3>

              <h3 className="text-md flex flex-row justify-between">
                <span> Sunrise: &nbsp;</span>
                <b className="text-bold text-amber-500"> {sunrise} </b>
              </h3>
              <h3 className="text-md flex flex-row justify-between">
                <span> Sunset: &nbsp;</span>
                <b className="text-bold text-orange-500"> {sunset} </b>
              </h3>
            </>
          ) : (
            <div className="flex flex-row text-sm hover:cursor-pointer mt-3">
              <AiOutlineArrowRight
                className="mr-3"
                style={{ fontSize: "1rem" }}
                onClick={() => setToggleConditions(true)}
              />
              <span>Show More Conditional Data</span>
            </div>
          )}
        </div>
        <div className="grid-col-1">
          <img
            src={`http://openweathermap.org/img/w/${weatherIcon}.png`}
            alt={currentWeather}
            className="flex w-32 h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default CurrentForecast;
