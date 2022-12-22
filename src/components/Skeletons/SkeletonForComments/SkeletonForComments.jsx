import React from 'react';

import './SkeletonForComments.scss'
import Skeleton from "@mui/material/Skeleton";

const SkeletonForComments = () => {
  let test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <section className='skeletonForComments container'>
      <Skeleton
        className='skeletonForComments__title'
        variant="text"
        width='20%'
        height={70}
      />

      {test.map((elem, i) =>
        <Skeleton
          className='skeletonForComments__inner'
          variant="rectangular"
          width='80%'
          height={110}
          key={i}>

          <div className='skeletonForComments__left'>
            <Skeleton
              className='skeletonForComments__circular'
              variant="circular"
              width={40}
              height={40}
            />

            <Skeleton
              className='skeletonForComments__text'
              variant="text"
              sx={{fontSize: '3rem'}}
              width='100%'
            />
          </div>

          <div className='skeletonForComments__right'>
            <Skeleton
              className='skeletonForComments__text'
              variant="text"
              sx={{fontSize: '7rem'}}
              width='100%'
            />
          </div>


        </Skeleton>
      )}
    </section>
  );
};


export default SkeletonForComments;