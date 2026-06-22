import { Link } from "react-router-dom";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function BookCard({ book }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="group premium-card overflow-hidden hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img
          src={book.image}
          alt={book.title}
          className="h-52 sm:h-60 md:h-64 w-full object-contain bg-cream-50 group-hover:scale-105 transition duration-500"
        />
        <span className="absolute top-4 left-4 badge-green shadow-sm">
          {book.category}
        </span>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="p-5">
        <div className="flex items-center gap-1.5 mb-2">
          <FaStar className="text-amber-400 text-sm" />
          <span className="text-sm font-medium text-slate-600">
            {book.rating} Rating
          </span>
        </div>

        <h3 className="font-bold text-lg text-slate-900 line-clamp-2 leading-snug group-hover:text-forest-500 transition-colors">
          {book.title}
        </h3>

        <p className="text-slate-400 text-sm mt-1.5">By {book.author}</p>

        <div className="flex items-center justify-between mt-5 pt-5 border-t border-slate-100">
          <div>
            <span className="text-2xl font-bold text-slate-900">₹{book.price}</span>
            <span className="text-sm text-slate-400 line-through ml-2">
              ₹{book.price + 150}
            </span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => addToCart(book)}
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:border-forest-400 hover:text-forest-500 hover:bg-forest-50 transition"
              aria-label="Add to cart"
            >
              <FaShoppingCart size={14} />
            </button>
            <Link
              to={`/book/${book.id}`}
              className="bg-forest-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-forest-400 transition shadow-sm"
            >
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
