import { Link } from "react-router";
import {
  ArrowRight,
  ShoppingCart,
  Leaf,
  ShieldCheck,
  Truck,
  Headphones,
  //   Droplets,
  FlaskConical,
  Heart,
  Star,
  //   CheckCircle2,
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "Pure Mustard Oil",
    size: "500 ml Bottle",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=700&q=85",
    badge: "POPULAR",
  },
  {
    id: 2,
    name: "Pure Mustard Oil",
    size: "1 Litre Bottle",
    price: 220,
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=700&q=85",
    badge: "BEST VALUE",
  },
  {
    id: 3,
    name: "Family Pack",
    size: "5 Litre Jar",
    price: 980,
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=700&q=85",
    badge: "FAMILY SIZE",
  },
];

const benefits = [
  {
    icon: Leaf,
    title: "Quality Ingredients",
    description: "Carefully selected mustard seeds.",
  },
  {
    icon: FlaskConical,
    title: "Careful Processing",
    description: "Made with attention to quality.",
  },
  {
    icon: Heart,
    title: "Made for Your Kitchen",
    description: "A traditional cooking essential.",
  },
  {
    icon: ShieldCheck,
    title: "Quality You Can Trust",
    description: "Clear product and packaging details.",
  },
];

const categories = [
  {
    title: "Mustard Oil",
    subtitle: "For everyday cooking",
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80",
    link: "/shop?category=mustard-oil",
  },
  {
    title: "Cooking Oils",
    subtitle: "Explore our collection",
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80",
    link: "/shop?category=cooking-oils",
  },
  {
    title: "Combo Packs",
    subtitle: "Convenient family options",
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80",
    link: "/shop?category=combo-packs",
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden bg-[#fffdf7] text-[#173d2b]">
      {/* HERO SECTION */}
      <section className="relative isolate min-h-[560px] overflow-hidden bg-[#103b2b] lg:min-h-[620px]">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=90"
          alt="Golden fields and nature"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#082819]/95 via-[#103b2b]/80 to-[#103b2b]/10" />

        <div className="mx-auto grid min-h-[560px] max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 lg:min-h-[620px] lg:grid-cols-2 lg:px-10">
          <div className="max-w-2xl text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#f6c94a]/50 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#f6c94a]">
              <Leaf size={15} />
              SONA SEED · PREMIUM MUSTARD OIL
            </span>

            <h1 className="mt-7 font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Bring Home the
              <span className="block text-[#f6c94a]">Golden Goodness.</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-8 text-white/80 sm:text-lg">
              Discover mustard oil for your everyday cooking. Explore our
              collection and find the right pack for your kitchen.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/shop"
                className="inline-flex items-center gap-3 rounded-full bg-[#f6c94a] px-7 py-4 font-bold text-[#173d2b] transition hover:-translate-y-1 hover:bg-[#ffdc77]"
              >
                Shop Now <ArrowRight size={19} />
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-4 font-medium text-white transition hover:bg-white/10"
              >
                Discover Our Story
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-5 border-t border-white/20 pt-6 sm:grid-cols-3">
              <div className="flex items-center gap-3">
                <Leaf className="shrink-0 text-[#f6c94a]" size={24} />
                <span className="text-sm text-white/85">
                  Quality-focused
                  <span className="block text-xs text-white/60">
                    Product selection
                  </span>
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Truck className="shrink-0 text-[#f6c94a]" size={24} />
                <span className="text-sm text-white/85">
                  Convenient
                  <span className="block text-xs text-white/60">
                    Delivery options
                  </span>
                </span>
              </div>

              <div className="hidden items-center gap-3 sm:flex">
                <Headphones className="shrink-0 text-[#f6c94a]" size={24} />
                <span className="text-sm text-white/85">
                  Customer care
                  <span className="block text-xs text-white/60">
                    Support available
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div className="relative hidden items-center justify-center lg:flex">
            <div className="absolute h-[400px] w-[400px] rounded-full border border-[#f6c94a]/30" />
            <div className="absolute h-[330px] w-[330px] rounded-full bg-[#f6c94a]/10 blur-3xl" />

            <div className="relative w-full max-w-md rounded-[2rem] border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-sm">
              <img
                src="https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=900&q=90"
                alt="Cooking oil product inspiration"
                className="h-[390px] w-full rounded-[1.5rem] object-cover"
              />

              <div className="absolute bottom-8 left-8 right-8 rounded-2xl bg-[#fffdf7]/95 p-5 shadow-lg">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a57d15]">
                  SONA SEED COLLECTION
                </p>
                <p className="mt-2 font-serif text-2xl font-bold">
                  Goodness in Every Drop
                </p>
                <Link
                  to="/shop"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold"
                >
                  Explore Products <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY SECTION */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a57d15]">
              Explore Our Collection
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">
              Shop by Category
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-gray-600">
              Find the products and pack sizes that suit your everyday needs.
            </p>
          </div>

          <Link
            to="/shop"
            className="inline-flex items-center gap-2 font-semibold hover:text-[#a57d15]"
          >
            View All Categories <ArrowRight size={18} />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.title}
              to={category.link}
              className="group relative isolate min-h-[280px] overflow-hidden rounded-3xl bg-[#e9e3d2]"
            >
              <img
                src={category.image}
                alt={category.title}
                className="absolute inset-0 -z-20 h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#082819]/95 via-[#103b2b]/15 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                <span className="text-sm text-white/75">
                  {category.subtitle}
                </span>
                <div className="mt-2 flex items-center justify-between">
                  <h3 className="font-serif text-2xl font-bold">
                    {category.title}
                  </h3>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f6c94a] text-[#173d2b] transition group-hover:translate-x-1">
                    <ArrowRight size={20} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="bg-[#f5f1e6] py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a57d15]">
              Customer Favourites
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">
              Our Featured Products
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-600">
              Explore our available products and choose the pack that works best
              for your household.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.id}
                className="group overflow-hidden rounded-2xl border border-[#e9e3d5] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <Link
                  to={`/product/${product.id}`}
                  className="relative block overflow-hidden bg-[#eee8d9]"
                >
                  <span className="absolute left-4 top-4 z-10 rounded-full bg-[#103b2b] px-3 py-1.5 text-[10px] font-bold tracking-wider text-white">
                    {product.badge}
                  </span>

                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </Link>

                <div className="p-5">
                  <p className="text-xs font-medium text-[#a57d15]">
                    SONA SEED
                  </p>
                  <Link to={`/product/${product.id}`}>
                    <h3 className="mt-2 font-serif text-xl font-bold hover:text-[#a57d15]">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="mt-1 text-sm text-gray-500">{product.size}</p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-2xl font-bold">৳{product.price}</span>
                    <span className="flex items-center gap-1 text-xs text-[#a57d15]">
                      <Star size={15} fill="currentColor" />
                      Product details
                    </span>
                  </div>

                  <Link
                    to="/cart"
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#103b2b] px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-[#245b3e]"
                  >
                    <ShoppingCart size={18} />
                    View Cart
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/shop"
              className="inline-flex items-center gap-3 rounded-full border border-[#103b2b] px-7 py-3.5 font-semibold transition hover:bg-[#103b2b] hover:text-white"
            >
              Explore All Products <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:px-10">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1000&q=85"
            alt="Green plants and natural ingredients"
            className="h-[350px] w-full rounded-3xl object-cover sm:h-[460px]"
          />
          <div className="absolute -bottom-5 -right-3 rounded-2xl bg-[#f6c94a] p-5 shadow-lg sm:-right-5 sm:p-7">
            <Leaf size={30} />
            <p className="mt-2 font-serif text-xl font-bold">
              Nature Meets
              <br />
              Tradition
            </p>
          </div>
        </div>

        <div className="pt-5 lg:pl-5">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a57d15]">
            The SONA SEED Promise
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold leading-tight sm:text-4xl">
            A Thoughtful Choice
            <span className="block text-[#a57d15]">For Your Kitchen</span>
          </h2>
          <p className="mt-5 text-sm leading-8 text-gray-600">
            We believe choosing cooking essentials should feel simple. Our goal
            is to offer clear product information, dependable service, and a
            convenient shopping experience for every customer.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div key={benefit.title} className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#edf1e7] text-[#173d2b]">
                    <Icon size={23} />
                  </span>
                  <div>
                    <h3 className="font-semibold">{benefit.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-gray-500">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <Link
            to="/about"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#103b2b] px-6 py-3.5 font-semibold text-white transition hover:bg-[#245b3e]"
          >
            About SONA SEED <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* PROMOTIONAL BANNER */}
      <section className="px-5 pb-20 sm:px-8 lg:px-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#103b2b] px-6 py-12 sm:px-12 sm:py-16">
          <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full border border-[#f6c94a]/20" />
          <div className="absolute -bottom-36 right-24 h-80 w-80 rounded-full border border-[#f6c94a]/20" />

          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#f6c94a]">
                Make Your Choice
              </span>
              <h2 className="mt-4 max-w-2xl font-serif text-3xl font-bold text-white sm:text-4xl">
                Find Your Everyday Cooking Essential
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/70">
                Browse our collection, compare pack sizes, and order from the
                comfort of your home.
              </p>
            </div>

            <Link
              to="/shop"
              className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#f6c94a] px-7 py-4 font-bold text-[#173d2b] transition hover:scale-105"
            >
              Browse Products <ArrowRight size={19} />
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="bg-[#f5f1e6] py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a57d15]">
              From Seed to Bottle
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">
              Get to Know Our Process
            </h2>
            <p className="mt-4 text-sm leading-7 text-gray-600">
              Learn about our production methods, quality checks, and packaging
              through our process page.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Seed Selection",
                text: "Learn how mustard seeds are selected for production.",
              },
              {
                number: "02",
                title: "Oil Processing",
                text: "Discover the production methods used for our oil.",
              },
              {
                number: "03",
                title: "Packaging",
                text: "Explore how the finished product is prepared for delivery.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-[#e5dfd0] bg-[#fffdf7] p-7"
              >
                <span className="font-serif text-4xl font-bold text-[#d4b34d]">
                  {step.number}
                </span>
                <h3 className="mt-5 font-serif text-xl font-bold">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {step.text}
                </p>
                <Link
                  to="/process"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold hover:text-[#a57d15]"
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMER SERVICE STRIP */}
      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-14 sm:grid-cols-2 sm:px-8 lg:grid-cols-3 lg:px-10">
        <div className="flex items-center gap-4 rounded-2xl border border-[#e9e3d5] p-5">
          <Truck size={30} className="shrink-0 text-[#a57d15]" />
          <div>
            <h3 className="font-semibold">Delivery Information</h3>
            <p className="mt-1 text-sm text-gray-500">
              Check available delivery areas.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-2xl border border-[#e9e3d5] p-5">
          <ShieldCheck size={30} className="shrink-0 text-[#a57d15]" />
          <div>
            <h3 className="font-semibold">Product Information</h3>
            <p className="mt-1 text-sm text-gray-500">
              Review sizes, prices, and details.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-2xl border border-[#e9e3d5] p-5 sm:col-span-2 lg:col-span-1">
          <Headphones size={30} className="shrink-0 text-[#a57d15]" />
          <div>
            <h3 className="font-semibold">Need Assistance?</h3>
            <p className="mt-1 text-sm text-gray-500">
              <Link to="/contact" className="underline underline-offset-4">
                Contact our team
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
