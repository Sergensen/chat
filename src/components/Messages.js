import React, { Component } from 'react';
import { List, Segment } from 'semantic-ui-react';

export default class Messages extends Component {
  render() {
    const { chats } = this.props;
    const output = chats.slice(0).map((message) => {
      return (
        <List.Item key={Math.random()}>
          <List.Content>
            <List.Header as='a'>{message.user}</List.Header>
            <List.Description>{message.message}</List.Description>
          </List.Content>
        </List.Item>
      );
    });
    return (
      <Segment>
          <List divided>
            {output}
          </List>
      </Segment>
    );
  }
}
