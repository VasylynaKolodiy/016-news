import React from 'react';
import './TabPage.scss'
import ArticleCard from "../ArticleCard/ArticleCard";
import Pagination from "@mui/material/Pagination";
import {useSelector} from "react-redux";
import SkeletonForArticlesList from "../Skeletons/SkeletonForArticlesList/SkeletonForArticlesList";

const TabPage = ({tabPageId, articlesState, countOfPages, pageNumber, handlePageChange}) => {

  const isArticlesLoading = useSelector((state) => state.articles.loading);

  return (
    <div id={tabPageId}
         className="feeds__tabs-inner">

      {isArticlesLoading
        ? <SkeletonForArticlesList/>
        : articlesState.articles?.length > 0
          ? (<div className=' articlesList'>
            {articlesState.articles?.map((article, index) => (
              <ArticleCard article={article} tabPageId={tabPageId} key={index}/>)
            )}
          </div>)
          : <h3 style={{textAlign: 'left'}}>
            No articles are here... yet.
          </h3>
      }

      {countOfPages > 1 &&
      (<Pagination
        className=' pagination'
        count={countOfPages}
        size="large"
        page={pageNumber}
        onChange={handlePageChange}
      />)
      }

    </div>
  );
};

export default TabPage;