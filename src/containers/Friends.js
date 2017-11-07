import React, {Component} from 'react';
import './css/Friends.css';

import FriendContent from './../components/FriendContent';
import BtnAddFriend from '../components/BtnAddFriend';

export default class Friends extends Component {
  render() {
    return (
      <div>
        <div className='add-btn'><BtnAddFriend addFriend={this.props.addFriend}/></div>
        {this.props.friends.map((friend, index)=>{
          return (
            <div id='friend-wrap' key={friend.id}>
              <FriendContent friend={friend} delFriend={this.props.delFriend}/>
            </div>
          );
        })}
      </div>
    );
  }
}

