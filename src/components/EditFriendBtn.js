import React, {Component} from 'react';

export default class EditFriend extends Component {
  editing() {
    //return this.props.delFriend(this.props.friendId);
    console.log("edit");
    this.props.editData();
  }

  render() {
    let btn;
    if(this.props.edit) btn = null;
    else btn = (<button onClick={this.editing.bind(this)}>Edit friend</button>);

    return (<span>{btn}</span>);
  }
}