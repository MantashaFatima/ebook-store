import { Link, useNavigate } from "react-router-dom";
import {
  FaBookOpen,
  FaShoppingCart,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cartCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/books", label: "E-Books" },
    { to: "/library", label: "My Library" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-cream-100/80 backdrop-blur-xl border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center justify-between">

          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-2xl bg-forest-500 flex items-center justify-center text-white shadow-lg shadow-forest-500/25 group-hover:scale-105 transition-transform">
              <FaBookOpen size={18} />
            </div>
            <span className="text-xl md:text-2xl font-bold text-slate-900">
              StudyBooks
              <span className="text-forest-400">.</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-5 py-2.5 rounded-full text-sm font-medium text-slate-600 hover:text-forest-500 hover:bg-forest-50 transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <button
              onClick={() => navigate("/cart")}
              className="relative w-11 h-11 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:text-forest-500 hover:border-forest-300 transition"
              aria-label="Open cart"
            >
              <FaShoppingCart size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-forest-500 text-white text-xs min-w-[20px] h-5 flex items-center justify-center rounded-full font-semibold shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>

            <button className="hidden md:flex items-center gap-2 btn-primary !py-2.5 !px-5 !text-sm">
              <FaUser size={14} />
              Dashboard
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-11 h-11 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-700"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden mt-4 bg-white rounded-2xl shadow-premium border border-slate-100 p-5 animate-fade-up">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-slate-700 font-medium hover:bg-forest-50 hover:text-forest-500 transition"
                >
                  {link.label}
                </Link>
              ))}
              <button className="flex items-center justify-center gap-2 btn-primary mt-3">
                <FaUser size={14} />
                Dashboard
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
