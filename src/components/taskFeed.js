import React, { Component } from "react";
import { getAllTasks } from "../redux/actions/actions";
import { connect } from "react-redux";

import "primeicons/primeicons.css";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

export class taskFeed extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
    };
  }

  componentDidMount() {
    this.props.getAllTasks();
  }

  render() {
    const background = {
      backgroundColor: "green",
    };

    const useStyles = {};

    return <div></div>;
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
});

const mapDispatchToProps = (dispatch) => ({
  getAllTasks: () => {
    dispatch(getAllTasks());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(taskFeed);
