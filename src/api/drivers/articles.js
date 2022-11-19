import axios from "axios";

export const articles = {
  getArticles: () => {
    return axios.get('https://api.realworld.io/api/articles');
  },
  getArticle: (slug) => {
    return axios.get('https://api.realworld.io/api/articles/' + slug);
  },

};

