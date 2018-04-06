import React, { Component } from 'react';
import { Sticky, Form, Button, Grid, Label } from 'semantic-ui-react';

export default class Input extends Component {
  constructor(props){
    super(props);
    this.state={message:"", user:"" }
  }

  onChange = (e) => {
    const { id, value } = e.target;
    this.setState({[id]: value});
  }

  changeName = (e) => {
    this.setState({user: e.target.value});
  }

  onKeyDown = (e) => {
    const { user, message } = this.state;
    if(user){
      this.type();
      if(e.keyCode===13){
        this.send();
      }
    }
  }

  send = () => {
    const { sendMessage, typing } = this.props.actions;
    const { user, message } = this.state;
    if(user&&message) sendMessage(user, message);
    this.setState({message: ""});
    typing("");
  }

  type = () => {
    this.props.actions.typing(this.state.user);
  }

  render() {
    const { message, user } = this.state;
    return (
        <Form>
          <Form.Field>
            <Grid stackable>
              <Grid.Column width="3">
                <input placeholder='Enter name ...' id="user"  value={user} onChange={this.onChange.bind(this)} />
              </Grid.Column>
              <Grid.Column width="13">
                <input placeholder='Type your message here ...' id="message" value={message} onChange={this.onChange.bind(this)} onKeyDown={this.onKeyDown} />
              </Grid.Column>
            </Grid>
          </Form.Field>
        </Form>
    );
  }
}
