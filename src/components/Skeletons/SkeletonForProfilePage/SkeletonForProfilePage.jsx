import React from 'react';
import './SkeletonForProfilePage.scss'
import Skeleton from "@mui/material/Skeleton";
import SkeletonForArticlesList from "../SkeletonForArticlesList/SkeletonForArticlesList";

const SkeletonForProfilePage = () => {

  return (
    <section className='skeletonForProfilePage container'>

      <Skeleton
        className='skeletonForProfilePage__inner'
        variant="rectangular"
        width='100%'
        height={313}
      >
        <Skeleton
          className='skeletonForProfilePage__circular'
          variant="circular"
          width={200}
          height={200}
        />

        <Skeleton
          className='skeletonForProfilePage__text'
          variant="text"
          sx={{ fontSize: '3rem' }}
        />

      </Skeleton>


      <Skeleton
        className='skeletonForProfilePage__tab'
        variant="text"
        sx={{ fontSize: '3rem' }}
      />

      <SkeletonForArticlesList/>

    </section>
  );
};

export default SkeletonForProfilePage;