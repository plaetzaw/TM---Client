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

export class taskCard extends Component {
  handleDelete = (e) => {
    e.preventDefault();
    let ibObj = {
      id: this.props.data.tasks.id,
    };
    console.log(this.props.data);
    console.log(ibObj);
    this.props.deleteTask(ibObj);
  };

  render() {
    const { tasks } = this.props.data;

    // let userMarkup = tasks.map((users) => (
    //   <div>
    //     {users.firstname}
    //     <br />
    //     {users.lastname}
    //     <br />
    //   </div>
    // ));

    let cardMarkup = tasks.map((card) => (
      <Card
        key={card.id}
        title={card.taskname}
        subTitle={card.taskdescription}
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
            <div className="p-col-6">id# {card.id}</div>
            <div className="p-col-6">key value {card.id.toString()}</div>
          </div>
          <div className="p-grid">
            <div className="p-col-6">Task Assigned To {card.assignedto}</div>
            <div className="p-col-6">Task Assigned By {card.assignedby}</div>
          </div>
          {/* <Button label="Save" icon="pi pi-check" /> */}
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
    ));

    return <div>{cardMarkup}</div>;
  }
}

taskCard.propTypes = {
  deleteTask: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

const mapDispatchToProps = {
  deleteTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(taskCard);
