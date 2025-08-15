import React from "react"
import Child from "./Child"
import ChildOne from "./ChildOne"

export const userContext=React.createContext("")
export default function Parent(){
    const name="Erode"
    return(
        <>
            <userContext.Provider value={name}>
                <Child />
                <ChildOne/>
            </userContext.Provider>
        </>
    )
}