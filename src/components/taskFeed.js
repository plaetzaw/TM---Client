import React, { Component } from "react";
import { getAllTasks } from "../redux/actions/actions";
import { connect } from "react-redux";
// import axios from "axios";

export class taskFeed extends Component {
  componentDidMount() {
    this.props.getAllTasks();
    // this.setState({
    //   loadingData: true,
    // });
    // axios.get("http://localhost:8080/taskFeed").then((allTasks) => {
    //   console.log(allTasks);
    //   this.setState({
    //     tasks: allTasks.data,
    //     loadingData: false,
    //   });
    //   console.log(this.state.tasks);
    // });
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
