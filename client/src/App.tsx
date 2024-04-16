import React, { useState } from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import About from "./components/About";
import Main from "./components/Main";

const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/about" element={<About  isAuthenticated={isAuthenticated}/>}/>
          <Route path="/main" element={<Main isAuthenticated={isAuthenticated} />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
