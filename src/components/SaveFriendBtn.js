import React, {Component} from 'react';

export default class SaveFriendBtn extends Component {
  save(ev) {
    ev.preventDefault();
    this.props.saveData();
  }

  render() {
    let btn;
    if(!this.props.edit && !this.props.addNew) btn = null;
    else btn = (<button className='save-btn' onClick={this.save.bind(this)}>Save</button>);

    return (<span>{btn}</span>);
  }
}