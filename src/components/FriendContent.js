import React, {Component} from 'react';

import ButtonDelFriend from './ButtonDelFriend';
import EditFriend from './EditFriendBtn';
import SaveFriendBtn from './SaveFriendBtn';
import ViewFriendBtn from './ViewFriendBtn';

export default class FriendContent extends Component {
  constructor(props) {
    super(props);
    this.state = {edit: false, addNew: this.props.newFriend}
  }

  editData() {
    this.setState({edit: true});
  }

  saveData() {
    this.setState({edit: false, addNew: false});
    this.props.saveInfo(this.nameInp.value, this.ageInp.value, this.phoneInp.value, this.props.friend.id);
  }

  render() {
    let content, name = this.props.friend.name, age = this.props.friend.age, phone = this.props.friend.phone;
    if(this.state.addNew) {
      name = "name";
      age = 0;
      phone = 0;
    }
    if(this.state.edit || this.state.addNew) {
        content = (
          <form onSubmit={this.saveData.bind(this)}>
            <label><b><i>Name</i>:</b> <input type="text" ref={(input)=>{this.nameInp=input;}} defaultValue={name} required/></label>
            <label><b><i>Age</i>:</b> <input type="number" ref={(input)=>{this.ageInp=input;}} defaultValue={age} required/></label>
            <label><b><i>Phone</i>:</b> <input type="text" ref={(input)=>{this.phoneInp=input;}} defaultValue={phone} required/></label>
            <SaveFriendBtn edit={this.state.edit} saveData={this.saveData.bind(this)} addNew={this.state.addNew}/>
          </form>
        );
    }
    else content = (<span className='friend-cont'><p><b><i>Name</i>:</b> {this.props.friend.name}</p><p><b><i>Age</i>:</b> {this.props.friend.age}</p><p><b><i>Phone</i>:</b> {this.props.friend.phone}</p></span>);

    return (
      <span>
        {content}
        <ButtonDelFriend delFriend={this.props.delFriend} friendId={this.props.friend.id} edit={this.state.edit} addNew={this.state.addNew}/>
        <ViewFriendBtn edit={this.state.edit} addNew={this.state.addNew}/>
        <EditFriend editData={this.editData.bind(this)} edit={this.state.edit} addNew={this.state.addNew}/>
      </span>
    )
  }
}