import React, { Component } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

import "primeicons/primeicons.css";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

export class taskCard extends Component {
  render() {
    const { data } = this.props;

    const header = (
      <img
        alt="Card"
        src="showcase/demo/images/usercard.png"
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
          label="Cancel"
          icon="pi pi-times"
          className="p-button-secondary"
        />
      </span>
    );

    return (
      <div>
        <Card
          title={data.taskname}
          subTitle={data.taskcompleted}
          style={{ width: "300px" }}
          className="ui-card-shadow"
          footer={footer}
          header={header}
        >
          <div>
            {data.taskdescription}
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
