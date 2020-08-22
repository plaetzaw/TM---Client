import React, { Component } from "react";
import { getUserTasks, updateTask } from "../redux/actions/actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TaskCardThing from "./TaskCardThing";

import "primeicons/primeicons.css";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

class ExampleTaskFeedThing extends Component {
  state = {
    taskname: "",
    taskdescription: "",
    taskcompleted: false,
    assignedto: "",
    assignedby: "",
  };

  componentDidMount() {
    const assignedto = {
      assignedto: this.props.users.credentials.id,
    };
    this.props.getUserTasks(assignedto);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleUpdateSubmit = async (e) => {
    e.preventDefault();
    await this.createUpdatedTask();
  };

  createUpdatedTask = async () => {
    try {
      const {
        taskname,
        taskdescription,
        taskcompleted,
        assignedto,
        assignedby,
      } = this.state;

      const task = await updateTask({
        taskname,
        taskdescription,
        taskcompleted,
        assignedto,
        assignedby,
      });

      return task;
    } catch {
      this.setState({ error: "An error has occurred poopy head. fix it" });
      return null;
    }
  };

  render() {
    console.log(`PROPS IN EXAMPLETASKFEED+++++++++++++++++++ ${this}`);

    let taskCardMarkup = "POOP";

    return (
      <div className="p-grid">
        <div className="col-6">{taskCardMarkup}</div>
      </div>
    );
  }
}

ExampleTaskFeedThing.propTypes = {
  getUserTasks: PropTypes.func.isRequired,
  updateTask: PropTypes.func,
  data: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
  users: state.users,
});

export default connect(mapStateToProps, { getUserTasks, updateTask })(
  ExampleTaskFeedThing
);
