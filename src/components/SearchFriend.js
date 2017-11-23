import React, {Component} from 'react';

export default class SearchFriend extends Component {
  filter(ev) {
    this.props.filterFriend(ev.target.value);
  }

  render() {
    return (
      <input type="text" placeholder="Friend name..." onChange={this.filter.bind(this)}/>
    );
  }
}