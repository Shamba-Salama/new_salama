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
        monitoring, identifies pests using artificial intelligence, and activates
        targeted sound deterrents to scare them away—all while keeping the
        environment safe.
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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1.5 bg-accent mx-auto rounded-full mb-4" />
          <p className="text-sm md:text-base text-gray-600">
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
                className="faq-item bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left group focus:outline-none"
                  onClick={() => setOpenId(isOpen ? null : id)}
                  aria-expanded={isOpen}
                >
                  <span className="text-sm md:text-base font-bold text-primary group-hover:text-accent transition-colors pr-4">
                    {faq.question}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 text-primary shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isOpen && (
                  <div className="px-5 md:px-6 pb-5 md:pb-6 animate-fade-in">
                    <p className="text-gray-600 leading-relaxed text-sm">{faq.answer}</p>
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
