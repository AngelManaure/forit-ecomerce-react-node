import { BrowserRouter, Routes, Route } from "react-router-dom";

import { NavProvider } from "./context/NavContext";

import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import RegisterPage from "./pages/AuthPages/RegisterPage";
import LoginPage from "./pages/AuthPages/LoginPage";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <NavProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </NavProvider>
  );
}

export default App;
