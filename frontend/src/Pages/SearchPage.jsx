import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { GrSearch } from 'react-icons/gr';
import { FaLocationDot, FaShieldHalved, FaStar } from 'react-icons/fa6';
import VerticalCard from '../components/VerticalCard';
import { getAllLocalProducts, searchLocalProducts, productCategoryOptions } from '../data/localProducts';

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get('q')?.trim() || '';
  const [input, setInput] = useState(q);

  useEffect(() => {
    setInput(q);
  }, [q]);

  // Compute live results based on the current input
  const results = useMemo(() => searchLocalProducts(input), [input]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = input.trim();
    if (next) {
      setSearchParams({ q: next });
    } else {
      setSearchParams({});
    }
  };

  const hasInput = input.trim().length > 0;

  return (
    <div className="mx-auto w-full max-w-7xl px-3 pb-16 pt-24 sm:px-6 lg:px-8 lg:pt-28">
      <section className="relative mb-8 overflow-hidden rounded-[2rem] bg-neutral-950 px-5 py-8 text-white shadow-[0_28px_90px_rgba(17,17,17,0.16)] sm:rounded-[3rem] sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_34%)]" />
        <div className="relative grid gap-8 lg:grid-cols-[0.95fr,1.05fr] lg:items-end">
          <div>
            <span className="inline-flex items-center gap-2 border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.24em] text-white">
              <FaShieldHalved className="h-3.5 w-3.5" />
              Smart property search
            </span>
            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[0.92] tracking-[-0.075em] sm:text-6xl lg:text-7xl">
              Find the exact space you have in mind.
            </h1>
            <p className="mt-5 max-w-xl text-sm font-semibold leading-7 text-white/65 sm:text-base">
              Search by location, building name, category, or room type across Rome&apos;s verified real estate listings.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[1.75rem] border border-white/10 bg-white/10 p-2 shadow-[0_20px_70px_rgba(0,0,0,0.2)] backdrop-blur-2xl">
            <div className="flex w-full items-center rounded-[1.35rem] bg-white px-4 py-3 text-neutral-950 transition focus-within:ring-2 focus-within:ring-white/40 sm:px-5 sm:py-4">
              <GrSearch className="mr-3 h-5 w-5 shrink-0 text-neutral-500 sm:h-6 sm:w-6" />
              <input
                type="search"
                name="q"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Search locations, duplexes, bedrooms..."
                className="w-full min-w-0 bg-transparent text-sm font-black outline-none placeholder:text-neutral-400 sm:text-base"
                autoComplete="off"
                autoFocus
              />
              <button
                type="submit"
                className="ml-3 hidden rounded-full bg-neutral-950 px-5 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-white transition hover:bg-neutral-800 sm:block"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </section>

      <div className="mb-8 grid gap-3 sm:grid-cols-3">
        {[
          { icon: FaLocationDot, label: 'Locations', value: 'Lagos picks' },
          { icon: FaStar, label: 'Catalog', value: `${getAllLocalProducts().length} listings` },
          { icon: FaShieldHalved, label: 'Confidence', value: 'Verified spaces' },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-3 rounded-full border border-white/70 bg-white/75 px-4 py-3 shadow-sm backdrop-blur-2xl">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-white">
              <item.icon className="h-4 w-4" />
            </span>
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.22em] text-neutral-500">{item.label}</p>
              <p className="text-sm font-black tracking-[-0.04em] text-neutral-950">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      {!hasInput && (
        <div className="mb-10 rounded-[2rem] border border-white/70 bg-white/75 p-5 shadow-[0_18px_60px_rgba(17,17,17,0.06)] backdrop-blur-2xl sm:p-7">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.24em] text-neutral-500">Explore categories</p>
              <h2 className="mt-2 text-3xl font-black tracking-[-0.07em] text-neutral-950 sm:text-5xl">Start with a space type</h2>
            </div>
            <p className="max-w-sm text-xs font-black uppercase leading-6 tracking-[0.18em] text-neutral-500">
              Browse complete homes and individual room views from the same verified catalog.
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            {productCategoryOptions.map((c) => (
              <Link
                key={c.value}
                to={`/product-category?category=${encodeURIComponent(c.value)}`}
                className="rounded-full border border-neutral-200 bg-white/80 px-5 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-neutral-700 transition hover:border-neutral-950 hover:bg-neutral-950 hover:text-white"
              >
                {c.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {hasInput && (
        <section aria-live="polite">
          <div className="mb-8 flex flex-col gap-4 rounded-[2rem] border border-white/70 bg-white/70 p-5 shadow-[0_18px_60px_rgba(17,17,17,0.06)] backdrop-blur-2xl sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.24em] text-neutral-500">Search results</p>
              <h2 className="mt-2 text-3xl font-black tracking-[-0.07em] text-neutral-950 sm:text-5xl">
                &quot;{input}&quot;
              </h2>
            </div>
            <p className="w-fit rounded-full bg-neutral-950 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white">
              {results.length} {results.length === 1 ? 'listing' : 'listings'} found
            </p>
          </div>

          {results.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-[2rem] border border-dashed border-neutral-200 bg-white/60 px-6 py-24 text-center">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-neutral-400">No matching spaces found</p>
              <p className="mt-4 max-w-md text-[10px] font-bold uppercase leading-6 tracking-widest text-neutral-400">
                Try a different location, room type, or browse categories to continue discovery.
              </p>
              <Link
                to="/product-category?all=true"
                className="mt-6 rounded-full bg-neutral-950 px-5 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-white transition hover:bg-neutral-800"
              >
                Browse all spaces
              </Link>
            </div>
          ) : (
            <VerticalCard loading={false} data={results} />
          )}
        </section>
      )}

      {!hasInput && (
        <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-neutral-300">Start typing to discover verified Rome spaces</p>
      )}
    </div>
  );
};

export default SearchPage;
