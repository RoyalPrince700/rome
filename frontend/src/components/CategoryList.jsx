import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { getAllLocalProducts, getLocalCategorySummaries, localProducts } from '../data/localProducts';

const countInCategory = (category) => localProducts.filter((p) => p.category === category).length;
const categoryDisplayNames = {
  flat: 'Bungalow',
  bedroom: 'Duplex',
  kitchen: '3 Bedroom',
  'living-room': '2 Bedroom',
};

const CategoryList = ({ activeCategory, onCategoryClick }) => {
  const categoryRows = useMemo(() => {
    const allProducts = getAllLocalProducts();
    const featured = allProducts[0];
    const summaries = getLocalCategorySummaries();
    return [
      {
        key: 'all',
        name: 'All Properties',
        href: '/product-category?all=true',
        image: featured?.productImage?.[0],
        count: allProducts.length,
      },
      ...summaries.map((s) => ({
        key: s.category,
        name: categoryDisplayNames[s.category] || s.label,
        href: `/product-category?category=${s.category}`,
        image: s.productImage?.[0],
        count: countInCategory(s.category),
      })),
    ];
  }, []);

  return (
    <section className="w-full px-3 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div
          className="flex flex-nowrap gap-3 overflow-x-auto rounded-[2rem] border border-white/70 bg-white/70 p-2 shadow-[0_18px_60px_rgba(17,17,17,0.06)] backdrop-blur-2xl scrollbar-none [scrollbar-width:none]"
        >
          {categoryRows.map((row) => {
            const isActive = activeCategory === row.key;
            
            const content = (
              <>
                <span className={`text-xs font-black uppercase tracking-widest transition-colors sm:text-sm ${
                  isActive ? 'text-white' : 'text-neutral-600 group-hover:text-neutral-950'
                }`}>
                  {row.name}
                </span>
                <span className={`rounded-full px-2 py-0.5 text-[10px] font-black transition-colors ${
                  isActive 
                    ? 'bg-white/15 text-white' 
                    : 'bg-neutral-100 text-neutral-500 group-hover:bg-neutral-200'
                }`}>
                  {row.count}
                </span>
              </>
            );

            if (onCategoryClick) {
              return (
                <button
                  key={row.key}
                  onClick={() => onCategoryClick(row.key)}
                  className={`group relative flex shrink-0 items-center gap-2 rounded-full border px-5 py-2.5 transition-all duration-300 ${
                    isActive 
                      ? 'border-neutral-950 bg-neutral-950 shadow-[0_12px_28px_rgba(17,17,17,0.16)]' 
                      : 'border-transparent bg-transparent hover:bg-white'
                  }`}
                >
                  {content}
                </button>
              );
            }

            return (
              <Link
                key={row.key}
                to={row.href}
                className={`group relative flex shrink-0 items-center gap-2 rounded-full border px-5 py-2.5 transition-all duration-300 ${
                  isActive 
                    ? 'border-neutral-950 bg-neutral-950 shadow-[0_12px_28px_rgba(17,17,17,0.16)]' 
                    : 'border-transparent bg-transparent hover:bg-white'
                }`}
              >
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryList;
