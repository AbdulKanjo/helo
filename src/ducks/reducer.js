const initialState = {
  username: "",
  id: "",
  profile_pic: ""
};

const UPDATE_USERNAME = "UPDATE_USERNAME";

const UPDATE_PROFILE_PIC = "UPDATE_PROFILE_PIC";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USERNAME:
      return Object.assign({}, state, { username: action.payload });
    case UPDATE_PROFILE_PIC:
      return Object.assign({}, state, { profile_pic: action.payload });
    default:
      return state;
  }
}
export function updateUsername(username) {
  return {
    type: UPDATE_USERNAME,
    payload: username
  };
}
