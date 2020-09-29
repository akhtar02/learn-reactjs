import React from 'react';

import './App.css';

// function App() {
//   return (
//     <h1>Hello world</h1>
//   );
// }


// class App extends React.Component{
//   render(){
//     return(
//       <h1>Hello World</h1>
//     )
//   }
// }


// class App extends React.Component{
//   render(){
//     let todos = [{text: 'akhtar'}, {text: 'Hussain'}];
//     return(
//      <div>
//        <ul>
//          {todos.map((item,index) =>{
//            return <li key ={index} >{item.text}</li>
//          })}
//        </ul>
//      </div> 
//     )
//   }
// }


// class App extends React.Component{
//   render(){
//     let todos = [{text: 'akhtar'}, {text: 'Hussain'}];
//     return(
//      <div>
//        <ul>
//          <li>{todos[0].text}</li>
//          <li>{todos[1].text}</li>
//        </ul>
//      </div> 
//     )
//   }
// }

class Header extends React.Component{
  render(){
    return(
      <h3>Header</h3>
    )
  }
}

class Footer extends React.Component{
  render(){
    return(
      <h3>Footer</h3>
    )
  }
}

class App extends React.Component{
  render(){
    return(
     <div>
       <Header/>
      <h1>Main Component</h1>
      <Footer />
     </div> 
    )
  }
}


export default App;
