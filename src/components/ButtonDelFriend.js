import React, {Component} from 'react';

export default class ButtonDelFriend extends Component {
  delete() {
    return this.props.delFriend(this.props.friendId);
  }

  render() {
    let btn;
    if(this.props.edit || this.props.addNew) btn = null;
    else btn = (<button className='del-btn' onClick={this.delete.bind(this)}>Delete</button>);

    return (<span>{btn}</span>);
  }
}