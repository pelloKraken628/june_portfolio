import React, { useLayoutEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../layouts/Header";
import Hi from "../layouts/Hi";

const RoutesWrapper = () => {
  const [firstRender, setFirstRender] = useState(true);
  useLayoutEffect(() => {
    setTimeout(() => {
      setFirstRender(false);
    }, 5000);
  }, []);
  return firstRender ? (
    <Hi visible={firstRender} />
  ) : (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<>NOT FOUND</>} />
      </Routes>
    </>
  );
};

export default RoutesWrapper;
