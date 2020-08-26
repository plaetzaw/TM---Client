import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { newTask, getAllUsers } from "../redux/actions/actions";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

import "primeicons/primeicons.css";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

export class createTask extends Component {
  constructor() {
    super();

    this.state = {
      taskname: "",
      taskdescription: "",
      taskcompleted: false,
      assignedto: "",
      assignedby: "",
    };
  }

  componentDidMount() {
    this.props.getAllUsers();
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state.taskname);
  };

  onSubmit = (e) => {
    e.preventDefault();
    let newTask = {
      taskname: this.state.taskname,
      taskdescription: this.state.taskdescription,
      taskcompleted: false,
      assignedto: parseInt(this.state.assignedto),
      assignedby: parseInt(this.state.assignedby),
      // assignedby: parseInt(this.props.users.credentials.id),
    };
    this.props.newTask(newTask);
    console.log("New task posted");
  };

  render() {
    console.log(this.props.users.credentials.id);
    return (
      <div className="p-field">
        <InputText
          name="taskname"
          placeholder="Task Title"
          onChange={(e) => this.handleChange(e)}
        />
        <br />
        <InputText
          name="taskdescription"
          placeholder="Task Description"
          onChange={(e) => this.handleChange(e)}
        />
        <br />
        <InputText
          name="assignedto"
          placeholder="Assigned To"
          onChange={(e) => this.handleChange(e)}
        />
        <br />
        <InputText
          name="assignedby"
          placeholder="Assigned By"
          onChange={(e) => this.handleChange(e)}
        />
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

createTask.propTypes = {
  newTask: PropTypes.func.isRequired,
  getAllUsers: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
    users: state.users,
  };
};

const mapDispatchToProps = {
  newTask,
  getAllUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(createTask);
