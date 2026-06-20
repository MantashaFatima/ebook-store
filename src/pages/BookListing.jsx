import { useState } from "react";
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
    filteredBooks = [...filteredBooks].sort(
      (a, b) => a.price - b.price
    );
  }

  if (sortBy === "high") {
    filteredBooks = [...filteredBooks].sort(
      (a, b) => b.price - a.price
    );
  }

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;

  const currentBooks = filteredBooks.slice(
    indexOfFirstBook,
    indexOfLastBook
  );

  const totalPages = Math.ceil(
    filteredBooks.length / booksPerPage
  );

  return (
    <>
      <Navbar />

      <div className="bg-slate-100 min-h-screen py-10">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-4xl font-bold mb-8">
            E-Book Listing
          </h1>

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

              {/* Search + Sort + View */}

              <div className="flex flex-wrap gap-4 justify-between mb-8">

                <input
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setCurrentPage(1);
                  }}
                  placeholder="Search books..."
                  className="border p-3 rounded-lg flex-1 min-w-[250px]"
                />

                <select
                  value={sortBy}
                  onChange={(e) => {
                    setSortBy(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="border p-3 rounded-lg"
                >
                  <option value="">Sort By</option>
                  <option value="low">Price Low To High</option>
                  <option value="high">Price High To Low</option>
                </select>

                <button
                  onClick={() => setGridView(!gridView)}
                  className="bg-indigo-600 text-white px-5 py-3 rounded-lg"
                >
                  {gridView ? "List View" : "Grid View"}
                </button>

              </div>

              <div className="mb-4 text-sm text-gray-600">
                Showing {filteredBooks.length} result
                {filteredBooks.length !== 1 ? "s" : ""}.
              </div>

              {/* Books */}

              {currentBooks.length === 0 ? (
                <div className="bg-white rounded-xl p-10 text-center shadow">
                  <h2 className="text-2xl font-bold">
                    No Books Found 📚
                  </h2>

                  <p className="text-gray-500 mt-2">
                    Try searching with another keyword or clearing the filters.
                  </p>
                </div>
              ) : (
                <div
                  className={
                    gridView
                      ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                      : "space-y-6"
                  }
                >
                  {currentBooks.map((book) => (
                    <BookCard
                      key={book.id}
                      book={book}
                    />
                  ))}
                </div>
              )}

              {/* Pagination */}

              {totalPages > 1 && (
                <div className="flex justify-center gap-2 mt-12 flex-wrap">

                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                    className="px-4 py-2 border rounded disabled:opacity-50"
                  >
                    Prev
                  </button>

                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPage(index + 1)}
                      className={`px-4 py-2 rounded ${
                        currentPage === index + 1
                          ? "bg-indigo-600 text-white"
                          : "border hover:bg-indigo-50"
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}

                  <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(currentPage + 1)}
                    className="px-4 py-2 border rounded disabled:opacity-50"
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