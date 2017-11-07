import React, {Component} from 'react';

export default class BtnAddFriend extends Component {
  add() {
    //return this.props.addFriend();
    console.log("add");
    return this.props.addFriend();
  }

  render() {
    return (<button onClick={this.add.bind(this)}>Add new friend</button>);
  }
}