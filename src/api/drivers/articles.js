import axios from "axios";
import {URL} from "../../helpers/constants"
import {getHeaders} from "../../helpers";

export const articles = {
  getArticles: ({limit, offset, tag, token}) => {
    return axios.get(`${URL}articles?limit=${limit}&offset=${offset}${tag ? '&tag=' + tag : ''}`, token && getHeaders(token) );
  },

  getArticle: (slug) => {
    return axios.get(`${URL}articles/${slug}`);
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

  addFavorites: ({slug, data, token}) => {
    return axios.post(`${URL}articles/${slug}/favorite`, data,getHeaders(token) );
  },

  deleteFavorites: ({slug, token}) => {
    return axios.delete(`${URL}articles/${slug}/favorite`,getHeaders(token) );
  },
};

