import React from "react";
import HomePage from "../pages/HomePage/HomePage";
import ArticleDetailPage from "../pages/ArticleDetailPage/ArticleDetailPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import SignInPage from "../pages/SignInPage/SignInPage";
import NewArticlePage from "../pages/NewArticlePage/NewArticlePage";
import EditorPage from "../pages/EditorPage/EditorPage";

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
    component: <NewArticlePage/>,
    exact: true,
  },
  {
    path: "/editor/:slug",
    component: <EditorPage/>,
    exact: true,
  },








  {
    path: "*",
    component: <HomePage/>,
    exact: true,
  },
]