import React from 'react';

const ContactUs = () => {
  const contactCards = [
    { label: 'Inspection Support', value: '07019277357', href: 'tel:07019277357' },
    { label: 'Listing Enquiries', value: 'contact@rome.com', href: 'mailto:contact@rome.com' },
    { label: 'Service Area', value: 'Lagos, Nigeria', href: null },
  ];

  return (
    <div className="mx-auto mt-24 max-w-7xl px-3 pb-16 pt-8 sm:px-6 lg:mt-28 lg:px-8">
      <header className="overflow-hidden rounded-[2.5rem] bg-neutral-950 px-6 py-14 text-white shadow-[0_28px_90px_rgba(17,17,17,0.16)] sm:px-10 lg:px-14">
        <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-white backdrop-blur">
          Contact Rome
        </span>
        <h1 className="mt-8 max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.08em] sm:text-7xl">
          Talk to us about a property, inspection, or listing.
        </h1>
        <p className="mt-6 max-w-2xl text-sm font-semibold leading-7 text-white/65">
          Reach out for building uploads, inspection requests, owner follow-up, listing corrections, or support with saved spaces.
        </p>
      </header>

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr,1.05fr]">
        <aside className="space-y-4">
          {contactCards.map((card) => (
            <div key={card.label} className="rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-[0_20px_60px_rgba(17,17,17,0.08)] backdrop-blur-2xl">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500">{card.label}</p>
              {card.href ? (
                <a href={card.href} className="mt-3 block text-2xl font-black tracking-[-0.05em] text-neutral-950">
                  {card.value}
                </a>
              ) : (
                <p className="mt-3 text-2xl font-black tracking-[-0.05em] text-neutral-950">{card.value}</p>
              )}
            </div>
          ))}
          <div className="rounded-[2rem] bg-neutral-950 p-7 text-white shadow-[0_28px_90px_rgba(17,17,17,0.16)]">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/45">What to include</p>
            <p className="mt-4 text-sm font-semibold leading-7 text-white/70">
              For faster support, include the property name, address or area, your preferred inspection date, and whether you want to buy, rent, or list a building.
            </p>
          </div>
        </aside>

        <div className="rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-[0_22px_70px_rgba(17,17,17,0.08)] backdrop-blur-2xl sm:p-10">
          <form className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-[10px] font-black uppercase tracking-[0.24em] text-neutral-500">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-3xl border border-neutral-200 bg-neutral-100/80 p-4 text-xs font-bold uppercase tracking-widest outline-none transition-colors focus:border-neutral-950"
                  placeholder="ENTER YOUR NAME"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-[10px] font-black uppercase tracking-[0.24em] text-neutral-500">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-3xl border border-neutral-200 bg-neutral-100/80 p-4 text-xs font-bold uppercase tracking-widest outline-none transition-colors focus:border-neutral-950"
                  placeholder="EMAIL@EXAMPLE.COM"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="mb-2 block text-[10px] font-black uppercase tracking-[0.24em] text-neutral-500">Reason</label>
              <select
                id="subject"
                className="w-full rounded-3xl border border-neutral-200 bg-neutral-100/80 p-4 text-xs font-bold uppercase tracking-widest outline-none transition-colors focus:border-neutral-950"
                defaultValue=""
              >
                <option value="" disabled>SELECT A TOPIC</option>
                <option>Book an inspection</option>
                <option>List a building</option>
                <option>Correct listing information</option>
                <option>General support</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-[10px] font-black uppercase tracking-[0.24em] text-neutral-500">Message</label>
              <textarea
                id="message"
                rows="6"
                className="w-full resize-none rounded-3xl border border-neutral-200 bg-neutral-100/80 p-4 text-xs font-bold uppercase tracking-widest outline-none transition-colors focus:border-neutral-950"
                placeholder="TELL US ABOUT THE PROPERTY OR INSPECTION"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-neutral-950 py-5 text-sm font-black uppercase tracking-[0.2em] text-white shadow-[0_16px_38px_rgba(17,17,17,0.16)] transition hover:bg-neutral-800"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
