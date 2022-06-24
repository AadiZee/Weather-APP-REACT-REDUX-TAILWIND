import React, { useState } from "react";
import { CurrentForecast, WeeklyForecast } from "../../components/Forecast/";
import Map from "../../components/Map/Map";
import Converter from "../../components/Converter/Converter";
import { useAppSelector } from "../../app/hooks";
import { toast, ToastContainer } from "react-toastify";

const Home = () => {
  const fetching = useAppSelector((state) => state?.weather?.isFetching);
  const fetched = useAppSelector((state) => state?.weather?.fetched);
  const error = useAppSelector((state) => state?.weather?.error);
  const currentWeatherData = useAppSelector(
    (state) => state?.weather?.currentWeatherData
  );
  const oneApiData = useAppSelector(
    (state) => state?.weather?.oneApiWeatherData
  );

  if (error) {
    toast.error("ERROR FETCHING DATA FOR ENTERED INPUT");
  }

  return (
    <>
      <ToastContainer />
      {fetching ? (
        <div className="h-96 m-auto" data-aos="flip-right">
          <lottie-player
            src="https://assets7.lottiefiles.com/packages/lf20_i7ixqfgx.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
      ) : fetched ? (
        <div className="min-w-screen">
          <div className="grid md:grid-cols-1 grid-cols-2 items-center mx-5 bg-themeGrey bg-opacity-25">
            <div className="h-auto">
              {currentWeatherData.length > 0 ? <CurrentForecast /> : null}
              {oneApiData.length > 0 ? <WeeklyForecast /> : null}
            </div>

            <div className="bg-transparent md:mx-4 md:-mt-10 h-full mt-0 mx-4">
              <Map />
              <Converter />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Home;
