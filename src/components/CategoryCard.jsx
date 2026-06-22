import { Link } from "react-router-dom";
import {
  FaUniversity,
  FaBook,
  FaChartLine,
  FaLanguage,
  FaBrain,
  FaGlobe,
  FaNewspaper,
  FaCalculator,
} from "react-icons/fa";

const categories = [
  { title: "UPSC", icon: FaUniversity, count: "45+" },
  { title: "SSC", icon: FaBook, count: "38+" },
  { title: "Banking", icon: FaChartLine, count: "32+" },
  { title: "Quant", icon: FaCalculator, count: "28+" },
  { title: "Reasoning", icon: FaBrain, count: "24+" },
  { title: "English", icon: FaLanguage, count: "20+" },
  { title: "GK & GS", icon: FaGlobe, count: "35+" },
  { title: "Current Affairs", icon: FaNewspaper, count: "18+" },
];

export default function Categories() {
  return (
    <section className="py-16 md:py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-forest-400 font-semibold mb-4">
            Categories
          </p>
          <h2 className="section-heading">
            Browse the catalogue by{" "}
            <span className="font-display italic text-forest-400">category</span>
          </h2>
          <p className="section-subheading mx-auto">
            From foundational concepts to final exam preparation — pick your
            category and move forward.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-5">
          {categories.map((item) => (
            <Link
              key={item.title}
              to="/books"
              className="group premium-card flex flex-col items-center justify-center text-center p-6 md:p-8 min-h-[170px] hover:-translate-y-1 hover:border-forest-200"
            >
              <div className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-2xl bg-forest-50 text-forest-500 flex items-center justify-center mb-4 group-hover:bg-forest-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-forest-500/25 transition-all duration-300">
                <item.icon size={26} />
              </div>

              <h3 className="font-bold text-base text-slate-900 group-hover:text-forest-500 transition">
                {item.title}
              </h3>

              <p className="text-xs text-slate-400 mt-1.5 group-hover:text-forest-400 transition">
                {item.count} books
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/books" className="btn-secondary">
            View All Categories
          </Link>
        </div>
      </div>
    </section>
  );
}
