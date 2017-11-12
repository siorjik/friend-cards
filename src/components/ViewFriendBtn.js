import React, {Component} from 'react';

export default class ViewFriendBtn extends Component {
  render() {
    let btn;
    if(this.props.edit || this.props.addNew) btn = null;
    else btn = (<button className='view-btn'>View</button>);

    return (<span>{btn}</span>);
  }
}