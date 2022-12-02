import axios from "axios";
import {URL} from "../../helpers/constants"

export const articles = {

  getArticles: ({limit, offset, tag, token}) => {
    let headers
    if (token) {
      headers = {
        'Authorization': `Token ${token}`,
      }
    }

    return axios.get(`${URL}articles?limit=${limit}&offset=${offset}${tag ? '&tag=' + tag : ''}`, token && {headers} );
  },

  getArticle: (slug) => {
    return axios.get(`${URL}articles/${slug}`);
  },

  getComments: (slug) => {
    return axios.get(`${URL}articles/${slug}/comments`);
  },

  createNewArticle: ({data, token}) => {
    const headers = {
      'Authorization': `Token ${token}`,
    }
    return axios.post(`${URL}articles`, data, {headers});
  },

};

