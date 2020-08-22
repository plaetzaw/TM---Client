import React, { Component } from "react";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import PropTypes from "prop-types";
import { LogoutUser } from "../../redux/actions/actions";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import "primeicons/primeicons.css";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

export class UI extends Component {
  // constructor(props) {
  //   super(props);
  // }

  navigateToPage = (path) => {
    console.log(`going here: ${path}`);
    this.props.history.push(path);
  };

  onLogout = (e) => {
    e.preventDefault();
    this.props.LogoutUser();
  };

  render() {
    let items = [
      {
        label: "Tasks",
        icon: "pi pi-fw pi-pencil",
        items: [
          {
            label: "Post New Task",
            icon: "pi pi-fw pi-plus",
            command: () => {
              this.navigateToPage("/createTask");
            },
          },
          {
            label: "View Current Tasks",
            icon: "pi pi-fw pi-trash",
            command: () => {
              this.navigateToPage("/userTaskFeed");
            },
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
        command: () => {
          this.navigateToPage("/");
        },
        //to be replaced with USER profile
      },
      {
        label: "All Team Tasks",
        icon: "pi pi-list",
        command: () => {
          this.navigateToPage("/taskFeed");
        },
      },
      {
        label: "Login",
        icon: "pi pi-sign-in",
        command: () => {
          this.navigateToPage("/");
        },
      },
      {
        label: "Register",
        icon: "pi pi-key",
        command: () => {
          this.navigateToPage("/register");
        },
      },
    ];

    //  useStyle = {
    //MAKE NAVBAR STICKY
    //   position: stic
    //  }

    return (
      <div>
        <Menubar model={items}>
          <Button
            label="Logout"
            icon="pi pi-power-off"
            style={{ marginLeft: 4 }}
            onClick={this.onLogout}
          />
        </Menubar>
        {this.props.children}
      </div>
    );
  }
}

UI.propTypes = {
  LogoutUser: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

const mapDispatchToProps = {
  LogoutUser,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UI));
