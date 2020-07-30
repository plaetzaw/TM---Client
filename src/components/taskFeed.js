import React, { Component } from "react";
import { getAllTasks, getAllUsers } from "../redux/actions/actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

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
    const background = {
      backgroundColor: "green",
    };

    const useStyles = {};

    return <div></div>;
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
