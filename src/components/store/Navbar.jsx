
import { useState } from "react";
import { Link } from "react-router";
import {
  Leaf,
  Truck,
  ShieldCheck,
  Search,
  UserRound,
  Heart,
  ShoppingCart,
  House,
  ChevronDown,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

const navLinks = [
  { name: "Home", path: "/", icon: House },
  { name: "Shop", path: "/shop", dropdown: true },
  { name: "About Us", path: "/about" },
  { name: "Our Process", path: "/process" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const categories = [
  { name: "Mustard Oil", path: "/shop?category=mustard-oil" },
  { name: "Cooking Oils", path: "/shop?category=cooking-oils" },
  { name: "Combo Packs", path: "/shop?category=combo-packs" },
  { name: "Special Offers", path: "/shop?category=offers" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [search, setSearch] = useState("");

  const closeMenu = () => {
    setMobileOpen(false);
    setShopOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    const query = search.trim();
    const destination = query
      ? `/shop?search=${encodeURIComponent(query)}`
      : "/shop";

    closeMenu();
    window.location.href = destination;
  };

  return (
    <header className="sticky top-0 z-50 bg-[#fffdf7] text-[#173d2b] shadow-sm">
      {/* Top information bar */}
      <div className="hidden bg-[#103b2b] text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
          <span className="flex items-center gap-2">
            <Leaf size={15} className="text-[#f6c94a]" />
            Pure <span className="text-[#f6c94a]">•</span> Natural
            <span className="text-[#f6c94a]">•</span> Healthy
          </span>

          <span className="flex items-center gap-2">
            <Truck size={17} className="text-[#f6c94a]" />
            Free delivery on orders above ৳999
          </span>

          <span className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-[#f6c94a]" />
            Quality You Can Trust
          </span>
        </div>
      </div>

      {/* Main brand and search area */}
      <div className="relative border-b border-[#e9e5d9]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 md:gap-4 md:px-6">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex shrink-0 items-center gap-2"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eaf0df] sm:h-11 sm:w-11">
              <Leaf size={26} className="text-[#173d2b]" />
            </span>

            <span>
              <span className="block font-serif text-xl font-bold tracking-wide sm:text-2xl">
                Shreyoshi Foods
              </span>
              <span className="hidden text-[9px] sm:block">
                সোনালী সরিষার খাঁটি নির্যাস 
              </span>
            </span>
          </Link>

          {/* Desktop search */}
          <form
            onSubmit={handleSearch}
            className="hidden max-w-md flex-1 items-center rounded-full border border-[#d8d8cd] bg-white p-1 transition focus-within:border-[#173d2b] lg:flex"
          >
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search mustard oil..."
              aria-label="Search products"
              className="w-full bg-transparent px-4 py-1.5 text-sm outline-none"
            />

            <button
              type="submit"
              aria-label="Search"
              className="rounded-full bg-[#103b2b] p-2.5 text-white transition hover:bg-[#286344]"
            >
              <Search size={17} />
            </button>
          </form>

          {/* Desktop actions */}
          <div className="hidden items-center gap-4 lg:flex">
            <Link
              to="/login"
              className="flex items-center gap-2 text-sm transition hover:text-[#b58a1b]"
            >
              <UserRound size={20} />
              Login
            </Link>

            <Link
              to="/wishlist"
              aria-label="Wishlist"
              className="transition hover:text-[#b58a1b]"
            >
              <Heart size={21} />
            </Link>

            <Link
              to="/cart"
              className="flex items-center gap-2 rounded-full bg-[#edf1e7] px-3.5 py-2.5 text-sm font-semibold transition hover:bg-[#dce6d5]"
            >
              <ShoppingCart size={19} />
              Cart
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-3 lg:hidden">
            <Link to="/cart" aria-label="Cart">
              <ShoppingCart size={22} />
            </Link>

            <button
              type="button"
              onClick={() => {
                setMobileOpen((prev) => !prev);
                setShopOpen(false);
              }}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="rounded-lg border border-[#d8d8cd] p-1.5"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop navigation */}
      <nav className="relative hidden border-b border-[#e9e5d9] lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-1">
            {navLinks.map((item) => {
              const Icon = item.icon;

              if (item.dropdown) {
                return (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setShopOpen((prev) => !prev)}
                    aria-expanded={shopOpen}
                    className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition hover:bg-[#f1f0e8] ${
                      shopOpen ? "bg-[#f1f0e8]" : ""
                    }`}
                  >
                    {item.name}
                    <ChevronDown
                      size={15}
                      className={`transition-transform duration-300 ${
                        shopOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                );
              }

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={closeMenu}
                  className="flex items-center gap-2 px-4 py-3 text-sm font-medium transition hover:bg-[#f1f0e8]"
                >
                  {Icon && <Icon size={16} />}
                  {item.name}
                </Link>
              );
            })}
          </div>

          <Link
            to="/about"
            className="flex items-center gap-2 rounded-full bg-[#104b34] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#236744]"
          >
            <Leaf size={16} className="text-[#f6c94a]" />
            Our Mission
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* Desktop mega menu */}
        <div
          className={`absolute left-0 top-full z-50 w-full overflow-hidden border-t border-[#eee9dc] bg-white shadow-xl transition-all duration-300 ease-in-out ${
            shopOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0"
          }`}
        >
          <div className="mx-auto grid max-w-7xl grid-cols-3 gap-8 px-8 py-7">
            <div>
              <h3 className="mb-3 font-semibold">Shop by Category</h3>

              {categories.map((category) => (
                <Link
                  key={category.name}
                  to={category.path}
                  onClick={closeMenu}
                  className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm transition hover:bg-[#f7f2e5]"
                >
                  {category.name}
                  <ArrowRight size={15} />
                </Link>
              ))}
            </div>

            <div className="rounded-2xl bg-[#f2f2e6] p-5">
              <Leaf size={27} className="mb-3 text-[#a57d15]" />
              <h3 className="mb-2 text-lg font-semibold">
                Bring Nature Home
              </h3>
              <p className="mb-4 text-sm leading-6 text-gray-600">
                Explore our mustard oil collection and available pack sizes.
              </p>
              <Link
                to="/shop"
                onClick={closeMenu}
                className="inline-flex items-center gap-2 text-sm font-semibold"
              >
                Explore Products <ArrowRight size={16} />
              </Link>
            </div>

            <div className="flex flex-col justify-center rounded-2xl bg-[#103b2b] p-6 text-white">
              <span className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#f6c94a]">
                SONA SEED
              </span>
              <h3 className="mb-3 text-xl font-semibold">
                Goodness in Every Drop
              </h3>
              <p className="mb-4 text-sm leading-6 text-white/80">
                Find the right pack for your kitchen and family.
              </p>
              <Link
                to="/shop"
                onClick={closeMenu}
                className="flex w-fit items-center gap-2 rounded-full bg-[#f6c94a] px-4 py-2.5 text-sm font-semibold text-[#173d2b]"
              >
                Shop Now <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay: does not push the Home section down */}
      <div
        className={`absolute left-0 right-0 top-full z-50 border-t border-[#e9e5d9] bg-[#fffdf7] shadow-xl transition-all duration-300 ease-in-out lg:hidden ${
          mobileOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0 pointer-events-none"
        }`}
      >
        <div className="max-h-[calc(100dvh-75px)] overflow-y-auto px-4 py-3">
          {/* Mobile search */}
          <form
            onSubmit={handleSearch}
            className="mb-3 flex items-center rounded-full border border-[#d8d8cd] bg-white p-1"
          >
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              aria-label="Search products"
              className="w-full bg-transparent px-4 py-2 text-sm outline-none"
            />

            <button
              type="submit"
              aria-label="Search"
              className="rounded-full bg-[#103b2b] p-2.5 text-white"
            >
              <Search size={17} />
            </button>
          </form>

          {navLinks.map((item) => {
            const Icon = item.icon;

            if (item.dropdown) {
              return (
                <div key={item.name}>
                  <button
                    type="button"
                    onClick={() => setShopOpen((prev) => !prev)}
                    aria-expanded={shopOpen}
                    className="flex w-full items-center justify-between border-b border-[#e9e5d9] px-3 py-3 text-left text-sm font-medium"
                  >
                    <span>Shop</span>
                    <ChevronDown
                      size={17}
                      className={`transition-transform duration-300 ${
                        shopOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Smooth animated dropdown */}
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                      shopOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      {categories.map((category) => (
                        <Link
                          key={category.name}
                          to={category.path}
                          onClick={closeMenu}
                          className="flex items-center justify-between border-b border-[#e9e5d9]/70 py-3 pl-7 pr-3 text-sm text-gray-600 transition-colors hover:bg-[#f1f0e8] hover:text-[#173d2b]"
                        >
                          {category.name}
                          <ArrowRight size={14} />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={closeMenu}
                className="flex items-center gap-2 border-b border-[#e9e5d9] px-3 py-3 text-sm font-medium transition hover:bg-[#f1f0e8]"
              >
                {Icon && <Icon size={16} />}
                {item.name}
              </Link>
            );
          })}

          <div className="mt-3 flex gap-3">
            <Link
              to="/login"
              onClick={closeMenu}
              className="flex-1 rounded-full border border-[#173d2b] py-2.5 text-center text-sm font-medium"
            >
              Login
            </Link>

            <Link
              to="/wishlist"
              onClick={closeMenu}
              className="flex-1 rounded-full bg-[#173d2b] py-2.5 text-center text-sm text-white"
            >
              Wishlist
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
