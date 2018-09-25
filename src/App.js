import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import Todos from './Components/Todos';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      proj: [],
      todos: []
    }
  }
  getProjects(){
    this.setState({
      proj:[
          {
            id: uuid.v4(),
          firstName: 'Hazim',
          lastName: 'Rekab'
        },
          {
            id: uuid.v4(),
          firstName: 'Nabil',
          lastName: 'Khayat'
        },
          {
            id: uuid.v4(),
          firstName: 'Rafa',
          lastName: 'Nadal'
          }
      ],

      proj2:['khayat', 'Rekab', 'Achir','aziz']
    })
  }

  getTodos(){
    $.ajax({
      url:'https://jsonplaceholder.typicode.com/todos',
      dataType:'json',
      cash:false,
      success: function(data){
        this.setState({todos:data}, function(){
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  }

  componentWillMount(){
    this.getProjects();
    this.getTodos();
  }

  componentDidMount(){
    this.getTodos();
  }

  handleAddProject(project){
    let totalProjects= this.state.proj;
    totalProjects.push(project);
    this.setState(totalProjects:totalProjects);
  }

  handelDelete(id){
    let totalProjects= this.state.proj;
    let index= totalProjects.findIndex(x => x.id === id);
    totalProjects.splice(index, 1);
    this.setState(totalProjects:totalProjects);
  }

  render() {
    return (
      <div className="App">
      <Projects onDelete={this.handelDelete.bind(this)} projects={this.state.proj} test=" List of Names" />
      <br/>

      <AddProject  addProject={this.handleAddProject.bind(this)} />
      <br/>

      <Todos todos={this.state.todos}/>

      </div>
    );
  }
}

export default App;
