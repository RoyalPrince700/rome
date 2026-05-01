import React from 'react';

const Terms = () => {
  const serviceTerms = [
    'Listings are provided for discovery, comparison, inspection, buying, renting, or shortlet interest.',
    'Availability, pricing, ownership status, and inspection schedules may change and should be confirmed before decisions.',
    'Users must not submit false property information, impersonate owners or agents, or misuse saved listing and support flows.',
    'Owners and agents are responsible for submitting accurate photos, address details, prices, and property descriptions.',
  ];

  return (
    <div className="mx-auto mt-24 max-w-7xl px-3 pb-16 pt-8 sm:px-6 lg:mt-28 lg:px-8">
      <header className="overflow-hidden rounded-[2.5rem] bg-neutral-950 px-6 py-14 text-white shadow-[0_28px_90px_rgba(17,17,17,0.16)] sm:px-10 lg:px-14">
        <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-white backdrop-blur">
          Policy Center
        </span>
        <h1 className="mt-8 max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.08em] sm:text-7xl">
          Terms for using Rome real estate.
        </h1>
        <p className="mt-6 max-w-2xl text-sm font-semibold leading-7 text-white/65">
          These terms explain expectations for browsing listings, saving spaces, booking inspections, and submitting buildings to Rome.
        </p>
      </header>

      <div className="mt-8 space-y-6">
        <section className="rounded-[2rem] border border-white/70 bg-white/80 p-7 shadow-[0_22px_70px_rgba(17,17,17,0.08)] backdrop-blur-2xl sm:p-10">
          <h2 className="text-4xl font-black tracking-[-0.07em] text-neutral-950">Acceptance of terms</h2>
          <p className="mt-6 max-w-4xl text-sm font-semibold leading-7 text-neutral-600">
            By accessing and using the Rome website and services, you agree to these terms. If you do not accept them, please do not use the platform.
          </p>
        </section>

        <section className="rounded-[2rem] border border-white/70 bg-white/80 p-7 shadow-[0_22px_70px_rgba(17,17,17,0.08)] backdrop-blur-2xl sm:p-10">
          <h2 className="text-4xl font-black tracking-[-0.07em] text-neutral-950">Use license</h2>
          <div className="mt-6 space-y-4">
            <div>
              <p className="font-black text-neutral-950">Permission granted</p>
              <p className="mt-1 text-sm font-semibold leading-7 text-neutral-600">You may access Rome materials for personal property discovery, inspection planning, listing review, or approved listing submission.</p>
            </div>
            <div>
              <p className="font-black text-neutral-950">Prohibited uses</p>
              <p className="mt-1 text-sm font-semibold leading-7 text-neutral-600">You may not scrape, copy, resell, misrepresent, or redistribute listing materials without approval from Rome and the relevant property owner or agent.</p>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <section className="rounded-[2rem] border border-white/70 bg-white/80 p-7 shadow-[0_22px_70px_rgba(17,17,17,0.08)] backdrop-blur-2xl sm:p-10">
            <h2 className="text-4xl font-black tracking-[-0.07em] text-neutral-950">Listing information</h2>
            <div className="mt-6 space-y-4 text-sm font-semibold leading-7 text-neutral-600">
              <p>We aim to provide accurate property descriptions, addresses, images, prices, and availability, but errors may occasionally occur.</p>
              <p>Users should confirm property details, ownership, access, and pricing before making financial or legal commitments.</p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-white/70 bg-white/80 p-7 shadow-[0_22px_70px_rgba(17,17,17,0.08)] backdrop-blur-2xl sm:p-10">
            <h2 className="text-4xl font-black tracking-[-0.07em] text-neutral-950">Inspections and payments</h2>
            <div className="mt-6 space-y-4 text-sm">
              {[
                'Inspection requests are subject to property availability and owner or agent confirmation.',
                'Payment terms, deposits, agency fees, and legal steps are confirmed per listing or transaction.',
                'Rome may refuse or cancel requests where information appears inaccurate, unsafe, or unauthorized.',
                'Where payments are supported, they should be processed only through authorized channels.',
              ].map((item, index) => (
                <div key={item} className="flex items-start gap-4 rounded-3xl bg-neutral-100/80 p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-xs font-black text-white">{index + 1}</span>
                  <span className="font-black leading-6 text-neutral-950">{item}</span>
                </div>
              ))}
            </div>
          </section>
        </section>

        <section className="rounded-[2rem] border border-white/70 bg-white/80 p-7 shadow-[0_22px_70px_rgba(17,17,17,0.08)] backdrop-blur-2xl sm:p-10">
          <h2 className="text-4xl font-black tracking-[-0.07em] text-neutral-950">Platform responsibilities</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {serviceTerms.map((item) => (
              <div key={item} className="rounded-3xl bg-neutral-100/80 p-5 text-sm font-semibold leading-7 text-neutral-600">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[2.5rem] bg-neutral-950 p-8 text-white shadow-[0_28px_90px_rgba(17,17,17,0.16)] sm:p-10">
          <h2 className="text-4xl font-black tracking-[-0.07em]">Legal contact</h2>
          <p className="mt-4 text-sm font-semibold leading-7 text-white/65">
            Questions about these terms can be directed to the Rome legal and compliance team.
          </p>
          <div className="mt-6 space-y-3 text-sm font-bold text-white/70">
            <div><span className="text-white">Email:</span> legal@rome.com</div>
            <div><span className="text-white">Phone:</span> 07019277357</div>
            <div><span className="text-white">Address:</span> Lagos, Nigeria</div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/70 bg-white/80 p-7 text-center shadow-sm backdrop-blur-2xl sm:p-10">
          <h2 className="text-4xl font-black tracking-[-0.07em] text-neutral-950">Terms updates</h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm font-semibold leading-7 text-neutral-600">
            These terms may be revised from time to time. Updated versions become effective when published on this page.
          </p>
          <p className="mt-4 text-sm font-bold text-neutral-500">Last updated: April 30, 2026</p>
        </section>
      </div>
    </div>
  );
};

export default Terms;