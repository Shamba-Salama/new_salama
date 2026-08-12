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
    badge: "Live",
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
    badge: "Launching Friday",
    badgeClass: "bg-white text-primary",
    title: "Agrovet Store Dashboard",
    subtitle: "For agrovet shop owners",
    description:
      "A web dashboard to run your agrovet business: stock, sales, orders, and customer records in one place — so you spend less time on paperwork and more on serving farmers.",
    points: [
      "Inventory & stock tracking",
      "Sales and order management",
      "Shop performance overview",
      "Ready for Friday soft launch",
    ],
    image: "/assets/img/carousel/agro2.jpeg",
    cta: { href: "/contact", label: "Request Demo Access" },
  },
  {
    id: "agrovet-mobile",
    badge: "Launching Friday",
    badgeClass: "bg-white text-primary",
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
      <section className="relative py-24 flex items-center justify-center overflow-hidden pt-36">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/img/carousel/farm.png"
            alt="Salama Farm products"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-secondary/75" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">
            Product Suite
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Tools that power modern farming
          </h1>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed">
            From the Salama farmer app to our new Agrovet store platform — see
            what&apos;s live today and what launches this Friday.
          </p>
        </div>
      </section>

      <AgrovetLaunch compact />

      <section className="py-12 md:py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-primary mb-2">
              App screens from the system
            </h2>
            <p className="text-sm text-gray-600">
              Real mobile UI for Salama diagnosis, agrovet shopping, chat, and
              orders.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {appScreens.map((screen) => (
              <div key={screen.src} className="group">
                <div className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-gray-50 aspect-[9/16]">
                  <Image
                    src={screen.src}
                    alt={screen.label}
                    fill
                    className="object-contain object-top p-1"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <p className="mt-2 text-center text-xs font-bold text-primary">
                  {screen.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 space-y-16 max-w-6xl">
          {products.map((product, index) => (
            <article
              key={product.id}
              id={product.id}
              className={`flex flex-col ${
                index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center gap-10 lg:gap-14`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-3xl overflow-hidden shadow-lg border border-gray-100 aspect-[9/16] max-h-[520px] mx-auto max-w-sm bg-gray-50">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain object-top"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </div>

              <div className="w-full lg:w-1/2 space-y-4">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${product.badgeClass}`}
                >
                  {product.badge}
                </span>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary tracking-tight">
                    {product.title}
                  </h2>
                  <p className="text-sm text-secondary font-medium mt-1">
                    {product.subtitle}
                  </p>
                </div>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {product.description}
                </p>
                <ul className="space-y-2 pt-1">
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
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
                <Link
                  href={product.cta.href}
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-secondary transition-colors mt-2"
                >
                  {product.cta.label}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
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
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-14 bg-primary text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Want access before Friday?
          </h2>
          <p className="text-white/75 text-sm md:text-base mb-6">
            Talk to us about early Agrovet dashboard or customer app access for
            your shop or farm.
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
