import React from "react";
import {Navigate, Outlet } from "react-router-dom";
import Cookies from "universal-cookie";
import { setAuthToken } from "./SetAuthToken";
const cookies = new Cookies();

// receives component and any other props represented by ...rest
export default function RotasProtegidas() {

  const token = cookies.get("TOKEN")
  if(token){
    setAuthToken(token)
  }


  return token ? <Outlet/> : <Navigate to="/login"/>    
}