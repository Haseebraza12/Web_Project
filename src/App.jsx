import React from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <SearchBar />
    </div>
  );
};

export default App;
