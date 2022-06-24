import React, { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";
import "./App.css";
import Navbar from "./components/Nav/Navbar";
import SearchBar from "./components/Search/SearchBar";
import Home from "./pages/Home/HomePage";

const App = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div className="d-flex min-h-screen w-scree bg-black ">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <SearchBar />
          <Home />
        </>
      )}
    </div>
  );
};

export default App;
