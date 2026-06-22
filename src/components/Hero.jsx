import { Link } from "react-router-dom";
import { FaStar, FaUsers, FaBook } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream-100">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-forest-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-forest-100/40 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div className="animate-fade-up">
            <span className="badge-green px-4 py-2 text-sm">
              India&apos;s #1 Exam E-Book Platform
            </span>

            <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold text-slate-900 leading-[1.1] tracking-tight">
              Crack Your Dream Exam With{" "}
              <span className="italic text-forest-400">Premium</span> E-Books
            </h1>

            <p className="mt-6 text-lg text-slate-500 leading-relaxed max-w-xl">
              Access high-quality study material for UPSC, SSC, Banking, Railway
              and other competitive examinations — curated by expert educators.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/books" className="btn-primary !px-8 !py-4">
                Explore Books
              </Link>
              <Link to="/library" className="btn-secondary !px-8 !py-4">
                My Library
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-slate-200/80">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-forest-50 flex items-center justify-center text-forest-500">
                  <FaBook size={20} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">500+</p>
                  <p className="text-sm text-slate-500">E-Books</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-forest-50 flex items-center justify-center text-forest-500">
                  <FaUsers size={20} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">25K+</p>
                  <p className="text-sm text-slate-500">Students</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-forest-50 flex items-center justify-center text-forest-500">
                  <FaStar size={20} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">4.9★</p>
                  <p className="text-sm text-slate-500">Rating</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-up">
            <div className="absolute -inset-4 bg-forest-500/10 rounded-[2.5rem] rotate-2" />
            <img
              src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200"
              alt="Book Collection"
              className="relative rounded-[2rem] shadow-premium h-64 sm:h-80 md:h-[420px] lg:h-[500px] w-full object-cover"
            />

            <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white rounded-2xl shadow-premium p-5 border border-slate-100 animate-float">
              <p className="text-sm text-slate-500">Trusted by</p>
              <p className="text-2xl font-bold text-forest-500">25,000+</p>
              <p className="text-sm text-slate-500">Active learners</p>
            </div>

            <div className="absolute -top-4 -right-4 sm:-right-6 bg-forest-500 text-white rounded-2xl shadow-premium p-4">
              <p className="text-sm opacity-80">New arrivals</p>
              <p className="text-xl font-bold">120+ Books</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
