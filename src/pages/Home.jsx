import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategoryCards from "../components/CategoryCard";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import BookCard from "../components/BookCard";
import Testimonials from "../components/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";
import books from "../data/books";

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.category.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <Hero />

      {/* Stats Banner */}
      <section className="px-4 sm:px-6 -mt-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="bg-forest-500 rounded-[2rem] p-8 md:p-10 text-white shadow-premium">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "74K+", label: "Aspirants prepping" },
                { value: "1,840", label: "Weekly mock attempts" },
                { value: "120+", label: "Curated E-Books" },
                { value: "310+", label: "Topics covered" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className={`text-center md:text-left ${i < 3 ? "md:border-r md:border-forest-400/30 md:pr-8" : ""}`}
                >
                  <h3 className="text-3xl md:text-4xl font-bold">{stat.value}</h3>
                  <p className="text-forest-100/70 mt-1 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="premium-card p-2">
            <form
              className="flex flex-col sm:flex-row gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="relative flex-1">
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search books, author or category..."
                  className="w-full outline-none pl-11 pr-4 py-3.5 rounded-2xl bg-cream-50 text-slate-800 placeholder:text-slate-400"
                />
              </div>
              <button type="submit" className="btn-primary !rounded-2xl sm:!px-8">
                Search
              </button>
            </form>
          </div>
        </div>
      </section>

      <CategoryCards />

      {/* Featured Books */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-forest-400 font-semibold mb-3">
                Top picks
              </p>
              <h2 className="section-heading">
                Featured{" "}
                <span className="font-display italic text-forest-400">E-Books</span>
              </h2>
            </div>
            <Link to="/books" className="text-forest-500 font-semibold hover:text-forest-400 transition text-sm">
              View all books →
            </Link>
          </div>

          {filteredBooks.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
              {filteredBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          ) : (
            <div className="premium-card p-12 text-center">
              <h3 className="text-2xl font-bold text-slate-900">No Books Found</h3>
              <p className="text-slate-500 mt-3">
                Try searching with another keyword.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 md:py-24 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.3em] text-forest-400 font-semibold mb-3">
              Popular
            </p>
            <h2 className="section-heading">
              Best selling{" "}
              <span className="font-display italic text-forest-400">books</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {books.slice(0, 4).map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
