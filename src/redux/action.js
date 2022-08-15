import * as types from "./type";

export const getUser = (name) => {
  return {
    type: types.GET_USER,
  };
};
export const setUser = (user) => ({
  type: types.GET_USER_SUCCESS,
  payload: user,
});
export const getUserError = (error) => ({
  type: types.GET_USER_ERROR,
  payload: error,
});

//create user action
export const getCreateUser = (user) => {
  return {
    type: types.GET_CREATE_USER,
    payload: user,
  };
};
export const setCreateUser = () => ({
  type: types.GET_CREATE_USER_SUCCESS,
});
export const getCreateUserError = (error) => ({
  type: types.GET_CREATE_USER_ERROR,
  payload: error,
});

//create user action
export const deleteUser = (userId) => {
  return {
    type: types.DELETE_USER,
    payload: userId,
  };
};
export const deleteUserSuccess = (userId) => ({
  type: types.DELETE_USER_SUCCESS,
  payload: userId,
});
export const deleteUserError = (error) => ({
  type: types.DELETE_USER_ERROR,
  payload: error,
});

//create user action
export const updateUser = (userInfo) => {
  return {
    type: types.UPDATE_USER,
    payload: userInfo,
  };
};
export const updateUserSuccess = () => ({
  type: types.GET_USER_SUCCESS,
});
export const updateUserError = (error) => ({
  type: types.UPDATE_USER_ERROR,
  payload: error,
});
