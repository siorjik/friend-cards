import React, {Component} from 'react';
import './css/Friends.css';

import FriendContent from './../components/FriendContent';
import BtnAddFriend from '../components/BtnAddFriend';

export default class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {newFriend: false}
  }
  
  addNewFriend() {
    this.props.addFriend();
    this.setState({newFriend: true});
  }

  saveInfo(name, age, id) {
    let friendData = {
      name: name,
      age: age,
      id: id
    }
    this.props.saveFriend(friendData);
  }

  render() {
    return (
      <div>
        <h1>Friends cards</h1>
        <div className='add-btn'><BtnAddFriend addNewFriend={this.addNewFriend.bind(this)}/></div>
        {this.props.friends.map((friend, index)=>{
          return (
            <div id='friend-wrap' key={friend.id}>
              <FriendContent friend={friend} delFriend={this.props.delFriend} newFriend={this.state.newFriend} saveInfo={this.saveInfo.bind(this)}/>
            </div>
          );
        })}
      </div>
    );
  }
}

