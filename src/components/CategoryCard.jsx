import {
  FaUniversity,
  FaBook,
  FaChartLine,
  FaTrain,
} from "react-icons/fa";

const categories = [
  {
    title: "UPSC",
    icon: <FaUniversity size={35} />,
  },
  {
    title: "SSC",
    icon: <FaBook size={35} />,
  },
  {
    title: "Banking",
    icon: <FaChartLine size={35} />,
  },
  {
    title: "Railway",
    icon: <FaTrain size={35} />,
  },
];

export default function Categories() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Popular Categories
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {categories.map((item) => (
            <div
              key={item.title}
              className="bg-indigo-50 p-8 rounded-2xl text-center hover:shadow-xl hover:-translate-y-2 duration-300"
            >
              <div className="text-indigo-600 flex justify-center mb-4">
                {item.icon}
              </div>

              <h3 className="font-bold text-xl">
                {item.title}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}