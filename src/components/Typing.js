import React, { Component } from 'react';

export default class Typing extends Component {
  onFocus = (e) => {
    e.target.blur();
  }

  render() {
    const { typing } = this.props;
    return (
      <p>{typing?typing+" is typing ...":""}</p>
    );
  }
}
