import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-20">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-indigo-400">
              StudyBooks
            </h2>

            <p className="text-gray-400 mt-4 leading-7">
              India's trusted platform for premium
              exam preparation e-books. Learn
              smarter and achieve your goals with
              curated study materials.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <Link
                  to="/"
                  className="hover:text-white"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/books"
                  className="hover:text-white"
                >
                  Books
                </Link>
              </li>

              <li>
                <Link
                  to="/library"
                  className="hover:text-white"
                >
                  My Library
                </Link>
              </li>

            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Categories
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>UPSC</li>
              <li>SSC</li>
              <li>Banking</li>
              <li>Railway</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact Us
            </h3>

            <div className="space-y-3 text-gray-400">
              <p>📧 support@studybooks.com</p>
              <p>📞 +91 98765 43210</p>
              <p>📍 New Delhi, India</p>
            </div>
          </div>

        </div>

      </div>

      {/* Newsletter */}
      <div className="border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-10">

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            <div>
              <h3 className="text-xl font-semibold">
                Subscribe to our Newsletter
              </h3>

              <p className="text-gray-400 text-sm mt-1">
                Get updates on new e-books and offers.
              </p>
            </div>

            <div className="flex w-full md:w-auto gap-3">

              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg text-black w-full md:w-80"
              />

              <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg font-medium">
                Subscribe
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">

          <p>
            © 2026 StudyBooks. All Rights Reserved.
          </p>

          <div className="flex gap-5 mt-3 md:mt-0">
            <span className="cursor-pointer hover:text-white">
              Privacy Policy
            </span>

            <span className="cursor-pointer hover:text-white">
              Terms & Conditions
            </span>
          </div>

        </div>

      </div>

    </footer>
  );
}