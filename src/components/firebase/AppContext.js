import { createContext, useEffect, useState,useRef } from "react";
import {auth,database} from './FirebaseConfig';
import toast from 'react-hot-toast';
import { GoogleAuthProvider,signInWithPopup,signInWithEmailAndPassword,signOut,createUserWithEmailAndPassword,onAuthStateChanged} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {ref,set,push,update} from 'firebase/database';

export const AppContext=createContext();


function AuthProvider({children}){
 
    const navigate=useNavigate();
    const[loginState,setloginState]=useState(false);
    const[user,setUser]=useState(null);

    const[openDrawer,setOpenDrawer]=useState(false);
    const[authData,setAuthData]=useState(null);
    const[openContact,setOpenContact]=useState(false);

    useEffect(() =>{
      const unlisten =onAuthStateChanged(auth,async (authUser) =>{
           authUser
             ? setAuthData(authUser)
             : setAuthData(null);
         },
      );
      return () => {
          unlisten();
      }
   }, []);
 
    //Login Data
    const initial={
      email:"",
      password:"",
    }
    const [logInData,setLogInData]=useState(initial);


    //signUp data
    const initialUser={
      firstName:"",
      lastName:"",
      email:"",
      password:"",
      confirmPassword:"",
    }
    const[signUpData,setSignUpData]=useState(initialUser);

    //Login
    const logIn = (email, password) => {
      signInWithEmailAndPassword(auth, email, password)
      .then(authUser => {
        setloginState(true);
        setLogInData(initial);
        toast.success("Logged In");
        navigate("/dashboard");
      })
      .catch(error => {

          if(error.code==='auth/invalid-credential'){
            toast.error("Invalid Email or Password!");
          }
          else{
            toast.error(error.message);
          }
          
      });
    }


    //SignUp 
    const signUp = async (email, password) => {
      try{
      const authUser = await createUserWithEmailAndPassword(auth, email, password);
      if (authUser && authUser.user) {
        const userRef = ref(database, `Users/${authUser.user.uid}`);
        await set(userRef, {
          Email: signUpData.email,
          Name: signUpData.firstName + ' ' + signUpData.lastName,
          activities:'Not set',
        });
        setloginState(true);
        setSignUpData(initialUser);
        toast.success("Account Created Successfully");
        navigate("/dashboard");
      } 
      else {
        throw new Error('User creation failed.');
        }
      }
      catch(error){
        if(error.code === 'auth/email-already-in-use'){
          toast.error("Email-already-in-use");
        } 
        else {
          toast.error(error.message);
        }
        
      };
    }


    //LogOut
    const logOut = () => {
       signOut(auth)
       .then(() => {
        setloginState(false);
        setOpenDrawer(false);
        toast.success("Successfully Logged Out!!");
       })
       .catch(e => {
          toast.error(e.message);
       });
       
    }

    


    //GoogleSign
    const googleSignIn = async () => {
      try{
      const googleAuthProvider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, googleAuthProvider);
      const user = result.user;

      const userRef = ref(database, `Users/${user.uid}`);
      await set(userRef, {
        Email: user.email,
        Name: user.displayName,
        PhotoURL: user.photoURL
      });
      
      setloginState(true);
      toast.success("Google Signed In")
      navigate("/dashboard");  
      
    }
    catch(e) {
        toast.error(e.message);
      };
    }

    //Database

    const addActivity = (uid, activity) => {
      const userRef = ref(database,`Users/${uid}/activities`);
      push(userRef,activity);
    };

    const updateActivity = (uid, activity, activityKey) => {
      const userRef = ref(database,`Users/${uid}/activities/${activityKey}`);
      update(userRef,activity);
   }


   //same page navigation
   const sectionRef=useRef(null);
   const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
   };

    const value={
        loginState,
        setloginState,
        user,
        setUser,
        logIn,
        signUp,
        logOut,
        googleSignIn,
        signUpData,
        setSignUpData,
        logInData,
        setLogInData,
        openDrawer,
        setOpenDrawer,
        authData,
        setAuthData,
        addActivity,
        updateActivity,
        openContact,
        setOpenContact,
        sectionRef,
        scrollToSection,
    };

    return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
    )
}

export default AuthProvider