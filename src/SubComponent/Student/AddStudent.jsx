import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Icon from '@material-ui/core/Icon';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width:300,
    margin:'0 auto'
  },
  margin: {
    margin: theme.spacing.unit,
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3,
  },
  textField: {
    flexBasis: '100%',
  },
  button: {
    margin: '0 auto',
    marginTop: theme.spacing.unit,
  },
});

const titleranges = [
  {
    value: 'นาย',
    label: 'นาย',
  },
  {
    value: 'นางสาว',
    label: 'นางสาว',
  },
  {
    value: 'เด็กชาย',
    label: 'เด็กชาย',
  },
  {
    value: 'เด็กหญิง',
    label: 'เด็กหญิง',
  },
];

class AddStudentComponent extends Component {
  state = {
    title: '',
    firstname: '',
    lastname: '',
    class: '',
    id: '',
    password:'',
  };

  handlesubmit = (e)=>{
    e.preventDefault();
  }
  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    const { classes } = this.props;
    return (
      <form className={classes.root}>
        <TextField
          select
          id="Title"
          label="คำนำหน้าชื่อ"
          className={classNames(classes.margin, classes.textField)}
          value={this.state.title}
          onChange={this.handleChange('title')}
          
        >
          {titleranges.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="ชื่อ"
          id="Firstname"
          value={this.state.firstname}
          className={classNames(classes.margin, classes.textField)}
          onChange={this.handleChange('firstname')}
        />
           <TextField
          label="นามสกุล"
          id="Lastname"
          value={this.state.lastname}
          className={classNames(classes.margin, classes.textField)}
          onChange={this.handleChange('lastname')}
        />
        <FormControl className={classNames(classes.margin, classes.withoutLabel,classes.textField)}>
        
          <Input
            id="class"
            value={this.state.class}
            onChange={this.handleChange('class')}
            startAdornment={<InputAdornment position="start">มัธยมศึกษาปีที่</InputAdornment>}
          />
          <FormHelperText id="class-helper-text">ตัวอย่าง.มัธยมศึกษาปีที่ 6/13</FormHelperText>
        </FormControl>
        <FormControl
          className={classNames(classes.margin, classes.textField)}
        >
        <InputLabel htmlFor="adornment-id">รหัสนักเรียน(username)</InputLabel>
          <Input
            id="id"
            value={this.state.id}
            onChange={this.handleChange('id')}
          />
          <FormHelperText id="id-helper-text">ตัวอย่าง.310xx</FormHelperText>
        </FormControl>
        <FormControl className={classNames(classes.margin, classes.textField)}>
          <InputLabel htmlFor="adornment-password">รหัสผ่าน(password)</InputLabel>
          <Input
            id="password"
            type={this.state.showPassword ? 'text' : 'password'}
            value={this.state.password}
            onChange={this.handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword}
                  onMouseDown={this.handleMouseDownPassword}
                >
                  {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Tooltip title="เพิ่มข้อมูลนักเรียนเข้าไปในฐานข้อมูล"  placement="right">
        <Button variant="extendedFab" color="primary" className={classes.button}>
        เพิ่มข้อมูล
      </Button>
      </Tooltip>
      <br/>
      <p>
        {this.state.firstname}
      </p>
      
      </form>
    );
  }

}

export default withStyles(styles)(AddStudentComponent)