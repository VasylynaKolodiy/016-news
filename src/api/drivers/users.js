import axios from "axios";
import {URL} from "../../helpers/constants"

export const users = {
  createNewUser: (data) => {
    let newData = {user: data}
    return axios.post(`${URL}users`, newData);
  },

  loginUser: (data) => {
    let newData = {user: data}
    return axios.post(`${URL}users/login`, newData);
  },
};

