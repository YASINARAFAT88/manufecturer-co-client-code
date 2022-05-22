import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import MyProfile from './Pages/MyProfile/MyProfile';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div>
    <Navbar></Navbar>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="myprofile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
