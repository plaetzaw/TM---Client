import React, { Component } from "react";
import { getAllTasks, getAllUsers } from "../redux/actions/actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TaskCard from "./taskCard";

import "primeicons/primeicons.css";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

export class taskFeed extends Component {
  componentDidMount() {
    this.props.getAllTasks();
    this.props.getAllUsers();
  }

  render() {
    const { data } = this.props;
    // const background = {
    //   backgroundColor: "green",
    // };

    // const useStyles = {};
    const taskInfo = data.tasks;

    let taskMarkup = taskInfo.map((card) => (
      <TaskCard key={card.id} data={card} />
    ));
    return <div className="p-grid">{taskMarkup}</div>;
  }
}

taskFeed.propTypes = {
  getAllTasks: PropTypes.func.isRequired,
  getAllUsers: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

const mapDispatchToProps = {
  getAllTasks,
  getAllUsers,
};
export default connect(mapStateToProps, mapDispatchToProps)(taskFeed);
