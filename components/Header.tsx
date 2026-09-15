"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-primary/95 backdrop-blur-md border-b border-white/10">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/img/brand/logo.png"
            alt="Salama Farm Logo"
            className="h-11 w-auto object-contain rounded-lg bg-white p-1"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-7">
          <Link
            href="/"
            className="text-white hover:text-accent font-medium transition-colors"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-white hover:text-accent font-medium transition-colors"
          >
            About
          </Link>

          <Link
            href="/services"
            className="text-white hover:text-accent font-medium transition-colors"
          >
            Services
          </Link>

          <Link
            href="/products"
            className="text-white hover:text-accent font-medium transition-colors"
          >
            Products
          </Link>

          <Link
            href="/contact"
            className="text-white hover:text-accent font-medium transition-colors"
          >
            Contact
          </Link>

          <div className="relative group">
            <button
              type="button"
              className="text-white group-hover:text-accent font-medium flex items-center gap-1 transition-colors"
            >
              <span>Pages</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div className="absolute top-full right-0 mt-3 w-64 bg-white rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right group-hover:translate-y-0 -translate-y-2 p-4">
              <div className="space-y-4">
                <div>
                  <h6 className="text-primary font-bold text-xs uppercase tracking-wider mb-2">
                    Main Pages
                  </h6>

                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/products"
                        className="text-gray-600 hover:text-primary text-sm transition-colors"
                      >
                        Products
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/gallery"
                        className="text-gray-600 hover:text-primary text-sm transition-colors"
                      >
                        Gallery
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/about#team"
                        className="text-gray-600 hover:text-primary text-sm transition-colors"
                      >
                        Team
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/soon"
                        className="text-gray-600 hover:text-primary text-sm transition-colors"
                      >
                        Salama App
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="border-t border-gray-100 pt-3">
                  <h6 className="text-primary font-bold text-xs uppercase tracking-wider mb-2">
                    Coming Soon
                  </h6>

                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/products#agrovet-dashboard"
                        className="text-gray-500 hover:text-primary text-sm flex items-center justify-between transition-colors"
                      >
                        Agrovet Store
                        <span className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 rounded-full">
                          Platform
                        </span>
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/soon"
                        className="text-gray-500 hover:text-primary text-sm flex items-center justify-between transition-colors"
                      >
                        Blog
                        <span className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 rounded-full">
                          Soon
                        </span>
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/soon"
                        className="text-gray-500 hover:text-primary text-sm flex items-center justify-between transition-colors"
                      >
                        Pricing
                        <span className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 rounded-full">
                          Soon
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Header Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/soon"
            className="hidden md:flex items-center gap-2 text-white hover:text-accent transition-colors"
          >
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
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>

            <span className="font-medium">App</span>
          </Link>

          <Link
            href="/form"
            className="hidden sm:flex items-center gap-2 bg-white text-primary hover:bg-accent px-5 py-2.5 rounded-full font-bold transition-all duration-300 shadow-lg"
          >
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
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>

            <span>Get Started</span>
          </Link>

          <button
            type="button"
            className="lg:hidden text-white p-1"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="lg:hidden bg-primary border-t border-white/10 px-5 py-5 absolute top-full left-0 w-full animate-fade-in-down">
          <ul className="space-y-4">
            <li>
              <Link
                href="/"
                className="text-white block font-medium hover:text-accent transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className="text-white block font-medium hover:text-accent transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="/services"
                className="text-white block font-medium hover:text-accent transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                href="/products"
                className="text-white block font-medium hover:text-accent transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                href="/gallery"
                className="text-white block font-medium hover:text-accent transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Gallery
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="text-white block font-medium hover:text-accent transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </Link>
            </li>

            <li className="border-t border-white/10 pt-4">
              <Link
                href="/soon"
                className="text-white block font-medium hover:text-accent transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                App
              </Link>
            </li>

            <li>
              <Link
                href="/form"
                className="inline-flex bg-white text-primary px-6 py-3 rounded-full font-bold hover:bg-accent transition-all"
                onClick={() => setMobileOpen(false)}
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}