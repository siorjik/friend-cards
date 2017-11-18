import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class ViewFriendBtn extends Component {
  render() {
    let btn;
    if(this.props.edit || this.props.addNew) btn = null;
    else btn = (<NavLink to={`/friend/${this.props.id}`}><button className='view-btn'>View</button></NavLink>);

    return (<span>{btn}</span>);
  }
}