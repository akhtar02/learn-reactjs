import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(){
    super()
    this.state = {
     // todos: ["akhtar", "hussain", "umair"],
    todos: [{title: "akhtar", edit: false}, {title: "hussain" , edit: false}],
      // todos: [],
      value: ''
    }
  }

    add_todo = () => {
      let obj = {title: this.state.value}
      this.setState({
        todos: [...this.state.todos, obj ],
        // todos: [...this.state.todos, this.state.value ],
        value: ''
      })
     
      //Second Method
      // this.state.todos.push(this.state.value)
      // this.setState({
      //   todos: this.state.todos
    //})
    }

    delete_todo =(index) => {
      this.state.todos.splice(index, 1)
      this.setState({
        todos:this.state.todos
      })
    }
  

    edit_todo=(index) =>{

      // var updated_value = prompt("Enter Value");
      // this.state.todos[index] = updated_value
      // this.setState({
      //   todos: this.state.todos
      // })
      // console.log(index)


      this.state.todos[index].edit= true;
      this.setState({
        todos: this.state.todos
      })

    }


    handleChange = (e , index) => {
      this.state.todos[index].title = e.target.value;
      this.setState({
        todos: this.state.todos 
      })

    }

    update = (index) => {

      this.state.todos[index].edit= false;
      this.setState({
        todos: this.state.todos
      })
 
    }
  render(){
    let {todos, value} = this.state; 
    return(
      <div>
        <input value = {value} onChange = {(e) => this.setState({value: e.target.value})} type="text" placeholder = "Enter value" />
        <button onClick = {this.add_todo}>Add Item</button>
        <ul>
          {todos.map((v,i)=>{
            return <li key ={i}> 
              
              {v.edit ? <input value = {v.title} type = "text"  onChange = { (e) => this.handleChange(e. i)}/> : v.title}
              {v.edit ? <button onClick ={() => this.update(i)}>Update</button>
              : <button onClick = {() => this.edit_todo(i , v.title)}>Edit</button>}
            <button onClick = {() => this.delete_todo(i , v.title)}>Delete</button>
            </li>
          })}
        </ul>
      </div>
    )
  }
}

export default App;
//agr object bnae gy to apn ko V k sath title b likhe gy 