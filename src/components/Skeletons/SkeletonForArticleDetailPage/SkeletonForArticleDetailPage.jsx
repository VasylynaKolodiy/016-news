import React from 'react';
import './SkeletonForArticleDetailPage.scss'
import Skeleton from "@mui/material/Skeleton";
import SkeletonForComments from "../SkeletonForComments/SkeletonForComments";

const SkeletonForArticleDetailPage = () => {
  return (
    <section className='skeletonForArticleDetailPage'>
      <Skeleton
        className='skeletonForArticleDetailPage__breadcrumbs'
        variant="rectangular"
        height={20}
        width='30%'
      />

      <div className='skeletonForArticleDetailPage__left'>

        <Skeleton
          className='skeletonForArticleDetailPage__circular'
          variant="circular"
          width={60}
          height={60}
        />
        <Skeleton
          className='skeletonForArticleDetailPage__text'
          variant="rectangular"
          width='15%'
          height={36}
        />

        <Skeleton
          className='skeletonForArticleDetailPage__transparent'
          variant="rectangular"
          width='65%'
          height={36}
        />

        <Skeleton
          className='skeletonForArticleDetailPage__text'
          variant="rectangular"
          width='15%'
          height={36}
        />
      </div>

      <Skeleton
        className='skeletonForArticleDetailPage__title'
        variant="rectangular"
        width='100%'
        height={100}/>

      <Skeleton
        className='skeletonForArticleDetailPage__body'
        variant="rectangular"
        width='100%'
        height={250}/>

      <SkeletonForComments/>

    </section>
  );
};

export default SkeletonForArticleDetailPage;