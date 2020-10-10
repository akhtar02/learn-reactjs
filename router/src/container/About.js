import { render } from '@testing-library/react'
import React from 'react'
import { Link } from "react-router-dom";


class About extends React.Component {

    gotohome = () => {
        this.props.history.push('/')
    }
    render(){
     return(
         <diV>
            <h1>hi Akhtar</h1>
            <button onClick = {this.gotohome}>Go to Home</button>
         </diV>
         
         )
    }
}


 export default About;