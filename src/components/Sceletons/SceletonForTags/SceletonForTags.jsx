import React from 'react';
import './SceletonForTags.scss'
import Skeleton from "@mui/material/Skeleton";

const SceletonForTags = () => {
  let test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <section className='sceletonForTags container'>
      {test.map((elem, i) =>
        <Skeleton
          className='sceletonForHomePage__inner'
          variant="rectangular"
          width='100%'
          height={30}
          key={i}/>
      )}
    </section>
  );
};

export default SceletonForTags;