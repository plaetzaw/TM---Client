import React, { Component } from "react";

export class editModal extends Component {
  constructor() {
    super();
    this.state = {
      taskname: this.state.taskname,
      taskdescription: this.state.taskdescription,
      taskcompleted: this.state.taskcompleted,
      assignedby: this.state.assignedby,
      assignedto: this.state.assignedto,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
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
