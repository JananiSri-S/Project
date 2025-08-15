import { useReducer } from "react"

export default function Reducer() {
    const [a,b]=useReducer((a,action)=>{
        if(action.type==="+"){
            return {count:a.count+1}
        }
        else if(action.type==="-"){
            return {count:a.count-1}
        }
    },{count:0})
    console.log(a.count)
  return (
    <div>
        <h3>
            {a.count}
        </h3>
        <button onClick={()=>b({type:"+"})}>
            click add
        </button>
        <button onClick={()=>b({type:"-"})}>
            click to less
        </button>
    </div>
  )
}
