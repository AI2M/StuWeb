import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class AddStudentComponent extends Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    // Only show error after a field is touched.
    const studentidError = isFieldTouched('studentid') && getFieldError('studentid');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    const firstnameError = isFieldTouched('firstname') && getFieldError('firstname');
    const lastnameError = isFieldTouched('lastname') && getFieldError('lastname');
    const classError = isFieldTouched('class') && getFieldError('class');
    return (
      <Form layout="block" onSubmit={this.handleSubmit}>

         <FormItem
          validateStatus={firstnameError ? 'error' : ''}
          help={firstnameError || ''}
        >
          {getFieldDecorator('firstname', {
            rules: [{ required: true, message: 'Please input firstname!' }],
          })(
            <Input placeholder="Firstname" />
          )}
        </FormItem>

        <FormItem
          validateStatus={lastnameError ? 'error' : ''}
          help={lastnameError || ''}
        >
          {getFieldDecorator('lastname', {
            rules: [{ required: true, message: 'Please input lastname!' }],
          })(
            <Input  placeholder="Lastname" />
          )}
        </FormItem>
        <FormItem
          validateStatus={classError ? 'error' : ''}
          help={classError || ''}
        >
          {getFieldDecorator('class', {
            rules: [{ required: true, message: 'Please input class!' }],
          })(
            <Input placeholder="Class" />
          )}
        </FormItem>

        <FormItem
          validateStatus={studentidError ? 'error' : ''}
          help={studentidError || ''}
        >
          {getFieldDecorator('studentid', {
            rules: [{ required: true, message: 'Please input student id!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Student Id" />
          )}
        </FormItem>

        <FormItem
          validateStatus={passwordError ? 'error' : ''}
          help={passwordError || ''}
        >
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>

        <FormItem  style={{textAlign:'center'}}>
          <Button
            style={{width:'120px'}}
            type="primary"
            htmlType="submit"
            disabled={hasErrors(getFieldsError())}
          >
            Submit
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(AddStudentComponent);