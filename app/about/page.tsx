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

const appScreens = [
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
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[520px] flex items-center justify-center overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0">
          <Image
            src="/assets/img/carousel/rice.png"
            alt="Rice field"
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
              About Salama Farm
            </span>

            <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.08] tracking-tight mb-6">
              Cultivating Innovation in{" "}
              <span className="text-accent">Agriculture</span>
            </h1>

            <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-200 leading-relaxed mb-8">
              We&apos;re sowing the seeds of tomorrow&apos;s farming revolution
              with AI-powered solutions that protect harvests and nurture
              sustainable growth.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <span className="rounded-full bg-accent px-5 py-2 text-xs md:text-sm font-bold text-primary">
                Sustainable Farming
              </span>

              <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs md:text-sm font-bold text-white backdrop-blur-sm">
                Smart Technology
              </span>

              <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs md:text-sm font-bold text-white backdrop-blur-sm">
                Farmer-Focused Solutions
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Agrovet */}
      <AgrovetLaunch compact />

      {/* Technology Video */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
              Our Technology
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-5">
              See Our Technology in Action
            </h2>

            <div className="w-16 h-1.5 bg-accent rounded-full mx-auto mb-6" />

            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Watch how our AI-powered drone transforms modern farming with
              real-time detection and smart deterrents.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl bg-black shadow-2xl ring-1 ring-black/5">
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

      {/* Mission / Story */}
      <section className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />

              <div className="relative">
                <Image
                  src="/assets/img/sections/agrotech.png"
                  alt="Modern agrotechnology"
                  width={800}
                  height={600}
                  className="relative z-10 w-full rounded-3xl shadow-xl object-cover"
                />

                <div className="absolute -bottom-6 -right-4 md:-right-8 z-20 bg-primary text-white rounded-2xl shadow-xl p-4 md:p-5">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-accent"
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
                      <div className="font-bold text-sm md:text-base">
                        Farm Protection
                      </div>
                      <div className="text-accent text-xs md:text-sm">
                        Smart Technology
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                Our Mission
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight mt-3 mb-5">
                Nurturing Tomorrow&apos;s Harvests
              </h2>

              <div className="w-16 h-1.5 bg-accent rounded-full mb-7" />

              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  SalamaFarm is rooted in a dedicated team of agricultural
                  engineers, agritech specialists, and field experts. Every
                  farmer we partner with becomes part of our growing family.
                </p>

                <p>
                  With deep roots in innovation and an unwavering passion for
                  sustainable farming, we bring intelligent, eco-friendly
                  solutions directly to your fields.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                <div className="group flex items-center gap-3 rounded-2xl border border-gray-100 bg-gray-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-md">
                  <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary"
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
                  </div>

                  <span className="font-bold text-primary text-sm">
                    Crop Protection
                  </span>
                </div>

                <div className="group flex items-center gap-3 rounded-2xl border border-gray-100 bg-gray-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-md">
                  <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary"
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
                  </div>

                  <span className="font-bold text-primary text-sm">
                    Sustainable Tech
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Salama App */}
      <section
        className="relative overflow-hidden bg-primary py-20 md:py-28"
        id="salama-app"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-accent">
              Mobile Solution
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-5">
              Introducing Salama App
            </h2>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Your agricultural companion — diagnose crops, shop agrovet
              products, chat with experts, and manage orders.
            </p>
          </div>

          {/* App Screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 max-w-6xl mx-auto mb-14 md:mb-16">
            {appScreens.map((shot, index) => (
              <article
                key={shot.src}
                className={`group rounded-3xl bg-white p-4 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  index % 2 === 1 ? "xl:mt-8" : ""
                }`}
              >
                <div className="mx-auto max-w-[220px]">
                  <div className="rounded-[1.5rem] bg-primary p-1.5 shadow-inner">
                    <div className="relative overflow-hidden rounded-[1.2rem] bg-white aspect-[9/19]">
                      <div className="absolute top-0 inset-x-0 z-10 flex justify-center pt-2">
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

                <div className="text-center pt-5 pb-2">
                  <h3 className="text-base font-bold text-primary mb-2">
                    {shot.label}
                  </h3>

                  <p className="text-sm text-gray-500 leading-relaxed">
                    {shot.caption}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* App Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {appFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-accent/20"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-105 ${
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

                <h3 className="text-lg font-bold text-white mb-2">
                  {feature.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed">
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