import React, {Component} from 'react';

export default class ButtonDelFriend extends Component {
  delete() {
    return this.props.delFriend(this.props.friendId);
  }

  render() {
    let btn;
    if(this.props.edit) btn = null;
    else btn = (<button onClick={this.delete.bind(this)}>Delete friend</button>);

    return (<span>{btn}</span>);
  }
}