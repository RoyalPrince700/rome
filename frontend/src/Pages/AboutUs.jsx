import React from 'react';

const AboutUs = () => {
  const values = [
    'Verified buildings with room-level presentation',
    'Clear buy, rent, and inspection journeys',
    'Premium visuals for flats, bedrooms, kitchens, and living rooms',
    'Support for buyers, renters, owners, and agents',
  ];

  return (
    <div className="mx-auto mt-24 max-w-7xl px-3 pb-16 pt-8 sm:px-6 lg:mt-28 lg:px-8">
      <header className="overflow-hidden rounded-[2.5rem] bg-neutral-950 px-6 py-14 text-white shadow-[0_28px_90px_rgba(17,17,17,0.16)] sm:px-10 lg:px-14">
        <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-white backdrop-blur">
          Our Story
        </span>
        <h1 className="mt-8 max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.08em] sm:text-7xl">
          Real estate discovery, rebuilt around trust and detail.
        </h1>
        <p className="mt-6 max-w-2xl text-sm font-semibold leading-7 text-white/65">
          Rome helps people understand a property before they visit it, with verified listings, immersive room imagery, and a cleaner path from interest to inspection.
        </p>
      </header>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr,0.95fr]">
        <section className="rounded-[2rem] border border-white/70 bg-white/80 p-7 shadow-[0_22px_70px_rgba(17,17,17,0.08)] backdrop-blur-2xl sm:p-10">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500">Mission</p>
          <h2 className="mt-4 text-4xl font-black leading-[0.95] tracking-[-0.07em] text-neutral-950">
            Make every listing feel inspection-ready.
          </h2>
          <p className="mt-6 text-sm font-semibold leading-7 text-neutral-600">
            We are building a real estate marketplace where buildings are uploaded with the spaces that matter: living rooms, kitchens, bedrooms, exterior views, and the details buyers and renters need before committing time.
          </p>
        </section>

        <section className="rounded-[2rem] border border-white/70 bg-white/80 p-7 shadow-[0_22px_70px_rgba(17,17,17,0.08)] backdrop-blur-2xl sm:p-10">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500">What Rome Offers</p>
          <div className="mt-6 space-y-4">
            {values.map((value, index) => (
              <div key={value} className="flex items-start gap-4 rounded-3xl bg-neutral-100/80 p-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-xs font-black text-white">
                  {index + 1}
                </span>
                <p className="text-sm font-black leading-6 text-neutral-950">{value}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        {[
          { title: 'For Buyers', text: 'Compare property value, address, room quality, and inspection readiness before making a purchase decision.' },
          { title: 'For Renters', text: 'Shortlist apartments, shortlets, and rooms with clear pricing and visuals before booking a visit.' },
          { title: 'For Owners', text: 'Upload buildings and compartments in a premium format that helps serious users understand the space.' },
        ].map((item) => (
          <section key={item.title} className="rounded-[2rem] border border-white/70 bg-white/70 p-7 shadow-sm backdrop-blur-2xl">
            <h3 className="text-2xl font-black tracking-[-0.05em] text-neutral-950">{item.title}</h3>
            <p className="mt-4 text-sm font-semibold leading-7 text-neutral-600">{item.text}</p>
          </section>
        ))}
      </div>

      <section className="mt-6 rounded-[2.5rem] bg-neutral-950 p-8 text-white shadow-[0_28px_90px_rgba(17,17,17,0.16)] sm:p-10">
        <div className="grid gap-8 md:grid-cols-[1fr,0.8fr] md:items-end">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/45">Get in touch</p>
            <h2 className="mt-4 text-4xl font-black leading-[0.95] tracking-[-0.07em]">Need help listing or inspecting a property?</h2>
          </div>
          <div className="space-y-4 text-sm font-bold text-white/70">
            <p><span className="text-white">Phone:</span> 07019277357</p>
            <p><span className="text-white">Email:</span> contact@rome.com</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
