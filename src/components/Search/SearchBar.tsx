import React, { useState } from "react";
import "./SearchBar.css";
import { BsSearch } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import {
  addWeatherData,
  getWeatherData,
  selectWeather,
} from "../../features/Weather/WeatherSlice";
import { useAppSelector, useAppDispatch } from "../../app/hooks";

const SearchBar = () => {
  const weather = useAppSelector(selectWeather);
  const dispatch = useAppDispatch();

  const [search, setSearch] = useState<string>("");
  const [searchDisable, setSearchDisable] = useState<boolean>(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      startSearch();
    }
  };

  const startSearch = async () => {
    if (parseInt(search)) {
      setSearchDisable(true);
      await dispatch(getWeatherData(search));
      setSearch("");
      setSearchDisable(false);
    } else {
      setSearchDisable(true);
      await dispatch(getWeatherData(search));
      setSearch("");
      setSearchDisable(false);
    }
  };
  return (
    <>
      <div className="w-screen text-white flex flex-row ">
        <div className="relative w-screen">
          <div className="flex flex-row w-screen items-center justify-center space-x-4">
            <input
              type="text"
              disabled={searchDisable}
              value={search}
              onChange={(e) => handleSearchChange(e)}
              onKeyDown={(e) => handleEnter(e)}
              placeholder="Search city/zip"
              className="text-md sm:text-sm font-light shadow-md shadow-gray-800 text-white focus:outline-none focus:shadow-lg focus:shadow-gray-800 capitalize placeholder:uppercase w-screen placeholder:text-white p-5 m-5 border rounded-full border-white bg-transparent px-10 sm:px-10 transition ease-in-out disabled:cursor-not-allowed"
            />
          </div>

          <div
            className="absolute right-2 top-2.5 sm:top-2.5 p-3 m-4 cursor-pointer hover:scale-110 active:scale-100 sm:right-0"
            onClick={() => startSearch()}
          >
            <BsSearch style={{ fontSize: "1.5rem" }} />
          </div>
          {/* <div
            className="absolute left-4 top-2 border border-white border-t-0 border-l-0 border-b-0 sm:top-1.75 p-4 mt-4 cursor-pointer rounded-none hover:scale-105 active:scale-100 transition ease-in-out sm:border sm:border-white sm:left-2 sm:border-t-0 sm:border-l-0 sm:border-b-0"
            data-tip="Fetch Location"
          >
            <GoLocation
              style={{ fontSize: "1.5rem" }}
              data-tooltip-target="tooltip-default"
            />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
