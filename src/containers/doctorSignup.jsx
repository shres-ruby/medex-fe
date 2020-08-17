import React from 'react';
import { Form, Input, Button } from 'antd';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';


const RegistrationForm = (props) => {
  const [form] = Form.useForm();

  const onFinish = values => {
    console.log('Received values of form: ', values);
    props.onAuth(values.email, values.password, values.confirm,
        values.firstname, values.lastname, values.phone, values.specialty,
        values.availability)
    props.history.push('/');
  };
  
  return (
    <Form
      form={form}
      name="register"
      onFinish={onFinish}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject('The two passwords that you entered do not match!');
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="firstname"
        label="First Name"
        rules={[
          {
            required: true,
            message: 'Enter your first name',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="lastname"
        label="Last Name"
        rules={[
          {
            required: true,
            message: 'Enter your last name',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input />
      </Form.Item>

        <Form.Item
          name="specialty"
          label="Specialty"
          rules={[{ required: true, message: 'Please enter your specialty', }]}
        >
        <Input />
        </Form.Item> 
      <Form.Item
        name="availability"
        label="Availability"
        rules={[
          {
            required: true,
            message: 'Please enter your availability',
          },
        ]}
      >
      <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password1, password2, firstname, lastname, phone, specialty, availability) => 
    dispatch(actions.authSignup(email, password1, password2, firstname, lastname, phone, specialty, availability))
  }
}

export default connect(null, mapDispatchToProps)(RegistrationForm);
