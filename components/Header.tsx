"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-primary/95 shadow-sm backdrop-blur-md">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          aria-label="Salama Farm home"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/img/brand/logo.png"
            alt="Salama Farm Logo"
            className="h-10 w-auto rounded-lg bg-white p-1 object-contain sm:h-11"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex xl:gap-7">
          <Link
            href="/"
            className="font-medium text-white transition-colors hover:text-accent focus:outline-none focus-visible:text-accent"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="font-medium text-white transition-colors hover:text-accent focus:outline-none focus-visible:text-accent"
          >
            About
          </Link>

          <Link
            href="/services"
            className="font-medium text-white transition-colors hover:text-accent focus:outline-none focus-visible:text-accent"
          >
            Services
          </Link>

          <Link
            href="/products"
            className="font-medium text-white transition-colors hover:text-accent focus:outline-none focus-visible:text-accent"
          >
            Products
          </Link>

          <Link
            href="/contact"
            className="font-medium text-white transition-colors hover:text-accent focus:outline-none focus-visible:text-accent"
          >
            Contact
          </Link>

          {/* Pages Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setPagesOpen((open) => !open)}
              className="flex items-center gap-1 font-medium text-white transition-colors hover:text-accent focus:outline-none focus-visible:text-accent"
              aria-expanded={pagesOpen}
              aria-haspopup="true"
            >
              <span>Pages</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 transition-transform duration-200 ${
                  pagesOpen ? "rotate-180" : ""
                }`}
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

            {pagesOpen && (
              <div className="absolute right-0 top-full mt-3 w-64 overflow-hidden rounded-2xl border border-gray-100 bg-white p-4 shadow-2xl">
                <div>
                  <h6 className="mb-3 text-xs font-bold uppercase tracking-wider text-primary">
                    Main Pages
                  </h6>

                  <ul className="space-y-1">
                    <li>
                      <Link
                        href="/gallery"
                        onClick={() => setPagesOpen(false)}
                        className="block rounded-lg px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-50 hover:text-primary"
                      >
                        Gallery
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/about#team"
                        onClick={() => setPagesOpen(false)}
                        className="block rounded-lg px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-50 hover:text-primary"
                      >
                        Team
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/soon"
                        onClick={() => setPagesOpen(false)}
                        className="block rounded-lg px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-50 hover:text-primary"
                      >
                        Salama App
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="mt-4 border-t border-gray-100 pt-4">
                  <h6 className="mb-3 text-xs font-bold uppercase tracking-wider text-primary">
                    Coming Soon
                  </h6>

                  <ul className="space-y-1">
                    <li>
                      <Link
                        href="/products#agrovet-dashboard"
                        onClick={() => setPagesOpen(false)}
                        className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-gray-500 transition-colors hover:bg-gray-50 hover:text-primary"
                      >
                        <span>Agrovet Store</span>
                        <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                          Platform
                        </span>
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/soon"
                        onClick={() => setPagesOpen(false)}
                        className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-gray-500 transition-colors hover:bg-gray-50 hover:text-primary"
                      >
                        <span>Blog</span>
                        <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                          Soon
                        </span>
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/soon"
                        onClick={() => setPagesOpen(false)}
                        className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-gray-500 transition-colors hover:bg-gray-50 hover:text-primary"
                      >
                        <span>Pricing</span>
                        <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                          Soon
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Header Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/soon"
            className="hidden items-center gap-2 font-medium text-white transition-colors hover:text-accent focus:outline-none focus-visible:text-accent md:flex"
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

            <span>App</span>
          </Link>

          <Link
            href="/form"
            className="hidden items-center gap-2 rounded-full bg-white px-5 py-2.5 font-bold text-primary shadow-lg transition-all duration-300 hover:bg-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary sm:flex"
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

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="rounded-lg p-2 text-white transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 bg-primary px-5 py-5 shadow-xl lg:hidden"
        >
          <ul className="space-y-1">
            <li>
              <Link
                href="/"
                onClick={closeMobile}
                className="block rounded-xl px-3 py-3 font-medium text-white transition-colors hover:bg-white/10 hover:text-accent"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                onClick={closeMobile}
                className="block rounded-xl px-3 py-3 font-medium text-white transition-colors hover:bg-white/10 hover:text-accent"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="/services"
                onClick={closeMobile}
                className="block rounded-xl px-3 py-3 font-medium text-white transition-colors hover:bg-white/10 hover:text-accent"
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                href="/products"
                onClick={closeMobile}
                className="block rounded-xl px-3 py-3 font-medium text-white transition-colors hover:bg-white/10 hover:text-accent"
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                href="/gallery"
                onClick={closeMobile}
                className="block rounded-xl px-3 py-3 font-medium text-white transition-colors hover:bg-white/10 hover:text-accent"
              >
                Gallery
              </Link>
            </li>

            <li>
              <Link
                href="/about#team"
                onClick={closeMobile}
                className="block rounded-xl px-3 py-3 font-medium text-white transition-colors hover:bg-white/10 hover:text-accent"
              >
                Team
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                onClick={closeMobile}
                className="block rounded-xl px-3 py-3 font-medium text-white transition-colors hover:bg-white/10 hover:text-accent"
              >
                Contact
              </Link>
            </li>

            <li className="mt-3 border-t border-white/10 pt-4">
              <Link
                href="/soon"
                onClick={closeMobile}
                className="block rounded-xl px-3 py-3 font-medium text-white transition-colors hover:bg-white/10 hover:text-accent"
              >
                App
              </Link>
            </li>

            <li className="pt-2">
              <Link
                href="/form"
                onClick={closeMobile}
                className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 font-bold text-primary transition-all hover:bg-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
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