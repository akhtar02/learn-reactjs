import React, {useState} from 'react'
import {Parent} from './Parent'
import CounterContext from './CouterContext'

import './App.css';
import counterContext from './CouterContext';

function App() {

  //let countstate = useState (25)
let countState = useState(1)
 // let [count, SetCount] = useState(25)
  return (
    <counterContext.Provider value = {countState}>
    <div className="App">
      < Parent />
    </div>
    </counterContext.Provider>
  );
}

export default App;
