import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Salama Farm | Terms and Conditions",
  description:
    "Please read these terms carefully before using Salama Farm services.",
};

const lastUpdated = new Date().toLocaleDateString("en-US", {
  month: "long",
  day: "2-digit",
  year: "numeric",
});

export default function TermsPage() {
  return (
    <>
      <section className="relative py-32 flex items-center justify-center overflow-hidden pt-40">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/img/carousel/farm.png"
            alt="Farm"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/90" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="bg-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest mb-6 inline-block">
            Legal
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Terms and Conditions
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Please read these terms carefully before using our services
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gray-50 p-8 rounded-3xl mb-12 border border-gray-100">
            <p className="text-gray-600 leading-relaxed mb-0">
              Last updated: {lastUpdated}
            </p>
          </div>

          <div className="space-y-12">
            <div id="event-participation-media-usage">
              <h2 className="text-3xl font-black text-primary mb-6">
                Event Participation and Media Usage
              </h2>
              <div className="bg-white p-8 rounded-3xl border border-gray-100 space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  By participating in Salama Farm events, you acknowledge and
                  agree that:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Photos and videos may be taken during the event</li>
                  <li>Your image may appear in promotional materials</li>
                  <li>
                    Media content may be used on our website and social media
                  </li>
                  <li>All media rights belong to Salama Farm</li>
                  <li>
                    You may request removal of your image by contacting us
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-black text-primary mb-6">
                Use of Services
              </h2>
              <div className="bg-white p-8 rounded-3xl border border-gray-100">
                <p className="text-gray-600 leading-relaxed">
                  You agree to use our services only for lawful purposes and in
                  accordance with these terms. You must not misuse our platform
                  or attempt to access it using unauthorized methods.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-black text-primary mb-6">
                Intellectual Property
              </h2>
              <div className="bg-white p-8 rounded-3xl border border-gray-100">
                <p className="text-gray-600 leading-relaxed">
                  All content, trademarks, and data on this website are the
                  property of Salama Farm. Unauthorized use of any materials is
                  strictly prohibited.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-black text-primary mb-6">
                Limitation of Liability
              </h2>
              <div className="bg-white p-8 rounded-3xl border border-gray-100">
                <p className="text-gray-600 leading-relaxed">
                  Salama Farm shall not be liable for any indirect, incidental,
                  or consequential damages arising from the use of our services.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-black text-primary mb-6">
                Contact Us
              </h2>
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you have any questions about these terms, please contact
                  us:
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 bg-primary text-accent px-8 py-4 rounded-full font-bold hover:bg-secondary transition-all shadow-lg"
                >
                  <span>Contact Us</span>
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
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
