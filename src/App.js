import React, { Component } from 'react';
import TodoItems from './components/todoItems/TodoItems'
import AddItem from './components/AddItem/AddItem'

class App extends Component {
  state ={
    items : [
      {id:1,name:'Khalid',age:22},
      {id:2,name:'mohammed',age:52},
      {id:3,name:'saeed',age:54}
    ]
  }

  // DELETE FROM LIST 

  deleteItem = (id) => {
    let items = this.state.items; // save All Items in this state
    let i = items.findIndex(item => item.id === id) // check if item.id equal id for what you clicked or not
    items.splice(i,1) // delete the item you clicked on it
    this.setState({items}) // update the state
  }


  // ADD ITEMS TO LIST
  addItem = (item) =>{
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({items})
  }


  render() {
    return (
      <div className="App container">
       <h1 className="text-center">Todo List</h1>
       <TodoItems items={this.state.items} deleteItem={this.deleteItem}/>
       <AddItem addItem={this.addItem}/>
      </div>
    );
  }
}

export default App;
