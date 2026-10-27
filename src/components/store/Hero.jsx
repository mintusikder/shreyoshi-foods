import { Link } from "react-router";
import { ArrowRight, Leaf, Truck, Headphones } from "lucide-react";
const Hero = () => {
  return (
    <div>
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
            <span className="inline-flex items-center gap-2 rounded-full border border-[#f6c94a]/50 bg-white/10 px-4 py-2 text-xs font-semibold uppercase text-[#f6c94a]">
              <Leaf size={15} />
              Shreyoshi Foods · সোনালী সরিষার খাঁটি নির্যাস
            </span>

            <h1 className="mt-7 font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              ঘরে নিয়ে আসুন
              <span className="block text-[#f6c94a]">সোনালি উৎকর্ষ।</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-8 text-white/80 sm:text-lg">
              আপনার দৈনন্দিন রান্নায় সরিষার তেল ব্যবহার করুন। আমাদের সংগ্রহ
              দেখুন এবং আপনার রান্নাঘরের জন্য উপযুক্ত প্যাকটি বেছে নিন।
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
    </div>
  );
};

export default Hero;
