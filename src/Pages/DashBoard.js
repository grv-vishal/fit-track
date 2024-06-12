import React,{useContext} from 'react'
import Footer from '../components/Footer';
import Calendar from '../components/Workout/Calendar';
import { AppContext } from '../components/firebase/AppContext';

const DashBoard = () => {
    const{authData}=useContext(AppContext);

  return (
    <div>
        {   authData
            ? <Calendar authData={authData}/>
            : <p>Not Authorised</p>
        }
        <Footer/>
      
    </div>
  )
}

export default DashBoard
