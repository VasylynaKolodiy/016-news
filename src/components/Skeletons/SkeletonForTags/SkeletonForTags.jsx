import React from 'react';
import './SkeletonForTags.scss'
import Skeleton from "@mui/material/Skeleton";

const SkeletonForTags = () => {
  let test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <section className='skeletonForTags container'>
      {test.map((elem, i) =>
        <Skeleton
          className='skeletonForTags__inner'
          variant="rectangular"
          width='100%'
          height={30}
          key={i}/>
      )}
    </section>
  );
};

export default SkeletonForTags;