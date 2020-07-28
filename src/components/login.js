import React, { Component } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import FormItem from "antd/lib/form/FormItem";
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

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <Form>
        <FormItem label="email" name="email" onChange={this.onChange}>
          <Input />
        </FormItem>

        <FormItem
          label="password"
          name="password"
          type="password"
          onChange={this.onChange}
        >
          <Input />
        </FormItem>

        <Button type="secondary" label="Login" onClick={this.onSubmit} />
      </Form>
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
