import React from 'react';
import { Link } from 'react-router-dom';
import { FaLocationDot, FaStar } from 'react-icons/fa6';
import displayNARCurrency from '../helpers/displayCurrency';
import scrollTop from '../helpers/scrollTop';

const ProductGridCard = ({ product }) => {
  const statusRaw = product?.productStatus;
  const statusLabel =
    statusRaw && String(statusRaw).toLowerCase() !== 'preorder' ? statusRaw : '';

  return (
    <div className="group flex h-full min-w-0 flex-col overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/80 shadow-[0_20px_60px_rgba(17,17,17,0.08)] backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(17,17,17,0.14)]">
      <Link
        to={`/product/${product?._id}`}
        onClick={scrollTop}
        className="flex min-h-0 flex-1 flex-col"
      >
        <div className="relative p-2">
          <div className="aspect-[4/3] overflow-hidden rounded-[1.35rem] bg-neutral-100">
            <img
              src={product?.productImage?.[0]}
              alt={product?.productName}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute left-5 top-5 rounded-full bg-white/85 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.22em] text-neutral-950 shadow-sm backdrop-blur">
            {statusLabel || 'Verified'}
          </div>
          <div className="absolute bottom-5 right-5 rounded-full bg-neutral-950/85 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.22em] text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
            Tour
          </div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col px-5 pb-0 pt-2">
          <p className="truncate text-[9px] font-black uppercase tracking-[0.24em] text-neutral-500">
            {product?.category}
          </p>
          <h3 className="mt-1 min-w-0 line-clamp-1 text-base font-black tracking-[-0.04em] text-neutral-950 sm:text-lg">
            {product?.productName}
          </h3>

          <div className="mt-3 flex min-w-0 flex-wrap items-center gap-2">
            <div className="flex shrink-0 items-center gap-1 text-neutral-950">
              <FaStar className="h-3 w-3" />
              <span className="text-[10px] font-black uppercase tracking-widest text-neutral-950">{product?.rating || 4.5}</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">{product?.brandName}</span>
            </div>
          </div>

          {product?.state ? (
            <div className="mt-2 flex min-w-0 items-center gap-1.5 text-neutral-600">
              <FaLocationDot className="h-3.5 w-3.5 shrink-0 text-neutral-950" aria-hidden />
              <span className="truncate text-[10px] font-black uppercase tracking-[0.2em] text-neutral-700">{product.state}</span>
            </div>
          ) : null}

          <div className="mt-3 flex min-w-0 flex-wrap items-end gap-2">
            <span className="text-lg font-black tracking-[-0.05em] text-neutral-950 sm:text-2xl">
              {displayNARCurrency(product?.sellingPrice)}
            </span>
            {product?.price > product?.sellingPrice && (
              <span className="text-[11px] font-bold text-neutral-400 line-through">
                {displayNARCurrency(product?.price)}
              </span>
            )}
          </div>
        </div>
      </Link>

      <div className="mt-3 px-5 pb-5">
        <Link
          to={`/product/${product?._id}`}
          onClick={scrollTop}
          className="flex w-full items-center justify-center rounded-full bg-neutral-950 px-5 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-white transition hover:bg-neutral-800"
        >
          View Listing
        </Link>
      </div>
    </div>
  );
};

export default ProductGridCard;
