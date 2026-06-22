import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-forest-500 text-white p-10 md:p-16 text-center shadow-premium">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/4" />
          </div>

          <div className="relative">
            <p className="text-sm uppercase tracking-[0.3em] text-forest-100 mb-4">
              Start your journey today
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
              Ready to ace your{" "}
              <span className="italic text-forest-200">next exam?</span>
            </h2>
            <p className="mt-4 text-lg text-forest-100 max-w-xl mx-auto">
              Access thousands of premium e-books with instant digital delivery
              and expert-curated content.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link
                to="/books"
                className="inline-flex items-center justify-center bg-white text-forest-500 px-8 py-4 rounded-full font-bold hover:bg-cream-100 transition shadow-lg"
              >
                Browse E-Books
              </Link>
              <Link
                to="/library"
                className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition"
              >
                My Library
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
