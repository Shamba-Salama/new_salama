import type { Metadata } from "next";
import Image from "next/image";
import { AgrovetLaunch } from "@/components/AgrovetLaunch";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us – SalamaFarm Agricultural Solutions",
  description:
    "Have questions about our agricultural solutions? Reach out to our farming experts today.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative py-24 flex items-center justify-center overflow-hidden pt-36">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/img/carousel/farm.png"
            alt="Farm"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/80 to-secondary/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">
              Contact
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
              Get In <span className="text-accent">Touch</span>
            </h1>
            <p className="text-sm md:text-base text-gray-200 mb-6 leading-relaxed max-w-2xl mx-auto">
              Questions about Salama products or the Agrovet store launch this
              Friday? Our team is ready to help.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="bg-white/10 text-white border border-white/20 px-4 py-1.5 rounded-full font-bold text-xs">
                24/7 Support
              </span>
              <span className="bg-white/10 text-white border border-white/20 px-4 py-1.5 rounded-full font-bold text-xs">
                Expert Advice
              </span>
              <span className="bg-accent text-primary px-4 py-1.5 rounded-full font-bold text-xs">
                Agrovet Early Access
              </span>
            </div>
          </div>
        </div>
      </section>

      <AgrovetLaunch compact />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
            <ContactForm />

            <div className="w-full lg:w-1/3 flex flex-col gap-6">
              <div className="bg-primary p-10 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
                <h3 className="text-2xl font-bold mb-8 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-accent mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Get In Touch
                </h3>

                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 shrink-0 bg-white/10 rounded-xl flex items-center justify-center border border-white/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-accent"
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
                    <div>
                      <h6 className="text-accent text-sm font-bold uppercase tracking-wider mb-1">
                        Phone
                      </h6>
                      <p className="text-white text-lg font-medium">
                        +254 700 000 000
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 shrink-0 bg-white/10 rounded-xl flex items-center justify-center border border-white/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-accent"
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
                    <div>
                      <h6 className="text-accent text-sm font-bold uppercase tracking-wider mb-1">
                        Email
                      </h6>
                      <p className="text-white text-lg font-medium">
                        info@salamafarm.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10">
                  <h5 className="text-white font-bold mb-6">Connect With Us</h5>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all border border-white/10"
                      aria-label="Facebook"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all border border-white/10"
                      aria-label="Twitter"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-[2.5rem] shadow-sm border border-gray-100 flex-grow h-64 overflow-hidden relative">
                <Image
                  src="/assets/img/carousel/farm.png"
                  alt="Map Location"
                  fill
                  className="object-cover rounded-3xl"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center rounded-3xl">
                  <div className="bg-white p-4 rounded-2xl shadow-xl flex items-center space-x-3">
                    <div className="w-3 h-3 bg-accent rounded-full animate-ping" />
                    <span className="font-bold text-primary">
                      Farm HQ, Kenya
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
