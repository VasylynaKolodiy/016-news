import React from 'react';
import Skeleton from "@mui/material/Skeleton";

import './SceletonForHomePage.scss'

const SceletonForHomePage = () => {
  let test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <section className='sceletonForHomePage container'>
      {test.map((elem, i) =>
        <Skeleton
          className='sceletonForHomePage__inner'
          variant="rectangular"
          width='100%'
          height={192}
          key={i}/>
      )}
    </section>
  );
};


export default SceletonForHomePage;