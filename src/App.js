import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from './components/Details';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          {/* Use the `element` prop instead of `children` */}
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
