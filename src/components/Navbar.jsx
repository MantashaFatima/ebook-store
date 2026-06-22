import { Link } from "react-router-dom";
import {
  FaBookOpen,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cart =
      JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cart.length);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-[#F7F3EC] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-slate-900 flex items-center justify-center text-white">
            <FaBookOpen size={18} />
          </div>

          <span className="text-3xl font-bold text-slate-900">
            StudyBooks
            <span className="text-green-700">.</span>
          </span>
        </Link>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-10 text-lg font-medium text-slate-700">
          <Link
            to="/"
            className="hover:text-green-700 transition"
          >
            Home
          </Link>

          <Link
            to="/books"
            className="hover:text-green-700 transition"
          >
            E-Books
          </Link>

          <Link
            to="/library"
            className="hover:text-green-700 transition"
          >
            My Library
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">

          <Link
            to="/cart"
            className="relative text-slate-700 hover:text-green-700"
          >
            <FaShoppingCart size={22} />

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-green-700 text-white text-xs min-w-[20px] h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          <button className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-5 py-3 rounded-full shadow-lg transition">
            <FaUser />
            Dashboard
          </button>

        </div>

      </div>
    </nav>
  );
}