import React, { Component } from 'react';
import { List, Image, Icon } from 'semantic-ui-react';
import { database } from '../../Firebase';

export default class Messages extends Component {
  constructor(props){
    super(props);
    this.state={
      users:{},
      messages: {}
    }
  }
  componentDidMount(){
    const users = database.ref('users');
    const messages = database.ref('messages');
    users.on('value', (snap) => {
      this.setState({users:snap.val()});
    });
    messages.on('value', (snap) => {
      this.setState({messages:snap.val()});
    });
  }
  componentDidUpdate(){
    const { user, createUser } = this.props;
    if(!this.state.users[user.uid]) createUser(user);
  }
  render() {
    const { messages, users } = this.state;
    let output = [];
    for(let key in messages){
      const pic = (users[messages[key].uid].url?
        <Image avatar src={users[messages[key].uid].url} />
      :
        <Icon name="user" size="large" />
      );
      output.push(
        <List.Item style={{background:"linear-gradient(#ddffe3, white)"}} key={Math.random()}>
          {pic}
          <List.Content>
            <List.Header as='a'>{users[messages[key].uid].name}</List.Header>
            <List.Description>{messages[key].message}</List.Description>
          </List.Content>
        </List.Item>
      );
    }
    return (
      <List style={{height:"80vh", margin: 0, overflow:"auto", display:"flex", justifyContent: "flex-end", flexDirection:"column"}} celled>
        {output}
      </List>
    );
  }
}

/*Stackoverflow*/
Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};
