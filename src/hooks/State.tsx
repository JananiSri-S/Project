// import { useEffect, useLayoutEffect, useState } from "react"

// export default function State(){
//     // let a=90
//     // console.log(a)
//     // a=2
//     // console.log(a+4)

//     const [num,setnum]=useState(0)

//     // useEffect(
//     //     ()=>{
//     //         document.title="Page rendered count:"+num;
//     //         fetch('https://jsonplaceholder.typicode.com/todos/1')
//     //   .then(response => response.json())
//     //   .then(json => console.log(json))
//     //     },[num]
//     // )

//     useLayoutEffect(
//         ()=>{
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))
//         },[num]
//     )
//     return(
//         <>
//             <h1>
//                 {num}
//             </h1>

//             <button onClick={()=>{
//                 setnum(num+1)
//             }}>
//                 CLick to add
//             </button>

//             <button onClick={()=>{
//                 setnum(num-2)
//             }}>
//                 Click to reduce
//             </button>
//             <button onClick={()=>{
//                 setnum(0)
//             }}>
//                 Reset
//             </button>
//         </>
//     )
// }
