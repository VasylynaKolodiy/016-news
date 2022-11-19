import { call, put, all, takeLatest } from "redux-saga/effects";
import * as articlesActions from "../actions/articles";
import {Api} from "../api";

function* getArticles(action) {
  try {
    const res = yield call(Api.articles.getArticles, action.payload);
    yield put({type: articlesActions.GET_ARTICLES_SUCCESS, payload: res.data});

  } catch (err) {
    yield put({ type: articlesActions.GET_ARTICLES_FAIL, payload: { error: err.message } });
  }
}

function* getArticle(action) {
  try {
    const res = yield call(Api.articles.getArticle, action.payload);
    yield put({type: articlesActions.GET_ARTICLE_SUCCESS, payload: res.data});

  } catch (err) {
    yield put({ type: articlesActions.GET_ARTICLE_FAIL, payload: { error: err.message } });
  }
}

export default all([
  takeLatest(articlesActions.GET_ARTICLES_REQUEST, getArticles),
  takeLatest(articlesActions.GET_ARTICLE_REQUEST, getArticle),
])
