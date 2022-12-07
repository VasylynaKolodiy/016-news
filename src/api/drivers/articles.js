import axios from "axios";
import {URL} from "../../helpers/constants"
import {getHeaders} from "../../helpers";

export const articles = {
  getArticles: ({limit, offset, tag, token}) => {
    return axios.get(`${URL}articles?limit=${limit}&offset=${offset}${tag ? '&tag=' + tag : ''}`, token && getHeaders(token) );
  },

  getArticle: ({slug, token}) => {
    return axios.get(`${URL}articles/${slug}`, token && getHeaders(token) );
  },

  getComments: (slug) => {
    return axios.get(`${URL}articles/${slug}/comments`);
  },

  createNewArticle: ({data, token}) => {
    return axios.post(`${URL}articles`, data, token && getHeaders(token));
  },

  deleteArticle: ({slug, token}) => {
    return axios.delete(`${URL}articles/${slug}`, token && getHeaders(token));
  },

  addFavorites: ({slug, token}) => {
    return axios.post(`${URL}articles/${slug}/favorite`, null, token && getHeaders(token) );
  },

  deleteFavorites: ({slug, token}) => {
    return axios.delete(`${URL}articles/${slug}/favorite`, token && getHeaders(token) );
  },

  editArticle: ({slug, data, token}) => {
    return axios.put(`${URL}articles/${slug}`, data, token && getHeaders(token) );
  },

  addComment: ({slug, data, token}) => {
    return axios.post(`${URL}articles/${slug}/comments`, data, token && getHeaders(token) );
  },

};

