import React from 'react';
import { FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const shopLinks = [
    { label: 'All Properties', href: '/product-category' },
    { label: 'Support Center', href: '/support' },
    { label: 'Inspection Booking', href: '/shipping' },
    { label: 'Saved Listings', href: '/cart' },
  ];

  const companyLinks = [
    { label: 'About Rome', href: '/about-us' },
    { label: 'Contact Us', href: '/contact-us' },
    { label: 'FAQs', href: '/faq' },
    { label: 'Inspections', href: '/order' },
  ];

  const policyLinks = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Buyer Protection', href: '/purchase-protection' },
  ];

  return (
    <footer className="mt-16 px-3 pb-6 text-neutral-300 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2.5rem] bg-neutral-950 px-6 py-14 shadow-[0_28px_90px_rgba(17,17,17,0.16)] sm:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.5fr,1fr,1fr,1fr]">
          <div>
            <span className="text-4xl font-black uppercase tracking-[-0.08em] text-white sm:text-5xl">Rome</span>
            <p className="mt-6 max-w-sm text-xs font-bold uppercase leading-6 tracking-widest text-white/45">
              Premium real estate discovery for buildings, rooms, inspections, buying, and renting.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition hover:border-white hover:text-white" href="https://x.com/Wifmartofficial?t=lrCWxgox2bR5yiHPktXWUw&s=09" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition hover:border-white hover:text-white" href="https://www.instagram.com/wifmartofficial?igsh=MTY5Mnh0c21hbGxlag==" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white">Properties</h3>
            <div className="mt-6 space-y-4 text-[10px] font-black uppercase tracking-widest text-white/45">
              {shopLinks.map((link) => (
                <a key={link.label} href={link.href} className="block transition-colors duration-200 hover:translate-x-1 hover:text-white">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white">Company</h3>
            <div className="mt-6 space-y-4 text-[10px] font-black uppercase tracking-widest text-white/45">
              {companyLinks.map((link) => (
                <a key={link.label} href={link.href} className="block transition-colors hover:text-white hover:translate-x-1 duration-200">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white">Policies</h3>
            <div className="mt-6 space-y-4 text-[10px] font-black uppercase tracking-widest text-white/45">
              {policyLinks.map((link) => (
                <a key={link.label} href={link.href} className="block transition-colors hover:text-white hover:translate-x-1 duration-200">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-8 text-[10px] font-black uppercase tracking-[0.2em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 Rome. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <span className="text-white/70">Verified Listings</span>
            <span className="h-3 w-px bg-white/10"></span>
            <span className="text-white/70">Inspection Support</span>
            <span className="h-3 w-px bg-white/10"></span>
            <span className="text-white/70">Buyer Protection</span>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
