import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { FaBolt, FaKey, FaLocationDot, FaShieldHalved, FaStar } from 'react-icons/fa6'
import { getLocalProductById } from '../data/localProducts'

const formatPrice = (price) => `NGN ${Number(price || 0).toLocaleString()}`

const HeroBenefits = () => (
  <div className='relative rounded-full border border-white/70 bg-white/80 px-3 py-3 shadow-[0_16px_50px_rgba(17,17,17,0.06)] backdrop-blur-2xl sm:px-5'>
    <div className='flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs font-black text-slate-700 sm:text-sm'>
      {[
        { icon: FaShieldHalved, label: 'Verified listings' },
        { icon: FaLocationDot, label: 'Prime locations' },
        { icon: FaKey, label: 'Buy or rent' },
        { icon: FaStar, label: 'Inspection-ready spaces' },
      ].map((benefit, index) => (
        <React.Fragment key={benefit.label}>
          {index > 0 && <span className='text-slate-300'>|</span>}
          <span className='inline-flex items-center gap-1.5 whitespace-nowrap'>
            <benefit.icon className='h-3.5 w-3.5 text-slate-950' />
            {benefit.label}
          </span>
        </React.Fragment>
      ))}
    </div>
  </div>
)

const MobileTrustFlow = () => (
  <div className='relative mb-2 w-full max-w-full overflow-hidden border border-slate-200 bg-white shadow-sm'>
    <div className='grid grid-cols-2 divide-x divide-slate-200 text-xs font-bold text-slate-900'>
      {[
        { icon: FaShieldHalved, title: 'Verified homes', text: 'Curated listings' },
        { icon: FaKey, title: 'Buy or rent', text: 'Book inspection' },
      ].map((item) => (
        <div key={item.title} className='flex items-center gap-2 px-3 py-3'>
          <item.icon className='h-4 w-4 shrink-0 text-slate-950' />
          <div className='min-w-0'>
            <p className='truncate font-black'>{item.title}</p>
            <p className='truncate text-[11px] font-semibold text-slate-500'>{item.text}</p>
          </div>
        </div>
      ))}
    </div>

    <div className='mx-3 mb-3 mt-2 flex items-center justify-between bg-slate-950 px-3 py-2.5 text-xs font-black text-white'>
      <span className='inline-flex items-center gap-2'>
        <FaStar className='h-3.5 w-3.5' />
        Rome real estate
      </span>
      <span>Premium spaces</span>
    </div>
  </div>
)

const MobileHero = ({ products }) => (
  <section className='w-full px-3 pt-3 sm:pt-4 lg:hidden'>
    <MobileTrustFlow />
    <div className='relative overflow-hidden rounded-[2rem] bg-neutral-950 text-white shadow-[0_24px_60px_rgba(15,23,42,0.2)]'>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_34%)]' />
      <div className='relative px-4 py-7'>
        <span className='inline-flex items-center gap-2 border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-black uppercase tracking-[0.22em] text-white'>
          <FaBolt className='h-3.5 w-3.5' />
          New real estate platform
        </span>

        <h1 className='mt-6 text-4xl font-black leading-[0.92] tracking-[-0.06em]'>
          Find the space that feels built for you.
        </h1>
        <p className='mt-4 text-sm font-semibold leading-6 text-slate-300'>
          Browse buildings, bedrooms, kitchens, and living rooms before you buy or rent.
        </p>

        <div className='mt-6 flex gap-3'>
          <Link to='/product-category?all=true' className='flex-1 rounded-full bg-white px-4 py-3 text-center text-xs font-black uppercase tracking-[0.18em] text-slate-950'>
            Explore
          </Link>
          <Link to='/support' className='flex-1 rounded-full border border-white/20 px-4 py-3 text-center text-xs font-black uppercase tracking-[0.18em] text-white'>
            List space
          </Link>
        </div>

        <div className='scrollbar-none -mx-4 mt-7 flex gap-3 overflow-x-auto px-4 pb-1'>
          {products.map((product) => (
            <Link
              key={product._id}
              to={`/product/${product._id}`}
              className='group relative min-w-[210px] overflow-hidden rounded-[1.35rem] bg-white text-slate-950'
            >
              <img
                src={product.productImage?.[0]}
                alt={product.productName}
                className='h-40 w-full object-cover transition duration-500 group-hover:scale-105'
              />
              <div className='p-3'>
                <p className='truncate text-sm font-black'>{product.productName}</p>
                <p className='mt-1 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500'>
                  {product.productStatus}
                </p>
                <p className='mt-2 text-base font-black'>{formatPrice(product.sellingPrice)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </section>
)

const DesktopHero = ({ featuredDeal, sideDeals }) => {
  if (!featuredDeal) {
    return null
  }

  return (
    <section className='hidden w-full px-4 pt-3 sm:px-6 lg:block lg:px-8'>
      <div className='mx-auto max-w-7xl'>
        <HeroBenefits />
        <div className='relative mt-4 overflow-hidden rounded-[3rem] bg-[#f5f5f7] shadow-[0_28px_90px_rgba(17,17,17,0.1)]'>
          <div className='absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-white to-transparent' />
          <div className='relative grid min-h-[680px] grid-cols-[0.9fr,1.1fr] gap-10 px-8 py-12 xl:px-12'>
            <div className='flex flex-col justify-center'>
              <span className='inline-flex w-fit items-center gap-2 border border-slate-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-slate-700 shadow-sm'>
                <FaBolt className='h-3.5 w-3.5 text-slate-950' />
                Built for modern property discovery
              </span>

              <h1 className='mt-8 max-w-2xl text-6xl font-black leading-[0.88] tracking-[-0.085em] text-neutral-950 xl:text-7xl'>
                Buildings and every room inside them.
              </h1>
              <p className='mt-6 max-w-xl text-xl font-semibold leading-8 text-slate-600'>
                Rome helps buyers and renters preview verified homes, duplexes, kitchens, bedrooms, and living rooms before they book an inspection.
              </p>

              <div className='mt-9 flex items-center gap-4'>
                <Link
                  to='/product-category?all=true'
                  className='rounded-full bg-neutral-950 px-8 py-4 text-sm font-black uppercase tracking-[0.2em] text-white transition hover:bg-neutral-800'
                >
                  Explore homes
                </Link>
                <Link
                  to='/support'
                  className='rounded-full border border-neutral-300 bg-white/75 px-8 py-4 text-sm font-black uppercase tracking-[0.2em] text-neutral-950 backdrop-blur transition hover:border-neutral-950'
                >
                  List a building
                </Link>
              </div>

              <div className='mt-12 grid max-w-xl grid-cols-3 gap-4'>
                {[
                  { value: '120+', label: 'verified spaces' },
                  { value: '24h', label: 'inspection booking' },
                  { value: '4.9', label: 'average rating' },
                ].map((stat) => (
                  <div key={stat.label} className='border-t border-slate-300 pt-4'>
                    <p className='text-3xl font-black tracking-tighter text-slate-950'>{stat.value}</p>
                    <p className='mt-1 text-xs font-black uppercase tracking-[0.18em] text-slate-500'>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className='grid grid-cols-12 grid-rows-12 gap-4'>
              <Link
                to={`/product/${featuredDeal._id}`}
                className='group relative col-span-8 row-span-8 overflow-hidden rounded-[2rem] bg-neutral-950 shadow-2xl'
              >
                <img
                  src={featuredDeal.productImage?.[0]}
                  alt={featuredDeal.productName}
                  className='h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent' />
                <div className='absolute bottom-0 left-0 right-0 p-6 text-white'>
                  <p className='text-xs font-black uppercase tracking-[0.24em] text-white/70'>{featuredDeal.productStatus}</p>
                  <h2 className='mt-2 text-3xl font-black tracking-tight'>{featuredDeal.productName}</h2>
                  <p className='mt-3 text-xl font-black'>{formatPrice(featuredDeal.sellingPrice)}</p>
                </div>
              </Link>

              {sideDeals.slice(0, 4).map((product, index) => (
                <Link
                  key={product._id}
                  to={`/product/${product._id}`}
                  className={`group relative overflow-hidden rounded-[1.5rem] bg-white shadow-sm ${
                    index === 0 ? 'col-span-4 row-span-4' : ''
                  } ${index === 1 ? 'col-span-4 row-span-4' : ''} ${
                    index === 2 ? 'col-span-6 row-span-4' : ''
                  } ${index === 3 ? 'col-span-6 row-span-4' : ''}`}
                >
                  <img
                    src={product.productImage?.[0]}
                    alt={product.productName}
                    className='h-full w-full object-cover transition duration-700 group-hover:scale-105'
                  />
                  <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 to-transparent p-4 text-white'>
                    <p className='truncate text-sm font-black'>{product.productName}</p>
                    <p className='mt-1 text-xs font-bold text-white/75'>{product.soldLabel}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Hero = () => {
  const featuredProperties = useMemo(
    () => [
      getLocalProductById('lekki-sky-duplex'),
      getLocalProductById('banana-island-villa'),
      getLocalProductById('ikoyi-serviced-apartment'),
      getLocalProductById('ajah-family-terrace'),
      getLocalProductById('vi-shortlet-suite'),
      getLocalProductById('mainland-smart-flat'),
    ].filter(Boolean),
    []
  )

  const featuredDeal = featuredProperties[0]
  const sideDeals = featuredProperties.slice(1)

  return (
    <>
      <MobileHero products={sideDeals} />
      <DesktopHero featuredDeal={featuredDeal} sideDeals={sideDeals} />
    </>
  )
}

export default Hero
