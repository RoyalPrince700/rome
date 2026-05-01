import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setUserDetails } from "../store/userSlice";
import SummaryApi from "../common";
import ROLE from "../common/role";
import Context from "../context";
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { PiListBold, PiMagnifyingGlassBold, PiShoppingCartSimpleBold, PiXBold } from "react-icons/pi";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Properties", to: "/product-category" },
  { label: "Support", to: "/support" },
];

const goSearch = (navigate, value) => {
  const v = value.trim();
  if (v) {
    navigate(`/search?q=${encodeURIComponent(v)}`);
  } else {
    navigate("/search");
  }
};

const Header = () => {
  const [menuDisplay, setMenuDisplay] = useState(false);
  const [visible, setVisible] = useState(false);
  const user = useSelector((state) => state?.user?.user);
  const dispatch = useDispatch();
  const context = useContext(Context);
  const navigate = useNavigate();
  const location = useLocation();
  const queryValue = new URLSearchParams(location.search).get("q") || "";
  const [search, setSearch] = useState(queryValue);
  const hideSearchBar = ["/login", "/signup", "/sign-up"].includes(location.pathname);

  const getCartCount = () => {
    return context?.cartProductCount || 0;
  };

  useEffect(() => {
    if (location.pathname === "/search") {
      setSearch(queryValue);
    } else {
      setSearch("");
    }
  }, [location.pathname, queryValue]);

  const handleScroll = () => {
    if (menuDisplay) {
      setMenuDisplay(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuDisplay]);

  const handleLogout = async () => {
    const fetchData = await fetch(SummaryApi.logout_user.url, {
      method: SummaryApi.logout_user.method,
      credentials: "include",
    });
    const data = await fetchData.json();
    if (data.success) {
      toast.success(data.message);
      dispatch(setUserDetails(null));
      navigate("/");
    } else if (data.error) {
      toast.error(data.message);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".user-menu") && menuDisplay) {
        setMenuDisplay(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuDisplay]);

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearch(value);
    goSearch(navigate, value);
  };

  useEffect(() => {
    if (!visible) {
      return undefined;
    }
    const onKey = (e) => {
      if (e.key === "Escape") {
        setVisible(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [visible]);

  useEffect(() => {
    if (!visible) {
      return undefined;
    }
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [visible]);

  return (
    <>
      <header className='relative z-50 px-3 pt-2 sm:px-6 lg:px-8'>
        <div className='relative mx-auto flex w-full max-w-7xl items-center gap-2 rounded-full border border-white/70 bg-white/80 px-3 py-2 shadow-[0_18px_50px_rgba(17,17,17,0.08)] backdrop-blur-2xl sm:gap-4 sm:px-5 sm:py-3'>
        <Link to='/' className='shrink-0'>
          <div className='flex flex-col'>
            <span className='select-none text-xl font-black uppercase tracking-[-0.08em] text-neutral-950 sm:text-3xl'>
              Rome
            </span>
            <span className='hidden text-[9px] font-black uppercase tracking-[0.28em] text-neutral-500 sm:block'>
              Real estate, refined
            </span>
          </div>
        </Link>

        {!hideSearchBar && (
          <div className='hidden flex-1 items-center px-4 lg:flex'>
            <div className='flex w-full max-w-2xl items-center rounded-full border border-neutral-200 bg-white/70 px-4 py-2.5 transition-colors focus-within:border-neutral-950'>
              <GrSearch className='mr-3 text-neutral-400' />
              <input
                type='text'
                placeholder='Search locations, duplexes, bedrooms, kitchens'
                className='w-full bg-transparent text-sm font-bold outline-none placeholder:text-neutral-400'
                value={search}
                onChange={handleSearch}
              />
            </div>
          </div>
        )}

        <nav className='hidden items-center gap-1 rounded-full bg-neutral-100/70 px-1 py-1 xl:flex'>
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-xs font-black uppercase tracking-widest transition-colors ${
                  isActive ? "bg-neutral-950 text-white" : "text-neutral-600 hover:text-neutral-950"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className='ml-auto flex shrink-0 items-center gap-2 sm:gap-5'>
          {!hideSearchBar && (
            <button
              type="button"
              onClick={() => navigate("/search")}
              className='flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white/80 text-neutral-950 shadow-sm transition hover:border-neutral-950 lg:hidden'
              aria-label="Search properties"
            >
              <PiMagnifyingGlassBold className='h-5 w-5' />
            </button>
          )}

          <div className='group relative hidden sm:block'>
            {user ? (
              <>
                {user.avatarUrl ? (
                  <img src={user.avatarUrl} alt={user.fullName} className='h-9 w-9 cursor-pointer rounded-full border border-neutral-200 object-cover' />
                ) : (
                  <div className='flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-neutral-200 text-neutral-700 transition hover:border-neutral-950 hover:text-neutral-950'>
                    <FaRegCircleUser className='h-5 w-5' />
                  </div>
                )}
                <div className='absolute right-0 hidden pt-4 group-hover:block'>
                  <div className='w-52 rounded-3xl border border-neutral-200 bg-white/95 p-4 text-neutral-500 shadow-2xl backdrop-blur'>
                    <p className='mb-1 truncate text-xs font-black uppercase text-neutral-950'>{user.fullName || user.email}</p>
                    <hr className='mb-3 border-slate-100' />
                    <p className='cursor-pointer text-xs font-bold uppercase transition hover:text-neutral-950' onClick={() => navigate('/order')}>Inspections</p>
                    <p className='mt-2 cursor-pointer text-xs font-bold uppercase transition hover:text-neutral-950' onClick={handleLogout}>Logout</p>
                  </div>
                </div>
              </>
            ) : (
              <Link to='/login' className='flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-700 transition hover:border-neutral-950 hover:text-neutral-950'>
                <FaRegCircleUser className='h-5 w-5' />
              </Link>
            )}
          </div>

          {user?.role === ROLE.ADMIN && (
            <button
              onClick={() => navigate('/admin-overview/overview')}
              className='hidden rounded-full border border-neutral-950 bg-neutral-950 px-4 py-2 text-xs font-black uppercase tracking-wider text-white transition hover:bg-white hover:text-neutral-950 sm:block'
            >
              Admin
            </button>
          )}

          <Link to='/cart' className='relative hidden h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-700 transition hover:border-neutral-950 hover:text-neutral-950 sm:flex' aria-label='Saved listings'>
            <PiShoppingCartSimpleBold className='h-5 w-5' />
            <p className='absolute -right-2 -top-2 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-neutral-950 px-1 text-[10px] font-black text-white'>
              {getCartCount()}
            </p>
          </Link>

          {/* Mobile Hamburger Menu */}
          <button
            type="button"
            onClick={() => setVisible(true)}
            className="flex h-9 items-center justify-center rounded-full bg-neutral-950 px-3 text-white shadow-[0_12px_28px_rgba(17,17,17,0.16)] transition hover:bg-neutral-800 xl:hidden"
            aria-label="Open menu"
            aria-expanded={visible}
          >
            <PiListBold className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>

      {/* Mobile menu: backdrop + slide-over panel (above header to avoid click/hover bugs) */}
      {visible && (
        <div
          className="fixed inset-0 z-[999] xl:hidden"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default bg-neutral-950/50 backdrop-blur-sm"
            onClick={() => setVisible(false)}
            aria-label="Close menu"
          />
          <div className="absolute right-0 top-0 flex h-full w-full max-w-[320px] flex-col overflow-y-auto border-l border-white/60 bg-white/90 shadow-2xl backdrop-blur-2xl">
            <div className="flex shrink-0 cursor-pointer items-center justify-between border-b border-neutral-200 p-5" onClick={() => setVisible(false)}>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-neutral-950">Rome Menu</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">Real estate, refined</p>
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-950 text-white">
                <PiXBold className="h-4 w-4" />
              </div>
            </div>

            <div className="border-b border-neutral-200 px-6 py-6">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500">Explore spaces</p>
              <div className="mt-6 space-y-4">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.label}
                    onClick={() => setVisible(false)}
                    to={link.to}
                    className="block text-sm font-black uppercase tracking-widest text-neutral-950 transition hover:text-neutral-500"
                  >
                    {link.label}
                  </NavLink>
                ))}
                <button
                  type="button"
                  onClick={() => {
                    setVisible(false);
                    navigate("/search");
                  }}
                  className="w-full text-left text-sm font-black uppercase tracking-widest text-neutral-950 transition hover:text-neutral-500"
                >
                  Search
                </button>
                <NavLink
                  onClick={() => setVisible(false)}
                  to="/cart"
                  className="flex items-center justify-between text-sm font-black uppercase tracking-widest text-neutral-950 transition hover:text-neutral-500"
                >
                  <span>Saved Listings</span>
                  <span className="rounded-full bg-neutral-950 px-2.5 py-1 text-[10px] font-black text-white">{getCartCount()}</span>
                </NavLink>
              </div>
            </div>

            {user ? (
              <>
                <div className="flex items-center gap-4 border-b border-neutral-200 bg-neutral-100/70 px-6 py-6">
                  {user.avatarUrl ? (
                    <img src={user.avatarUrl} alt={user.fullName} className="h-12 w-12 rounded-full border border-white object-cover shadow-sm" />
                  ) : (
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white bg-white text-neutral-700 shadow-sm">
                      <FaRegCircleUser className="h-6 w-6" />
                    </div>
                  )}
                  <div className="overflow-hidden">
                    <p className="truncate text-xs font-black uppercase tracking-wider text-neutral-950">{user.fullName || "User"}</p>
                    <p className="truncate text-[10px] font-bold text-neutral-500">{user.email}</p>
                  </div>
                </div>
                <div
                  onClick={() => {
                    setVisible(false);
                    navigate("/order");
                  }}
                  className="cursor-pointer border-b border-neutral-200 px-6 py-4 text-xs font-black uppercase tracking-widest transition hover:bg-neutral-100 hover:text-neutral-500"
                >
                  My Inspections
                </div>
              </>
            ) : (
              <Link onClick={() => setVisible(false)} to="/login" className="border-b border-neutral-200 px-6 py-4 text-xs font-black uppercase tracking-widest transition hover:bg-neutral-100 hover:text-neutral-500">
                Login / Sign Up
              </Link>
            )}
            {user?.role === ROLE.ADMIN && (
              <NavLink
                onClick={() => setVisible(false)}
                className="border-b border-neutral-200 px-6 py-4 text-xs font-black uppercase tracking-widest transition hover:bg-neutral-100 hover:text-neutral-500"
                to="/admin-overview/overview"
              >
                Admin Panel
              </NavLink>
            )}
            {user && (
              <div
                onClick={() => {
                  setVisible(false);
                  handleLogout();
                }}
                className="cursor-pointer px-6 py-4 text-xs font-black uppercase tracking-widest transition hover:bg-neutral-100 hover:text-neutral-500"
              >
                Logout
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;