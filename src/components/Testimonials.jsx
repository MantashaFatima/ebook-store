import books from "../data/books";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {
  const reviews = [
    {
      name: "Rahul Sharma",
      role: "UPSC Aspirant",
      text: "StudyBooks transformed my preparation. The curated e-books and structured content helped me stay focused and confident.",
      bookId: 1,
      rating: 5,
    },
    {
      name: "Priya Verma",
      role: "SSC Candidate",
      text: "Best platform for competitive exam prep. Amazing collection, smooth reading experience, and instant access after purchase.",
      bookId: 4,
      rating: 5,
    },
    {
      name: "Aman Singh",
      role: "Banking Aspirant",
      text: "Premium quality content at affordable prices. The mock tests and solved papers are exactly what I needed for IBPS preparation.",
      bookId: 8,
      rating: 5,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-forest-400 font-semibold mb-4">
            Testimonials
          </p>
          <h2 className="section-heading">
            Student{" "}
            <span className="font-display italic text-forest-400">success stories</span>
          </h2>
          <p className="section-subheading mx-auto">
            Real students, real results — hear from learners who cracked their exams.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((item) => {
            const book = books.find((b) => b.id === item.bookId) || books[0];

            return (
              <div key={item.name} className="premium-card p-6 md:p-8 hover:-translate-y-1">
                <FaQuoteLeft className="text-forest-200 text-2xl mb-4" />

                <div className="flex gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} className="text-amber-400 text-sm" />
                  ))}
                </div>

                <p className="text-slate-600 leading-relaxed">{item.text}</p>

                <div className="flex items-center gap-4 mt-6 pt-6 border-t border-slate-100">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-12 h-12 rounded-xl object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-slate-900">{item.name}</h3>
                    <p className="text-sm text-slate-400">{item.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
