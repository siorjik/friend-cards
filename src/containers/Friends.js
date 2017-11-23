import React, {Component} from 'react';
import './css/Friends.css';

import FriendContent from './../components/FriendContent';
import BtnAddFriend from './../components/BtnAddFriend';
import SearchFriend from './../components/SearchFriend';

export default class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newFriend: false,
      filter: false
    }
  }
  
  addNewFriend() {
    this.props.addFriend();
    this.setState({newFriend: true});
  }

  saveInfo(name, age, phone, id) {
    let friendData = {
      name: name,
      age: age,
      id: id,
      phone: phone
    }
    this.props.saveFriend(friendData);
  }

  filterFriend(data) {
    if(!data) this.setState({newFriend: false});
    this.props.filterFriend(data);
  }

  render() {
    return (
      <div>
        <h1>Friends cards</h1>
        <div className='add-btn'><BtnAddFriend addNewFriend={this.addNewFriend.bind(this)}/></div>
        <div className='search-friend'><SearchFriend filterFriend={this.filterFriend.bind(this)}/></div>
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

