import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import MyProfile from './Pages/MyProfile/MyProfile';
import Login from './Pages/Login/Login';
import Footer from './Pages/Home/Footer';
import { createContext, useEffect, useState } from 'react';
import Purches from './Pages/WholeSellItems/Purches';
import NotFound from './Pages/Shared/NotFound/NotFound';
import DashBoard from './Pages/WholeSellItems/DashBoard';

export const HooksContext = createContext('data')

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/items')
      .then(res => res.json())
      .then(data => setItems(data))
  }, [])
  return (
    <div>
    <Navbar></Navbar>
    <HooksContext.Provider value={items}>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/purches' element={<Purches />} />
        <Route path="myprofile" element={<MyProfile />} />
        <Route path="/dashboard/:dashboardId" element={<DashBoard />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
    </HooksContext.Provider>
    <Footer></Footer>
    </div>
  );
}

export default App;
