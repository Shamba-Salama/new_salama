import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GalleryGrid } from "@/components/GalleryGrid";
import { getGalleryImages } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Salama Farm: Team Highlights & Event Snapshots",
  description:
    "Explore our collection of images showcasing modern agricultural innovation and our dedicated team.",
};

const PER_PAGE = 12;

type GalleryPageProps = {
  searchParams: Promise<{ page?: string }>;
};

export default async function GalleryPage({
  searchParams,
}: GalleryPageProps) {
  const params = await searchParams;
  const allImages = getGalleryImages();

  const totalPages = Math.max(1, Math.ceil(allImages.length / PER_PAGE));

  const page = Math.min(
    Math.max(parseInt(params.page || "1", 10) || 1, 1),
    totalPages,
  );

  const offset = (page - 1) * PER_PAGE;
  const pageImages = allImages.slice(offset, offset + PER_PAGE);

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 pt-36 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/img/carousel/farm.png"
            alt="Salama Farm Gallery"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />

          <div className="absolute inset-0 bg-primary/90" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">
              Our Gallery
            </span>

            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Salama Farm <span className="text-accent">Gallery</span>
            </h1>

            <p className="text-base md:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Explore our collection of images showcasing modern agricultural
              innovation and our dedicated team.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                Salama Farm Moments
              </span>

              <h2 className="text-2xl md:text-3xl font-bold text-primary mt-2 mb-2">
                Explore Our Gallery
              </h2>

              <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Take a look at moments from our work, events, team, and
                agricultural technology.
              </p>
            </div>

            <GalleryGrid images={pageImages} />

            {/* Pagination */}
            {allImages.length > PER_PAGE && (
              <div className="mt-12 md:mt-16 flex justify-center">
                <nav
                  className="flex flex-wrap items-center justify-center gap-2"
                  aria-label="Gallery pagination"
                >
                  {page > 1 && (
                    <>
                      <Link
                        href="/gallery?page=1"
                        className="w-11 h-11 md:w-12 md:h-12 rounded-xl border border-gray-200 bg-white flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-primary"
                        aria-label="First page"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                          />
                        </svg>
                      </Link>

                      <Link
                        href={`/gallery?page=${page - 1}`}
                        className="px-5 md:px-6 h-11 md:h-12 rounded-xl border border-gray-200 bg-white flex items-center justify-center font-bold text-sm hover:bg-primary hover:text-white transition-colors text-primary"
                      >
                        Previous
                      </Link>
                    </>
                  )}

                  <div className="px-5 md:px-6 h-11 md:h-12 rounded-xl bg-primary text-white flex items-center justify-center font-bold text-sm">
                    Page {page} of {totalPages}
                  </div>

                  {page < totalPages && (
                    <>
                      <Link
                        href={`/gallery?page=${page + 1}`}
                        className="px-5 md:px-6 h-11 md:h-12 rounded-xl border border-gray-200 bg-white flex items-center justify-center font-bold text-sm hover:bg-primary hover:text-white transition-colors text-primary"
                      >
                        Next
                      </Link>

                      <Link
                        href={`/gallery?page=${totalPages}`}
                        className="w-11 h-11 md:w-12 md:h-12 rounded-xl border border-gray-200 bg-white flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-primary"
                        aria-label="Last page"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 5l7 7-7 7M5 5l7 7 7-7"
                          />
                        </svg>
                      </Link>
                    </>
                  )}
                </nav>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Media Terms */}
      <section className="py-14 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-secondary">
            Media Guidelines
          </span>

          <h2 className="text-2xl md:text-3xl font-bold text-primary mt-2 mb-4">
            Media Terms and Conditions
          </h2>

          <p className="text-gray-500 text-sm md:text-base mb-7 leading-relaxed">
            All media content in this gallery is protected. Please read our
            guidelines regarding event participation and media usage.
          </p>

          <Link
            href="/terms#event-participation-media-usage"
            className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:text-accent transition-colors underline decoration-2 underline-offset-4"
          >
            <span>Read Terms & Conditions</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
      </section>
    </>
  );
}