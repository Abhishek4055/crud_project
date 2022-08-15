import * as types from "./type";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USER:
    case types.GET_CREATE_USER:
    case types.DELETE_USER:
    case types.UPDATE_USER:
      return {
        ...state,
        loading: true,
      };
    case types.GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload.reverse(),
      };

    case types.GET_CREATE_USER_SUCCESS:
    case types.UPDATE_USER_SUCCESS:
      return { ...state, loading: false };

    case types.DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: state.users.filter((item) => item.id !== action.payload),
      };

    case types.GET_CREATE_USER_ERROR:
    case types.GET_USER_ERROR:
    case types.DELETE_USER_ERROR:
    case types.UPDATE_USER_ERROR:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    default:
      return state;
  }
};
export default usersReducer;
