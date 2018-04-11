import React, { Component } from 'react';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import AuthForm from '../components/auth/AuthForm';
import { auth } from '../Firebase';
import { Dimmer, Loader, Modal, Button, Input } from 'semantic-ui-react';

class Authenticate extends Component {
  constructor(props){
    super(props);
    this.state={
      dimmer: true
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({dimmer:false});
      this.props.getUser(user);
    });
  }

  componentDidUpdate(){
    if(this.props.user.email) this.props.history.replace("/");
  }

  render() {
    const { user, signin, signup, signinGoogle } = this.props;
    return (
      <div>
        <Dimmer active={this.state.dimmer}>
          <Loader />
        </Dimmer>
        <AuthForm user={user} signinGoogle={signinGoogle} signin={signin} signup={signup} />
      </div>
    );
  }
}

let form = reduxForm({
  form: 'UserAuth'
})(Authenticate);

form = connect((state, ownProps) => ({
    user: state.user
  }), actions
)(form);

export default form;
