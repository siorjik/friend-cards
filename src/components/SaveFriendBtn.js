import React, {Component} from 'react';

export default class SaveFriendBtn extends Component {
  render() {
    let btn;
    if(!this.props.edit && !this.props.addNew) btn = null;
    else btn = (<button className='save-btn'>Save</button>);

    return (<span>{btn}</span>);
  }
}