import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqCategories = [
    {
      title: "Buying, Renting & Inspections",
      faqs: [
        {
          question: "How do I book an inspection?",
          answer: "Open a listing, review the photos and address, then select Book Inspection. The listing is saved and the Rome team can follow up with available visit times."
        },
        {
          question: "Can I buy or rent through Rome?",
          answer: "Rome is built to support both buying and renting. Listings can be marked for sale, for rent, shortlet, or compartment view depending on the property type."
        },
        {
          question: "Do I pay before seeing a property?",
          answer: "Inspection and payment steps depend on the property owner or agent. Rome helps you discover and shortlist spaces, then support confirms the next step."
        },
        {
          question: "Can I save more than one listing?",
          answer: "Yes. Save multiple listings to your shortlist so you can compare pricing, location, room quality, and inspection priority."
        }
      ]
    },
    {
      title: "Listings & Locations",
      faqs: [
        {
          question: "Why do listings show bedroom, kitchen, and living room images?",
          answer: "Rome is designed to show the building and its compartments so users can understand the interior before booking an inspection."
        },
        {
          question: "Are property addresses accurate?",
          answer: "Addresses are provided by the owner or listing manager and reviewed for clarity. If a detail looks wrong, contact support so it can be checked."
        },
        {
          question: "What is a compartment listing?",
          answer: "A compartment listing highlights a specific room or space, such as a bedroom, kitchen, or living room, usually connected to a parent building listing."
        },
        {
          question: "Can owners upload a complete building?",
          answer: "Yes. Owners and agents can provide exterior images, room images, pricing, location, and descriptions for a complete real estate listing."
        }
      ]
    },
    {
      title: "Trust & Verification",
      faqs: [
        {
          question: "Are listings verified?",
          answer: "Rome is built around verified listings and inspection-ready details. Support may review submitted information before listings are presented."
        },
        {
          question: "What if a listing changes after I save it?",
          answer: "Property availability, pricing, and inspection times can change. Support will confirm current details before any visit or transaction step."
        },
        {
          question: "How do I report suspicious information?",
          answer: "Send the listing name and the issue to support@rome.com or call 07019277357. The team will review the listing."
        },
        {
          question: "Does Rome own the listed properties?",
          answer: "Rome is a discovery and listing platform. Ownership or agency relationships depend on each listing and are confirmed during follow-up."
        }
      ]
    },
    {
      title: "Accounts & Support",
      faqs: [
        {
          question: "Do I need an account to browse?",
          answer: "You can browse listings freely. Some actions, such as saved listings, inspections, or account history, may require account access."
        },
        {
          question: "How can I contact support?",
          answer: "Call 07019277357 or email support@rome.com for help with inspections, listings, saved spaces, or account questions."
        },
        {
          question: "Can support recommend a property?",
          answer: "Support can help clarify listings and inspection steps, but final property decisions should be based on your budget, preferred location, and inspection outcome."
        },
        {
          question: "Can I remove a saved listing?",
          answer: "Yes. Open Saved Listings and remove any property you no longer want to compare."
        }
      ]
    }
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mx-auto mt-24 max-w-7xl px-3 pb-16 pt-8 sm:px-6 lg:mt-28 lg:px-8">
      <header className="overflow-hidden rounded-[2.5rem] bg-neutral-950 px-6 py-14 text-white shadow-[0_28px_90px_rgba(17,17,17,0.16)] sm:px-10 lg:px-14">
        <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-white backdrop-blur">
          Support Center
        </span>
        <h1 className="mt-8 max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.08em] sm:text-7xl">
          Frequently asked questions.
        </h1>
        <p className="mt-6 max-w-2xl text-sm font-semibold leading-7 text-white/65">
          Quick answers about listings, inspections, saved spaces, locations, verification, and real estate support on Rome.
        </p>
      </header>

      <div className="mt-8 space-y-6">
        {faqCategories.map((category, categoryIndex) => (
          <section key={categoryIndex} className="rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-[0_22px_70px_rgba(17,17,17,0.08)] backdrop-blur-2xl sm:p-8">
            <h2 className="mb-6 text-3xl font-black tracking-[-0.06em] text-neutral-950">
              {category.title}
            </h2>

            <div className="space-y-4">
              {category.faqs.map((faq, faqIndex) => {
                const globalIndex = `${categoryIndex}-${faqIndex}`;
                return (
                  <div key={faqIndex} className="rounded-3xl bg-neutral-100/80 px-5 py-4">
                    <button
                      className="flex w-full items-center justify-between text-left font-black text-neutral-950 transition-colors hover:text-neutral-600 focus:outline-none"
                      onClick={() => toggleFaq(globalIndex)}
                    >
                      <span className="pr-4">{faq.question}</span>
                      <span className="flex-shrink-0 text-xl font-bold text-neutral-500">
                        {activeIndex === globalIndex ? '-' : '+'}
                      </span>
                    </button>
                    {activeIndex === globalIndex && (
                      <div className="mt-4 rounded-2xl bg-white/80 p-4 text-sm font-semibold leading-7 text-neutral-600">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      <section className="mt-8 rounded-[2.5rem] bg-neutral-950 p-8 text-white shadow-[0_28px_90px_rgba(17,17,17,0.16)] sm:p-10">
        <h2 className="mb-4 text-center text-4xl font-black tracking-[-0.07em]">Still have questions?</h2>
        <p className="mx-auto mb-8 max-w-2xl text-center text-sm font-semibold leading-7 text-white/65">
          Our support team can help with listing uploads, inspection requests, owner follow-up, and account questions.
        </p>
        <div className="grid gap-6 text-center md:grid-cols-3">
          <div>
            <h3 className="font-semibold mb-2">Call Us</h3>
            <p className="opacity-80">07019277357</p>
            <p className="text-sm opacity-60">Mon-Fri 9AM-6PM</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Email Us</h3>
            <p className="opacity-80">support@rome.com</p>
            <p className="text-sm opacity-60">24/7 response</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Support Scope</h3>
            <p className="opacity-80">Inspections and listings</p>
            <p className="text-sm opacity-60">Lagos, Nigeria</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;