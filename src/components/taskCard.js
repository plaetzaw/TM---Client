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
    this.props.deleteTask({ id: this.props.data.tasks.id });
  };

  render() {
    const { tasks } = this.props.data;

    console.log(tasks);
    console.log(this);

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
          onClick={this.handleDelete}
        />
      </span>
    );

    let cardMarkup = tasks.map((card) => (
      <Card
        // id={card.id}
        id={card.id.toString()}
        title={card.taskname}
        subTitle={card.taskdescription}
        style={{ width: "300px" }}
        className="ui-card-shadow"
        footer={footer}
        header={header}
      >
        <div>
          Task was last updated {card.updatedAt}
          <br />
          Assigned to Employee #{card.assignedto}
          <br />
          Assigned by Employee #{card.assignedby}
        </div>
      </Card>
    ));

    return (
      <div>
        {/* <Card
          id={tasks.id}
          // id={tasks.id.toString()}
          title={tasks.taskname}
          subTitle={tasks.taskdescription}
          style={{ width: "300px" }}
          className="ui-card-shadow"
          footer={footer}
          header={header}
        >
          <div>
            Task was last updated {tasks.updatedAt}
            <br />
            Assigned to Employee #{tasks.assignedto}
            <br />
            Assigned by Employee #{tasks.assignedby}
          </div>
        </Card> */}
        <h1>{cardMarkup}</h1>
      </div>
    );
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

// export default taskCard;
