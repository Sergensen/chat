import React, { Component } from 'react';
import { Form, Button, Grid } from 'semantic-ui-react';
import Menu from './Menu';

export default class UserInput extends Component {
  constructor(props){
    super(props);
    this.state={
      message:""
    }
  }

  onChange = (e) => {
    this.setState({message: e.target.value});
  }

  onKeyDown = (e) => {
    if(e.keyCode===13&&this.state.message) this.writeMessage();
  }

  writeMessage(){
    const { user, writeMessage } = this.props;
    writeMessage(user.uid, this.state.message);
    this.setState({message: ""});
  }

  signOut = (e) => {
    this.props.signOut();
  }

  render() {
    const { signOut } = this.props;
    return (
        <Form style={{height:"20vh"}}>
          <Form.Field>
            <Grid stackable>
              <Grid.Column width="16">
                <input placeholder='Type your message here ...' id="message" value={this.state.message} onChange={this.onChange.bind(this)} onKeyDown={this.onKeyDown} />
              </Grid.Column>
              <Grid.Column width="16">
                <Menu signOut={signOut} />
              </Grid.Column>
            </Grid>
          </Form.Field>
        </Form>
    );
  }
}
