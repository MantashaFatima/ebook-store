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
  {
    title: "UPSC",
    icon: <FaUniversity size={28} />,
  },
  {
    title: "SSC",
    icon: <FaBook size={28} />,
  },
  {
    title: "Banking",
    icon: <FaChartLine size={28} />,
  },
  {
    title: "Quant",
    icon: <FaCalculator size={28} />,
  },
  {
    title: "Reasoning",
    icon: <FaBrain size={28} />,
  },
  {
    title: "English",
    icon: <FaLanguage size={28} />,
  },
  {
    title: "GK & GS",
    icon: <FaGlobe size={28} />,
  },
  {
    title: "Current Affairs",
    icon: <FaNewspaper size={28} />,
  },
];

export default function Categories() {
  return (
    <section className="py-24 bg-[#F8F7F4]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <h2 className="text-4xl md:text-6xl font-bold text-slate-900">
            Browse the catalogue by{" "}
            <span className="italic text-green-800 font-medium">
              category
            </span>
          </h2>

          <p className="text-gray-600 mt-5 text-lg max-w-3xl mx-auto">
            From foundational concepts to final exam preparation —
            pick your category and move forward.
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">

          {categories.map((item) => (
            <div
              key={item.title}
              className="
                group
                bg-white
                border
                border-gray-200
                rounded-[30px]
                h-[180px]
                flex
                flex-col
                items-center
                justify-center
                cursor-pointer
                transition-all
                duration-300
                hover:shadow-xl
                hover:-translate-y-1
              "
            >

              <div
                className="
                  w-20
                  h-20
                  rounded-3xl
                  bg-green-100
                  text-green-800
                  flex
                  items-center
                  justify-center
                  mb-5
                  transition-all
                  duration-300
                  group-hover:bg-green-800
                  group-hover:text-white
                "
              >
                {item.icon}
              </div>

              <h3 className="font-semibold text-xl text-slate-900 text-center px-2">
                {item.title}
              </h3>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}