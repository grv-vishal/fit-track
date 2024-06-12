import React,{useContext} from 'react'
import { Navigate } from 'react-router-dom';
import { AppContext } from './firebase/AppContext';


const PrivateRoute = ({children}) => {
    const isLoggedIn=useContext(AppContext).loginState;
    if(isLoggedIn)
        return children;
    else
     return <Navigate to="/"/>
     
}

export default PrivateRoute
