import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import books from "../data/books";

export default function BookReader() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [fontSize, setFontSize] = useState(16);
  const [currentChapter, setCurrentChapter] = useState(1);

  const book = books.find(
    (item) => item.id === Number(id)
  );

  const chapters = [
    { id: 1, name: "Chapter 1 – Introduction" },
    { id: 2, name: "Chapter 2 – Basics" },
    { id: 3, name: "Chapter 3 – Percentages, Profit & Loss" },
    { id: 4, name: "Chapter 4 – Advanced Topics" },
  ];

  if (!book) {
    return <h1>Book Not Found</h1>;
  }

  return (
    <div className="h-screen flex flex-col bg-[#EAE4D8]">

      {/* TOP BAR */}

      <div className="h-16 bg-white border-b flex items-center justify-between px-6">

        <div className="flex items-center gap-4">

          <button 
            onClick={() => navigate("/library")}
            className="text-gray-600 hover:text-gray-900"
          >
            ← Library
          </button>

          <h2 className="font-bold text-lg">
            {book.title}
          </h2>

          <select 
            className="border rounded-lg px-4 py-2 text-sm"
            value={currentChapter}
            onChange={(e) => setCurrentChapter(Number(e.target.value))}
          >
            {chapters.map(ch => (
              <option key={ch.id} value={ch.id}>
                {ch.name}
              </option>
            ))}
          </select>

        </div>

        <div className="flex gap-4">

          <button className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">
            ◯ Protected
          </button>

          <button className="text-xl">
            🔖
          </button>

          <button className="text-2xl">
            ⚙️
          </button>

        </div>

      </div>

      {/* BODY */}

      <div className="flex flex-1 overflow-hidden">

        {/* LEFT SIDEBAR */}

        <div className="w-72 bg-white border-r overflow-y-auto p-6">

          <h3 className="uppercase tracking-[3px] text-gray-500 text-xs font-semibold mb-6">
            In This Chapter
          </h3>

          <div className="space-y-3 text-base text-gray-700">

            <p className="hover:text-blue-600 cursor-pointer">Definitions</p>
            <p className="hover:text-blue-600 cursor-pointer">Successive percentages</p>
            <p className="hover:text-blue-600 cursor-pointer">Profit & loss basics</p>
            <p className="hover:text-blue-600 cursor-pointer">Discount chains</p>
            <p className="hover:text-blue-600 cursor-pointer">Compound problems</p>
            <p className="hover:text-blue-600 cursor-pointer">Practice — easy</p>
            <p className="hover:text-blue-600 cursor-pointer">Practice — hard</p>
            <p className="hover:text-blue-600 cursor-pointer">Worked solutions</p>

          </div>

          <hr className="my-8" />

          <h3 className="uppercase tracking-[3px] text-gray-500 text-xs font-semibold mb-6">
            Bookmarks
          </h3>

          <div className="space-y-2 text-sm text-gray-600">
            <p>p. 32 — Compound discount formula</p>
            <p>p. 41 — Solved Q9</p>
          </div>

        </div>

        {/* CENTER READER */}

        <div className="flex-1 overflow-y-auto bg-[#EAE4D8] p-10">

          <div className="max-w-3xl mx-auto bg-white p-12 shadow-xl rounded-lg">

            <div className="text-center text-gray-400 uppercase tracking-[4px] text-sm mb-4">
              {book.category}
            </div>

            <h1 className="text-4xl font-bold text-center mb-2">
              {book.title}
            </h1>

            <div className="text-center text-gray-400 text-sm mb-10">
              3.4 Successive Percentage Changes
            </div>

            <div 
              className="space-y-6 text-gray-700 leading-relaxed"
              style={{ fontSize: `${fontSize}px` }}
            >

              <p>
                When a quantity is changed by x% and then by y%, the net change is given by the formula:
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
                <p className="font-mono text-center text-lg">
                  Net change = x + y + (xy / 100)
                </p>
              </div>

              <p>
                This identity is one of the most reliably tested patterns across SSC CGL, IBPS PO, and UPSC CSAT. The sign of x and y follows the direction of change — positive for an increase, negative for a decrease.
              </p>

              <p className="font-bold text-lg mt-6">
                Example 3.4.1
              </p>

              <p>
                The price of a commodity is increased by 20% and then reduced by 25%. Find the net change in price.
              </p>

              <p>
                <span className="font-semibold">Solution:</span> Applying the identity with x = 20 and y = −25:
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="font-mono">
                  Net = 20 + (−25) + (20 × −25 / 100) = −5 − 5 = −10%
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* RIGHT SIDEBAR */}

        <div className="w-80 bg-white border-l p-6 overflow-y-auto">

          <h3 className="uppercase tracking-[3px] text-gray-500 text-xs font-semibold mb-6">
            Highlights
          </h3>

          <div className="space-y-3 mb-8">

            <div className="bg-yellow-100 p-4 rounded-lg border-l-4 border-yellow-400">
              <p className="text-sm text-gray-800">
                "Net change = x + y + (xy/100)"
              </p>
            </div>

            <div className="bg-green-100 p-4 rounded-lg border-l-4 border-green-400">
              <p className="text-sm text-gray-800">
                Counter-intuitive — final price is 10% lower
              </p>
            </div>

          </div>

          <hr className="my-8" />

          <h3 className="uppercase tracking-[3px] text-gray-500 text-xs font-semibold mb-6">
            Tools
          </h3>

          <div className="space-y-4">

            <div>
              <label className="text-xs text-gray-600 block mb-2">Font size</label>
              <div className="flex gap-2">
                <button 
                  onClick={() => setFontSize(Math.max(12, fontSize - 2))}
                  className="border px-3 py-2 rounded-lg hover:bg-gray-100"
                >
                  A−
                </button>
                <span className="flex-1 px-3 py-2 border rounded-lg text-center text-sm">
                  {fontSize}px
                </span>
                <button 
                  onClick={() => setFontSize(Math.min(24, fontSize + 2))}
                  className="border px-3 py-2 rounded-lg hover:bg-gray-100"
                >
                  A+
                </button>
              </div>
            </div>

            <div>
              <label className="text-xs text-gray-600 block mb-2">Brightness</label>
              <div className="flex gap-2">
                <button className="border px-3 py-2 rounded-lg hover:bg-gray-100">−</button>
                <button className="border px-3 py-2 rounded-lg hover:bg-gray-100">+</button>
              </div>
            </div>

            <button className="w-full border px-4 py-2 rounded-lg hover:bg-gray-100">
              B  Bookmark
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}