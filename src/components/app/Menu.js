import React, { Component } from 'react';
import { Button, Grid, Modal, Image, Input, Header, Icon } from 'semantic-ui-react';

export default class Menu extends Component {
  constructor(props){
    super(props);
    this.state={
      name: props.user.displayName,
      modal: false
    }
  }

  onChange(e){
    this.setState({name: e.target.value});
  }
  signOut(e){
    this.props.signOut();
  }
  openModal(){
    this.setState({modal: true});
  }
  closeModal(){
    this.setState({modal: false});
  }
  saveData(){
    this.setState({modal: false});
  }

  render() {
    const { user } = this.props;
    const { name, modal } = this.state;
    return (
      <Grid>
        <Grid.Column width={8}>
          <Button type="button" style={{width:"100%"}} color="red" onClick={this.signOut.bind(this)}>Logout</Button>
        </Grid.Column>
        <Grid.Column width={8}>
          <Modal style={{marginTop: '0px !important',marginLeft: 'auto',marginRight: 'auto'}}
            trigger={<Button type="button" style={{width:"100%"}} color="blue" onClick={this.openModal.bind(this)}>Change profile</Button>}
            open={modal}
          >
            <Modal.Header>Change Photo or Username</Modal.Header>
            <Modal.Content image>
              <Image wrapped size='medium' src={user.photoURL} />
              <Modal.Description>
                <Header>Select Profile Image</Header>
                <Input style={{width:"100%"}} type="file" />
                <Input style={{width:"100%"}} label="Change Username" value={name} onChange={this.onChange.bind(this)} />
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button onClick={this.closeModal.bind(this)} color='red' icon="remove" />
              <Button onClick={this.saveData.bind(this)} color='green' icon="checkmark" />
            </Modal.Actions>
          </Modal>
        </Grid.Column>
      </Grid>
    );
  }
}
