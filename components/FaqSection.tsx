"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is SalamaFarm and how does it work?",
    answer: (
      <>
        <strong className="text-primary">SalamaFarm</strong> is a smart,
        AI-powered scarecrow system designed to protect grain farms from pests
        such as locusts and quelea birds. It uses drones for real-time
        monitoring, identifies pests using artificial intelligence, and
        activates targeted sound deterrents to scare them away—all while
        keeping the environment safe.
      </>
    ),
  },
  {
    question: "Do I need technical knowledge?",
    answer:
      "Not at all. SalamaFarm is built with ease of use in mind. After installation, farmers receive training and access to a user-friendly mobile dashboard. From there, they can monitor their farm in real time and receive updates without needing any advanced technical skills.",
  },
  {
    question: "How can I get started?",
    answer:
      'Getting started is simple. Just click the "Get Started" button on our website and fill in your farm details. Once registered, our team will install the system and give you access to your personalized dashboard for ongoing monitoring and support.',
  },
];

export function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10 md:mb-12">
          <span className="inline-flex items-center rounded-full bg-secondary/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-secondary mb-4">
            FAQ
          </span>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3">
            Frequently Asked Questions
          </h2>

          <div className="w-16 h-1.5 bg-accent mx-auto rounded-full mb-4" />

          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            Common questions about our agricultural solutions
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const id = index + 1;
            const isOpen = openId === id;

            return (
              <div
                key={id}
                className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                  isOpen
                    ? "border-secondary/30 shadow-md"
                    : "border-gray-100 shadow-sm hover:shadow-md"
                }`}
              >
                <button
                  type="button"
                  className="group flex w-full items-center justify-between p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-inset md:p-6"
                  onClick={() => setOpenId(isOpen ? null : id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${id}`}
                >
                  <span
                    className={`pr-4 text-sm font-bold transition-colors duration-200 md:text-base ${
                      isOpen
                        ? "text-secondary"
                        : "text-primary group-hover:text-secondary"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "bg-secondary text-white"
                        : "bg-gray-100 text-primary group-hover:bg-secondary/10"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-4 w-4 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
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
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${id}`}
                    className="px-5 pb-5 md:px-6 md:pb-6 animate-fade-in"
                  >
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}