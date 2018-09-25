import React, { Component } from 'react';
import uuid from 'uuid';


class AddProject extends Component {
  constructor(){
    super();
    this.state={
      newProj:{}
    }
  }

  static defaultProps = {
    LastNames:['khayat', 'Rekab', 'Achir','aziz']
  }

  handleSubmit(e){
    if(this.refs.firstName.value === ''){
      alert("First Name is Required");
    }
    else{
      this.setState({newProj:{
        id: uuid.v4(),
        firstName: this.refs.firstName.value,
        lastName: this.refs.lastName.value
      }}, function(){
        this.props.addProject(this.state.newProj);
      });
    }
    e.preventDefault();
  }

  render() {


    let LNOptions = this.props.LastNames.map(lastName =>{
      return(
        <option key={lastName} value={lastName}>{lastName}</option>
      );
    });

    return (
      <div>
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
        <label> FirstName</label>
        <input type="text" ref="firstName"/>
        </div>
        <div>
        <label> LastName</label>
        <select ref="lastName">
        {LNOptions}
        </select>
        </div>
        <br/>
        <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default AddProject;
