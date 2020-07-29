import React, { Component } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import FormItem from "antd/lib/form/FormItem";
import { RegisterUser } from "../redux/actions/actions";

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

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    // console.log(e.target.value);
  };

  render() {
    return (
      <div>
        {" "}
        <Form>
          <FormItem
            label="firstname"
            className="firstname"
            onChange={this.onChange}
          >
            <Input />
          </FormItem>

          <FormItem
            label="lastname"
            className="lastname"
            onChange={this.onChange}
          >
            <Input />
          </FormItem>

          <FormItem label="email" className="email" onChange={this.onChange}>
            <Input />
          </FormItem>

          <FormItem
            label="password"
            className="password"
            type="password"
            onChange={this.onChange}
          >
            <Input />
          </FormItem>

          <Button type="primary" label="Submit" onClick={this.onSubmit} />
        </Form>
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
