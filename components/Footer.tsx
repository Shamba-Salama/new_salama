"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubscribed(true);
    e.currentTarget.reset();
  }

  const linkClass =
    "text-gray-300 hover:text-accent transition-colors duration-200 focus:outline-none focus-visible:text-accent";

  return (
    <footer className="border-t border-white/10 bg-primary pt-16 text-white sm:pt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 xl:gap-14">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/img/brand/logo.png"
              alt="Salama Farm Logo"
              className="h-12 w-auto rounded-lg bg-white p-1 object-contain"
            />

            <p className="mt-6 max-w-sm text-sm leading-relaxed text-gray-300">
              Salama Farm provides smart, sustainable agricultural technology
              designed to help farmers protect their crops and improve their
              farming experience.
            </p>

            {/* Social links */}
            <div className="mt-6 flex items-center gap-3">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400"
                aria-label="Twitter link coming soon"
                title="Twitter link coming soon"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </span>

              <span
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400"
                aria-label="Facebook link coming soon"
                title="Facebook link coming soon"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </span>
            </div>
          </div>

          {/* Salama Farm */}
          <div>
            <h4 className="mb-5 text-base font-bold text-accent sm:text-lg">
              Salama Farm
            </h4>

            <ul className="space-y-3.5 text-sm">
              <li>
                <Link href="/about" className={linkClass}>
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/services" className={linkClass}>
                  Services
                </Link>
              </li>

              <li>
                <Link href="/products" className={linkClass}>
                  Products
                </Link>
              </li>

              <li>
                <Link href="/gallery" className={linkClass}>
                  Gallery
                </Link>
              </li>

              <li>
                <Link href="/contact" className={linkClass}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 text-base font-bold text-accent sm:text-lg">
              Quick Links
            </h4>

            <ul className="space-y-3.5 text-sm">
              <li>
                <Link href="/soon" className={linkClass}>
                  Salama App
                </Link>
              </li>

              <li>
                <Link href="/soon" className={linkClass}>
                  Documentation
                </Link>
              </li>

              <li>
                <Link href="/terms" className={linkClass}>
                  Terms of Service
                </Link>
              </li>

              <li>
                <Link href="/privacy" className={linkClass}>
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="/data-deletion" className={linkClass}>
                  Delete My Data
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-5 text-base font-bold text-accent sm:text-lg">
              Newsletter
            </h4>

            <p className="mb-5 text-sm leading-relaxed text-gray-300">
              Join our mailing list to stay updated with the latest in digital
              farming.
            </p>

            {subscribed && (
              <div
                className="mb-4 rounded-xl border border-accent/30 bg-accent/10 px-4 py-3 text-sm font-medium text-accent"
                role="status"
                aria-live="polite"
              >
                Thanks for subscribing!
              </div>
            )}

            <form onSubmit={handleSubscribe} className="space-y-3">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>

              <input
                id="newsletter-email"
                name="email"
                type="email"
                required
                placeholder="Email address"
                autoComplete="email"
                className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-gray-400 focus:border-accent focus:bg-white/10 focus:ring-2 focus:ring-accent/20"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-accent px-4 py-3 font-bold text-primary transition-all duration-300 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-14 flex flex-col gap-5 border-t border-white/10 py-7 text-sm text-gray-400 md:mt-16 md:flex-row md:items-center md:justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 self-center rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent md:self-auto"
            aria-label="Salama Farm home"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/img/brand/logo.png"
              className="h-8 w-auto rounded bg-white p-0.5 object-contain"
              alt="Salama Farm Logo"
            />

            <span className="font-bold text-white">Salama Farm</span>
          </Link>

          <p className="text-center md:text-right">
            © 2024-{new Date().getFullYear()} Salama Farm. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}