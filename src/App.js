import Navbar from "./components/Navbar";
import React from "react";
import WebSearch from "./components/WebSearch";
import VideoPlayer from "./components/VideoPlayer";
import Multiplex from "./components/Multiplex";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/websearch" element={<WebSearch />} />
        <Route path="/multiplex" element={<Multiplex />} />
        <Route path="/movie/*" element={<VideoPlayer />} />
      </Routes>
    </>
  );
}

export default App;
