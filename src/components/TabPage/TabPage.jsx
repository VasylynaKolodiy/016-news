import React from 'react';
import './TabPage.scss'
import ArticleCard from "../ArticleCard/ArticleCard";
import Pagination from "@mui/material/Pagination";

const TabPage = ({tabPageId, articlesState, countOfPages, pageNumber, handlePageChange}) => {

  return (
    <div id={tabPageId}
         className="feeds__tabs-inner">

      {articlesState.articles?.length > 0
        ? <div>
          <div className=' articlesList'>
            {articlesState.articles?.map((article, index) => (
              <ArticleCard article={article} tabPageId={tabPageId} key={index}/>)
            )}
          </div>

          {countOfPages > 1 &&
          (<Pagination
            className=' pagination'
            count={countOfPages}
            size="large"
            page={pageNumber}
            onChange={handlePageChange}
          />)}
        </div>

        : <h3 style={{textAlign: 'left'}}>
          No articles are here... yet.
        </h3>
      }

    </div>
  );
};

export default TabPage;