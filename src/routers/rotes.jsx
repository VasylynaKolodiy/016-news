import React from "react";
import HomePage from "../pages/HomePage/HomePage";
import ArticleDetailPage from "../pages/ArticleDetailPage/ArticleDetailPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import SignInPage from "../pages/SignInPage/SignInPage";
import NewArticle from "../pages/NewArticle/NewArticle";

export const privateRoutes = [
  {
    path: "/",
    component: <HomePage/>,
    exact: true,
  },
  {
    path: "/articles",
    component: <HomePage/>,
    exact: true,
  },
  {
    path: "/articles/:slug",
    component: <ArticleDetailPage/>,
    exact: true,
  },

  {
    path: "/signup",
    component: <SignUpPage/>,
    exact: true,
  },

  {
    path: "/signin",
    component: <SignInPage/>,
    exact: true,
  },

  {
    path: "/editor",
    component: <NewArticle/>,
    exact: true,
  },
]