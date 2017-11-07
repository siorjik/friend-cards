import React, {Component} from 'react';

import ButtonDelFriend from './ButtonDelFriend';
import EditFriend from './EditFriendBtn';
import SaveFriendBtn from './SaveFriendBtn';

export default class FriendContent extends Component {
  constructor(props) {
    super(props);
    this.state = {edit: false}
  }

  editData() {
    this.setState({edit: true});
  }

  saveData() {
    this.setState({edit: false});
    this.savingNewData();
  }

  savingNewData(ev) {
    console.log("new data");
  }

  render() {
    console.log(this.state.edit+" / "+this.props.friend.id);
    let content;
    if(this.state.edit) content = (
      <form onSubmit={this.savingNewData.bind(this)}>
        <label>Name: <input type="text"/></label>
        <label>Age: <input type="number"/></label>
        <SaveFriendBtn edit={this.state.edit} saveData={this.saveData.bind(this)}/>
      </form>
    );
    else content = (<span className='friend-cont'><p>Name: {this.props.friend.name}</p><p>Age: {this.props.friend.age}</p></span>);

    return (
      <span>
        {content}
        <ButtonDelFriend delFriend={this.props.delFriend} friendId={this.props.friend.id} edit={this.state.edit}/>
        <EditFriend editData={this.editData.bind(this)} edit={this.state.edit}/>
      </span>
    )
  }
}