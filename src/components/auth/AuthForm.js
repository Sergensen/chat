import React, { Component } from 'react';
import { Form, Button, Divider, Grid } from 'semantic-ui-react';

export default class AuthForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      signin: true,
      email: "",
      password: "",
      confirmPassword: ""
    }
  }

  sendData = (e) => {
    const { email, password, confirmPassword, signin } = this.state;
    if(email && password && e.keyCode===13){
      if(!signin && confirmPassword===password){
        this.props.signup(email, password);
      } else if (signin){
        this.props.signin(email, password);
      }
    }
  }

  signinGoogle(){
    this.props.signinGoogle();
  }

  signinFacebook(){
    this.props.signinFacebook();
  }

  getSignInButtons(){
    return (
      <Grid stackable>
        <Grid.Column width="8">
          <Button style={{width:"100%"}} onClick={this.signinGoogle.bind(this)} color="red" icon="google" />
        </Grid.Column>
        <Grid.Column width="8">
          <Button style={{width:"100%"}} onClick={this.signinFacebook.bind(this)} color="blue" icon="facebook square" />
        </Grid.Column>
      </Grid>
    );
  }

  render() {
    const { signin } = this.state;
    const confirmButton = signin?this.getSignInButtons():
      <Form.Input
      type="password"
      onKeyDown={this.sendData.bind(this)}
      onChange={(e) => this.setState({confirmPassword: e.target.value})}
      label='Confirm password'
      placeholder='********' />;
    return (
      <Form>
        <Divider />
        <Form.Input onKeyDown={this.sendData.bind(this)} type="email" onChange={(e) => this.setState({email: e.target.value})} label='Email' placeholder='name@email.com' />
        <Form.Input onKeyDown={this.sendData.bind(this)} onChange={(e) => this.setState({password: e.target.value})} type="password" label='Password' placeholder='********' />
        {confirmButton}
        <Divider />
        <Button style={{width:"100%"}} onClick={this.sendData.bind(this)}>{signin?"sign in":"sign up"}</Button>
        <Divider />
        <Button style={{width:"100%"}} onClick={this.switchSignState.bind(this)}>{signin?"or sign up":"Back"}</Button>
        <Divider />
      </Form>
    );
  }

  switchSignState(){
    this.setState((prevState)=>{
      return {
        signin: !prevState.signin
      }
    });
  }
}
