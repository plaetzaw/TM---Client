import React, { Component } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import FormItem from "antd/lib/form/FormItem";

export class registration extends Component {
  render() {
    return (
      <div>
        {" "}
        <Form>
          <FormItem label="firstname" name="firstname">
            <Input />
          </FormItem>

          <FormItem label="lastname" name="lastname">
            <Input />
          </FormItem>

          <FormItem label="email" name="email">
            <Input />
          </FormItem>

          <FormItem label="password" name="password">
            <Input />
          </FormItem>

          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default registration;
