import Image from "next/image";
import Link from "next/link";
import { AgrovetLaunch } from "@/components/AgrovetLaunch";
import { FaqSection } from "@/components/FaqSection";
import { HeroDrone } from "@/components/HeroDrone";

const stats = [
  { value: "95%", label: "Crop Protection" },
  { value: "500+", label: "Happy Farmers" },
  { value: "24/7", label: "Monitoring" },
  { value: "0%", label: "Environment Harm" },
];

const impactCards = [
  {
    title: "Smart Monitoring",
    description:
      "Real-time data collection and analysis to optimize farm operations and increase yields through intelligent insights.",
    tags: ["AI-Powered", "Real-time"],
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      />
    ),
  },
  {
    title: "Sustainable Solutions",
    description:
      "Eco-friendly technologies that protect crops while preserving the environment for future generations.",
    tags: ["Eco-Friendly", "Sustainable"],
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    ),
  },
  {
    title: "Mobile Integration",
    description:
      "Seamless mobile app integration for remote monitoring, alerts, and farm management on the go.",
    tags: ["Mobile App", "Remote Access"],
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
      />
    ),
  },
];

const features = [
  {
    title: "Drone Technology",
    description:
      "A real-time monitoring system using drones to scan large grain fields for early signs of pest activity.",
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
    title: "AI Pest Identification",
    description:
      "Advanced algorithms accurately detect and classify birds and pests, ensuring rapid deterrent action.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    ),
  },
  {
    title: "Targeted Deterrents",
    description:
      "Custom acoustic signals scare away quelea birds without harming the environment or wildlife.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
      />
    ),
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        id="hero"
      >
        <div className="absolute inset-0 z-0">
          <video
            id="heroVideo"
            autoPlay
            muted
            loop
            playsInline
            poster="/assets/img/hero.png"
            className="w-full h-full object-cover scale-[1.05]"
          >
            <source src="/assets/img/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 tracking-tight animate-fade-in-up">
              Salama <span className="text-accent">Farm</span>
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto animate-fade-in-up [animation-delay:200ms]">
              Take your farm to the next level with digital tools that make your
              work easier. At Salama Farm, we help you grow smarter and farm
              better.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-in-up [animation-delay:400ms]">
              <a
                href="#features"
                className="group bg-accent text-primary px-6 py-3 rounded-full font-bold text-sm flex items-center space-x-2 transition-all hover:bg-white hover:scale-105 active:scale-95 shadow-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 group-hover:rotate-12 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
                <span>Explore Features</span>
              </a>
              <Link
                href="/products"
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-6 py-3 rounded-full font-bold text-sm flex items-center space-x-2 transition-all hover:bg-white/20 hover:scale-105 active:scale-95"
              >
                <span>View Products</span>
              </Link>
            </div>

            <div className="mt-12 flex flex-col items-center animate-fade-in-up [animation-delay:600ms]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/img/brand/logo.png"
                className="h-12 w-12 mb-3 object-contain rounded-full bg-white/95 p-0.5"
                alt="Salama Farm Logo"
                width={48}
                height={48}
              />
              <span className="text-accent font-medium tracking-widest uppercase text-[10px]">
                Your yield our Priority
              </span>
            </div>
          </div>

          <HeroDrone />
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="relative block w-full h-[100px] fill-white"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.21,103.42,115.89,115.25,173.19,116.78,235.08,118.42,283.05,103.7,321.39,56.44Z" />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-5 md:p-6 rounded-2xl bg-gray-50 border border-gray-100 transition-transform hover:-translate-y-1"
              >
                <div className="text-2xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-500 font-semibold uppercase tracking-wider text-xs">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AgrovetLaunch />

      {/* Impact Section */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/img/carousel/farm.png"
            alt="Green Field"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-white/90 backdrop-blur-sm" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="bg-accent/20 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 inline-block">
              Our Impact
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">
              Transforming Agriculture
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Discover how our solutions make farming smarter and more
              sustainable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {impactCards.map((card) => (
              <div
                key={card.title}
                className="group bg-white p-7 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden relative"
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-primary text-accent rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {card.icon}
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-primary mb-2">
                    {card.title}
                  </h4>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {card.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-primary/5 text-primary text-[11px] font-bold rounded-full even:bg-accent/20"
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

      {/* Revolutionizing Farm Protection */}
      <section className="py-16 md:py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute -top-8 -left-8 w-48 h-48 bg-accent/20 rounded-full blur-3xl" />
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-xl transform transition-transform duration-700 group-hover:scale-[1.01]">
                  <Image
                    src="/assets/img/carousel/drone.png"
                    alt="Salama Drone"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2 space-y-5">
              <span className="bg-primary/5 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider inline-block">
                Security First
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-primary leading-tight">
                Revolutionizing Farm Protection
              </h2>
              <p className="text-base font-medium text-gray-500">
                AI-powered smart farming for better yields
              </p>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                With SalamaFarm&apos;s AI-powered drone, you can keep birds and
                pests away from your farm effortlessly — so hard work turns into
                maximum yield.
              </p>

              <div className="flex flex-wrap gap-3 pt-1">
                <Link
                  href="/services"
                  className="inline-flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-accent hover:text-primary transition-all group"
                >
                  <span>Our Services</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center px-6 py-3 rounded-full font-bold text-sm border border-primary/20 text-primary hover:border-accent transition-all"
                >
                  Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-20 bg-primary relative overflow-hidden" id="features">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/img/hero.png"
            alt="Landscape"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="bg-white/10 text-accent px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 inline-block">
              Ecosystem
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
              Agricultural Features
            </h2>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              Everything you need for a smart, integrated farming experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500"
              >
                <div className="w-11 h-11 bg-accent/20 text-accent rounded-xl flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection />
    </>
  );
}
