import { useCallback, useMemo, useState } from "react"

export default function Memo() {
    const [num,setNum]=useState(0)
    const memo=useMemo(()=>{
        return num*4567890987654
    },[num])

    const call=useCallback((a,b)=>{
        return num*a*b
    },[num])
  return (
    <div>
        <h1>
            {num}
            <br />
            {memo}
            <br />
            {call(10,2)},
        </h1>
        <button onClick={()=>setNum(num+1)}>
            click
        </button>
    </div>
  )
}
