import React from 'react';
import './App.css';


class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      userInput: '',
      todoList: [],
      }
  }

  changeUserInput = (input) => {
    this.setState( { userInput: input } );      
  }

  addToList = (input) => {
    let list = this.state.todoList;
    list.push(input);
    this.setState( { todoList: list,  userInput: '' } );
  }



  
  deleteItem = (input) => {
    alert("Once added cannot be updated! Please refresh the page for a new list!");
  }



  render() {
    return (
    	<div>
        <nav><h2>TO-DO-LIST</h2></nav>
        <br />
        <input 
          type="text"
          onChange = {(e) => this.changeUserInput(e.target.value)} 
          value = {this.state.userInput}
        />
        <button
        onClick = { () => this.addToList(this.state.userInput) }
        >
        Add
        </button>
        <br />
        <ol>
          { this.state.todoList.map( (item) => 
            <li>
              <span onClick = { () => this.deleteItem(item) } >{item}</span>
            </li>
          ) }
        </ol>
        <br />
      </div>
    );
  }
}

export default App;
