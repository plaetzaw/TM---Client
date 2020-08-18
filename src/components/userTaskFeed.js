import React, { Component } from "react";
import { getUserTasks, getAllUsers } from "../redux/actions/actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TaskCard from "./taskCard";

import "primeicons/primeicons.css";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

export class userTaskFeed extends Component {
  componentDidMount() {
    this.props.getUserTasks();
  }

  render() {
    const { data } = this.props;
    const taskInfo = data.tasks;
    console.log(users.credentials);

    let taskMarkup = taskInfo.map((card) => {
      console.log(card);
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
};

const mapStateToProps = (state) => ({
  data: state.data,
});

const mapDispatchToProps = {
  getUserTasks,
};
export default connect(mapStateToProps, mapDispatchToProps)(userTaskFeed);
