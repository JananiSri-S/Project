import { useEffect, useRef, useState } from "react"

export default function Ref(){
    const [num,setNum]=useState(0)
    const refCount=useRef(0)

    useEffect(()=>{
        refCount.current+=num
    },[num])
    return(
        <>
            <h2>
                Useref   {refCount.current}
            </h2>

            <button onClick={()=>{
                setNum(num+1)
            }}>
                Click
            </button>
        </>
    )
}