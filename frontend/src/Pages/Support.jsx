import React, { useState } from 'react';

const Support = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'How do I book an inspection?',
      answer: 'Open a listing, choose Book Inspection, and save the property to your shortlist. Our team will confirm availability, timing, and next steps.',
    },
    {
      question: 'Can I list a building on Rome?',
      answer: 'Yes. Contact support with property photos, address, pricing, and room details. We will help prepare the listing for review.',
    },
    {
      question: 'Are addresses visible before inspection?',
      answer: 'Listings can show a public address or a general location depending on owner preference. Full inspection details are confirmed by support.',
    },
    {
      question: 'Can I compare rent and sale options?',
      answer: 'Yes. Rome supports for-sale, for-rent, shortlet, and compartment-style listings so you can compare spaces in one place.',
    },
    {
      question: 'What should I do if listing information looks wrong?',
      answer: 'Contact us at 07019277357 or support@rome.com with the listing name. We will review the details with the property owner or agent.',
    },
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mx-auto max-w-6xl px-3 pb-16 pt-4 sm:px-6 sm:pt-5 lg:px-8 lg:pt-6">
      <header className="overflow-hidden rounded-[2.5rem] bg-neutral-950 px-6 py-14 text-white shadow-[0_28px_90px_rgba(17,17,17,0.16)] sm:px-10">
        <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-white backdrop-blur">
          Support Center
        </span>
        <h1 className="mt-8 max-w-3xl text-5xl font-black leading-[0.9] tracking-[-0.08em] sm:text-7xl">
          Property support that gets you closer to the right space.
        </h1>
        <p className="mt-6 max-w-2xl text-sm font-semibold leading-7 text-white/65">
          Get help with inspections, listing uploads, saved properties, owner details, and verification questions.
        </p>
      </header>

      <div className="mt-8 rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-[0_22px_70px_rgba(17,17,17,0.08)] backdrop-blur-2xl sm:p-8">
        <h2 className="text-3xl font-black tracking-[-0.06em] text-neutral-950">Frequently asked support questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-3xl bg-neutral-100/80 px-5 py-4">
              <button
                className="flex w-full items-center justify-between text-left text-base font-black text-neutral-950"
                onClick={() => toggleFaq(index)}
              >
                <span className="pr-4">{faq.question}</span>
                <span className="text-xl text-neutral-500">{activeIndex === index ? '-' : '+'}</span>
              </button>
              {activeIndex === index && (
                <p className="mt-3 text-sm font-semibold leading-7 text-neutral-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <section className="mt-6 rounded-[2.5rem] bg-neutral-950 p-8 text-white shadow-[0_28px_90px_rgba(17,17,17,0.16)] sm:p-10">
        <h2 className="text-4xl font-black tracking-[-0.07em]">Contact Rome support</h2>
        <p className="mt-4 max-w-2xl text-sm font-semibold leading-7 text-white/65">
          Reach out for help with inspections, property uploads, listing verification, saved listings, or owner follow-up.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-white/45">Phone</p>
            <a href="tel:07019277357" className="mt-2 block text-lg font-semibold text-white">07019277357</a>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-white/45">Email</p>
            <a href="mailto:support@rome.com" className="mt-2 block text-lg font-semibold text-white">support@rome.com</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;
