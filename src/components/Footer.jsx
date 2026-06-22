import { Link } from "react-router-dom";
import {
  FaBookOpen,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white mt-24">

      {/* Top */}
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Brand */}
          <div>

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-xl bg-green-700 flex items-center justify-center">
                <FaBookOpen />
              </div>

              <h2 className="text-3xl font-bold">
                StudyBooks
              </h2>

            </div>

            <p className="text-slate-400 mt-6 leading-8">
              India's trusted digital learning platform for
              UPSC, SSC, Banking, Railway and competitive
              examination preparation.
            </p>

            <div className="flex gap-4 mt-8">

              <div className="w-10 h-10 rounded-full bg-slate-800 hover:bg-green-700 flex items-center justify-center cursor-pointer transition">
                <FaFacebookF />
              </div>

              <div className="w-10 h-10 rounded-full bg-slate-800 hover:bg-green-700 flex items-center justify-center cursor-pointer transition">
                <FaInstagram />
              </div>

              <div className="w-10 h-10 rounded-full bg-slate-800 hover:bg-green-700 flex items-center justify-center cursor-pointer transition">
                <FaLinkedinIn />
              </div>

              <div className="w-10 h-10 rounded-full bg-slate-800 hover:bg-green-700 flex items-center justify-center cursor-pointer transition">
                <FaYoutube />
              </div>

            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-slate-400">

              <li>
                <Link
                  to="/"
                  className="hover:text-green-500 transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/books"
                  className="hover:text-green-500 transition"
                >
                  E-Books
                </Link>
              </li>

              <li>
                <Link
                  to="/library"
                  className="hover:text-green-500 transition"
                >
                  My Library
                </Link>
              </li>

              <li>
                <Link
                  to="/cart"
                  className="hover:text-green-500 transition"
                >
                  Cart
                </Link>
              </li>

            </ul>

          </div>

          {/* Categories */}
          <div>

            <h3 className="text-xl font-semibold mb-6">
              Categories
            </h3>

            <ul className="space-y-4 text-slate-400">

              <li className="hover:text-green-500 cursor-pointer transition">
                UPSC
              </li>

              <li className="hover:text-green-500 cursor-pointer transition">
                SSC
              </li>

              <li className="hover:text-green-500 cursor-pointer transition">
                Banking
              </li>

              <li className="hover:text-green-500 cursor-pointer transition">
                Railway
              </li>

              <li className="hover:text-green-500 cursor-pointer transition">
                State PCS
              </li>

              <li className="hover:text-green-500 cursor-pointer transition">
                Defence
              </li>

            </ul>

          </div>

          {/* Newsletter */}
          <div>

            <h3 className="text-xl font-semibold mb-6">
              Stay Updated
            </h3>

            <p className="text-slate-400 mb-5">
              Subscribe to get latest e-books,
              discounts and exam preparation updates.
            </p>

            <div className="space-y-3">

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-4 rounded-2xl bg-slate-800 border border-slate-700 focus:outline-none focus:border-green-600"
              />

              <button className="w-full bg-green-700 hover:bg-green-800 py-4 rounded-2xl font-semibold transition">
                Subscribe Now
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* Stats Section */}

      <div className="border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-12">

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>
              <h3 className="text-4xl font-bold text-green-500">
                500+
              </h3>

              <p className="text-slate-400 mt-2">
                E-Books
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-green-500">
                25K+
              </h3>

              <p className="text-slate-400 mt-2">
                Students
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-green-500">
                4.9★
              </h3>

              <p className="text-slate-400 mt-2">
                Rating
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-green-500">
                100%
              </h3>

              <p className="text-slate-400 mt-2">
                Digital Access
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-slate-500 text-sm">
            © 2026 StudyBooks. All Rights Reserved.
          </p>

          <div className="flex gap-8 text-slate-500 text-sm mt-4 md:mt-0">

            <span className="hover:text-white cursor-pointer transition">
              Privacy Policy
            </span>

            <span className="hover:text-white cursor-pointer transition">
              Terms & Conditions
            </span>

            <span className="hover:text-white cursor-pointer transition">
              Refund Policy
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
}