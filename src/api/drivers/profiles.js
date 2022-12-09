import axios from "axios";
import {URL} from "../../helpers/constants"

export const profiles = {

  getProfile: (username) => {
    return axios.get(`${URL}/profiles/${username}`);
  },

};

