import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class AddStudentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname:'',
      lastname:'',
      class:'',
      studentid:'',
      password:'',
    };
  }
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
  handleInputChange=(prop)=>(event)=>{
    this.setState({[prop]:event.target.value});
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
      <Form layout="vertical" onSubmit={this.handleSubmit}>

         <FormItem
          style={{width:300, margin:'0 auto', marginBottom:20, marginTop:20}}
          validateStatus={firstnameError ? 'error' : ''}
          help={firstnameError || ''}
        >
          {getFieldDecorator('firstname', {
            rules: [{ 
              required: true, 
              message: 'Please input firstname!, firstname much only  letters',
              pattern: '^[a-zA-Z]+$'
            }],
          })(
            <Input placeholder="Firstname"  onChange={this.handleInputChange('firstname')} />
          )}
        </FormItem>

        <FormItem
          style={{width:300, margin:'0 auto', marginBottom:20}}
          validateStatus={lastnameError ? 'error' : ''}
          help={lastnameError || ''}
        >
          {getFieldDecorator('lastname', {
            rules: [{ 
              required: true, 
              message: 'Please input lastname!, lastname much only  letters',
              pattern: '^[a-zA-Z]+$'
             }],
          })(
            <Input  placeholder="Lastname" onChange={this.handleInputChange('lastname')}/>
          )}
        </FormItem>
        <FormItem
          style={{width:300, margin:'0 auto', marginBottom:20}}
          validateStatus={classError ? 'error' : ''}
          help={classError || ''}
        >
          {getFieldDecorator('class', {
            rules: [{ 
              required: true, 
              message: 'Please input class, example: 6/13',
              pattern:'^[1-6]{1}[/]([1-9]{1}||[1-9]{1}[0-9]{1})$'
            }],
          })(
            <Input placeholder="Class" onChange={this.handleInputChange('class')}/>
          )}
        </FormItem>

        <FormItem
        style={{width:300, margin:'0 auto', marginBottom:20}}
          validateStatus={studentidError ? 'error' : ''}
          help={studentidError || ''}
        >
          {getFieldDecorator('studentid', {
            rules: [{ 
              required: true, 
              message: 'Please input student id, student id much only 5 numbers',
              pattern: '^[0-9]{5}$'
             }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
            onChange={this.handleInputChange('studentid')}
             placeholder="Student Id" />
          )}
        </FormItem>

        <FormItem
        style={{width:300, margin:'0 auto', marginBottom:20}}
          validateStatus={passwordError ? 'error' : ''}
          help={passwordError || ''}
        >
          {getFieldDecorator('password', {
            rules: [{
              required: true,
              message: 'Please input your Password!, password much atleast 5 characters without special characters  ',
              pattern:'[a-zA-Z0-9]{5,}'
            }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
            type="password" 
            placeholder="Password" 
            onChange={this.handleInputChange('password')}/>
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