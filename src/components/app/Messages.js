import React, { Component } from 'react';
import { List, Image, Icon } from 'semantic-ui-react';

export default class Messages extends Component {
  render() {
    const { chats } = this.props;
    const output = chats.slice(0).map((message, index) => {
      const pic = (message.url?
        <Image avatar src={message.url} />
      :
        <Icon name="user" size="large" />
      );
      return (
        <List.Item style={index===chats.length-1?{background:"linear-gradient(#ddffe3, white)"}:{}} key={Math.random()}>
          {pic}
          <List.Content>
            <List.Header as='a'>{message.user}</List.Header>
            <List.Description>{message.message}</List.Description>
          </List.Content>
        </List.Item>
      );
    });
    return (
      <List style={{height:"80vh", margin: 0, overflow:"auto", display:"flex", justifyContent: "flex-end", flexDirection:"column"}} celled>
        {output}
      </List>
    );
  }
}
