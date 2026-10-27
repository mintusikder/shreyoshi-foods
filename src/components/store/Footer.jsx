
import { useState } from "react";
import { Link } from "react-router";
import {
  Leaf,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Share2,
  Camera,
  Play,
  Send,
  ShieldCheck,
  Truck,
  Headphones,
} from "lucide-react";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Our Process", path: "/process" },
  { name: "Shop Products", path: "/shop" },
  { name: "Blog", path: "/blog" },
  { name: "Contact Us", path: "/contact" },
];

const productLinks = [
  { name: "Mustard Oil", path: "/shop?category=mustard-oil" },
  { name: "Cooking Oils", path: "/shop?category=cooking-oils" },
  { name: "Combo Packs", path: "/shop?category=combo-packs" },
  { name: "Special Offers", path: "/shop?category=offers" },
];

// const supportLinks = [
//   { name: "My Account", path: "/login" },
//   { name: "Shopping Cart", path: "/cart" },
//   { name: "Wishlist", path: "/wishlist" },
//   { name: "Privacy Policy", path: "/privacy-policy" },
//   { name: "Terms & Conditions", path: "/terms" },
// ];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e) {
    e.preventDefault();

    if (!email.trim()) return;

    // Connect your newsletter API or backend here.
    setSubscribed(true);
    setEmail("");
  }

  return (
    <footer className="bg-[#103b2b] text-white">
      {/* Benefits strip */}
      <div className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-5 py-7 sm:grid-cols-3 sm:px-6">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#f6c94a]">
              <Leaf size={25} />
            </span>
            <div>
              <h3 className="font-semibold">Quality First</h3>
              <p className="mt-1 text-sm text-white/65">
                Quality you can trust
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#f6c94a]">
              <Truck size={25} />
            </span>
            <div>
              <h3 className="font-semibold">Convenient Delivery</h3>
              <p className="mt-1 text-sm text-white/65">
                Delivery across available areas
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#f6c94a]">
              <Headphones size={25} />
            </span>
            <div>
              <h3 className="font-semibold">Customer Support</h3>
              <p className="mt-1 text-sm text-white/65">
                We are here to help
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-5 lg:gap-8 lg:py-16">
        {/* Brand */}
        <div className="lg:col-span-2">
          <Link to="/" className="mb-5 inline-flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f6c94a] text-[#103b2b]">
              <Leaf size={29} />
            </span>

            <span>
              <span className="block font-serif text-3xl font-bold tracking-wide">
                SONA SEED
              </span>
              <span className="text-[10px] tracking-[0.32em] text-[#f6c94a]">
                PREMIUM MUSTARD OIL
              </span>
            </span>
          </Link>

          <p className="max-w-sm text-sm leading-7 text-white/70">
            Bringing the goodness of mustard oil to your kitchen.
            Discover our products and find the right choice for your family.
          </p>

          {/* Social links */}
          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition hover:border-[#f6c94a] hover:bg-[#f6c94a] hover:text-[#103b2b]"
            >
              <Share2 size={18} />
            </a>

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition hover:border-[#f6c94a] hover:bg-[#f6c94a] hover:text-[#103b2b]"
            >
              <Camera size={18} />
            </a>

            <a
              href="https://youtube.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition hover:border-[#f6c94a] hover:bg-[#f6c94a] hover:text-[#103b2b]"
            >
              <Play size={18} />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="mb-5 text-base font-semibold">
            Quick Links
            <span className="mt-2 block h-0.5 w-10 bg-[#f6c94a]" />
          </h3>

          <ul className="space-y-3">
            {quickLinks.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="group flex items-center gap-2 text-sm text-white/70 transition hover:text-[#f6c94a]"
                >
                  <ArrowRight
                    size={13}
                    className="transition group-hover:translate-x-1"
                  />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="mb-5 text-base font-semibold">
            Our Products
            <span className="mt-2 block h-0.5 w-10 bg-[#f6c94a]" />
          </h3>

          <ul className="space-y-3">
            {productLinks.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="group flex items-center gap-2 text-sm text-white/70 transition hover:text-[#f6c94a]"
                >
                  <ArrowRight
                    size={13}
                    className="transition group-hover:translate-x-1"
                  />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-5 text-base font-semibold">
            Get In Touch
            <span className="mt-2 block h-0.5 w-10 bg-[#f6c94a]" />
          </h3>

          <ul className="space-y-4 text-sm text-white/70">
            <li className="flex items-start gap-3">
              <MapPin size={19} className="mt-0.5 shrink-0 text-[#f6c94a]" />
              <span>Your business address, Bangladesh</span>
            </li>

            <li className="flex items-center gap-3">
              <Phone size={18} className="shrink-0 text-[#f6c94a]" />
              <a href="tel:+8801XXXXXXXXX" className="hover:text-[#f6c94a]">
                +880 1XXX-XXXXXX
              </a>
            </li>

            <li className="flex items-center gap-3">
              <Mail size={18} className="shrink-0 text-[#f6c94a]" />
              <a
                href="mailto:info@sonaseed.com"
                className="break-all hover:text-[#f6c94a]"
              >
                info@sonaseed.com
              </a>
            </li>
          </ul>

          <Link
            to="/contact"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#f6c94a] hover:text-white"
          >
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Newsletter */}
      <div className="border-y border-white/10 bg-[#0b3022]">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-5 py-8 sm:px-6 lg:flex-row lg:items-center">
          <div>
            <h3 className="text-xl font-semibold">
              Stay Connected with SONA SEED
            </h3>
            <p className="mt-2 text-sm text-white/65">
              Subscribe for product updates and special offers.
            </p>
          </div>

          <form
            onSubmit={handleSubscribe}
            className="flex w-full max-w-md rounded-full border border-white/20 bg-white p-1"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setSubscribed(false);
              }}
              placeholder="Enter your email address"
              aria-label="Email address"
              className="min-w-0 flex-1 bg-transparent px-4 text-sm text-[#173d2b] outline-none"
            />

            <button
              type="submit"
              className="flex shrink-0 items-center gap-2 rounded-full bg-[#f6c94a] px-4 py-3 text-sm font-semibold text-[#103b2b] transition hover:bg-[#ffda70]"
            >
              <span>Subscribe</span>
              <Send size={15} />
            </button>
          </form>

          {subscribed && (
            <p role="status" className="text-sm text-[#f6c94a]">
              Thank you for subscribing!
            </p>
          )}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-center sm:px-6 md:flex-row md:items-center md:justify-between md:text-left">
        <p className="text-xs text-white/60">
          © {new Date().getFullYear()} SONA SEED. All rights reserved.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-white/60">
          <Link to="/privacy-policy" className="hover:text-[#f6c94a]">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-[#f6c94a]">
            Terms & Conditions
          </Link>
          <span className="flex items-center gap-1.5">
            <ShieldCheck size={15} className="text-[#f6c94a]" />
            Secure Shopping
          </span>
        </div>
      </div>
    </footer>
  );
}
