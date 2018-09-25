import React, { Component } from 'react';
import TodosItem from './TodosItem';


class Todos extends Component {

  render() {
    let todosItems;
    if(this.props.todos){
      todosItems = this.props.todos.map(todo => {
        return (
          <TodosItem  key={todo.id} todo={todo}/>
        );


      });
    }

    return (
      <div className="Todos">

      <br/>
      {todosItems}
      </div>
    );
  }
}



export default Todos;
