import React, { Component } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { deleteTask } from "../redux/actions/actions";

import "primeicons/primeicons.css";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

export class taskCard extends Component {
  constructor() {
    super();
  }

  handleDelete = (e) => {
    e.preventDefault();
    this.props.deleteTask();
  };

  render() {
    const { data } = this.props;

    // handleChange = (e) => {
    //   this.setState({
    //     [e.target.name]: e.target.value,
    //   });
    //   console.log(this.state.taskname);
    // };

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

    return (
      <div>
        <Card
          id={data.id.toString()}
          title={data.taskname}
          subTitle={data.taskdescription}
          style={{ width: "300px" }}
          className="ui-card-shadow"
          footer={footer}
          header={header}
        >
          <div>
            Task was last updated {data.updatedAt}
            <br />
            Assigned to Employee #{data.assignedto}
            <br />
            Assigned by Employee #{data.assignedby}
          </div>
        </Card>
      </div>
    );
  }
}

export default taskCard;
