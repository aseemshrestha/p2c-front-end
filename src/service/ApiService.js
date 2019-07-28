import axios from "axios";
import { SESSION_STORAGE_TOKEN } from "../constants/Constants";
const BASE_URL = process.env.REACT_APP_BASE_URL;

let headerWithoutLogin = {
  "Access-Control-Allow-Origin": "POST"
};

let headerToken = {
  "Content-Type": "application/json",
  Authorization: sessionStorage.getItem(SESSION_STORAGE_TOKEN),
  "Access-Control-Allow-Origin": "GET,POST"
};

class ApiService {
  createNewAccount(data) {
    return axios.post(`${BASE_URL}/api/public/addNew/parent`, data, {
      headers: headerWithoutLogin
    });
  }
  registerChild(data) {
    return axios.post(`${BASE_URL}/api/user/addNew/child`, data, {
      headers: headerToken
    });
  }

  login(data) {
    if (data.hasOwnProperty("message")) delete data.message;
    return axios.post(`${BASE_URL}/login`, data, {
      headers: headerWithoutLogin
    });
  }

  getParentData(data) {
    return axios.get(`${BASE_URL}/api/user/${data}`, {
      headers: headerToken
    });
  }
}

export default new ApiService();
