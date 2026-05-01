import React from 'react';

const Privacy = () => {
  const collectedInfo = [
    { title: 'Contact details', text: 'Name, email, phone number, and account details used for inspection follow-up and support.' },
    { title: 'Property interest', text: 'Saved listings, viewed spaces, inspection requests, preferred locations, and budget signals.' },
    { title: 'Listing data', text: 'Property photos, addresses, pricing, room details, owner or agent information submitted for upload.' },
    { title: 'Platform usage', text: 'Pages visited, search terms, device information, and actions used to improve discovery and reliability.' },
  ];

  const usage = [
    'Schedule inspections and respond to listing requests.',
    'Verify property information with owners, agents, and support teams.',
    'Improve search, recommendations, saved listings, and user experience.',
    'Send important account, inspection, and support updates.',
    'Protect users from inaccurate listings, fraud, or unauthorized access.',
  ];

  return (
    <div className="mx-auto mt-24 max-w-7xl px-3 pb-16 pt-8 sm:px-6 lg:mt-28 lg:px-8">
      <header className="overflow-hidden rounded-[2.5rem] bg-neutral-950 px-6 py-14 text-white shadow-[0_28px_90px_rgba(17,17,17,0.16)] sm:px-10 lg:px-14">
        <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-white backdrop-blur">
          Policy Center
        </span>
        <h1 className="mt-8 max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.08em] sm:text-7xl">
          Privacy for property discovery and inspections.
        </h1>
        <p className="mt-6 max-w-2xl text-sm font-semibold leading-7 text-white/65">
          This policy explains how Rome handles information connected to browsing listings, saving spaces, booking inspections, and uploading buildings.
        </p>
      </header>

      <div className="mt-8 space-y-6">
        <section className="rounded-[2rem] border border-white/70 bg-white/80 p-7 shadow-[0_22px_70px_rgba(17,17,17,0.08)] backdrop-blur-2xl sm:p-10">
          <h2 className="text-4xl font-black tracking-[-0.07em] text-neutral-950">Information we collect</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {collectedInfo.map((item) => (
              <div key={item.title} className="rounded-3xl bg-neutral-100/80 p-5">
                <p className="font-black text-neutral-950">{item.title}</p>
                <p className="mt-2 text-sm font-semibold leading-7 text-neutral-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/70 bg-white/80 p-7 shadow-[0_22px_70px_rgba(17,17,17,0.08)] backdrop-blur-2xl sm:p-10">
          <h2 className="text-4xl font-black tracking-[-0.07em] text-neutral-950">How we use your information</h2>
          <div className="mt-8 space-y-4">
            {usage.map((item, index) => (
              <div key={item} className="flex items-start gap-4 rounded-3xl bg-neutral-100/80 p-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-xs font-black text-white">{index + 1}</span>
                <p className="text-sm font-black leading-6 text-neutral-950">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/70 bg-white/80 p-7 shadow-[0_22px_70px_rgba(17,17,17,0.08)] backdrop-blur-2xl sm:p-10">
          <h2 className="text-4xl font-black tracking-[-0.07em] text-neutral-950">Sharing and security</h2>
          <p className="mt-6 max-w-4xl text-sm font-semibold leading-7 text-neutral-600">
            Rome does not sell user data. Information may be shared only with trusted service providers, property owners, agents, inspection coordinators, payment partners where applicable, or when required by law. We use encryption, access controls, and operational review practices to reduce unauthorized access and inaccurate listing activity.
          </p>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr,0.85fr]">
          <section className="rounded-[2rem] border border-white/70 bg-white/80 p-7 shadow-[0_22px_70px_rgba(17,17,17,0.08)] backdrop-blur-2xl sm:p-10">
            <h2 className="text-4xl font-black tracking-[-0.07em] text-neutral-950">Your rights</h2>
            <div className="space-y-4">
              <div>
                <p className="font-black text-neutral-950">Access and update</p>
                <p className="mt-1 text-sm font-semibold text-neutral-600">You can ask us to update account, support, or property inquiry information.</p>
              </div>
              <div>
                <p className="font-black text-neutral-950">Deletion requests</p>
                <p className="mt-1 text-sm font-semibold text-neutral-600">You may request deletion of personal information, subject to operational and legal requirements.</p>
              </div>
              <div>
                <p className="font-black text-neutral-950">Marketing opt-out</p>
                <p className="mt-1 text-sm font-semibold text-neutral-600">You can unsubscribe from property alerts and promotional messages whenever you choose.</p>
              </div>
            </div>
          </section>

          <section className="rounded-[2rem] bg-neutral-950 p-7 text-white shadow-[0_28px_90px_rgba(17,17,17,0.16)] sm:p-10">
            <h2 className="text-4xl font-black tracking-[-0.07em]">Privacy contact</h2>
            <p className="mt-4 text-sm font-semibold leading-7 text-white/65">
              If you have questions about how listing, inspection, or account information is handled, contact Rome.
            </p>
            <div className="mt-6 space-y-3 text-sm font-bold text-white/70">
              <div><span className="text-white">Email:</span> privacy@rome.com</div>
              <div><span className="text-white">Phone:</span> 07019277357</div>
              <div><span className="text-white">Address:</span> Lagos, Nigeria</div>
            </div>
          </section>
        </section>

        <section className="rounded-[2rem] border border-white/70 bg-white/80 p-7 text-center shadow-sm backdrop-blur-2xl sm:p-10">
          <h2 className="text-4xl font-black tracking-[-0.07em] text-neutral-950">Policy updates</h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm font-semibold leading-7 text-neutral-600">
            This policy may be updated from time to time to reflect operational, legal, or platform changes. Updated versions will be posted on this page.
          </p>
          <p className="mt-4 text-sm font-bold text-neutral-500">Last updated: April 30, 2026</p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;