import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Context from '../context';
import displayNARCurrency from '../helpers/displayCurrency';
import { getLocalCart, removeLocalCartItem, updateLocalCartQuantity } from '../helpers/localAddToCart';
import { MdDelete } from 'react-icons/md';

const Cart = () => {
    const [data, setData] = useState([]);
    const context = useContext(Context);
    const navigate = useNavigate();

    const syncSavedListings = () => {
        setData(getLocalCart());
        context?.fetchUserAddToCart?.();
    };

    useEffect(() => {
        syncSavedListings();
        window.addEventListener('romeLocalCartChange', syncSavedListings);
        return () => window.removeEventListener('romeLocalCartChange', syncSavedListings);
    }, []);

    const increaseQty = (id, qty) => {
        updateLocalCartQuantity(id, qty + 1);
    };

    const decreaseQty = (id, qty) => {
        if (qty >= 2) {
            updateLocalCartQuantity(id, qty - 1);
        }
    };

    const deleteCartProduct = (id) => {
        removeLocalCartItem(id);
    };

    const totalQty = useMemo(
        () => data.reduce((previousValue, currentValue) => previousValue + currentValue.quantity, 0),
        [data]
    );

    const totalPrice = useMemo(
        () => data.reduce((prev, curr) => prev + curr.quantity * (curr?.sellingPrice || 0), 0),
        [data]
    );
    
    const handleCheckout = () => {
        if (data.length > 0) navigate('/support', { state: { savedListings: data, totalPrice } });
    };
    

    return (
        <div className="mx-auto mt-24 max-w-7xl px-3 pt-8 sm:px-6 lg:mt-28 lg:px-8">
        <div className="mb-10 overflow-hidden rounded-[2.5rem] bg-neutral-950 px-6 py-12 text-white shadow-[0_28px_90px_rgba(17,17,17,0.16)] sm:px-10">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-white backdrop-blur">Saved Listings</span>
          <h1 className="mt-8 max-w-3xl text-5xl font-black leading-[0.9] tracking-[-0.08em] sm:text-7xl">Your private property shortlist.</h1>
          <p className="mt-6 max-w-2xl text-sm font-semibold leading-7 text-white/65">
            Compare spaces, keep inspection quantities for your team, and move selected listings toward booking.
          </p>
        </div>
      
        <div className="text-center text-lg">
          {data.length === 0 && (
            <div className="rounded-[2.5rem] border border-dashed border-neutral-300 bg-white/70 px-6 py-20 shadow-sm backdrop-blur">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-neutral-400">No saved listings yet</p>
              <Link to="/product-category?all=true" className="mt-6 inline-flex rounded-full bg-neutral-950 px-6 py-3 text-xs font-black uppercase tracking-[0.2em] text-white">
                Explore properties
              </Link>
            </div>
          )}
        </div>
      
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
          <div className="w-full max-w-4xl">
            {data.map((product) => (
                  <div
                    key={product?.productId}
                    className="relative my-5 grid w-full gap-4 rounded-[2rem] border border-white/70 bg-white/80 p-3 shadow-[0_22px_70px_rgba(17,17,17,0.08)] backdrop-blur transition hover:-translate-y-1 sm:grid-cols-[180px,1fr]"
                  >
                    <div className="h-[180px] w-full overflow-hidden rounded-[1.5rem] bg-neutral-100">
                      <img
                        src={product?.productImage}
                        alt={product?.productName}
                        className="h-full w-full object-cover"
                      />
                    </div>
      
                    <div className="flex flex-col justify-between px-2 py-2 sm:px-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-neutral-950 px-3 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-white">
                            {product?.productStatus || 'saved'}
                          </span>
                          <span className="text-[10px] font-black uppercase tracking-[0.22em] text-neutral-500">
                            {product?.brandName || product?.category}
                          </span>
                        </div>
                        <h2 className="mt-4 line-clamp-2 text-2xl font-black leading-none tracking-[-0.06em] text-neutral-950">
                          {product?.productName}
                        </h2>
                        <p className="mt-3 text-[10px] font-bold uppercase tracking-widest text-neutral-500">
                          {product?.soldLabel || 'Ready for inspection'}
                        </p>
                      </div>

                      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center rounded-full border border-neutral-200 bg-white">
                            <button
                              className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-black text-neutral-950 transition hover:bg-neutral-950 hover:text-white"
                              onClick={() => decreaseQty(product?.productId, product?.quantity)}
                            >
                              -
                            </button>
                            <span className="w-9 text-center text-xs font-black text-neutral-950">{product?.quantity}</span>
                            <button
                              className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-black text-neutral-950 transition hover:bg-neutral-950 hover:text-white"
                              onClick={() => increaseQty(product?.productId, product?.quantity)}
                            >
                              +
                            </button>
                          </div>
                        </div>

                        <div className="sm:text-right">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Estimated value</p>
                          <p className="text-2xl font-black tracking-[-0.05em] text-neutral-950">
                            {displayNARCurrency((product?.sellingPrice || 0) * product?.quantity)}
                          </p>
                        </div>
                      </div>
                    </div>
      
                    {/* Delete Button */}
                    <button
                      className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-neutral-950 shadow-sm backdrop-blur transition hover:bg-red-600 hover:text-white"
                      onClick={() => deleteCartProduct(product?.productId)}
                      aria-label="Remove listing"
                    >
                      <MdDelete size={18} />
                    </button>
                  </div>
                ))}
          </div>
      
          {/* Cart Summary */}
          {data[0] && (
            <div className="w-full max-w-sm">
                <div className="rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-[0_24px_80px_rgba(17,17,17,0.1)] backdrop-blur-2xl lg:sticky lg:top-28">
                  <h2 className="mb-8 text-xs font-black uppercase tracking-[0.3em] text-neutral-950">Shortlist Summary</h2>
                  <div className="mb-4 flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-neutral-500">
                    <p>Saved spaces</p>
                    <p>{totalQty}</p>
                  </div>
                  <div className="mb-8 border-t border-neutral-200 pt-6 text-neutral-950">
                    <p className="text-xs font-black uppercase tracking-widest text-neutral-500">Estimated combined value</p>
                    <p className="mt-2 text-4xl font-black tracking-[-0.075em] text-neutral-950">{displayNARCurrency(totalPrice)}</p>
                  </div>
                  <button
                    className="w-full rounded-full bg-neutral-950 py-5 text-sm font-black uppercase tracking-[0.2em] text-white shadow-[0_16px_38px_rgba(17,17,17,0.16)] transition hover:bg-neutral-800"
                    onClick={handleCheckout}
                  >
                    Request Inspection
                  </button>
                  <p className="mt-5 text-center text-[9px] font-bold uppercase leading-5 tracking-widest text-neutral-400">
                    A Rome advisor can confirm availability, documents, and visit times.
                  </p>
                </div>
            </div>
          )}
        </div>
      </div>
      
      
    );
};

export default Cart;
