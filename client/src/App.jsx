import { BrowserRouter, Routes, Route } from "react-router-dom";

import { NavProvider } from "./context/NavContext";

import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";

import "./App.css";

function App() {
  return (
    <NavProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </NavProvider>
  );
}

export default App;
