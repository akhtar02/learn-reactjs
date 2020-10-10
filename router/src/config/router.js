import React from 'react'
import {BrowserRouter as Router, Route,} from "react-router-dom";
import Home from '../container/Home'
import About from '../container/About'

class AppRouter extends React.Component{
    render(){
        return(
            <Router>
                <Route  exact path ='/' component = {Home} />
                <Route exact path = '/about' components = {About} />
            </Router>
        )
    }
}

export default AppRouter;