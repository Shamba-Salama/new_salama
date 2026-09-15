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
      {/* Hero */}
      <section className="relative min-h-[440px] md:min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/img/carousel/farm.png"
            alt="Farm"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-primary/90" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center pt-24">
          <span className="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-6 inline-block">
            Legal
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
            Terms and Conditions
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Last Updated */}
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm mb-10">
            <p className="text-gray-600 leading-relaxed">
              <strong className="text-primary">Last updated:</strong>{" "}
              {lastUpdated}
            </p>
          </div>

          <div className="space-y-8 md:space-y-10">
            {/* Event Participation */}
            <section id="event-participation-media-usage">
              <h2 className="text-2xl md:text-3xl font-black text-primary mb-5">
                Event Participation and Media Usage
              </h2>

              <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm">
                <p className="text-gray-600 leading-relaxed mb-5">
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
            </section>

            {/* Use of Services */}
            <PolicySection title="Use of Services">
              <p>
                You agree to use our services only for lawful purposes and in
                accordance with these terms. You must not misuse our platform
                or attempt to access it using unauthorized methods.
              </p>
            </PolicySection>

            {/* Intellectual Property */}
            <PolicySection title="Intellectual Property">
              <p>
                All content, trademarks, and data on this website are the
                property of Salama Farm. Unauthorized use of any materials is
                strictly prohibited.
              </p>
            </PolicySection>

            {/* Limitation of Liability */}
            <PolicySection title="Limitation of Liability">
              <p>
                Salama Farm shall not be liable for any indirect, incidental,
                or consequential damages arising from the use of our services.
              </p>
            </PolicySection>

            {/* Contact */}
            <section>
              <h2 className="text-2xl md:text-3xl font-black text-primary mb-5">
                Contact Us
              </h2>

              <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm">
                <p className="text-gray-600 leading-relaxed mb-5">
                  If you have any questions about these terms, please contact
                  us:
                </p>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-accent px-7 py-4 rounded-full font-bold hover:bg-secondary transition-all shadow-sm"
                >
                  <span>Contact Us</span>

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
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-black text-primary mb-5">
        {title}
      </h2>

      <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm">
        <div className="text-gray-600 leading-relaxed">{children}</div>
      </div>
    </section>
  );
}