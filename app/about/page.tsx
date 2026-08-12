import type { Metadata } from "next";
import Image from "next/image";
import { AgrovetLaunch } from "@/components/AgrovetLaunch";

export const metadata: Metadata = {
  title: "About Us – SalamaFarm Agricultural Solutions",
  description:
    "At SalamaFarm, we're sowing the seeds of tomorrow's farming revolution. Our AI-powered solutions protect your harvests while nurturing sustainable growth.",
};

const appFeatures = [
  {
    title: "Smart Disease Detection",
    description:
      "Instantly identify crop diseases by simply taking a photo. Our AI provides immediate diagnosis and treatment recommendations.",
    accent: true,
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </>
    ),
  },
  {
    title: "Technology Overview",
    description:
      "Monitor your farm's performance, track environmental data, and access expert farming recommendations in real-time.",
    accent: false,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
      />
    ),
  },
  {
    title: "Seamless Payments",
    description:
      "Manage all your agricultural expenses, chemical purchases, and service payments through our secure mobile wallet.",
    accent: false,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
      />
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative py-16 flex items-center justify-center overflow-hidden pt-36">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/img/carousel/rice.png"
            alt="Rice Field"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/80 to-secondary/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">
              About Us
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
              Cultivating Innovation in{" "}
              <span className="text-accent">Agriculture</span>
            </h1>
            <p className="text-sm md:text-base text-gray-200 mb-6 leading-relaxed max-w-2xl mx-auto">
              We&apos;re sowing the seeds of tomorrow&apos;s farming revolution
              with AI-powered solutions that protect harvests and nurture
              sustainable growth.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="bg-accent text-primary px-4 py-1.5 rounded-full font-bold text-xs">
                Sustainable Farming
              </span>
              <span className="bg-white/10 text-white border border-white/20 px-4 py-1.5 rounded-full font-bold text-xs">
                Smart Technology
              </span>
              <span className="bg-white/10 text-white border border-white/20 px-4 py-1.5 rounded-full font-bold text-xs">
                Agrovet Store — Friday
              </span>
            </div>
          </div>
        </div>
      </section>

      <AgrovetLaunch compact />

      {/* Video Showcase */}
      <section className="py-16 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              See Our Technology in Action
            </h2>
            <div className="w-24 h-2 bg-primary mx-auto rounded-full mb-8" />
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Watch how our AI-powered drone transforms modern farming with
              real-time detection and smart deterrents.
            </p>
          </div>

          <div className="max-w-5xl mx-auto group">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white transform transition-transform duration-700 group-hover:scale-[1.01]">
              <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ?si=D3I7vCT6juFK0_0d"
                title="SalamaFarm Technology"
                allow="autoplay; clipboard-write; encrypted-media;"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse" />
              <Image
                src="/assets/img/sections/agrotech.png"
                alt="Modern Agrotech"
                width={800}
                height={600}
                className="relative z-10 w-full rounded-[3rem] shadow-2xl border-4 border-accent transform -rotate-2 hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-3xl shadow-xl z-20 flex items-center space-x-4">
                <div className="p-3 bg-white/10 rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-lg">Farm Protection</div>
                  <div className="text-accent text-sm">Certified Security</div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-8">
              <h2 className="text-2xl md:text-3xl font-bold text-primary leading-tight">
                Nurturing Tomorrow&apos;s Harvests
              </h2>
              <div className="w-20 h-2 bg-accent rounded-full" />
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                SalamaFarm is rooted in a dedicated team of agricultural
                engineers, agritech specialists, and field experts. Every farmer
                we partner with becomes part of our growing family.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed">
                With deep roots in innovation and an unwavering passion for
                sustainable farming, we bring intelligent, eco-friendly solutions
                directly to your fields.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center space-x-3 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-accent transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                  <span className="font-bold text-primary">Crop Protection</span>
                </div>
                <div className="flex items-center space-x-3 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-accent transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary shrink-0"
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
                  <span className="font-bold text-primary">Sustainable Tech</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Salama App */}
      <section className="py-16 md:py-20 bg-primary relative overflow-hidden" id="salama-app">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
            <span className="bg-white/10 text-accent px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 inline-block">
              Mobile Solution
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
              Introducing Salama App
            </h2>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              Your agricultural companion — diagnose crops, shop agrovet
              products, chat with experts, and manage orders.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6 mb-12 md:mb-16 max-w-6xl mx-auto">
            {[
              {
                src: "/assets/img/carousel/agro1.jpeg",
                label: "AI Diagnosis",
                caption: "Snap a photo to identify crop or livestock issues fast.",
              },
              {
                src: "/assets/img/carousel/agro2.jpeg",
                label: "Store Explore",
                caption: "Browse fertilizers, seeds, and inputs from nearby shops.",
              },
              {
                src: "/assets/img/carousel/agro3.jpeg",
                label: "Agrovet Chat",
                caption: "Message verified agrovets for advice and follow-ups.",
              },
              {
                src: "/assets/img/carousel/agro4.jpeg",
                label: "My Orders",
                caption: "Track cart, payments, pickup, and delivery in one place.",
              },
            ].map((shot, index) => (
              <article
                key={shot.src}
                className={`group bg-white/95 backdrop-blur-sm rounded-[1.75rem] p-3 shadow-xl border border-white/20 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${
                  index % 2 === 1 ? "sm:mt-6 xl:mt-8" : ""
                }`}
              >
                <div className="relative mx-auto w-full max-w-[220px]">
                  {/* Phone chrome */}
                  <div className="rounded-[1.35rem] bg-primary p-1.5 shadow-inner">
                    <div className="relative rounded-[1.1rem] overflow-hidden bg-white aspect-[9/19]">
                      <div className="absolute top-0 inset-x-0 z-10 flex justify-center pt-1.5">
                        <div className="h-1.5 w-16 rounded-full bg-black/20" />
                      </div>
                      <Image
                        src={shot.src}
                        alt={shot.label}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 640px) 70vw, (max-width: 1280px) 40vw, 220px"
                      />
                    </div>
                  </div>
                </div>

                <div className="px-2 pt-4 pb-2 text-center">
                  <h3 className="text-sm font-bold text-primary mb-1">
                    {shot.label}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {shot.caption}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {appFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors"
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform ${
                    feature.accent
                      ? "bg-accent text-primary"
                      : "bg-white/10 text-accent border border-white/10"
                  }`}
                >
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
                <h4 className="text-base font-bold text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
