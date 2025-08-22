import "./App.css";
import DetailsPages from "./pages/DetailsPages";
import HomePages from "./pages/HomePages";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to={"/home"} replace />} />
        <Route path="/home" element={<HomePages />} />
        <Route path="/details" element={<DetailsPages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
