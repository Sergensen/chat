import React, { Component } from 'react';
import { Card, Button, Input } from 'semantic-ui-react';

export default class UserName extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: ""
    }
  }

  onKeyDown = (e) => {
    const { name } = this.state;
    if(name && e.keyCode===13) this.props.setUserName(name);
  }

  onChange = (e) => {
    this.setState({name: e.target.value});
  }

  onClick = (e) => {
    this.props.setUserName(this.state.name);
    window.location.reload();
  }

  render() {
    return (
      <Card>
      <Card.Content>
        <Card.Header>
          Enter Username
        </Card.Header>
      </Card.Content>
      <Card.Content>
        <Input onKeyDown={this.onKeyDown.bind(this)} onChange={this.onChange.bind(this)} />
      </Card.Content>
      <Card.Content>
          <Button onClick={this.onClick.bind(this)}>Submit</Button>
      </Card.Content>
    </Card>
    );
  }
}
