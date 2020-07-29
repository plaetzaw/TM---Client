import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { RegisterUser } from "../redux/actions/actions";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "primeflex/primeflex.css";

export class Registration extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    };
  }
  onSubmit = (e) => {
    e.preventDefault();
    console.log("Beginning registration");
    const newUserData = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password,
    };
    console.log(this.state.firstname);
    console.log(this.state.lastname);
    console.log(this.state.email);
    console.log(this.state.password);
    this.props.RegisterUser(newUserData, this.props.history);
    console.log("User Registered");
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    // console.log(e.target.value);
  };

  render() {
    return (
      <div className="p-field">
        <InputText
          name="firstname"
          placeholder="First Name"
          onChange={(e) => this.handleChange(e)}
        />
        <br />
        <InputText
          name="lastname"
          placeholder="Last Name"
          onChange={(e) => this.handleChange(e)}
        />
        <br />
        <InputText
          name="email"
          placeholder="Email Address"
          onChange={(e) => this.handleChange(e)}
        />
        <br />
        <InputText
          name="password"
          placeholder="Password"
          type="password"
          onChange={(e) => this.handleChange(e)}
        />
        <br />
        <Button
          label="Submit"
          className="p-button-raised p-button-rounded"
          onClick={this.onSubmit}
        />
      </div>
    );
  }
}

Registration.propTypes = {
  RegisterUser: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

const mapDispatchToProps = {
  RegisterUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
