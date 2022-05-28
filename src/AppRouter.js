import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Map from "./pages/Map";
import RealEstate from './pages/RealEstate'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/real-estate" element={<RealEstate />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </BrowserRouter >
  );
};

export default AppRouter;
