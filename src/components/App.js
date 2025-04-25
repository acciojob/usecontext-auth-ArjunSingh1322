
import React from "react";
import './../styles/App.css';
import Authcontext from "./Authcontext";
import Auth from "./Auth";
const App = () => {
  return (
    <div>
       <h1>Click on the checkbox to get the authenticated</h1>
       <Authcontext>
        <Auth />
       </Authcontext>
       
    </div>
  )
}

export default App
