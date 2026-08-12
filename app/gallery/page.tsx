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

export default async function GalleryPage({ searchParams }: GalleryPageProps) {
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
      <section className="relative py-24 flex items-center justify-center overflow-hidden pt-40">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/img/carousel/farm.png"
            alt="Farm Gallery"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Gallery
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Explore our collection of images showcasing modern agricultural
            innovation and our dedicated team.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <GalleryGrid images={pageImages} />

          {allImages.length > PER_PAGE && (
            <div className="mt-16 flex justify-center">
              <nav className="flex flex-wrap items-center justify-center gap-2">
                {page > 1 && (
                  <>
                    <Link
                      href="/gallery?page=1"
                      className="w-12 h-12 rounded-xl border border-gray-200 bg-white flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-primary"
                      aria-label="First page"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
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
                      className="px-6 h-12 rounded-xl border border-gray-200 bg-white flex items-center justify-center font-bold hover:bg-primary hover:text-white transition-colors text-primary"
                    >
                      Previous
                    </Link>
                  </>
                )}

                <div className="px-6 h-12 rounded-xl bg-primary text-white flex items-center justify-center font-bold shadow-lg shadow-primary/20">
                  Page {page} of {totalPages}
                </div>

                {page < totalPages && (
                  <>
                    <Link
                      href={`/gallery?page=${page + 1}`}
                      className="px-6 h-12 rounded-xl border border-gray-200 bg-white flex items-center justify-center font-bold hover:bg-primary hover:text-white transition-colors text-primary"
                    >
                      Next
                    </Link>
                    <Link
                      href={`/gallery?page=${totalPages}`}
                      className="w-12 h-12 rounded-xl border border-gray-200 bg-white flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-primary"
                      aria-label="Last page"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 5l7 7-7 7M5 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </>
                )}
              </nav>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-black text-primary mb-4">
            Media Terms and Conditions
          </h2>
          <p className="text-gray-500 text-lg mb-8 leading-relaxed">
            All media content in this gallery is protected. Please read our
            guidelines regarding event participation and media usage.
          </p>
          <Link
            href="/terms#event-participation-media-usage"
            className="inline-flex items-center space-x-2 text-primary font-bold hover:text-accent transition-colors underline decoration-2 underline-offset-4"
          >
            <span>Read Terms & Conditions</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
      </section>
    </>
  );
}
