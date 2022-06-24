import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useAppSelector } from "../../../app/hooks";
import { DateTime } from "luxon";

const WeeklyForecast = () => {
  const [width, setWidth] = useState<number>(0);
  const carousel = useRef<any>();

  const currentWeatherData = useAppSelector(
    (state) => state.weather.currentWeatherData
  );
  const oneApiData = useAppSelector((state) => state.weather.oneApiWeatherData);

  let location: string = `${currentWeatherData[0]?.name}, ${currentWeatherData[0]?.sys?.country}`;
  let timezone = oneApiData[0]?.timezone;
  let dailyData = oneApiData[0].daily;

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="h-1/2">
      <h1 className="text-2xl md:text-xl text-white p-3 m-5">
        Weekly Forecast for: &nbsp;
        <span className="font-bold text-3xl">{location}</span>
      </h1>
      <motion.div
        ref={carousel}
        className="cursor-grab overflow-hidden active:cursor-grabbing text-white"
      >
        <motion.div
          drag="x"
          className="flex"
          dragConstraints={{ right: 0, left: -width }}
        >
          {dailyData.map((day: any, index: number) => {
            let today = DateTime.fromSeconds(day.dt)
              .setZone(timezone)
              .toFormat("ccc");

            let weatherIcon = day?.weather[0]?.icon;
            return (
              <motion.div
                className="py-30 px-20 mb-10 border border-2 border-blue-300"
                style={{ minHeight: "40rem", minWidth: "30rem" }}
              >
                <div className="flex flex-col w-full h-full justify-center ">
                  <h1 className="text-center text-3xl text-blue-300 mt-5">
                    {today}
                  </h1>
                  <img
                    src={`http://openweathermap.org/img/w/${weatherIcon}.png`}
                    alt="Daily Data Icon"
                    className="flex w-32 h-auto m-auto "
                  />
                  <div className="mb-5 text-center text-lg">
                    <h3>
                      Condition: &nbsp;
                      <span className="text-blue-600">
                        {day?.weather[0]?.description?.toUpperCase()}
                      </span>
                    </h3>
                    <p>
                      Temp. During Mor:&nbsp;
                      <span className="text-amber-500">{day?.temp.morn} C</span>
                    </p>
                    <p>
                      Temp. During Day:&nbsp;
                      <span className="text-yellow-300">{day?.temp.day} C</span>
                    </p>
                    <p>
                      Temp. During Eve:&nbsp;
                      <span className="text-orange-500">{day?.temp.eve} C</span>
                    </p>
                    <p>
                      Temp. During Night:&nbsp;
                      <span className="text-gray-700">{day?.temp.night} C</span>
                    </p>
                    <p>
                      Max temp:&nbsp;
                      <span className="text-red-700">{day?.temp.max} C</span>
                    </p>
                    <p>
                      Min temp:&nbsp;
                      <span className="text-blue-300">{day?.temp.min} C</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WeeklyForecast;
