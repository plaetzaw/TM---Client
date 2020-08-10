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
    console.log(this.props);
    console.log(this.props.data);
    console.log(ibObj);
    this.props.deleteTask(ibObj);
  };

  render() {
    const { tasks } = this.props.data;

    // console.log(tasks);
    // console.log(this);

    const header = (
      <img
        alt="TaskCard"
        srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
      />
    );
    const footer = (
      <span>
        <Button
          label="Save"
          icon="pi pi-check"
          style={{ marginRight: ".25em" }}
        />
        <Button
          label="Delete"
          icon="pi pi-times"
          className="p-button-secondary"
          type="submit"
          onClick={this.handleDelete}
        />
      </span>
    );

    let userMarkup = tasks.map((users) => (
      <div>
        {users.firstname}
        <br />
        {users.lastname}
        <br />
      </div>
    ));

    let cardMarkup = tasks.map((card) => (
      <Card
        // id={card.id.toString()}
        key={card.id.toString()}
        title={card.taskname}
        subTitle={card.taskdescription}
        style={{ width: "300px" }}
        className="ui-card-shadow"
        footer={footer}
        header={header}
      >
        <div>
          id# {card.id}
          <br />
          key value {card.id.toString()}
          <br />
          Task was last updated {card.updatedAt}
          <br />
          Assigned to Employee #{card.assignedto}
          <br />
          Assigned by Employee #{card.assignedby}
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
