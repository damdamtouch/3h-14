import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Prestations from "./pages/Prestations";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/a-propos" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/prestations" element={<Prestations />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
