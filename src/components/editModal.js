import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateTask } from "../redux/actions/actions";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

import "primeicons/primeicons.css";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

export class Editmodal extends Component {
  constructor() {
    super();
    this.state = {
      taskname: "",
      taskdescription: "",
      taskcompleted: false,
      assignedby: "",
      assignedto: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };

  onSubmit = (e) => {
    e.preventDefault();
    let updatedTask = {
      taskname: this.state.taskname,
      taskdescription: this.state.taskdescription,
      taskcompleted: false,
      assignedto: parseInt(this.state.assignedto),
      assignedby: parseInt(this.state.assignedby),
    };
    console.log(updatedTask);
    this.props.updateTask(updatedTask);
  };

  render() {
    console.log(this);
    console.log(this.props);
    console.log(this.state);

    return (
      <div className="p-field">
        <InputText
          name="taskname"
          placeholder="Task Title"
          onChange={(e) => this.handleChange(e)}
        />
        {this.state.taskname}
        <br />
        <InputText
          name="taskdescription"
          placeholder="Task Description"
          onChange={(e) => this.handleChange(e)}
        />
        <br />
        {this.state.taskdescription}
        <InputText
          name="assignedto"
          placeholder="Assigned To"
          onChange={(e) => this.handleChange(e)}
        />
        {this.state.assignedto}
        <br />
        <InputText
          name="assignedby"
          placeholder="Assigned By"
          onChange={(e) => this.handleChange(e)}
        />
        {this.state.assignedby}
        <br />
        <Button
          label="Submit!"
          className="p-button-raised p-button-rounded"
          onClick={this.onSubmit}
        />
      </div>
    );
  }
}

Editmodal.propTypes = {
  updateTask: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

const mapDispatchToProps = {
  updateTask,
  // getAllUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(Editmodal);
