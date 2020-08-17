import React from 'react';

import { Form, Input, Button } from 'antd';
import { connect } from 'react-redux';

import * as actions from '../store/actions/auth';


class LoginForm extends React.Component {
  onFinish = values => {
    console.log('Success:', values);
    this.props.onAuth(values.email, values.password)
    this.props.history.push('/');
  };

  onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  render() {
  return (
    <Form
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={this.onFinish}
      onFinishFailed={this.onFinishFailed}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Enter your email',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Enter your password',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password) => dispatch(actions.authLogin(email, password))
  }
}

export default connect(null, mapDispatchToProps)(LoginForm);
