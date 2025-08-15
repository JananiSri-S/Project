import { useState } from "react"

export default function useCount(initial) {
    const [a,b]=useState(initial)
    const increment=()=>{
        b(a+2)
    }
  return [a,increment]
}