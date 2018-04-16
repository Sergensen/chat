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
    const { user, sendMessage, setUserName, createUser, writeMessage } = this.props;
    const app = (
      <div style={{height:"100vh"}}>
        <Messages createUser={createUser} user={user} />
        <UserInput writeMessage={writeMessage} signOut={this.logout.bind(this)} user={user} sendMessage={sendMessage} />
      </div>
    );
    return user.displayName?app:<UserName setUserName={setUserName} />;
  }
}

let form = reduxForm({
  form: 'NewMessage'
})(App);

form = connect((state, ownProps) => ({
    user: state.user
  }), actions
)(form);

export default form;
