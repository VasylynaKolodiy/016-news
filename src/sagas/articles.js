import { call, put, all, takeLatest, select } from "redux-saga/effects";
import * as articlesActions from "../actions/articles";
import {Api} from "../api";
import React from "react";

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
    yield put({type: articlesActions.GET_ARTICLE_SUCCESS, payload: res.data.article});

  } catch (err) {
    yield put({ type: articlesActions.GET_ARTICLE_FAIL, payload: { error: err.message } });
  }
}

function* getComments(action) {
  try {
    const res = yield call(Api.articles.getComments, action.payload);
    yield put({type: articlesActions.GET_COMMENTS_SUCCESS, payload: res.data.comments});

  } catch (err) {
    yield put({ type: articlesActions.GET_COMMENTS_FAIL, payload: { error: err.message } });
  }
}

function* createNewArticle(action) {
  try {
    const res = yield call(Api.articles.createNewArticle, action.payload);
    yield put({type: articlesActions.CREATE_NEW_ARTICLE_SUCCESS, payload: res.data.comments});

  } catch (err) {
    yield put({ type: articlesActions.CREATE_NEW_ARTICLE_FAIL, payload: { error: err.message } });
  }
}

function* deleteArticle(action) {
  try {
    const articles = yield select((state) => state.articles.articles)
    yield call(Api.articles.deleteArticle, action.payload);
    const res = articles.articles.filter((art) => art.slug !== (action.payload.slug))
    yield put({type: articlesActions.DELETE_ARTICLE_SUCCESS, payload: res});
    // yield delay(0)
    // yield put( push('/articles'));
    //window.location = '/';
    //yield put(routerRedux.push('/'));
  } catch (err) {
    yield put({ type: articlesActions.DELETE_ARTICLE_FAIL, payload: { error: err.message } });
  }
}

export default all([
  takeLatest(articlesActions.GET_ARTICLES_REQUEST, getArticles),
  takeLatest(articlesActions.GET_ARTICLE_REQUEST, getArticle),
  takeLatest(articlesActions.GET_COMMENTS_REQUEST, getComments),
  takeLatest(articlesActions.CREATE_NEW_ARTICLE_REQUEST, createNewArticle),
  takeLatest(articlesActions.DELETE_ARTICLE_REQUEST, deleteArticle),
])
