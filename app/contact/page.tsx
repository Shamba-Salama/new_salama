import type { Metadata } from "next";
import Image from "next/image";
import { AgrovetLaunch } from "@/components/AgrovetLaunch";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us – SalamaFarm Agricultural Solutions",
  description:
    "Have questions about our agricultural solutions? Reach out to the Salama Farm team.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 pt-36 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/img/carousel/farm.png"
            alt="Salama Farm"
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
              Contact Us
            </span>

            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
              Get In <span className="text-accent">Touch</span>
            </h1>

            <p className="text-sm md:text-base text-gray-200 mb-6 leading-relaxed max-w-2xl mx-auto">
              Have questions about Salama Farm products, services, or
              technology? Our team is ready to hear from you.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="bg-white/10 text-white border border-white/20 px-4 py-1.5 rounded-full font-bold text-xs">
                Support
              </span>

              <span className="bg-white/10 text-white border border-white/20 px-4 py-1.5 rounded-full font-bold text-xs">
                Expert Advice
              </span>

              <span className="bg-accent text-primary px-4 py-1.5 rounded-full font-bold text-xs">
                Agrovet Solutions
              </span>
            </div>
          </div>
        </div>
      </section>

      <AgrovetLaunch compact />

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-12">
            {/* Contact Form */}
            <div className="w-full lg:w-2/3">
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="w-full lg:w-1/3 flex flex-col gap-6">
              <div className="bg-primary p-8 md:p-10 rounded-3xl text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-8 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-accent mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  Contact Information
                </h3>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 shrink-0 bg-white/10 rounded-xl flex items-center justify-center border border-white/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>

                    <div>
                      <h6 className="text-accent text-sm font-bold uppercase tracking-wider mb-1">
                        Phone
                      </h6>

                      <p className="text-white text-base font-medium">
                        Contact details to be confirmed
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 shrink-0 bg-white/10 rounded-xl flex items-center justify-center border border-white/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>

                    <div>
                      <h6 className="text-accent text-sm font-bold uppercase tracking-wider mb-1">
                        Email
                      </h6>

                      <p className="text-white text-base font-medium break-all">
                        Contact details to be confirmed
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-white/10">
                  <h5 className="text-white font-bold mb-3">
                    Connect With Us
                  </h5>

                  <p className="text-white/70 text-sm leading-relaxed">
                    Our social media links will be added once the official
                    accounts are confirmed.
                  </p>
                </div>
              </div>

              {/* Location / Information Card */}
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/assets/img/carousel/farm.png"
                    alt="Salama Farm"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />

                  <div className="absolute inset-0 bg-primary/40" />
                </div>

                <div className="p-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                    Our Location
                  </span>

                  <h4 className="text-xl font-bold text-primary mt-1 mb-2">
                    Salama Farm
                  </h4>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    Location details will be added once the official office
                    information is confirmed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}