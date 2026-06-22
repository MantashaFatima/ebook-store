import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaBookOpen } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import books from "../data/books";

export default function Library() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [purchasedBooks, setPurchasedBooks] = useState([]);

  useEffect(() => {
    const purchased = JSON.parse(
      localStorage.getItem("studybooks_purchased") || "[]"
    );

    setPurchasedBooks(
      books.filter((book) => purchased.includes(book.id))
    );
  }, []);

  const filteredBooks = purchasedBooks.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase()) ||
      book.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-cream-100">
        <div className="bg-forest-500 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
            <p className="text-sm uppercase tracking-[0.3em] text-forest-200 mb-3">
              Your collection
            </p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
              My{" "}
              <span className="italic text-forest-200">Library</span>
            </h1>
            <p className="mt-4 text-forest-100/70">
              {purchasedBooks.length} purchased book
              {purchasedBooks.length === 1 ? "" : "s"} in your library.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-12">
          <div className="relative max-w-xl mb-10">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by title, author or category..."
              className="input-premium !pl-11"
            />
          </div>

          {filteredBooks.length === 0 ? (
            <div className="premium-card p-12 md:p-16 text-center">
              <div className="w-20 h-20 rounded-2xl bg-forest-50 text-forest-500 flex items-center justify-center mx-auto mb-6">
                <FaBookOpen size={32} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">No Books Found</h2>
              <p className="text-slate-500 mt-3 max-w-md mx-auto">
                {purchasedBooks.length === 0
                  ? "Your library is empty. Purchase a book to see it here."
                  : "Try another search keyword."}
              </p>
              {purchasedBooks.length === 0 && (
                <button
                  onClick={() => navigate("/books")}
                  className="btn-primary mt-6"
                >
                  Browse E-Books
                </button>
              )}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
              {filteredBooks.map((book) => (
                <div
                  key={book.id}
                  className="premium-card overflow-hidden group hover:-translate-y-1 cursor-pointer"
                  onClick={() => navigate(`/reader/${book.id}`)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="h-52 w-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <span className="absolute top-3 left-3 badge-green">
                      {book.category}
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="font-bold text-slate-900 line-clamp-2">
                      {book.title}
                    </h3>
                    <p className="text-slate-400 text-sm mt-1">{book.author}</p>
                    <div className="flex items-center gap-1 mt-2 text-amber-400 text-sm">
                      ★ {book.rating}
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/reader/${book.id}`);
                      }}
                      className="w-full mt-4 btn-primary !py-2.5 !text-sm"
                    >
                      Continue Reading
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
