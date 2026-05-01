import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import displayNARCurrency from '../helpers/displayCurrency';
import CategoryWiseProductDisplay from '../components/CategoryWiseProductDisplay';
import localAddToCart from '../helpers/localAddToCart';
import Context from '../context';
import { getLocalProductById } from '../data/localProducts';
import { PROPERTY_AMENITY_META, PROPERTY_AMENITY_ORDER } from '../data/propertyAmenityCatalog';

const ProductDetails = () => {
  const [data, setData] = useState({
    productName: '',
    brandName: '',
    category: '',
    subCategory: '',
    productImage: [],
    description: '',
    address: '',
    state: '',
    price: '',
    sellingPrice: '',
  });

  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState('');

  const { fetchUserAddToCart } = useContext(Context);
  const params = useParams();
  const navigate = useNavigate();

  const fetchProductDetails = async () => {
    setLoading(true);
    // Backend version kept here for easy reactivation later.
    // const response = await fetch(SummaryApi.productDetails.url, {
    //   method: SummaryApi.productDetails.method,
    //   headers: { 'content-type': 'application/json' },
    //   body: JSON.stringify({ productId: params?.id }),
    // });
    // const dataResponse = await response.json();
    // setData(dataResponse?.data);
    // setActiveImage(dataResponse?.data.productImage[0]);

    const localProduct = getLocalProductById(params?.id);
    setData(localProduct || {});
    setActiveImage(localProduct?.productImage?.[0] || '');
    setLoading(false);
  };

  useEffect(() => {
    fetchProductDetails();
  }, [params]); // Re-fetch data when the product ID changes

  const handleAddToCart = async (e) => {
    localAddToCart(e, data);
    fetchUserAddToCart();
  };

  const handleBuyProduct = async (e) => {
    localAddToCart(e, data);
    fetchUserAddToCart();
    navigate('/cart');
  };

  const handleNavigateToProduct = (productId) => {
    navigate(`/product/${productId}`);
  };

  const savingsPercentage =
    data?.price && data?.sellingPrice
      ? Math.max(0, Math.round(((data.price - data.sellingPrice) / data.price) * 100))
      : 0;

  const showStateLine =
    Boolean(data?.state) &&
    (data?.address === 'Address available on the parent building listing' ||
      !String(data?.address || '')
        .toLowerCase()
        .includes(String(data.state).toLowerCase()));

  return (
    <div className="mx-auto w-full max-w-7xl overflow-x-hidden px-3 pt-4 sm:px-6 sm:pt-5 lg:px-8 lg:pt-6">
      <div className="grid min-w-0 gap-8 lg:grid-cols-[1.15fr,0.85fr]">
        <div className="min-w-0 space-y-4">
          <div className="relative aspect-[4/3] w-full max-w-full overflow-hidden rounded-[1.75rem] bg-neutral-950 shadow-[0_30px_90px_rgba(17,17,17,0.16)] sm:h-[560px] sm:rounded-[2.5rem] lg:h-[680px]">
            <img
              src={activeImage}
              alt={data?.productName}
              className="block h-full w-full max-w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-neutral-950/10" />
            <div className="absolute left-3 top-3 rounded-full border border-white/30 bg-white/20 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.2em] text-white backdrop-blur sm:left-5 sm:top-5 sm:px-4 sm:py-2 sm:text-[10px] sm:tracking-[0.24em]">
              Verified Space
            </div>
            <div className="absolute bottom-4 left-4 right-4 min-w-0 text-white sm:bottom-6 sm:left-6 sm:right-6">
              <p className="truncate text-[10px] font-black uppercase tracking-[0.22em] text-white/70 sm:text-xs sm:tracking-[0.28em]">{data?.brandName}</p>
              <h1 className="mt-2 break-words text-3xl font-black leading-[0.94] tracking-[-0.06em] sm:mt-3 sm:text-6xl sm:tracking-[-0.075em]">
                {data?.productName}
              </h1>
            </div>
          </div>

          <div className="flex max-w-full gap-3 overflow-x-auto pb-2 scrollbar-none">
            {data?.productImage?.map((imageURL) => (
              <button
                key={imageURL}
                onClick={() => setActiveImage(imageURL)}
                className={`h-24 w-28 shrink-0 overflow-hidden rounded-3xl border transition ${
                  activeImage === imageURL ? 'border-neutral-950 opacity-100' : 'border-white opacity-70'
                } bg-white p-1 shadow-sm`}
              >
                <img src={imageURL} alt="" className="h-full w-full rounded-[1.25rem] object-cover" />
              </button>
            ))}
          </div>
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-[2.5rem] border border-white/70 bg-white/80 p-6 shadow-[0_24px_80px_rgba(17,17,17,0.1)] backdrop-blur-2xl sm:p-8">
            <span className="inline-flex rounded-full bg-neutral-950 px-4 py-2 text-[10px] font-black uppercase tracking-[0.24em] text-white">
              {data?.productStatus || 'for sale'}
            </span>
            <h2 className="mt-6 text-4xl font-black leading-[0.92] tracking-[-0.07em] text-neutral-950 sm:text-5xl">
              {displayNARCurrency(data?.sellingPrice)}
            </h2>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-[0.18em] text-neutral-500">
              {data?.price > data?.sellingPrice && <span className="line-through">{displayNARCurrency(data?.price)}</span>}
              {savingsPercentage > 0 && <span className="rounded-full bg-neutral-100 px-3 py-1 text-neutral-950">Save {savingsPercentage}%</span>}
            </div>

            <div className="mt-6 flex items-start gap-3 rounded-3xl bg-neutral-100/80 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-white">
                <FaLocationDot className="h-4 w-4" />
              </div>
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.24em] text-neutral-500">Address</p>
                <p className="mt-1 text-sm font-black leading-5 text-neutral-950">
                  {data?.address || data?.brandName || 'Address available on request'}
                </p>
                {showStateLine ? (
                  <p className="mt-2 text-[10px] font-black uppercase tracking-[0.22em] text-neutral-500">
                    State · {data.state}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { label: 'Type', value: data?.category },
                { label: 'Area', value: data?.brandName },
                { label: 'Rating', value: data?.rating || 4.8 },
              ].map((item) => (
                <div key={item.label} className="rounded-3xl bg-neutral-100/80 p-4">
                  <p className="text-[9px] font-black uppercase tracking-[0.24em] text-neutral-500">{item.label}</p>
                  <p className="mt-2 truncate text-sm font-black capitalize text-neutral-950">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-2 text-sm font-black text-neutral-950">
              <div className="flex items-center text-neutral-950">
                <FaStar className="h-4 w-4" />
                <FaStar className="h-4 w-4" />
                <FaStar className="h-4 w-4" />
                <FaStar className="h-4 w-4" />
                <FaStarHalf className="h-4 w-4" />
              </div>
              <span className="uppercase tracking-widest">{data?.reviewCount || 0} reviews</span>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <button
                className="rounded-full bg-neutral-950 px-8 py-5 text-sm font-black uppercase tracking-[0.2em] text-white transition hover:bg-neutral-800"
                onClick={handleBuyProduct}
              >
                Book Inspection
              </button>
              <button
                className="rounded-full border border-neutral-300 bg-white px-8 py-5 text-sm font-black uppercase tracking-[0.2em] text-neutral-950 transition hover:border-neutral-950"
                onClick={handleAddToCart}
              >
                Save Listing
              </button>
            </div>

            <div className="mt-8 border-t border-neutral-200 pt-8">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-neutral-950">Property Story</h3>
              <p className="mt-4 text-sm font-semibold leading-7 text-neutral-600">
                {data.description}
              </p>
            </div>
          </div>
        </aside>
      </div>

      {data.category === 'flat' && data.amenities && (
        <section className="mt-14 rounded-[2.5rem] border border-white/70 bg-white/70 p-6 shadow-[0_24px_80px_rgba(17,17,17,0.08)] backdrop-blur-2xl sm:p-10">
          <h2 className="text-xs font-black uppercase tracking-[0.3em] text-neutral-950">Property highlights</h2>
          {data.propertySpecs && (
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: 'Bedrooms', value: data.propertySpecs.bedrooms },
                { label: 'Bathrooms', value: data.propertySpecs.bathrooms },
                { label: 'Built-up area', value: data.propertySpecs.builtUpArea },
                { label: 'Tenure / notes', value: data.propertySpecs.tenure },
              ]
                .filter((item) => item.value != null && item.value !== '')
                .map((item) => (
                  <div
                    key={item.label}
                    className="rounded-3xl bg-neutral-100/90 px-5 py-4 ring-1 ring-neutral-200/80"
                  >
                    <p className="text-[9px] font-black uppercase tracking-[0.24em] text-neutral-500">{item.label}</p>
                    <p className="mt-2 text-sm font-black text-neutral-950">{item.value}</p>
                  </div>
                ))}
            </div>
          )}

          <h3 className="mt-10 text-xs font-black uppercase tracking-[0.3em] text-neutral-950">
            Amenities &amp; infrastructure
          </h3>
          <p className="mt-2 text-sm font-semibold text-neutral-500">
            Icon and copy reflect what is available on this specific listing. Items marked “not included” help set expectations before inspection.
          </p>

          <ul className="mt-6 grid list-none gap-3 p-0 sm:grid-cols-2 xl:grid-cols-3">
            {PROPERTY_AMENITY_ORDER.map((key) => {
              const meta = PROPERTY_AMENITY_META[key];
              if (!meta) return null;
              const available = Boolean(data.amenities[key]);
              const { Icon, title, availableLabel, unavailableLabel } = meta;
              return (
                <li
                  key={key}
                  className={`flex gap-4 rounded-3xl border p-4 transition ${
                    available
                      ? 'border-neutral-200 bg-white/90 shadow-sm'
                      : 'border-neutral-100 bg-neutral-50/90 opacity-90'
                  }`}
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
                      available ? 'bg-neutral-950 text-white' : 'bg-neutral-200 text-neutral-500'
                    }`}
                  >
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <div className="min-w-0">
                    <p
                      className={`text-xs font-black uppercase tracking-[0.18em] ${
                        available ? 'text-neutral-950' : 'text-neutral-400 line-through decoration-neutral-300'
                      }`}
                    >
                      {title}
                    </p>
                    <p
                      className={`mt-1 text-sm font-semibold leading-snug ${
                        available ? 'text-neutral-600' : 'text-neutral-500'
                      }`}
                    >
                      {available ? availableLabel : unavailableLabel}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      )}

      {data.category && (
        <CategoryWiseProductDisplay
          category={data?.category}
          heading="Recommended Spaces"
          onProductClick={handleNavigateToProduct} // Pass handler for navigation
        />
      )}
    </div>
  );
};

export default ProductDetails;
