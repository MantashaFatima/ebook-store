import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import books from "../data/books";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookCard from "../components/BookCard";
import { CartContext } from "../context/CartContext";
import {
  FaStar,
  FaShoppingCart,
  FaShieldAlt,
  FaClock,
  FaMobileAlt,
  FaTimes,
} from "react-icons/fa";

export default function BookDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showNotification, setShowNotification] = useState(false);

  const { addToCart } = useContext(CartContext);

  const book = books.find((b) => b.id === Number(id));

  if (!book) {
    return <h1 className="text-center py-20">Book Not Found</h1>;
  }

  const relatedBooks = books
    .filter((item) => item.id !== book.id)
    .slice(0, 4);

  return (
    <>
      <Navbar />

      {showNotification && (
        <div className="fixed top-20 right-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 z-50 animate-pulse">
          <FaShoppingCart />
          Added to cart!
        </div>
      )}

      <div className="bg-[#F8F7F4] min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-12">

          <div className="grid lg:grid-cols-[420px_1fr_360px] gap-10">

            {/* LEFT IMAGE */}
            <div>
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-[650px] object-cover rounded-3xl shadow-lg"
              />

              <h3 className="font-bold text-2xl mt-6">
                Preview Pages
              </h3>

              <div className="grid grid-cols-3 gap-3 mt-4">
                <img
                  src={book.image}
                  alt=""
                  className="rounded-xl h-28 object-cover"
                />
                <img
                  src={book.image}
                  alt=""
                  className="rounded-xl h-28 object-cover"
                />
                <img
                  src={book.image}
                  alt=""
                  className="rounded-xl h-28 object-cover"
                />
              </div>
            </div>

            {/* CENTER CONTENT */}
            <div>

              <p className="uppercase tracking-[4px] text-gray-500 text-sm">
                {book.category} • {book.subject}
              </p>

              <h1 className="text-5xl font-extrabold text-slate-900 mt-3 leading-tight">
                {book.title}
              </h1>

              <p className="text-2xl text-gray-600 mt-3">
                by {book.author}
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-6">

                <div className="flex items-center gap-2">
                  <FaStar className="text-green-700" />
                  <span>{book.rating}</span>
                </div>

                <span className="text-gray-500">
                  1,320 Reviews
                </span>

                <span className="text-gray-500">
                  320 Pages
                </span>

                <span className="text-gray-500">
                  {book.language}
                </span>

                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium">
                  Preview 12 Pages
                </span>

              </div>

              <div className="flex gap-8 mt-10 border-b pb-5">
                <button className="font-bold text-slate-900 border-b-4 border-green-700 pb-3">
                  About
                </button>

                <button className="text-gray-500">
                  Contents
                </button>

                <button className="text-gray-500">
                  Reviews
                </button>
              </div>

              <div className="mt-8 text-gray-700 leading-10 text-xl">

                <p>
                  This comprehensive e-book is specially designed
                  for students preparing for competitive examinations.
                  It covers theory, practice questions, mock tests,
                  previous year papers and exam strategies.
                </p>

                <p className="mt-6">
                  Each chapter contains detailed explanations,
                  solved examples and exam-oriented content that
                  helps students improve performance.
                </p>

              </div>

              {/* AUTHOR */}
              <div className="mt-12 bg-white rounded-3xl p-8 border">

                <p className="uppercase tracking-[4px] text-gray-400 text-sm">
                  About The Author
                </p>

                <h3 className="text-3xl font-bold mt-3">
                  {book.author}
                </h3>

                <p className="text-gray-600 mt-4 leading-8">
                  Experienced educator and author with years of
                  expertise in preparing students for competitive
                  examinations across India.
                </p>

              </div>

            </div>

            {/* RIGHT CARD */}
            <div className="w-full max-w-[340px] mx-auto lg:mx-0">

              <div className="bg-white rounded-[2rem] border border-slate-200 shadow-xl shadow-slate-200/40 p-6 sticky top-24">

                <div className="flex flex-wrap items-center gap-3 border-b border-slate-200 pb-5">
                  <div className="flex-1 min-w-[160px]">
                    <h2 className="text-4xl font-bold text-slate-900">
                      ₹{book.price}
                    </h2>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="line-through text-slate-400 text-xl">
                      ₹{book.price + 250}
                    </span>
                    <span className="bg-emerald-100 text-emerald-700 px-3 py-1.5 rounded-full text-sm font-semibold">
                      40% Off
                    </span>
                  </div>
                </div>

                <p className="text-slate-500 mt-4 text-sm">
                  Inclusive of GST
                </p>

                <button
                  onClick={() => {
                    addToCart(book);
                    navigate(`/checkout/${book.id}`);
                  }}
                  className="w-full mt-6 bg-emerald-700 text-white py-3 rounded-full text-lg font-semibold hover:bg-emerald-800 transition"
                >
                  Buy now
                </button>

                <button
                  onClick={() => {
                    addToCart(book);
                    setShowNotification(true);
                    setTimeout(() => setShowNotification(false), 2000);
                  }}
                  className="w-full mt-3 border border-slate-200 bg-white text-slate-900 py-3 rounded-full text-lg font-medium flex items-center justify-center gap-2 hover:bg-slate-50 transition shadow-sm"
                >
                  <FaShoppingCart />
                  Add to cart
                </button>

                <div className="border-t border-slate-200 mt-7 pt-7 space-y-4 text-slate-700">

                  <div className="flex items-center gap-3">
                    <FaShieldAlt />
                    Watermarked, single-device read
                  </div>

                  <div className="flex items-center gap-3">
                    <FaClock />
                    6-month access from purchase
                  </div>

                  <div className="flex items-center gap-3">
                    <FaMobileAlt />
                    Resume across devices
                  </div>

                  <div className="flex items-center gap-3">
                    <FaTimes />
                    No download · No print
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* RELATED BOOKS */}
          <div className="mt-24">

            <h2 className="text-4xl font-bold mb-10">
              Related Books
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

              {relatedBooks.map((item) => (
                <BookCard
                  key={item.id}
                  book={item}
                />
              ))}

            </div>

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}