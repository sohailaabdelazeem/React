import { createContext, useState } from "react";

export let CounterContext=createContext()
export default function CounterContextProvider({children}) {
    const [count,setCounter]=useState(0)
    
    return <CounterContext.Provider value={{count,setCounter}}>
            {
                children
            }
    </CounterContext.Provider>
}