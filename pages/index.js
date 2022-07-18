import React, { useState } from 'react';
import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner, DropDown } from '../components';
const index = ({ products, bannerData }) => {
  const [filteredCat, setFilteredCat] = useState('');
  const filterHandler = (e) => {
    setFilteredCat(e);
    console.log(e);
  };

  console.log(filteredCat);
  const filteredProduct = products.filter((product) => {
    return product.category === filteredCat;
  });

  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

      <div className="products-heading">
        <h2>Select Option Start Shopping!</h2>
        <DropDown onClick={setFilteredCat} />
      </div>
      <div className="products-container">
        {filteredProduct?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};
export default index;
