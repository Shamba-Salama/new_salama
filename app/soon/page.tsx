import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coming Soon – Salama Farm",
  description: "More Salama Farm features and resources are coming soon.",
};

export default function SoonPage() {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center pt-28 pb-20">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <span className="inline-block rounded-full bg-accent/20 text-primary px-4 py-2 text-sm font-bold uppercase tracking-widest mb-6">
          Coming Soon
        </span>

        <h1 className="text-4xl md:text-6xl font-black text-primary leading-tight mb-6">
          Something Great Is Coming
        </h1>

        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
          We&apos;re working on this section of the Salama Farm website.
          Please check back soon for more information and updates.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-accent hover:text-primary transition-all duration-300"
          >
            Back Home
          </Link>

          <Link
            href="/contact"
            className="bg-white border border-gray-200 text-primary px-8 py-4 rounded-full font-bold hover:border-accent hover:shadow-sm transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>

        <div className="mt-12 rounded-3xl bg-white border border-gray-100 shadow-sm p-6 md:p-8">
          <h2 className="text-xl font-bold text-primary mb-2">
            Need help or have a question?
          </h2>

          <p className="text-gray-600 mb-5">
            Our team is available to help with questions about Salama Farm
            and its solutions.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center text-primary font-bold hover:text-accent transition-colors"
          >
            Get in touch
            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}