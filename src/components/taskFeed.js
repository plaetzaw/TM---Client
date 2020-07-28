import React, { Component } from "react";
import { getAllTasks } from "../redux/actions/actions";
import { connect } from "react-redux";

export class taskFeed extends Component {
  componentDidMount() {
    this.props.getAllTasks();
  }

  render() {
    return <div>TASKFEED</div>;
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
