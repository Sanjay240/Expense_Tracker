import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import { useGlobalContext } from './Context/globalContext';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import './Styles/app.css'
import Index from "./Pages/Index";

function App() {

  const [auth , setAuth] = useState(false);
  const {verifyUser } = useGlobalContext();

  useEffect(() => {
    verifyUser()
      .then((res) => {
       // console.log(res);
        if(res.status === 'Success'){
        //  console.log('logged in user verfied');
          setAuth(true);
        //  console.log(`the user verify is ${auth}`);
        }
        else {
          setAuth(false);
         // console.log(`the user verify is ${auth}`);
         
        }
      })
  })

  return (
    <div className="app">
    <Router>
    <Routes>
      <Route path="" element={<Index />} />
      <Route path= "/login" element={<Login />} />
      <Route path= "/register" element={ <Register />} />
      <Route path= "/home"  element = {<Home />}  />
    </Routes>
  </Router>
  </div>
  );
}

export default App;
