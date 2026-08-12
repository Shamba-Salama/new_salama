import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coming Soon – Salama Farm",
  description: "This page is coming soon from Salama Farm.",
};

export default function SoonPage() {
  return (
    <section className="min-h-screen pt-32 pb-20 bg-gray-50 flex items-center">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <span className="bg-accent/30 text-primary px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest mb-6 inline-block">
          Coming Soon
        </span>
        <h1 className="text-4xl md:text-6xl font-black text-primary mb-6">
          We&apos;re Working On It
        </h1>
        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
          This section isn&apos;t ready yet. Check back soon for the Salama App,
          blog, pricing, and more.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-accent hover:text-primary transition-all"
          >
            Back Home
          </Link>
          <Link
            href="/contact"
            className="bg-white border border-gray-200 text-primary px-8 py-4 rounded-full font-bold hover:border-accent transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
