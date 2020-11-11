import axios from 'axios';
import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from "./UserTypes";

export const FetchUserRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const FetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const FetchUsersError = (error) => {
  return {
    type: FETCH_USERS_ERROR,
    payload: error,
  };
};

// Create Action Creator 
export const FetchUsers = () => {
  return async (dispatch, getState) => {
    // const statebefore = getState();
    // console.log(statebefore);
    dispatch(FetchUserRequest);
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      const users = response.data;
      dispatch(FetchUsersSuccess(users));
    }).catch(error => {
      dispatch(FetchUsersError(error.message));
    })
  }
}