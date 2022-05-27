import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import RealEstate from './pages/RealEstate'

const AppRouter = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RealEstate />} />
      </Routes>
    </BrowserRouter >

  );
};

export default AppRouter;
