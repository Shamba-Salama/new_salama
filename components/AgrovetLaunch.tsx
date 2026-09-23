import Link from "next/link";

type AgrovetLaunchProps = {
  compact?: boolean;
};

export function AgrovetLaunch({ compact = false }: AgrovetLaunchProps) {
  return (
    <section
      className={`relative overflow-hidden ${
        compact ? "py-12" : "py-16"
      } bg-secondary`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
          <div className="text-center lg:text-left max-w-xl">
            <span className="inline-flex items-center gap-2 bg-accent text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Agrovet Platform
            </span>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
              Smart Agrovet Solutions for Modern Farming
            </h2>

            <p className="text-white/80 text-sm md:text-base leading-relaxed">
              Access a smarter way to manage and purchase farm inputs. Our
              Agrovet platform connects shop owners through a powerful
              dashboard and gives farmers a convenient mobile shopping
              experience.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/products"
              className="bg-accent text-primary px-6 py-3 rounded-full font-bold text-sm hover:bg-white transition-colors text-center"
            >
              See Our Products
            </Link>

            <Link
              href="/contact"
              className="bg-white/10 text-white border border-white/20 px-6 py-3 rounded-full font-bold text-sm hover:bg-white/20 transition-colors text-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}