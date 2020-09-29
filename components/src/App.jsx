import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BasicTextFields from './components/Textfield';
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

// class Header extends React.Component{
//   render(){
//     return(
//       <div className="header">
// <h2 style = {{color:'white' , textAlign:'center'}}>Header</h2>
//       </div>
      
//     )
//   }
// }

// class Footer extends React.Component{
//   render(){
//     return(
//       <div className="footer">
//   <h2>Footer</h2>
//       </div>
      
//     )
//   }
// }

class App extends React.Component{
  render(){
    return(
     <div>
       <Header/>
      <h1>Main Component</h1>
      <button type="button" className="btn btn-primary">Primary</button>
      <br/>
      <br/>
      <BasicTextFields/>
      <Footer />
     </div> 
    )
  }
}


export default App;
