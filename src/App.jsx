import './App.css'
import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import {AuthContext} from './context/AuthProvider'
function App() {
  const[user,setUser]=useState(null);  
  const authData=useContext(AuthContext);
  console.log(authData && authData.employees)
  const handleLogin=(email,password)=>{
    if(email=='admin@example.com' && password=="123") setUser('admin')
      else if(authData) setUser('employee')
    else alert("Invalid Credentials")
  }

  return (
      <>
        {!user ? <Login handleLogin={handleLogin}/> : ""}
        {user=='employee' ?  <EmployeeDashboard/> : <AdminDashboard/>}
      </>
  )
}

export default App
