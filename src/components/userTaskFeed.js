import React, { Component } from "react";
import { getUserTasks, getAllUsers } from "../redux/actions/actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TaskCard from "./taskCard";
import TaskCardThing from "./TaskCardThing";

import "primeicons/primeicons.css";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

export class userTaskFeed extends Component {
  componentDidMount() {
    const assignedto = {
      assignedto: this.props.users.credentials.id,
    };
    console.log(assignedto);
    this.props.getUserTasks(assignedto);
  }

  render() {
    const { data } = this.props;
    const taskInfo = data.tasks;
    const userInfo = this.props.users;
    console.log(userInfo);
    console.log(userInfo.credentials.id);

    let taskMarkup = taskInfo.map((card) => {
      console.log(card);
      // PUTTING SOMETHING HERE FOR NOW TO TEST SHIT :D
      return <TaskCard key={card.id} data={card} />;
    });

    return (
      <div className="p-grid">
        <div className="col-6"> {taskMarkup}</div>
      </div>
    );
  }
}

userTaskFeed.propTypes = {
  getUserTasks: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
  users: state.users,
});

const mapDispatchToProps = {
  getUserTasks,
};
export default connect(mapStateToProps, mapDispatchToProps)(userTaskFeed);
