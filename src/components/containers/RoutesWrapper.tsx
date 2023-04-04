import React, { useEffect, useLayoutEffect, useState } from "react";
import { Route, Routes, redirect } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../layouts/Header";
import Hi from "../layouts/Hi";
import NotFound from "./NotFound";

const RoutesWrapper = () => {
  const [firstRender, setFirstRender] = useState(true);
  useLayoutEffect(() => {
    setTimeout(() => {
      setFirstRender(false);
    }, 2500);
  }, []);
  useEffect(() => {
    if (!firstRender) return;
  }, []);
  return (
    <>
      <Hi visible={firstRender} />
      {!firstRender && (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </>
      )}
    </>
  );
};

export default RoutesWrapper;
