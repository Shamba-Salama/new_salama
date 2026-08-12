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

  if (images.length === 0) {
    return (
      <div className="text-center py-24">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto h-16 w-16 text-gray-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 4a1 1 0 011-1h3.28a1 1 0 01.948.684l.347 1.04a1 1 0 00.95.684h5.146a1 1 0 00.95-.684l.347-1.04A1 1 0 0117.72 3H21a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"
          />
        </svg>
        <h2 className="mt-4 text-2xl font-semibold text-gray-600">
          No images found
        </h2>
        <p className="mt-2 text-gray-400">
          Please check back later or add pictures to{" "}
          <code>/assets/img/carousel/</code>.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {images.map((src, index) => {
          const filename = decodeURIComponent(src.split("/").pop() || "image");
          return (
            <button
              type="button"
              key={src}
              className="group relative aspect-square rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer text-left"
              onClick={() => open(index)}
            >
              <Image
                src={src}
                alt={`Gallery image: ${filename}`}
                fill
                className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
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
            </button>
          );
        })}
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-primary/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={close}
            className="absolute top-6 right-6 text-white hover:text-accent transition-colors"
            aria-label="Close preview"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
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
            className="absolute left-4 md:left-8 text-white hover:text-accent transition-colors hidden sm:flex"
            aria-label="Previous image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
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
            className="absolute right-4 md:right-8 text-white hover:text-accent transition-colors hidden sm:flex"
            aria-label="Next image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div className="max-w-5xl w-full relative">
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-white animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
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
              alt="Preview"
              className="w-full max-h-[85vh] object-contain rounded-3xl shadow-2xl mx-auto"
              onLoad={() => setLoading(false)}
              onError={(e) => {
                setLoading(false);
                e.currentTarget.src = "/assets/img/brand/logo.png";
              }}
            />
            <div className="mt-6 text-center text-white font-bold text-lg">
              &copy; Salama Farm
            </div>
          </div>
        </div>
      )}
    </>
  );
}
