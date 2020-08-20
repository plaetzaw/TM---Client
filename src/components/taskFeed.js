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
  }

  render() {
    const { data } = this.props;
    const taskInfo = data.tasks;
    const userInfo = this.props.users;
    console.log(userInfo);
    console.log(userInfo.credentials.id);

    let taskMarkup = taskInfo.map((card) => {
      // console.log(card);
      return <TaskCard key={card.id} data={card} />;
    });

    // let taskMarkup = taskInfo.map((card) => (
    //   <TaskCard key={card.id} data={card} />
    // ));

    // is the map even working bruh
    return (
      <div className="p-grid">
        <div className="col-6"> {taskMarkup}</div>
      </div>
    );
  }
}

taskFeed.propTypes = {
  getAllTasks: PropTypes.func.isRequired,
  // getAllUsers: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
  users: state.users,
});

const mapDispatchToProps = {
  getAllTasks,
  // getAllUsers,
};
export default connect(mapStateToProps, mapDispatchToProps)(taskFeed);
