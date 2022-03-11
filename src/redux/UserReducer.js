import { SET_IS_LOADING, SET_USERS, SET_USER_DETAIL } from "./types";

export const userDefaultState = {
  users: [],
  userDetail: null,
  isUserLoading: false
};

const userReducer = (state = userDefaultState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.payload
      };
    case SET_USER_DETAIL:
      return {
        ...state,
        userDetail: action.payload
      };
    case SET_IS_LOADING:
      return {
        ...state,
        isUserLoading: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
