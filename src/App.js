import './App.css';
import NavBar from './components/NavBar';
import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import PrivateRoute from './components/PrivateRoute';
import DashBoard from './Pages/DashBoard';
import Drawer from './components/Drawer';
import { useContext } from 'react';
import { AppContext } from './components/firebase/AppContext';
import Workout from './Pages/Workout';
import Nutrition from './Pages/Nutrition';
import MentalHealth from './Pages/MentalHealth';


function App() {
  
  const {openDrawer}=useContext(AppContext);

  return (
    <div className=" relative w-[100vw] h-[100vh] overflow-x-hidden">
       
         <NavBar/>
      <div className={`${openDrawer===true ? "flex flex-row relative lg:flex-grow lg:ml-64" : ""}`}>
        {openDrawer &&
          <Drawer/>
        }
  
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/workout' element={<Workout/>}/>
        <Route path='/nutrition' element={<Nutrition/>}/>
        <Route path='/health' element={<MentalHealth/>}/>
        <Route path='/dashboard' element={
          <PrivateRoute>
            <DashBoard/>
          </PrivateRoute>
        }/>
      </Routes>

      </div>
      
    </div>
  );
}

export default App;
