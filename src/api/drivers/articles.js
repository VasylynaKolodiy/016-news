import axios from "axios";
import {URL} from "../../helpers/constants"
import {getHeaders} from "../../helpers";

export const articles = {
  getArticles: ({limit, offset, tag, token}) => {
    return axios.get(`${URL}articles?limit=${limit}&offset=${offset}${tag ? '&tag=' + tag : ''}`, token && getHeaders(token) );
  },

  getArticle: ({slug, token}) => {
    return axios.get(`${URL}articles/${slug}`, getHeaders(token) );
  },

  getComments: (slug) => {
    return axios.get(`${URL}articles/${slug}/comments`);
  },

  createNewArticle: ({data, token}) => {
    return axios.post(`${URL}articles`, data, getHeaders(token));
  },

  deleteArticle: ({slug, token}) => {
    return axios.delete(`${URL}articles/${slug}`,getHeaders(token));
  },

  addFavorites: ({slug, token}) => {
    return axios.post(`${URL}articles/${slug}/favorite`, null, getHeaders(token) );
  },

  deleteFavorites: ({slug, token}) => {
    return axios.delete(`${URL}articles/${slug}/favorite`, getHeaders(token) );
  },

  editArticle: ({slug, data, token}) => {
    return axios.post(`${URL}articles/${slug}`, data, getHeaders(token) );
  },
};

