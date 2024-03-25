import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterAndLogin from "./RegisterAndLogin";
import HomeScreen from "./Home";
import ForgotPassword from "./ForgotPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterAndLogin />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/reset" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
