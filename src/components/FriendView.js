import React, {Component} from 'react';
import './css/FriendView.css';
import {connect} from "react-redux";
import {NavLink} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

class FriendView extends Component {
  render() {
    return (
      <div>
        <div className='friend-view'>
          <h2><span><i>Name</i>:</span> {this.props.friend.name}</h2>
          <h3><span><i>Age</i>:</span> {this.props.friend.age}</h3>
          <h3><span><i>Phone</i>:</span> {this.props.friend.phone}</h3>
          <NavLink to="/"><button className='view-back'>Back</button></NavLink>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state, ownProps)=>{
  return {
    friend: state.getFriends.find((friend)=>friend.id === +ownProps.match.params.id)
  }
}

export default withRouter(connect(mapStateToProps)(FriendView));