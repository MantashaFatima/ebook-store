export default function FilterSidebar({
  selectedCategories,
  selectedLanguage,
  selectedSubject,
  price,
  minPrice,
  maxPrice,
  onCategoryChange,
  onLanguageChange,
  onSubjectChange,
  onPriceChange,
  onClearFilters,
}) {
  const categories = [
    "UPSC",
    "SSC",
    "Banking",
    "Railway",
    "Mathematics",
    "Science",
    "Computer",
    "Political",
  ];

  const languages = ["English", "Hindi"];
  const subjects = [
    "History",
    "Polity",
    "Current Affairs",
    "Reasoning",
    "Mathematics",
    "Banking",
    "English",
    "Science",
    "Computer Science",
    "Political Science",
    "Strategy",
    "General Studies",
  ];

  return (
    <aside className="premium-card p-6 sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-bold text-slate-900">Filters</h2>
          <p className="text-sm text-slate-400">Refine your search</p>
        </div>
        <button
          onClick={onClearFilters}
          className="text-sm text-forest-500 font-medium hover:text-forest-400 transition"
        >
          Clear all
        </button>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold mb-3 text-sm text-slate-600 uppercase tracking-wider">
          Exam Category
        </h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const selected = selectedCategories.includes(category);
            return (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`text-xs px-3 py-2 rounded-full border transition ${
                  selected
                    ? "bg-forest-500 text-white border-forest-500 shadow-sm"
                    : "bg-cream-50 text-slate-600 border-slate-200 hover:border-forest-300"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold mb-3 text-sm text-slate-600 uppercase tracking-wider">
          Price (up to ₹{price})
        </h3>
        <div className="px-2 py-3 bg-cream-50 rounded-2xl">
          <input
            type="range"
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={(e) => onPriceChange(e.target.value)}
            className="w-full accent-forest-500"
          />
          <div className="flex justify-between text-xs text-slate-400 mt-2">
            <span>₹{minPrice}</span>
            <span>₹{maxPrice}</span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold mb-3 text-sm text-slate-600 uppercase tracking-wider">
          Language
        </h3>
        <select
          value={selectedLanguage}
          onChange={(e) => onLanguageChange(e.target.value)}
          className="input-premium !py-3"
        >
          <option value="">All Languages</option>
          {languages.map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>
      </div>

      <div>
        <h3 className="font-semibold mb-3 text-sm text-slate-600 uppercase tracking-wider">
          Subject
        </h3>
        <select
          value={selectedSubject}
          onChange={(e) => onSubjectChange(e.target.value)}
          className="input-premium !py-3"
        >
          <option value="">All Subjects</option>
          {subjects.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
      </div>
    </aside>
  );
}
