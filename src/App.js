import React, {Component} from 'react';
import './App.css';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';

import Friends from "./containers/Friends";

import {deleteFriend, addFriend, saveFriend, filterFriendAct} from "./actions/frendActions";

class App extends Component {
  render() {
    return (
      <div className='main-wrap'>
        <Friends friends={this.props.friends} delFriend={this.props.delFriend} addFriend={this.props.addFriend} saveFriend={this.props.saveFriend} filterFriend={this.props.filterFriend}/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    friends: state.getFriends.filter(friend => friend.name.includes(state.filterFriend))
  }
}

function mapDispatchToProps(dispatch) {
  /*return {
    delFriend: (friendId)=>{
      dispatch(deleteFriend(friendId));
    }
  }*/
  return bindActionCreators({
    delFriend: deleteFriend,
    addFriend: addFriend,
    saveFriend: saveFriend,
    filterFriend: filterFriendAct
  }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
