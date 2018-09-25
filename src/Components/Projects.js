import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import PropTypes from 'prop-types';

class Projects extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }
  render() {
    let projectItems;
    if(this.props.projects){
      projectItems = this.props.projects.map(project => {
        return (
          <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.firstName} project={project}/>
        );


      });
    }

    return (
      <div className="Projects">
      <div>
      {this.props.test}
      </div>
      <br/>
      {projectItems}
      </div>
    );
  }
}

Projects.propTypes={
  projects: PropTypes.array,
  onDelete: PropTypes.func
};

export default Projects;
