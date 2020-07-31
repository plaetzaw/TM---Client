import React, { Component } from "react";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

import "primeicons/primeicons.css";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

export class UI extends Component {
  constructor(props) {
    super(props);

    this.items = [
      {
        label: "Tasks",
        icon: "pi pi-fw pi-pencil",
        items: [
          {
            label: "Post New Task",
            icon: "pi pi-fw pi-plus",
            url: "http://localhost:3000/createTask",
          },
          {
            label: "View Current Tasks",
            icon: "pi pi-fw pi-trash",
            url: "http://localhost:3000/taskFeed",
            //to be replaced with USER task feed
          },
          {
            separator: true,
          },
        ],
      },
      {
        label: "User Profile",
        icon: "pi pi-fw pi-user",
        //to be replaced with USER profile
      },
      {
        label: "All Team Tasks",
        icon: "pi pi-list",
        url: "http://localhost:3000/taskFeed",
      },
    ];
  }

  render() {
    return (
      <div>
        <Menubar model={this.items}>
          <Button
            label="Logout"
            icon="pi pi-power-off"
            style={{ marginLeft: 4 }}
          />
        </Menubar>
        {this.props.children}
      </div>
    );
  }
}

export default UI;
