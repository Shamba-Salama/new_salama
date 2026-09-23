"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <div className="w-full lg:w-2/3 overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-sm">
      <div className="p-6 sm:p-8 md:p-10 lg:p-12">
        <div className="mb-8 md:mb-10">
          <span className="mb-4 inline-flex rounded-full bg-secondary/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-secondary">
            Get in Touch
          </span>

          <h2 className="text-2xl font-bold text-primary sm:text-3xl">
            Send Us a Message
          </h2>

          <div className="mt-4 h-1.5 w-16 rounded-full bg-accent" />

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-500 sm:text-base">
            Have a question or want to learn more about Salama Farm? Send us a
            message and our team will get back to you.
          </p>
        </div>

        {sent && (
          <div
            className="mb-6 flex items-start gap-3 rounded-2xl border border-accent/40 bg-accent/15 px-5 py-4 text-sm font-medium text-primary"
            role="status"
            aria-live="polite"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mt-0.5 h-5 w-5 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>

            <span>
              Thanks — your message was received. We&apos;ll get back to you
              soon.
            </span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label
                htmlFor="contact-name"
                className="ml-1 text-xs font-bold uppercase tracking-wider text-primary sm:text-sm"
              >
                Full Name
              </label>

              <div className="relative group">
                <div
                  className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400 transition-colors group-focus-within:text-primary"
                  aria-hidden="true"
                >
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  autoComplete="name"
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 py-4 pl-12 pr-4 text-gray-800 outline-none transition-all placeholder:text-gray-400 focus:border-secondary focus:bg-white focus:ring-4 focus:ring-secondary/10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="contact-email"
                className="ml-1 text-xs font-bold uppercase tracking-wider text-primary sm:text-sm"
              >
                Email Address
              </label>

              <div className="relative group">
                <div
                  className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400 transition-colors group-focus-within:text-primary"
                  aria-hidden="true"
                >
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  autoComplete="email"
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 py-4 pl-12 pr-4 text-gray-800 outline-none transition-all placeholder:text-gray-400 focus:border-secondary focus:bg-white focus:ring-4 focus:ring-secondary/10"
                  required
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="contact-phone"
              className="ml-1 text-xs font-bold uppercase tracking-wider text-primary sm:text-sm"
            >
              Phone Number
            </label>

            <div className="relative group">
              <div
                className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400 transition-colors group-focus-within:text-primary"
                aria-hidden="true"
              >
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>

              <input
                id="contact-phone"
                type="tel"
                name="phone"
                placeholder="+254 700 000 000"
                autoComplete="tel"
                className="w-full rounded-2xl border border-gray-200 bg-gray-50 py-4 pl-12 pr-4 text-gray-800 outline-none transition-all placeholder:text-gray-400 focus:border-secondary focus:bg-white focus:ring-4 focus:ring-secondary/10"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="contact-message"
              className="ml-1 text-xs font-bold uppercase tracking-wider text-primary sm:text-sm"
            >
              Your Message
            </label>

            <textarea
              id="contact-message"
              name="message"
              rows={5}
              placeholder="Tell us how we can help..."
              className="w-full resize-none rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-gray-800 outline-none transition-all placeholder:text-gray-400 focus:border-secondary focus:bg-white focus:ring-4 focus:ring-secondary/10 sm:px-6"
              required
            />
          </div>

          <button
            type="submit"
            className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-primary px-6 py-4 text-base font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 sm:py-5 sm:text-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>

            <span>Send Your Message</span>
          </button>
        </form>
      </div>
    </div>
  );
}