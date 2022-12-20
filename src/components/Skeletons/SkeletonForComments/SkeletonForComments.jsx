import React from 'react';

import './SkeletonForComments.scss'
import Skeleton from "@mui/material/Skeleton";

const SkeletonForComments = () => {
  let test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <section className='skeletonForComments container'>
      {test.map((elem, i) =>
        <Skeleton
          className='skeletonForComments__inner'
          variant="rectangular"
          width='100%'
          height={110}
          key={i}/>
      )}
    </section>
  );
};


export default SkeletonForComments;