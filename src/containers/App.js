import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { reduxForm } from 'redux-form';
import UserInput from '../components/app/UserInput';
import Messages from '../components/app/Messages';
import UserName from '../components/app/UserName';
import { auth } from '../Firebase';

class App extends Component {
  componentDidMount(){
    if (!this.props.user.email) this.props.history.replace('/Authenticate');
    auth.onAuthStateChanged(user => this.props.getUser(user));
  }

  logout(){
    this.props.logout();
    this.props.history.replace('/Authenticate');
  }

  render() {
    const { user, chats, sendMessage, setUserName } = this.props;
    console.log(user);

    const app = (
      <div>
        <UserInput signOut={this.logout.bind(this)} user={user} sendMessage={sendMessage} />
        <Messages chats={chats.messages} />
      </div>
    );
    return user.displayName?app:<UserName setUserName={setUserName} />;
  }
}

let form = reduxForm({
  form: 'NewMessage'
})(App);

form = connect((state, ownProps) => ({
    chats: state.chats,
    user: state.user
  }), actions
)(form);

export default form;
