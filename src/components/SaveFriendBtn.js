import React, {Component} from 'react';

export default class SaveFriendBtn extends Component {
  save() {
    //return this.props.delFriend(this.props.friendId);
    console.log("save");
    this.props.saveData();
  }

  render() {
    let btn;
    if(!this.props.edit) btn = null;
    else btn = (<button onClick={this.save.bind(this)}>Save</button>);

    return (<span>{btn}</span>);
  }
}