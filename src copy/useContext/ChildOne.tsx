import React from 'react'
import { userContext } from './Parent'
export default function ChildOne() {
  return (
    <div>
        <userContext.Consumer>
            {
                i=><h1>
                    {i}
                </h1>
            }
        </userContext.Consumer>
    </div>
  )
}
