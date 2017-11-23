import _ from 'lodash';

let friendsList = [
  {
    id: 1,
    name: "Mike",
    age: 22,
    phone: "0666106217"
  },
  {
    id: 2,
    name: "John",
    age: 35,
    phone: "0666106217"
  }
];

export function getFriends(state = friendsList, action) {
  switch(action.type) {
    case "DELETE_FRIEND":
    return _.filter(state, (state)=>action.payload !== state.id);

    case "ADD_FRIEND":
      let lastId = _.last(state);
      if(lastId) lastId = lastId.id + 1;
      else lastId = 1;
      let newFriend = {
        id: lastId,
        name: "name",
        age: 0,
        phone: "0"
      }
    return [...state, newFriend];

    case "SAVE_FRIEND":
    return _.map(state, (friend)=>{
      if(friend.id === action.payload.id) {
        friend.name = action.payload.name;
        friend.age = action.payload.age;
        friend.phone = action.payload.phone;
      }
      return friend;
    });

    default: return state;
  }
}

export function filterFriend(state = "", action) {
  if(action.type === "FILTER_FRIEND") return action.payload;
  else return state;
}