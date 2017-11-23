export const deleteFriend = (friendId)=>{
  return {
    type: "DELETE_FRIEND",
    payload: friendId
  }
}

export const addFriend = ()=>{
  return {
    type: "ADD_FRIEND"
  }
}

export const saveFriend = (data)=>{
  return {
    type: "SAVE_FRIEND",
    payload: data
  }
}

export const filterFriendAct = (data) => {
  return {
    type: "FILTER_FRIEND",
    payload: data
  }
}