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
      className="h-5 w-5 text-primary shrink-0"
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
      {/* Hero */}
      <section className="relative min-h-[520px] flex items-center justify-center overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0">
          <Image
            src="/assets/img/carousel/drone-1.png"
            alt="Drone over farm"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />

          <div className="absolute inset-0 bg-primary/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-accent mb-6">
              What We Offer
            </span>

            <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.08] tracking-tight mb-6">
              Our Agricultural{" "}
              <span className="text-accent">Services</span>
            </h1>

            <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-200 leading-relaxed mb-8">
              Comprehensive farming solutions powered by cutting-edge
              technology to protect your crops and maximize your yields.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <span className="rounded-full bg-accent px-5 py-2 text-xs md:text-sm font-bold text-primary">
                Sustainable Farming
              </span>

              <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs md:text-sm font-bold text-white backdrop-blur-sm">
                Smart Technology
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Agrovet */}
      <AgrovetLaunch compact />

      {/* Services */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
              Our Solutions
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-5">
              Innovative Farming Solutions
            </h2>

            <div className="w-16 h-1.5 bg-accent mx-auto rounded-full mb-6" />

            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Advanced technology services designed to support modern
              agriculture and help farmers protect their crops.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service) => (
              <article
                key={service.title}
                className="group flex flex-col bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-primary p-8 md:p-10 text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-accent text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 md:h-10 md:w-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {service.icon}
                    </svg>
                  </div>

                  <h3 className="text-xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>

                <div className="flex flex-1 flex-col p-7 md:p-8">
                  <p className="text-gray-600 leading-relaxed mb-7">
                    {service.description}
                  </p>

                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm text-gray-700 font-medium"
                      >
                        <CheckIcon />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-auto pt-7">
                    {service.tags.map((tag, index) => (
                      <span
                        key={tag}
                        className={`rounded-full px-4 py-1.5 text-xs font-bold ${
                          index === 0
                            ? "bg-primary/5 text-primary"
                            : "bg-accent/20 text-primary"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
              Why SalamaFarm
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-5">
              Why Choose Our Services?
            </h2>

            <div className="w-16 h-1.5 bg-accent mx-auto rounded-full mb-6" />

            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Technology and agricultural expertise working together to
              support better farming outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {reasons.map((reason) => (
              <article
                key={reason.title}
                className="group rounded-3xl border border-gray-100 bg-gray-50 p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg hover:border-accent/30"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-primary group-hover:text-accent">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {reason.icon}
                  </svg>
                </div>

                <h3 className="text-base md:text-lg font-bold text-primary mb-3">
                  {reason.title}
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed">
                  {reason.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-primary py-20 md:py-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-accent mb-5">
              Get Started
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 tracking-tight">
              Ready to Transform Your Farming?
            </h2>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-10">
              Join farmers already benefiting from our advanced agricultural
              services. Start protecting your crops and improving your farming
              experience today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/form"
                className="w-full sm:w-auto bg-accent text-primary px-8 py-4 rounded-full font-bold text-sm md:text-base hover:bg-white transition-all duration-300 hover:-translate-y-1 shadow-lg flex items-center justify-center gap-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
                className="w-full sm:w-auto border border-white/20 bg-white/5 text-white px-8 py-4 rounded-full font-bold text-sm md:text-base hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a2 2 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>

                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}