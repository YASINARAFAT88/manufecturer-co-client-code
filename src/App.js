import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import MyProfile from './Pages/MyProfile/MyProfile';

function App() {
  return (
    <div>
    <Navbar></Navbar>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
