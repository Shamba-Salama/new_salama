import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AgrovetLaunch } from "@/components/AgrovetLaunch";

export const metadata: Metadata = {
  title: "Our Services – SalamaFarm Agricultural Solutions",
  description:
    "Comprehensive farming solutions powered by cutting-edge technology to protect your crops and maximize your yields.",
};

const services = [
  {
    title: "Drone Technology",
    description:
      "Advanced AI-powered drone systems that monitor and deter pests naturally, protecting your crops without harmful chemicals.",
    features: [
      "Real-time detection",
      "Automated patrol routes",
      "Non-toxic deterrents",
      "AI threat analysis",
      "24/7 coverage",
    ],
    tags: ["Crop Protection", "AI Powered"],
    rotate: "group-hover:rotate-6",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
      />
    ),
  },
  {
    title: "Disease Detection App",
    description:
      "Smart mobile application that helps farmers quickly identify and manage rice diseases through advanced image recognition.",
    features: [
      "Instant diagnosis",
      "Treatment recommendations",
      "Prevention alerts",
      "Disease forecasting",
      "Expert integration",
    ],
    tags: ["Quick Diagnosis", "Mobile Access"],
    rotate: "group-hover:-rotate-6",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
      />
    ),
  },
  {
    title: "Agrochemicals",
    description:
      "Quality agricultural chemicals and fertilizers delivered directly to your farm with expert guidance on application.",
    features: [
      "Crop-specific chemicals",
      "Expert guidance",
      "Fast delivery",
      "Usage safety",
      "Impact consultation",
    ],
    tags: ["Fast Delivery", "Crop Specific"],
    rotate: "group-hover:rotate-6",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
      />
    ),
  },
];

const reasons = [
  {
    title: "Expert Technology",
    description:
      "Developed by industry experts and tested in real farming conditions.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
      />
    ),
  },
  {
    title: "Fast Results",
    description:
      "See measurable improvements in health and yield within the first season.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    ),
  },
  {
    title: "Expert Support",
    description:
      "24/7 technical support and consultation from farming specialists.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.9l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
      />
    ),
  },
  {
    title: "Sustainable Focus",
    description:
      "Environmentally conscious solutions that protect both crops and ecosystem.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    ),
  },
];

function CheckIcon() {
  return (
    <svg
      className="h-5 w-5 text-primary mr-3 shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <>
      <section className="relative py-24 pt-36">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/img/carousel/drone-1.png"
            alt="Drone over farm"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/80 to-secondary/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex p-4 rounded-2xl bg-white/10 backdrop-blur-md mb-8 animate-bounce">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight leading-tight">
              Our Agricultural <span className="text-accent">Services</span>
            </h1>
            <p className="text-sm md:text-base text-gray-200 mb-10 leading-relaxed max-w-3xl mx-auto">
              Comprehensive farming solutions powered by cutting-edge technology
              to protect your crops and maximize your yields.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <span className="bg-accent text-primary px-6 py-2 rounded-full font-bold text-sm flex items-center shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Sustainable Farming
              </span>
              <span className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-6 py-2 rounded-full font-bold text-sm flex items-center shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 21l-1 1h8l-1-1-.75-4M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Smart Technology
              </span>
            </div>
          </div>
        </div>
      </section>

      <AgrovetLaunch compact />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3 tracking-tight">
              Innovative Farming Solutions
            </h2>
            <div className="w-16 h-1.5 bg-accent mx-auto rounded-full mb-4" />
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Advanced technology services designed for modern agriculture —
              including Agrovet store tools launching Friday.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="p-10 bg-primary text-center group-hover:bg-primary/95 transition-colors">
                  <div
                    className={`w-20 h-20 bg-accent text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 transform ${service.rotate} transition-transform`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {service.icon}
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {service.title}
                  </h3>
                </div>
                <div className="p-10 space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-gray-700 font-medium"
                      >
                        <CheckIcon />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-4">
                    {service.tags.map((tag, i) => (
                      <span
                        key={tag}
                        className={`px-4 py-1.5 text-sm font-bold rounded-full text-primary ${
                          i === 0 ? "bg-primary/5" : "bg-accent/20"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Why Choose Our Services?
            </h2>
            <div className="w-24 h-2 bg-accent mx-auto rounded-full mb-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="text-center p-8 rounded-3xl hover:bg-gray-50 transition-colors group"
              >
                <div className="w-16 h-16 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-accent transition-all">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {reason.icon}
                  </svg>
                </div>
                <h4 className="text-sm md:text-base font-bold text-primary mb-3">
                  {reason.title}
                </h4>
                <p className="text-gray-500">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight">
            Ready to Transform Your Farming?
          </h2>
          <p className="text-sm md:text-base text-gray-300 mb-12 leading-relaxed">
            Join hundreds of farmers already benefiting from our advanced
            agricultural services. Start protecting your crops and increasing
            your yields today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/form"
              className="w-full sm:w-auto bg-accent text-primary px-10 py-5 rounded-full font-bold text-sm md:text-base hover:bg-white transition-all transform hover:-translate-y-1 shadow-2xl flex items-center justify-center space-x-3 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 group-hover:rotate-12 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span>Get Started Now</span>
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-full font-bold text-sm md:text-base hover:bg-white/20 transition-all flex items-center justify-center space-x-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
