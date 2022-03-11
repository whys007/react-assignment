import { SET_IS_LOADING, SET_USERS, SET_USER_DETAIL } from "./types";

// Fetching user Detail by user ID
export const fecthUserDetail = (userID) => (dispatch) => {
  dispatch(setLoading(true));
  dispatch(setUserDetail({}));

  fetch(`https://reqres.in/api/users/${userID}`)
    .then((response) => response.json())
    .then((data) => {
      dispatch(setUserDetail(data.data));
      dispatch(setLoading(false));
    });
};

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    payload: users
  };
};

// Fetching user Detail by user ID
export const setUserDetail = (userDetail) => {
  return {
    type: SET_USER_DETAIL,
    payload: userDetail
  };
};

export const setLoading = (value) => {
  return {
    type: SET_IS_LOADING,
    payload: value
  };
};
