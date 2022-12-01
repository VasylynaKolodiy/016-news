import axios from "axios";
import {URL} from "../../helpers/constants"

export const generals = {

  getTags: () => {
    return axios.get(`${URL}tags`);
  },

};

