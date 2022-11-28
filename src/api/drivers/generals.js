import axios from "axios";

export const generals = {

  getTags: () => {
    return axios.get('https://api.realworld.io/api/tags');
  },

};

