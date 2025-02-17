import { createContext, useEffect, useState } from "react";


export let TonkenContext=createContext();
export default function TonkenContextProvider({children}){
    const [token,setToken]=useState()
    function CheckedLogin(){
        if(localStorage.getItem("UserToken")){
            setToken(localStorage.getItem('UserToken'))
        }
    }
    useEffect(()=>{
        CheckedLogin()
    },[])
    return <TonkenContext.Provider value={{token,setToken}}>
        {children}
    </TonkenContext.Provider>

}