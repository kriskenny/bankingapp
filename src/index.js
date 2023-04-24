import { createRequire } from 'module';
import React from "react";
import ReactBootstrap from "react-bootstrap";
import axios from "axios";
import Home from './Components/home';
import NavBar from './Components/navbar';
import CreateAccount from './Components/createaccount';
import Deposit from './Components/deposit';
import Withdraw from './Components/withdraw';
import AllData from './Components/alldata';
import { HashRouter, Route, Routes} from 'react-router-dom';
import UserContext from './Components/usercontext.js';
const require = createRequire();

function Spa() {

  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]}}>
        <div className="container" style={{padding: "20px"}}>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
         
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          
          <Route path="/alldata/" component={AllData} />
        </div>
      </UserContext.Provider>      
    </HashRouter>
  );
}

export default Spa
