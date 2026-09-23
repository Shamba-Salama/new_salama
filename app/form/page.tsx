import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Get Started – SalamaFarm",
  description:
    "Get started with SalamaFarm agricultural solutions and discover smarter ways to protect and manage your farm.",
};

export default function FormPage() {
  return (
    <section className="min-h-screen pt-28 md:pt-32 pb-20 bg-gray-50 flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-primary font-semibold text-sm mb-6">
            Get Started
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary leading-tight mb-6">
            Let’s Get Started
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
            Discover how SalamaFarm’s agricultural solutions can support your
            farming needs. Book a demo or contact our team to learn more.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/infocoder4/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-accent text-primary px-8 py-4 rounded-full font-bold hover:bg-primary hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Book a Demo
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white border border-gray-200 text-primary px-8 py-4 rounded-full font-bold hover:border-accent hover:bg-accent/5 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Supporting message */}
          <div className="mt-12 bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-sm">
            <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">
              Have questions?
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Our team is available to help you understand SalamaFarm
              solutions and determine the best way to get started.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}