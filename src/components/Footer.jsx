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
    <footer className="bg-forest-700 text-white mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          <div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-forest-400 flex items-center justify-center shadow-lg">
                <FaBookOpen />
              </div>
              <h2 className="text-2xl font-bold">StudyBooks</h2>
            </div>

            <p className="text-forest-100/70 mt-6 leading-7 text-sm">
              India&apos;s trusted digital learning platform for UPSC, SSC,
              Banking, Railway and competitive examination preparation.
            </p>

            <div className="flex gap-3 mt-8">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube].map((Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-forest-400 flex items-center justify-center cursor-pointer transition"
                >
                  <Icon size={14} />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-forest-100/70 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/books", label: "E-Books" },
                { to: "/library", label: "My Library" },
                { to: "/cart", label: "Cart" },
              ].map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="hover:text-white transition">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Categories</h3>
            <ul className="space-y-3 text-forest-100/70 text-sm">
              {["UPSC", "SSC", "Banking", "Railway", "State PCS", "Defence"].map((cat) => (
                <li key={cat} className="hover:text-white cursor-pointer transition">
                  {cat}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
            <p className="text-forest-100/70 text-sm mb-5 leading-relaxed">
              Subscribe for latest e-books, discounts and exam updates.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3.5 rounded-2xl bg-white/10 border border-white/10 text-white placeholder:text-forest-100/50 focus:outline-none focus:border-forest-300 transition text-sm"
              />
              <button className="w-full bg-forest-400 hover:bg-forest-300 py-3.5 rounded-2xl font-semibold transition text-sm">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid sm:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "E-Books" },
              { value: "25K+", label: "Students" },
              { value: "4.9★", label: "Rating" },
              { value: "100%", label: "Digital Access" },
            ].map((stat) => (
              <div key={stat.label}>
                <h3 className="text-3xl font-bold text-forest-200">{stat.value}</h3>
                <p className="text-forest-100/60 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-forest-100/50 text-sm">
            © 2026 StudyBooks. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-forest-100/50 text-sm">
            <span className="hover:text-white cursor-pointer transition">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition">Terms & Conditions</span>
            <span className="hover:text-white cursor-pointer transition">Refund Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
