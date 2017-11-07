import _ from 'lodash';

let friendsList = [
  {
    id: 1,
    name: "Mike",
    age: 22,
  },
  {
    id: 2,
    name: "John",
    age: 35
  }
];

export default function getFriends(state = friendsList, action) {
  switch(action.type) {
    case "DELETE_FRIEND":
      return _.filter(state, (state)=>action.payload !== state.id);
    case "ADD_FRIEND":
      let newFriend = {
        id: new Date().toString(),
        name: "Bob",
        age: 55
      }
      return [...state, newFriend];
    default: return state;
  }
}