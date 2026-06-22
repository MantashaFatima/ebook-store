import {
  FaLaptop,
  FaMobileAlt,
  FaAward,
  FaShieldAlt,
  FaClock,
  FaHeadset,
} from "react-icons/fa";

const features = [
  {
    icon: FaLaptop,
    title: "Learn Anywhere",
    desc: "Access your library on any device — desktop, tablet, or mobile.",
  },
  {
    icon: FaMobileAlt,
    title: "Mobile Friendly",
    desc: "Optimized reading experience designed for on-the-go study sessions.",
  },
  {
    icon: FaAward,
    title: "Expert Content",
    desc: "Curated by top educators with years of competitive exam expertise.",
  },
  {
    icon: FaShieldAlt,
    title: "Secure & Protected",
    desc: "Watermarked, single-device access keeps your content safe.",
  },
  {
    icon: FaClock,
    title: "Instant Access",
    desc: "Start reading immediately after purchase — no waiting, no delays.",
  },
  {
    icon: FaHeadset,
    title: "24/7 Support",
    desc: "Study help and technical support available whenever you need it.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-forest-400 font-semibold mb-4">
            Why us
          </p>
          <h2 className="section-heading">
            Why students{" "}
            <span className="font-display italic text-forest-400">love us</span>
          </h2>
          <p className="section-subheading mx-auto">
            A premium learning experience built for serious exam aspirants.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="premium-card p-6 md:p-8 group hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-forest-50 text-forest-500 flex items-center justify-center mb-5 group-hover:bg-forest-500 group-hover:text-white transition-all duration-300">
                <feature.icon size={22} />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
