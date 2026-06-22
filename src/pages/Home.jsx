import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategoryCards from "../components/CategoryCard";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import BookCard from "../components/BookCard";
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

      {/* Stats Section */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-green-800 to-green-700 rounded-3xl p-12 text-white">
            <div className="grid md:grid-cols-4 gap-8">
              
              <div className="border-r border-green-600 pr-8">
                <h3 className="text-5xl font-bold mb-2">74K+</h3>
                <p className="text-green-100 text-lg">Aspirants prepping</p>
              </div>

              <div className="border-r border-green-600 pr-8">
                <h3 className="text-5xl font-bold mb-2">1,840</h3>
                <p className="text-green-100 text-lg">Weekly mock attempts</p>
              </div>

              <div className="border-r border-green-600 pr-8">
                <h3 className="text-5xl font-bold mb-2">120+</h3>
                <p className="text-green-100 text-lg">Curated E-Books</p>
              </div>

              <div>
                <h3 className="text-5xl font-bold mb-2">310+</h3>
                <p className="text-green-100 text-lg">Topics covered</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-12 bg-slate-100">
        <div className="max-w-4xl mx-auto px-6">

          <div className="bg-white p-4 rounded-2xl shadow flex gap-4">

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search books, author or category..."
              className="flex-1 outline-none"
            />

            <button className="bg-indigo-600 text-white px-8 py-3 rounded-xl">
              Search
            </button>

          </div>

        </div>
      </section>

      <CategoryCards />

      {/* Featured Books */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold mb-10">
          Featured E-Books
        </h2>

        {filteredBooks.length > 0 ? (
          <div className="grid md:grid-cols-4 gap-6">

            {filteredBooks.map((book) => (
              <BookCard
                key={book.id}
                book={book}
              />
            ))}

          </div>
        ) : (
          <div className="bg-white p-10 rounded-xl shadow text-center">
            <h3 className="text-2xl font-bold">
              No Books Found 📚
            </h3>

            <p className="text-gray-500 mt-3">
              Try searching with another keyword.
            </p>
          </div>
        )}

      </section>

      {/* Best Sellers */}
      <section className="bg-slate-50 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-10">
            Best Selling Books
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {books.slice(0, 4).map((book) => (
              <BookCard
                key={book.id}
                book={book}
              />
            ))}

          </div>

        </div>

      </section>

      <CTA />

      <Footer />
    </>
  );
}