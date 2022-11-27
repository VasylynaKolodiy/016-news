import axios from "axios";

export const users = {

  createNewUser: (data) => {
    return axios.post('https://api.realworld.io/api/users', data);
  },

  loginUser: (data) => {
    return axios.post('https://api.realworld.io/api/users/login', data);
  },
};

