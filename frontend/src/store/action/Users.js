import { get, post } from '../../utils/methods';
import { TOKEN } from '../../utils/storage/Constant';
import { clearHeaders, clearStorageData, getTokenAndSetIntoHeaders } from '../../utils/storage/Functions';
import Users from '../constants/Users';

export const login = (payload, CB) => async (dispatch) => {
  try {
    clearHeaders();
    dispatch({ type: Users.LOGIN_USER_API, loading: true, userLoggedIn: false });
    const response = await post(`/auth/login`, payload);
    if (response?.data?.status === 'failure') {
      dispatch({ type: Users.LOGIN_USER_API, loading: false, userLoggedIn: false });
      CB && CB({ error: false, data: response?.data });
    } else {
      console.log(response.data, response.data?.authentication?.principal);
      dispatch({
        type: Users.LOGIN_USER_API,
        loading: false,
        userLoggedIn: true,
        user: response.data?.token?.authentication,
      });
      CB && CB({ error: false, data: response?.data });
    }
  } catch (error) {
    dispatch({ type: Users.LOGIN_USER_API, loading: false, userLoggedIn: false });
    CB && CB({ error: true, message: error?.response?.data });
  }
};

export const checkAuth = (CB) => async (dispatch) => {
  try {
    getTokenAndSetIntoHeaders();
    dispatch({ type: Users.CHECK_AUTH_API, loading: true, userLoggedIn: false });
    const response = await get(`/userProfile`);
    if (response?.data?.status === 'failure') {
      dispatch({ type: Users.CHECK_AUTH_API, loading: false, userLoggedIn: false });
      CB && CB({ error: false, data: response?.data });
    } else {
      dispatch({
        type: Users.CHECK_AUTH_API,
        loading: false,
        userLoggedIn: true,
        user: response.data,
      });
      CB && CB({ error: false, data: response?.data });
    }
  } catch (error) {
    dispatch({ type: Users.CHECK_AUTH_API, loading: false, userLoggedIn: false });
    CB && CB({ error: true, message: error?.response?.data });
    clearStorageData(TOKEN);
  }
};

export const getUserList =
  ({ pageNo = 1, pageSize = 30, searchValue = '' }, CB) =>
  async (dispatch) => {
    try {
      dispatch({ type: Users.GET_USER_LIST, loading: true });
      const response = await get(`/users`);
      if (response?.data?.status === 'failure') {
        dispatch({ type: Users.GET_USER_LIST, loading: false });
        CB && CB({ error: false, data: response?.data });
      } else {
        dispatch({ type: Users.GET_USER_LIST, loading: false, data: response?.data });
        CB && CB({ error: false, data: response?.data });
      }
    } catch (error) {
      dispatch({ type: Users.GET_USER_LIST, loading: false });
      CB && CB({ error: true, message: error?.response?.data });
    }
  };

export const changePasswords = (payload, CB) => async (dispatch) => {
  try {
    dispatch({ type: Users.CHANGE_PASSWORD, loading: true });
    const response = await post(`/changePassword`, payload);
    if (response?.data?.status === 'failure') {
      dispatch({ type: Users.CHANGE_PASSWORD, loading: false });
      CB && CB({ error: false, data: response?.data });
    } else {
      dispatch({ type: Users.CHANGE_PASSWORD, loading: false });
      CB && CB({ error: false, data: response?.data });
    }
  } catch (error) {
    dispatch({ type: Users.CHANGE_PASSWORD, loading: false });
    CB && CB({ error: true, message: error?.response?.data });
  }
};

export const createUsers = (payload, CB) => async (dispatch) => {
  try {
    dispatch({ type: Users.CREATE_USER, loading: true });
    const response = await post(`/createUser`, payload);
    if (response?.data?.status === 'failure') {
      dispatch({ type: Users.CREATE_USER, loading: false });
      CB && CB({ error: false, data: response?.data });
    } else {
      dispatch({ type: Users.CREATE_USER, loading: false });
      CB && CB({ error: false, data: response?.data });
    }
  } catch (error) {
    dispatch({ type: Users.CREATE_USER, loading: false });
    CB && CB({ error: true, message: error?.response?.data });
  }
};
