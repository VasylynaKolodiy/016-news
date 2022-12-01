import axios from "axios";
import {URL} from "../../helpers/constants"

export const users = {

  createNewUser: (data) => {
    return axios.post(`${URL}users`, data);
  },

  loginUser: (data) => {
    return axios.post(`${URL}users/login`, data);
  },
};

