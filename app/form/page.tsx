import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Get Started – SalamaFarm",
  description: "Start with SalamaFarm agricultural solutions for your farm.",
};

export default function FormPage() {
  return (
    <section className="min-h-screen pt-32 pb-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-black text-primary mb-6">
          Get Started
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          This replaces the old <code className="text-primary">form.php</code>{" "}
          page. Share your PHP form next and we can convert it fully.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://calendly.com/infocoder4/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-primary px-8 py-4 rounded-full font-bold hover:bg-primary hover:text-white transition-all"
          >
            Book a Demo
          </a>
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
