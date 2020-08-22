import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteTask, getAllUsers } from "../redux/actions/actions";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Editmodal } from "./editModal";

import "primeicons/primeicons.css";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

class taskCard extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }

  handleDelete = (e) => {
    e.preventDefault();
    const { id } = this.props.data;
    this.props.deleteTask({ id: id });
  };

  handleOpen = (e) => {
    this.setState((state) => ({
      isOpen: !state.isOpen,
    }));
  };

  render() {
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

    let modalMarkup = this.state.isOpen === false ? <></> : <Editmodal />;

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
            <div className="p-col-6">
              Task Completion Status {taskcompleted}
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
            <Button
              label="Edit"
              iocn="pi pi-equal"
              className="p-button-secondary"
              style={{ marginRight: ".25em" }}
              type="submit"
              onClick={this.handleOpen}
            />
            {modalMarkup}
          </div>
        </Card>
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
  // getAllUsers,
};

export default connect(null, mapDispatchToProps)(taskCard);
