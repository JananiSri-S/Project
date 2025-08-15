import React from 'react'
import useCount from './useCount'

export default function Custom() {
    const [a,b]=useCount(1)
  return (
    <div>
        <h4>
            {a}
        </h4>
        <button onClick={()=>b()}>
            multiply
        </button>
    </div>
  )
}
