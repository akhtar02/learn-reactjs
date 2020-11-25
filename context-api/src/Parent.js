import React from 'react'
import {Child} from './Child'
import Child2 from './Child2'

export const Parent = (props) => {
    return (
        <div>
            <Child />
            <Child2 />
        </div>
    )
}
