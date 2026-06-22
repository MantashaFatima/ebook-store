import { useState } from "react";
import { FaSearch, FaTh, FaList } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FilterSidebar from "../components/FilterSidebar";
import BookCard from "../components/BookCard";
import books from "../data/books";

export default function BookListing() {
  const [gridView, setGridView] = useState(true);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [price, setPrice] = useState(
    Math.max(...books.map((book) => book.price))
  );
  const [currentPage, setCurrentPage] = useState(1);

  const booksPerPage = 6;

  const handleCategoryChange = (category) => {
    setSelectedCategories((current) => {
      if (current.includes(category)) {
        return current.filter((item) => item !== category);
      }
      return [...current, category];
    });
    setCurrentPage(1);
  };

  const handleLanguageChange = (value) => {
    setSelectedLanguage(value);
    setCurrentPage(1);
  };

  const handleSubjectChange = (value) => {
    setSelectedSubject(value);
    setCurrentPage(1);
  };

  const handlePriceChange = (value) => {
    setPrice(Number(value));
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedLanguage("");
    setSelectedSubject("");
    setPrice(Math.max(...books.map((book) => book.price)));
    setCurrentPage(1);
  };

  let filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase()) ||
      book.category.toLowerCase().includes(search.toLowerCase()) ||
      book.subject.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(book.category);

    const matchesLanguage =
      selectedLanguage === "" ||
      book.language === selectedLanguage;

    const matchesSubject =
      selectedSubject === "" ||
      book.subject === selectedSubject;

    const matchesPrice = book.price <= price;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesLanguage &&
      matchesSubject &&
      matchesPrice
    );
  });

  if (sortBy === "low") {
    filteredBooks = [...filteredBooks].sort((a, b) => a.price - b.price);
  }

  if (sortBy === "high") {
    filteredBooks = [...filteredBooks].sort((a, b) => b.price - a.price);
  }

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;

  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-cream-100">
        {/* Page Header */}
        <div className="bg-forest-500 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
            <p className="text-sm uppercase tracking-[0.3em] text-forest-200 mb-3">
              Catalogue
            </p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
              Explore our{" "}
              <span className="italic text-forest-200">E-Books</span>
            </h1>
            <p className="mt-4 text-forest-100/70 max-w-xl">
              Browse {books.length}+ premium study materials for every competitive exam.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-12">
          <div className="grid md:grid-cols-4 gap-8">

            <FilterSidebar
              selectedCategories={selectedCategories}
              selectedLanguage={selectedLanguage}
              selectedSubject={selectedSubject}
              price={price}
              minPrice={Math.min(...books.map((book) => book.price))}
              maxPrice={Math.max(...books.map((book) => book.price))}
              onCategoryChange={handleCategoryChange}
              onLanguageChange={handleLanguageChange}
              onSubjectChange={handleSubjectChange}
              onPriceChange={handlePriceChange}
              onClearFilters={clearFilters}
            />

            <div className="md:col-span-3">
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="relative flex-1 min-w-0">
                  <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                      setCurrentPage(1);
                    }}
                    placeholder="Search books..."
                    className="input-premium !pl-11"
                  />
                </div>

                <select
                  value={sortBy}
                  onChange={(e) => {
                    setSortBy(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="input-premium !w-auto min-w-[160px]"
                >
                  <option value="">Sort By</option>
                  <option value="low">Price: Low to High</option>
                  <option value="high">Price: High to Low</option>
                </select>

                <button
                  onClick={() => setGridView(!gridView)}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl border border-slate-200 bg-white text-slate-600 hover:border-forest-400 hover:text-forest-500 transition font-medium text-sm"
                >
                  {gridView ? <FaList /> : <FaTh />}
                  {gridView ? "List" : "Grid"}
                </button>
              </div>

              <div className="mb-6 text-sm text-slate-500">
                Showing <span className="font-semibold text-slate-700">{filteredBooks.length}</span> result
                {filteredBooks.length !== 1 ? "s" : ""}
              </div>

              {currentBooks.length === 0 ? (
                <div className="premium-card p-12 text-center">
                  <h2 className="text-2xl font-bold text-slate-900">No Books Found</h2>
                  <p className="text-slate-500 mt-2">
                    Try another keyword or clear the filters.
                  </p>
                </div>
              ) : (
                <div
                  className={
                    gridView
                      ? "grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
                      : "space-y-5"
                  }
                >
                  {currentBooks.map((book) => (
                    <BookCard key={book.id} book={book} />
                  ))}
                </div>
              )}

              {totalPages > 1 && (
                <div className="flex justify-center gap-2 mt-12 flex-wrap">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                    className="px-5 py-2.5 rounded-full border border-slate-200 bg-white text-sm font-medium disabled:opacity-40 hover:border-forest-400 transition"
                  >
                    Prev
                  </button>

                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPage(index + 1)}
                      className={`px-4 py-2.5 rounded-full text-sm font-medium transition ${
                        currentPage === index + 1
                          ? "bg-forest-500 text-white shadow-sm"
                          : "border border-slate-200 bg-white hover:border-forest-400"
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}

                  <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(currentPage + 1)}
                    className="px-5 py-2.5 rounded-full border border-slate-200 bg-white text-sm font-medium disabled:opacity-40 hover:border-forest-400 transition"
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
