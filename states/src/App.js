import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';



class App extends React.Component{

  constructor(){
    super()
    this.state
  }
  render(){
    return(
<div>
      <Header />
      <h2 style = { {color: 'red', fontSize: '18px', backgroundColor: 'blue'}}>
        hello world
      </h2>
      <Footer />
    </div>
    )
  }
}

export default App;
