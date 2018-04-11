import React, { Component } from 'react';
import { Form, Button, Grid, Label } from 'semantic-ui-react';

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
    if(e.keyCode===13) this.send();
  }

  send = () => {
    const { message } = this.state;
    const { user, sendMessage } = this.props;
    if(message) sendMessage(user.displayName, message);
    this.setState({message: ""});
  }

  signOut = (e) => {
    this.props.signOut();
  }

  render() {
    return (
        <Form>
          <Form.Field>
            <Grid stackable>
              <Grid.Column width="3">
                <Button type="button" style={{width:"100%"}} color="red" onClick={this.signOut.bind(this)}>Logout</Button>
              </Grid.Column>
              <Grid.Column width="3">
                <Label as='a' style={{width:"100%", height:35.6}} content={this.props.user.displayName} />
              </Grid.Column>
              <Grid.Column width="10">
                <input placeholder='Type your message here ...' id="message" value={this.state.message} onChange={this.onChange.bind(this)} onKeyDown={this.onKeyDown} />
              </Grid.Column>
            </Grid>
          </Form.Field>
        </Form>
    );
  }
}
