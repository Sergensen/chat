import React, { Component } from 'react';
import { Button, Grid } from 'semantic-ui-react';

export default class Menu extends Component {
  constructor(props){
    super(props);
    this.state={
      username: ""
    }
  }

  onChange(e){
    this.setState({username: e.target.value});
  }
  signOut(e){
    this.props.signOut();
  }

  changeProfile(e){
    /*modal for selecting & uploading a profile pic*/
  }

  render() {
    return (
      <Grid>
        <Grid.Column width={8}>
          <Button type="button" style={{width:"100%"}} color="red" onClick={this.signOut.bind(this)}>Logout</Button>
        </Grid.Column>
        <Grid.Column width={8}>
          <Button type="button" style={{width:"100%"}} color="blue" onClick={this.changeProfile.bind(this)}>Change profile</Button>
        </Grid.Column>
      </Grid>
    );
  }
}
