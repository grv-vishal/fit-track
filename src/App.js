import './App.css';
import NavBar from './components/NavBar';
import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import PrivateRoute from './components/PrivateRoute';
import DashBoard from './Pages/DashBoard';
import Drawer from './components/Drawer';
import { useContext } from 'react';
import { AppContext } from './components/firebase/AppContext';


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
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
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
