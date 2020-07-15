import React, { Component } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import FormItem from "antd/lib/form/FormItem";

export class Login extends Component {
  render() {
    // const layout = {
    //   labelCol: { span: 8 },
    //   wrapperCol: { span: 16 },
    // };

    // const tailLayout = {
    //   wrapperCol: { offset: 8, span: 16 },
    // };

    // const onFinish = (values) => {
    //   console.log("Success:", values);
    // };

    // const onFinishFailed = (errorInfo) => {
    //   console.log("Failed:", errorInfo);
    // };

    return (
      <Form>
        <FormItem label="username" name="username">
          <Input />
        </FormItem>

        <FormItem label="password" name="password">
          <Input />
        </FormItem>

        <Button>Submit</Button>
      </Form>
      // <Form
      //   {...layout}
      //   name="basic"
      //   initialValues={{ remember: true }}
      //   onFinish={onFinish}
      //   onFinishFailed={onFinishFailed}
      // >
      //   <Form.Item
      //     label="Username"
      //     name="username"
      //     rules={[{ required: true, message: "Please input your username!" }]}
      //   >
      //     <Input />
      //   </Form.Item>

      //   <Form.Item
      //     label="Password"
      //     name="password"
      //     rules={[{ required: true, message: "Please input your password!" }]}
      //   >
      //     <Input.Password />
      //   </Form.Item>

      //   <Form.Item {...tailLayout} name="remember" valuePropName="checked">
      //     <Checkbox>Remember me</Checkbox>
      //   </Form.Item>

      //   <Form.Item {...tailLayout}>
      //     <Button type="primary" htmlType="submit">
      //       Submit
      //     </Button>
      //   </Form.Item>
      // </Form>
    );
  }
}

export default Login;
