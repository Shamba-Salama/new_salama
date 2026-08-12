import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 – Page Not Found | Salama Farm",
  description: "The page you are looking for could not be found.",
};

export default function NotFound() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-28 pb-20">
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/img/carousel/farm.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-secondary/80" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center max-w-2xl">
        <p className="text-accent font-black text-8xl md:text-9xl tracking-tighter mb-4">
          404
        </p>
        <h1 className="text-3xl md:text-5xl font-black text-white mb-6">
          Page Not Found
        </h1>
        <p className="text-lg text-gray-200 mb-10 leading-relaxed">
          Sorry — we couldn&apos;t find the page you&apos;re looking for. It may
          have been moved, or the link might be incorrect.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-accent text-primary px-8 py-4 rounded-full font-bold hover:bg-white transition-all"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
