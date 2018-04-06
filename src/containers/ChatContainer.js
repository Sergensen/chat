import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as chatActions from '../actions/actions';
import React from 'react';
import Input from '../components/Input';
import Messages from '../components/Messages';
import Typing from '../components/Typing';
import { Grid } from 'semantic-ui-react';

const ChatContainer = ({chats, actions}) => (
    <div>
      <Input actions={actions} />
      <Typing typing={chats.typing} />
      <Messages chats={chats.messages} />
    </div>
  );
const mapStateToProps = ({ chats }) => ({
  chats,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(chatActions, dispatch)
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatContainer);
