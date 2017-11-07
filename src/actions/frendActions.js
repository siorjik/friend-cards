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