import Users from '../constants/Users';

const initialState = {
  loading: false,
  updateLoading: false,
  loginLoading: false,
  user: {},
  checkAuthLoading: false,
  userLoggedIn: false,
  getUserLoading: false,
  usersList: {},
  changePasswordLoading: false,
  createUserLoading: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case Users.CHECK_AUTH_API:
      return {
        ...state,
        loading: action.loading,
        userLoggedIn: action.userLoggedIn,
        user: action.user,
      };
    case Users.LOGIN_USER_API:
      return {
        ...state,
        loginLoading: action.loading,
        userLoggedIn: action.userLoggedIn,
        user: action.user,
      };
    case Users.CREATE_USER:
      return {
        ...state,
        createUserLoading: action.loading,
      };
    case Users.CHANGE_PASSWORD:
      return {
        ...state,
        changePasswordLoading: action.loading,
      };
    case Users.GET_USER_LIST:
      return {
        ...state,
        getUserLoading: action.loading,
        usersList: action.data,
      };
    default:
      return state;
  }
};
