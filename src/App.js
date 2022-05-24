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
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyOrders from './Pages/My-Orders/MyOrders';
import Statment from './Pages/My-Orders/Statment';
import MyReview from './Pages/My-Orders/MyReview';

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
        <Route path="/signup" element={<SignUp />} />
        <Route path='/purches' element={<Purches />} />
        <Route path="myprofile" element={<MyProfile />} />
        <Route path="/dashboard/:dashboardId" element={<RequireAuth>
          <DashBoard />
        </RequireAuth>
        } />
        <Route path="/dashboard" element={<RequireAuth>
          <DashBoard />
        </RequireAuth>
        } />
        <Route path="/dashboards" element={<RequireAuth>
          <MyOrders />
        </RequireAuth>
        }> 
        <Route index element={<Statment></Statment>}></Route>
        <Route path='review' element={<MyReview></MyReview>}></Route>
        </Route>
        <Route path="*" element={<NotFound />} />
    </Routes>
    <ToastContainer />
    </HooksContext.Provider>
    <Footer></Footer>
    </div>
  );
}

export default App;
