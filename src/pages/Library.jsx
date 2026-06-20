import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import books from "../data/books";

export default function Library() {
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

      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-4">My Library</h1>
        <p className="text-gray-600 mb-8">
          You have {purchasedBooks.length} purchased book{purchasedBooks.length === 1 ? "" : "s"} in your library.
        </p>

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by title, author or category..."
          className="border p-3 rounded w-full mb-10"
        />

        {filteredBooks.length === 0 ? (
          <div className="bg-white p-10 rounded-xl shadow text-center">
            <h2 className="text-2xl font-bold">
              No Books Found 📚
            </h2>
            <p className="text-gray-500 mt-2">
              {purchasedBooks.length === 0
                ? "Your library is empty. Purchase a book to see it here."
                : "Try another search keyword."}
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-4 gap-6">
            {filteredBooks.map((book) => (
              <div
                key={book.id}
                className="bg-white rounded-xl shadow overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={book.image}
                  alt={book.title}
                  className="h-60 w-full object-cover"
                />

                <div className="p-4">
                  <span className="text-sm text-indigo-600 font-medium">
                    {book.category}
                  </span>

                  <h3 className="font-bold mt-2">{book.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{book.author}</p>

                  <div className="mt-2 text-yellow-500">⭐ {book.rating}</div>

                  <button className="w-full mt-4 bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
                    Continue Reading
                  </button>

                  <button className="w-full mt-3 border py-2 rounded hover:bg-gray-100">
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}