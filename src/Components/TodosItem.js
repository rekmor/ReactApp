import React, { Component } from 'react';



class TodostItem extends Component {

  render() {

    return (
      <li className="Todos">
        {this.props.todo.id} {this.props.todo.title}
      </li>
    );
  }
}

export default TodostItem;
