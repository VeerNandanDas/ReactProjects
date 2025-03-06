/* eslint-disable no-unused-vars */
import { useDispatch } from "react-redux";
import "./App.css";
import { useEffect, useState } from 'react'
import AuthService from "./appwrite/auth";
import authService from "./appwrite/auth";
import { login , logOut } from "./store/authSlice";



function App() {
  
  const [loading, setLoading ]= useState(true)
  const dispatch = useDispatch();

    useEffect(()=>{
      authService.getCurrentUser()
      .then((userData)=>{
        if(userData){
          dispatch(login({userData}));
        }
        else{
          dispatch(logOut());
        }
      })
      .finally(()=> setLoading(false)); 
    },[])



  return (
    <>
      <h1>Hi there ! </h1>
    </>
  );
}

export default App;
