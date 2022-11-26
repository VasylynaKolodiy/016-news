import axios from "axios";

export const users = {

  postNewUser: (data) => {
    return axios.post('https://api.realworld.io/api/users', data);
  },

  postLoginUser: (data) => {
    return axios.post('https://api.realworld.io/api/users/login', data);
  },

  postHeaderUser: (data) => {
    return null;
  },

};

