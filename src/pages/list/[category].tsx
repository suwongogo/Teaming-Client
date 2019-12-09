import React from 'react';
import {useRouter} from 'next/router';

const category = () => {
  const router = useRouter();
  console.log(router);

  const {category} = router.query;

  return <div>{category}</div>;
};

export default category;
