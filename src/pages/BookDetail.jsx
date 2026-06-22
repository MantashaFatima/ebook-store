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
  FaCheck,
} from "react-icons/fa";

export default function BookDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showNotification, setShowNotification] = useState(false);

  const { addToCart } = useContext(CartContext);

  const book = books.find((b) => b.id === Number(id));

  if (!book) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-cream-100 flex items-center justify-center px-4">
          <div className="premium-card p-12 text-center max-w-md">
            <h1 className="text-2xl font-bold text-slate-900">Book Not Found</h1>
            <p className="text-slate-500 mt-3">This book doesn&apos;t exist in our catalogue.</p>
            <button onClick={() => navigate("/books")} className="btn-primary mt-6">
              Browse Books
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const relatedBooks = books
    .filter((item) => item.id !== book.id)
    .slice(0, 4);

  const features = [
    { icon: FaShieldAlt, text: "Watermarked, single-device read" },
    { icon: FaClock, text: "6-month access from purchase" },
    { icon: FaMobileAlt, text: "Resume across devices" },
    { icon: FaTimes, text: "No download · No print" },
  ];

  return (
    <>
      <Navbar />

      {showNotification && (
        <div className="fixed top-24 right-6 z-50 bg-forest-500 text-white px-6 py-3 rounded-2xl shadow-premium flex items-center gap-2 animate-fade-up">
          <FaCheck />
          Added to cart!
        </div>
      )}

      <div className="bg-cream-100 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">

          <div className="grid lg:grid-cols-[380px_1fr_340px] gap-8 lg:gap-10">

            {/* LEFT IMAGE */}
            <div>
              <div className="premium-card overflow-hidden">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-[400px] lg:h-[520px] object-cover"
                />
              </div>

              <h3 className="font-bold text-lg mt-6 text-slate-900">Preview Pages</h3>
              <div className="grid grid-cols-3 gap-3 mt-4">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="premium-card overflow-hidden cursor-pointer hover:ring-2 hover:ring-forest-400 transition">
                    <img
                      src={book.image}
                      alt=""
                      className="h-24 object-cover w-full"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* CENTER CONTENT */}
            <div>
              <span className="badge-green">{book.category} • {book.subject}</span>

              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mt-4 leading-tight">
                {book.title}
              </h1>

              <p className="text-xl text-slate-500 mt-3">by {book.author}</p>

              <div className="flex flex-wrap items-center gap-4 mt-6">
                <div className="flex items-center gap-1.5">
                  <FaStar className="text-amber-400" />
                  <span className="font-semibold text-slate-700">{book.rating}</span>
                </div>
                <span className="text-slate-400 text-sm">1,320 Reviews</span>
                <span className="text-slate-400 text-sm">320 Pages</span>
                <span className="text-slate-400 text-sm">{book.language}</span>
                <span className="badge-green">Preview 12 Pages</span>
              </div>

              <div className="flex gap-6 mt-8 border-b border-slate-200 pb-4">
                <button className="font-bold text-forest-500 border-b-2 border-forest-500 pb-3">
                  About
                </button>
                <button className="text-slate-400 pb-3 hover:text-slate-600 transition">
                  Contents
                </button>
                <button className="text-slate-400 pb-3 hover:text-slate-600 transition">
                  Reviews
                </button>
              </div>

              <div className="mt-6 text-slate-600 leading-relaxed space-y-4">
                <p>
                  This comprehensive e-book is specially designed for students
                  preparing for competitive examinations. It covers theory, practice
                  questions, mock tests, previous year papers and exam strategies.
                </p>
                <p>
                  Each chapter contains detailed explanations, solved examples and
                  exam-oriented content that helps students improve performance.
                </p>
              </div>

              <div className="mt-10 premium-card p-6 md:p-8">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400 font-semibold">
                  About The Author
                </p>
                <h3 className="text-2xl font-bold text-slate-900 mt-3">{book.author}</h3>
                <p className="text-slate-500 mt-3 leading-relaxed">
                  Experienced educator and author with years of expertise in
                  preparing students for competitive examinations across India.
                </p>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <div className="premium-card p-6 shadow-card-hover">
                <div className="flex flex-wrap items-center gap-3 border-b border-slate-100 pb-5">
                  <h2 className="text-3xl font-bold text-slate-900">₹{book.price}</h2>
                  <span className="line-through text-slate-400">₹{book.price + 250}</span>
                  <span className="badge-green !bg-emerald-100 !text-emerald-700">40% Off</span>
                </div>

                <p className="text-slate-400 mt-3 text-sm">Inclusive of GST</p>

                <button
                  onClick={() => {
                    addToCart(book);
                    navigate(`/checkout/${book.id}`);
                  }}
                  className="w-full mt-5 btn-primary !py-3.5 !text-base"
                >
                  Buy Now
                </button>

                <button
                  onClick={() => {
                    addToCart(book);
                    setShowNotification(true);
                    setTimeout(() => setShowNotification(false), 2000);
                  }}
                  className="w-full mt-3 btn-ghost !py-3.5 flex items-center justify-center gap-2"
                >
                  <FaShoppingCart />
                  Add to Cart
                </button>

                <div className="border-t border-slate-100 mt-6 pt-6 space-y-4">
                  {features.map((f) => (
                    <div key={f.text} className="flex items-center gap-3 text-slate-600 text-sm">
                      <f.icon className="text-forest-400 shrink-0" />
                      {f.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RELATED BOOKS */}
          <div className="mt-16 md:mt-24">
            <h2 className="section-heading mb-8">
              Related{" "}
              <span className="font-display italic text-forest-400">books</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {relatedBooks.map((item) => (
                <BookCard key={item.id} book={item} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
