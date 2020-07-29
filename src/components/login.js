import React, { Component } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "primeflex/primeflex.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { LoginUser } from "../redux/actions/actions";

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  onSubmit = (e) => {
    e.preventDefault();
    console.log("Beginning login");
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.LoginUser(userData, this.props.history);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="p-field">
        <InputText
          name="email"
          placeholder="Email address"
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

Login.propTypes = {
  LoginUser: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

const mapDispatchToProps = {
  LoginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
