import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AgrovetLaunch } from "@/components/AgrovetLaunch";

export const metadata: Metadata = {
  title: "Our Products – Salama Farm",
  description:
    "Explore Salama Farm products: the main mobile app, Agrovet store dashboard, and customer mobile app.",
};

const products = [
  {
    id: "salama-app",
    badge: "Available",
    badgeClass: "bg-accent text-primary",
    title: "Salama Main Mobile App",
    subtitle: "For farmers in the field",
    description:
      "Our flagship farmer app for disease detection, farm monitoring, alerts, and day-to-day crop protection — built for simple use on any smartphone.",
    points: [
      "Photo-based crop disease detection",
      "Real-time farm alerts & insights",
      "Easy dashboard for field decisions",
      "Works with Salama drone protection",
    ],
    image: "/assets/img/carousel/agro1.jpeg",
    cta: { href: "/soon", label: "Download / Learn More" },
  },
  {
    id: "agrovet-dashboard",
    badge: "Agrovet Platform",
    badgeClass: "bg-primary text-white",
    title: "Agrovet Store Dashboard",
    subtitle: "For agrovet shop owners",
    description:
      "A web dashboard to run your agrovet business: stock, sales, orders, and customer records in one place — so you spend less time on paperwork and more on serving farmers.",
    points: [
      "Inventory & stock tracking",
      "Sales and order management",
      "Shop performance overview",
      "Designed for efficient agrovet management",
    ],
    image: "/assets/img/carousel/agro2.jpeg",
    cta: { href: "/contact", label: "Request Demo Access" },
  },
  {
    id: "agrovet-mobile",
    badge: "Agrovet Platform",
    badgeClass: "bg-primary text-white",
    title: "Agrovet Store Mobile App",
    subtitle: "For customers & buyers",
    description:
      "A customer-facing mobile app to browse agrovet products, place orders, chat with nearby shops, and get what you need for the farm.",
    points: [
      "Browse agrovet products nearby",
      "Place and track orders",
      "Chat with verified agrovets",
      "Built for farmers and farm shops",
    ],
    image: "/assets/img/carousel/agro4.jpeg",
    cta: { href: "/contact", label: "Join Early Access" },
  },
];

const appScreens = [
  { src: "/assets/img/carousel/agro1.jpeg", label: "AI Diagnosis" },
  { src: "/assets/img/carousel/agro2.jpeg", label: "Store Explore" },
  { src: "/assets/img/carousel/agro3.jpeg", label: "Agrovet Chat" },
  { src: "/assets/img/carousel/agro4.jpeg", label: "My Orders" },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 pt-36 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/img/carousel/farm.png"
            alt="Salama Farm products"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />

          <div className="absolute inset-0 bg-primary/90" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">
            Product Suite
          </span>

          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Tools that power modern farming
          </h1>

          <p className="text-base md:text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto">
            Explore Salama Farm&apos;s technology solutions for farmers,
            agrovet shop owners, and customers looking for a simpler way to
            manage their farming needs.
          </p>
        </div>
      </section>

      <AgrovetLaunch compact />

      {/* App Screens */}
      <section className="py-12 md:py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-8 md:mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Product Preview
            </span>

            <h2 className="text-xl md:text-2xl font-bold text-primary mt-2 mb-2">
              App screens from the system
            </h2>

            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              Explore the mobile interfaces supporting Salama Farm&apos;s
              diagnosis, agrovet shopping, chat, and order experience.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {appScreens.map((screen) => (
              <div key={screen.src} className="group">
                <div className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-gray-50 aspect-[9/16] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
                  <Image
                    src={screen.src}
                    alt={screen.label}
                    fill
                    className="object-contain object-top p-1"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                <p className="mt-3 text-center text-xs md:text-sm font-bold text-primary">
                  {screen.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl space-y-16 md:space-y-20">
          {products.map((product, index) => (
            <article
              key={product.id}
              id={product.id}
              className={`flex flex-col ${
                index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center gap-10 lg:gap-14`}
            >
              {/* Product Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-3xl overflow-hidden shadow-lg border border-gray-100 aspect-[9/16] max-h-[520px] mx-auto max-w-sm bg-white">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain object-top"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </div>

              {/* Product Information */}
              <div className="w-full lg:w-1/2">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${product.badgeClass}`}
                >
                  {product.badge}
                </span>

                <h2 className="text-2xl md:text-3xl font-bold text-primary tracking-tight">
                  {product.title}
                </h2>

                <p className="text-sm text-secondary font-medium mt-1 mb-4">
                  {product.subtitle}
                </p>

                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5">
                  {product.description}
                </p>

                <ul className="space-y-3">
                  {product.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <svg
                        className="h-5 w-5 text-secondary shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>

                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={product.cta.href}
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-secondary transition-colors mt-6"
                >
                  {product.cta.label}

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-14 md:py-16 bg-primary text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-accent">
            Get Started
          </span>

          <h2 className="text-2xl md:text-3xl font-bold text-white mt-2 mb-3">
            Interested in Salama Farm solutions?
          </h2>

          <p className="text-white/75 text-sm md:text-base mb-6 leading-relaxed">
            Talk to us about our farmer, agrovet, and customer solutions and
            find out how you can get started.
          </p>

          <Link
            href="/contact"
            className="inline-flex bg-accent text-primary px-7 py-3 rounded-full font-bold text-sm hover:bg-white transition-colors"
          >
            Contact Salama Farm
          </Link>
        </div>
      </section>
    </>
  );
}