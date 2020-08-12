import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteTask } from "../redux/actions/actions";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

import "primeicons/primeicons.css";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

class taskCard extends Component {
  handleDelete = (e) => {
    e.preventDefault();
    const { id } = this.props.data;
    this.props.deleteTask({ id: id });
  };

  render() {
    console.log("NOT THE BEES PLS");
    console.log(this.props);

    const {
      id,
      assignedby,
      assignedto,
      createdAt,
      taskcompleted,
      taskdescription,
      taskname,
      updatedat,
    } = this.props.data;

    console.log(id);
    return (
      <div>
        <Card
          key={id}
          title={taskname}
          subTitle={taskdescription}
          style={{
            width: "300px",
            display: "flex",
            backgroundColor: "lightblue",
            border: "3px",
            margin: "10px",
            alignItems: "center",
          }}
          className="ui-card-shadow"
        >
          <div>
            <div className="p-grid">
              <div className="p-col-6">id# {id}</div>
            </div>
            <div className="p-grid">
              <div className="p-col-6">Task Assigned To {assignedto}</div>
              <div className="p-col-6">Task Assigned By {assignedby}</div>
            </div>
            <br />
            <Button
              label="Delete"
              icon="pi pi-times"
              className="p-button-primary"
              style={{ marginRight: ".25em" }}
              type="submit"
              onClick={this.handleDelete}
            />
          </div>
        </Card>
        ;
      </div>
    );
  }
}

taskCard.propTypes = {
  deleteTask: PropTypes.func.isRequired,
  // data: PropTypes.object.isRequired,
};

// const mapStateToProps = (state) => {
//   return {
//     data: state.data,
//   };
// };

const mapDispatchToProps = {
  deleteTask,
};

export default connect(null, mapDispatchToProps)(taskCard);
