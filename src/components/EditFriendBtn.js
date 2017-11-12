import React, {Component} from 'react';

export default class EditFriend extends Component {
  editing() {
    this.props.editData();
  }

  render() {
    let btn;
    if(this.props.edit || this.props.addNew) btn = null;
    else btn = (<button className='edit-btn' onClick={this.editing.bind(this)}>Edit</button>);

    return (<span>{btn}</span>);
  }
}