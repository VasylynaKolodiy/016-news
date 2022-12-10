import axios from "axios";
import {URL} from "../../helpers/constants"
import {getHeaders} from "../../helpers";

export const profiles = {

  getProfile: ({username, token}) => {
    return axios.get(`${URL}profiles/${username}`, token && getHeaders(token));
  },

  follow: ({username, token}) => {
    return axios.post(`${URL}profiles/${username}/follow`, null, token && getHeaders(token) );
  },

  unfollow: ({username, token}) => {
    return axios.delete(`${URL}profiles/${username}/follow`, token && getHeaders(token) );
  },
};

