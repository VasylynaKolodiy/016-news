import axios from "axios";
import {URL} from "../../helpers/constants"
import {getHeaders} from "../../helpers";

export const users = {
  createNewUser: (data) => {
    let newData = {user: data}
    return axios.post(`${URL}users`, newData);
  },

  loginUser: (data) => {
    let newData = {user: data}
    return axios.post(`${URL}users/login`, newData);
  },

  getUser: (token) => {
    return axios.get(`${URL}user`, token && getHeaders(token) );
  },

  editUser: ({data, token}) => {
    return axios.put(`${URL}user`, data, token && getHeaders(token));
  },


};

