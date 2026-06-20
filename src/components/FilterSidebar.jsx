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
    <div className="bg-white p-5 rounded-xl shadow">

      <div className="flex items-center justify-between mb-5">
        <h2 className="font-bold text-xl">Filters</h2>
        <button
          onClick={onClearFilters}
          className="text-sm text-indigo-600 hover:underline"
        >
          Clear
        </button>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold mb-2">Exam Category</h3>
        {categories.map((category) => (
          <label key={category} className="block mb-2">
            <input
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() => onCategoryChange(category)}
              className="mr-2"
            />
            {category}
          </label>
        ))}
      </div>

      <div className="mb-6">
        <h3 className="font-semibold mb-2">Price (up to ₹{price})</h3>
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={(e) => onPriceChange(e.target.value)}
          className="w-full"
        />
      </div>

      <div className="mb-6">
        <h3 className="font-semibold mb-2">Language</h3>
        <select
          value={selectedLanguage}
          onChange={(e) => onLanguageChange(e.target.value)}
          className="w-full border p-2 rounded"
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
        <h3 className="font-semibold mb-2">Subject</h3>
        <select
          value={selectedSubject}
          onChange={(e) => onSubjectChange(e.target.value)}
          className="w-full border p-2 rounded"
        >
          <option value="">All Subjects</option>
          {subjects.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
      </div>

    </div>
  );
}