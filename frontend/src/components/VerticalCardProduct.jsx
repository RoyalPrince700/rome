import React, { useEffect, useState } from 'react';
import fetchCategoryWiseProduct from '../helpers/fetchCategoryWiseProduct';
import fetchAllProducts from '../helpers/fetchAllProducts';
import ProductGridCard from './ProductGridCard';

const VerticalCardProduct = ({ category, heading, showHeading = true }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const loadingList = new Array(10).fill(null);

  const fetchData = async () => {
    setLoading(true);
    let productData;
    if (category === "all") {
      productData = await fetchAllProducts();
    } else {
      productData = await fetchCategoryWiseProduct(category);
    }
    setLoading(false);
    setData(productData?.data);
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className={`w-full px-3 sm:px-6 lg:px-8 ${showHeading ? 'py-5 sm:py-10' : 'pb-8 pt-0 sm:pb-14 sm:pt-0'}`}>
      <section className="mx-auto max-w-7xl">
      {showHeading && (
        <div className="mb-10 text-center sm:mb-12">
          <h2 className="text-4xl font-black tracking-[-0.075em] text-neutral-950 sm:text-5xl md:text-6xl">
            {heading || "Featured spaces"}
          </h2>
          <p className="mx-auto mt-4 max-w-xl px-2 text-xs font-black uppercase leading-6 tracking-[0.24em] text-neutral-500 sm:px-0">
            Browse verified buildings and room-level views for buying or renting
          </p>
        </div>
      )}

      {loading ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {loadingList.map((_, index) => (
            <div key={index} className="overflow-hidden rounded-[1.75rem] border border-white/70 bg-white">
              <div className="aspect-square animate-pulse bg-white"></div>
              <div className="p-4">
                <div className="mb-2 h-4 animate-pulse bg-slate-50"></div>
                <div className="mb-4 h-4 w-2/3 animate-pulse bg-slate-50"></div>
                <div className="flex gap-2">
                  <div className="h-10 flex-1 animate-pulse bg-slate-50"></div>
                  <div className="h-10 w-10 animate-pulse bg-slate-50"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {data?.map((product) => (
            <ProductGridCard key={product?._id} product={product} />
          ))}
        </div>
      )}
      </section>
    </div>
  );
};

export default VerticalCardProduct;
