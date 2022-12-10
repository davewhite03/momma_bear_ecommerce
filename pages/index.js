import React, { useState, useEffect } from 'react';
import { client } from '../lib/client';
import {
  Product,
  FooterBanner,
  HeroBanner,
  DropDown,
  Pagination,
} from '../components';

const index = ({ products, bannerData }) => {
  const [filteredCat, setFilteredCat] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  console.log(products);
  const filteredProduct = products.filter((product) => {
    return product.category === filteredCat;
  });
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredProduct.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const nPages = Math.ceil(filteredProduct.length / recordsPerPage);

  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

      <div className="products-heading">
        <h2>Select Option Start Shopping!</h2>

        <DropDown onClick={setFilteredCat} />
      </div>
      {filteredCat ? (
        <Pagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ) : (
        ''
      )}

      <div className="products-container">
        {currentRecords?.map((product) => (
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
