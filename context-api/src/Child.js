import React, {useContext } from 'react'
import counterContext from './CouterContext'

export const Child = () => {
    let counterValue = useContext(counterContext)

    return (
        <div>
            <h1>This is first Child using Counter Context</h1>
    <h2>This is counter value {counterValue [0]}</h2>
         <button onClick = {() => {counterValue[1] (++counterValue[0])}}> Increase</button>
        </div>
    )
}
