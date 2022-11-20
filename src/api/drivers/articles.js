import axios from "axios";

export const articles = {

  getArticles: ({limit, offset}) => {
    return axios.get('https://api.realworld.io/api/articles?limit=' + limit + '&offset=' + offset);
  },

  getArticle: (slug) => {
    return axios.get('https://api.realworld.io/api/articles/' + slug);
  },

  getComments: (slug) => {
    return axios.get('https://api.realworld.io/api/articles/' + slug + '/comments' );
  },

};

