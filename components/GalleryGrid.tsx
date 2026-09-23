"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type GalleryGridProps = {
  images: string[];
};

export function GalleryGrid({ images }: GalleryGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const close = useCallback(() => {
    setActiveIndex(null);
    document.body.style.overflow = "";
  }, []);

  const open = (index: number) => {
    setActiveIndex(index);
    setLoading(true);
    document.body.style.overflow = "hidden";
  };

  const changeImage = useCallback(
    (direction: number) => {
      setActiveIndex((current) => {
        if (current === null || images.length === 0) return current;

        const next = (current + direction + images.length) % images.length;
        setLoading(true);

        return next;
      });
    },
    [images.length],
  );

  useEffect(() => {
    if (activeIndex === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") changeImage(1);
      if (e.key === "ArrowLeft") changeImage(-1);
    };

    document.addEventListener("keydown", onKey);

    return () => document.removeEventListener("keydown", onKey);
  }, [activeIndex, changeImage, close]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (images.length === 0) {
    return (
      <div className="py-24 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.8}
              d="M3 4a1 1 0 011-1h3.28a1 1 0 01.948.684l.347 1.04a1 1 0 00.95.684h5.146a1 1 0 00.95-.684l.347-1.04A1 1 0 0117.72 3H21a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"
            />
          </svg>
        </div>

        <h2 className="mt-5 text-xl font-semibold text-gray-700 md:text-2xl">
          No images found
        </h2>

        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-gray-500">
          Please check back later or add pictures to{" "}
          <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs">
            /assets/img/carousel/
          </code>
          .
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {images.map((src, index) => {
          const filename = decodeURIComponent(
            src.split("/").pop() || "image",
          );

          return (
            <button
              type="button"
              key={src}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl bg-gray-100 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
              onClick={() => open(index)}
              aria-label={`Open ${filename}`}
            >
              <Image
                src={src}
                alt={`Gallery image: ${filename}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />

              <div className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/45" />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex h-14 w-14 translate-y-2 items-center justify-center rounded-full bg-white text-primary shadow-lg transition-transform duration-300 group-hover:translate-y-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-gradient-to-t from-primary/80 to-transparent px-4 pb-4 pt-10 transition-transform duration-300 group-hover:translate-y-0">
                <p className="truncate text-sm font-medium text-white">
                  {filename}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/95 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image preview"
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-white md:right-6 md:top-6"
            aria-label="Close preview"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <button
            type="button"
            onClick={() => changeImage(-1)}
            className="absolute left-3 z-20 hidden h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:flex md:left-6"
            aria-label="Previous image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            type="button"
            onClick={() => changeImage(1)}
            className="absolute right-3 z-20 hidden h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:flex md:right-6"
            aria-label="Next image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div className="relative w-full max-w-5xl">
            {loading && (
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 animate-spin text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-label="Loading image"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
            )}

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[activeIndex]}
              alt="Salama Farm gallery preview"
              className="mx-auto max-h-[78vh] w-full rounded-2xl object-contain shadow-2xl md:max-h-[82vh]"
              onLoad={() => setLoading(false)}
              onError={(e) => {
                setLoading(false);
                e.currentTarget.src = "/assets/img/brand/logo.png";
              }}
            />

            <div className="mt-4 flex items-center justify-center gap-3 text-sm text-white/80">
              <span>
                {activeIndex + 1} / {images.length}
              </span>
              <span aria-hidden="true">•</span>
              <span>Salama Farm</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}