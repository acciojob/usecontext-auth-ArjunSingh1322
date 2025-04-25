

import React,{useContext} from "react";
import { datacontext } from "./Authcontext";


const Auth=()=>{

    let {Authfun,click} = useContext(datacontext)


    return(
<div>
   
    <p style={{ marginTop: '20px' }}>
        {click
          ? 'You are now authenticated,you can process'
          : ' you are not authenticated'}
      </p>
      <input type="checkbox" onClick={Authfun}/> I'm not a robot
</div>

    )
}

export default Auth