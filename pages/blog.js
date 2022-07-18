import React from 'react';
import Feed from '../blog/Feed';
import { client } from '../lib/client';
const blog = ({ post }) => {
  return (
    <div>
      <Feed post={post} />
    </div>
  );
};
export const getServerSideProps = async () => {
  const query = '*[_type == "post"]';
  const post = await client.fetch(query);

  return {
    props: { post },
  };
};

export default blog;
