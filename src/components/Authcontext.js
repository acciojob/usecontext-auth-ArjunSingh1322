
import React,{createContext,useState} from "react";


export  let datacontext = createContext()
const Authcontext=(props)=>{

    let [click,setclick]= useState(false)

    
let Authfun=()=>{
    setclick((prev => !prev))
}
    return(
<datacontext.Provider value={{Authfun,click}}>
   { props.children}
</datacontext.Provider>

    )
}
export default Authcontext



// (prev => !prev)