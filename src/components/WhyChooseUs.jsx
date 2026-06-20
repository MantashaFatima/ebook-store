import {
  FaLaptop,
  FaMobileAlt,
  FaAward,
} from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-20">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Why Students Love Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-2xl shadow">
            <FaLaptop size={40} />
            <h3 className="font-bold text-xl mt-4">
              Learn Anywhere
            </h3>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow">
            <FaMobileAlt size={40} />
            <h3 className="font-bold text-xl mt-4">
              Mobile Friendly
            </h3>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow">
            <FaAward size={40} />
            <h3 className="font-bold text-xl mt-4">
              Expert Content
            </h3>
          </div>

        </div>

      </div>
    </section>
  );
}