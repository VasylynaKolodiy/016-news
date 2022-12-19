import React from 'react';
import './SceletonForProfilePage.scss'
import Skeleton from "@mui/material/Skeleton";
import SceletonForHomePage from "../SceletonForHomePage/SceletonForHomePage";

const SceletonForProfilePage = () => {

  return (
    <section className='sceletonForProfilePage container'>

      <Skeleton
        className='sceletonForProfilePage__inner'
        variant="rectangular"
        width='100%'
        height={313}
      >
        <Skeleton
          className='sceletonForProfilePage__circular'
          variant="circular"
          width={200}
          height={200}
        />

        <Skeleton
          className='sceletonForProfilePage__text'
          variant="text"
          sx={{ fontSize: '3rem' }}
        />

      </Skeleton>


      <Skeleton
        className='sceletonForProfilePage__tab'
        variant="text"
        sx={{ fontSize: '3rem' }}
      />

      <SceletonForHomePage/>

    </section>
  );
};

export default SceletonForProfilePage;