import axios from "axios";
import Cookies from "js-cookie";
import { TOKEN, USER } from "./Constant";

export const _setDataToCookies = async (key, data) => {
  Cookies.set(key, data);
};

export const clearStorageData = (key) => {
  Cookies.remove(key);
};

export const getValueIntoStorage = (key) => {
  try {
    const value = Cookies.get(key);
    if (value !== null) {
      return value;
    } else {
      return null;
    }
  } catch (error) {
    // Error retrieving data
    return null;
  }
};

export const getTokenAndSetIntoHeaders = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    // axios.defaults.headers.common["Access-Control-Allow-Origin"] = `*`;
    // axios.defaults.headers.common["Access-Control-Allow-Methods"] = `DELETE, POST, GET, OPTIONS`;
  } else {
    let accessToken = getValueIntoStorage(TOKEN);
    // axios.defaults.headers.common["Access-Control-Allow-Origin"] = `*`;
    // axios.defaults.headers.common["Access-Control-Allow-Methods"] = `DELETE, POST, GET, OPTIONS`;
    if (accessToken) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
      // axios.defaults.headers.common["Access-Control-Allow-Origin"] = `*`;
      // axios.defaults.headers.common["Access-Control-Allow-Methods"] = `DELETE, POST, GET, OPTIONS`;
    }
  }
};
export const clearHeaders = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = ``;
  } else {
    let accessToken = getValueIntoStorage(TOKEN);
    if (accessToken) {
      axios.defaults.headers.common["Authorization"] = ``;
    }
  }
};
