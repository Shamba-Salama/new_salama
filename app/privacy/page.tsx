import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Salama Farm | Privacy Policy",
  description:
    "Privacy policy for Salama Farm, the Salama Agrovet Store mobile app, the Salama Farm system, and the Salama main app.",
};

const lastUpdated = new Date().toLocaleDateString("en-US", {
  month: "long",
  day: "2-digit",
  year: "numeric",
});

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            How Salama Farm collects, uses, and protects your information.
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Last Updated */}
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm mb-10">
            <p className="text-gray-600 leading-relaxed">
              <strong className="text-primary">Last updated:</strong>{" "}
              {lastUpdated}
            </p>
          </div>

          <div className="space-y-8 md:space-y-10">
            {/* Who We Are */}
            <PolicySection title="Who We Are">
              <p>
                Salama Farm is an agritech company that provides smart farming
                solutions to help farmers improve productivity, increase yields,
                manage farm operations, access agricultural inputs, and connect
                with services that support modern agriculture.
              </p>

              <p>
                Our digital ecosystem includes the Salama Farm system, the
                Salama Agrovet Store mobile app, and the Salama Main App. These
                platforms are designed to support farmers, agrovet users,
                customers, suppliers, and partners across the agricultural value
                chain.
              </p>
            </PolicySection>

            {/* Scope */}
            <PolicySection title="Scope of This Policy">
              <p>
                This privacy policy applies to the Salama Farm system, Salama
                Agrovet Store mobile application, Salama Main App, and any
                related website or platform operated by Salama Farm. It explains
                what information we collect, how we use it, how we protect it,
                and your rights regarding your personal data.
              </p>
            </PolicySection>

            {/* Information We Collect */}
            <PolicySection title="Information We Collect">
              <p>
                We collect personal and operational data to provide services,
                improve user experience, support transactions, and manage farm
                operations effectively.
              </p>

              <PolicyList
                items={[
                  "Full name, email address, phone number, and address",
                  "Farm or business name, location, and agricultural activity",
                  "Product orders, purchases, sales, inventory, and payment records",
                  "Agrovet store activity, supplier information, and customer records",
                  "Account credentials, login information, and user role details",
                  "Location data when permission is granted for maps or delivery features",
                  "Device information such as operating system, device type, app version, and IP address",
                  "Photos, documents, support messages, complaint data, and feedback",
                  "Usage analytics, crash reports, and application performance data",
                ]}
              />
            </PolicySection>

            {/* How We Use Your Information */}
            <PolicySection title="How We Use Your Information">
              <p>We use the information we collect to:</p>

              <PolicyList
                items={[
                  "Create and manage user accounts and profiles",
                  "Provide farm management, agricultural support, and agrovet services",
                  "Process product orders, payments, deliveries, and returns",
                  "Offer recommendations, notifications, and alerts relevant to the user",
                  "Improve our platform, mobile apps, and farming tools",
                  "Support customer service, dispute resolution, and technical assistance",
                  "Detect fraud, misuse, security issues, and operational risks",
                  "Comply with legal, tax, and regulatory requirements",
                ]}
              />
            </PolicySection>

            {/* Data Sharing */}
            <PolicySection title="Data Sharing and Disclosure">
              <p>
                We may share your information with trusted service providers
                and partners only where necessary to operate the platform and
                deliver services. This may include payment providers, logistics
                partners, cloud hosting providers, customer support tools,
                analytics services, and agricultural partners.
              </p>

              <p>
                We do not sell personal information for marketing purposes. We
                may disclose personal data when required by law, court order,
                or legitimate regulatory request.
              </p>
            </PolicySection>

            {/* Mobile Applications */}
            <PolicySection title="Mobile Applications and Device Data">
              <p>
                For the Salama Agrovet Store mobile app and the Salama Main App,
                we may collect mobile device data such as app usage, crash logs,
                push notification tokens, device identifiers, network details,
                and operating system information to improve app performance,
                support updates, and provide relevant notifications.
              </p>

              <p>
                If location services are enabled, we may use approximate or
                precise location to support store discovery, delivery, farm
                mapping, or route optimization. You may disable this feature in
                your device settings.
              </p>
            </PolicySection>

            {/* Data Security */}
            <PolicySection title="Data Security">
              <p>
                We take reasonable technical and organizational measures to
                protect the information we collect, including secure hosting,
                access controls, encryption where appropriate, and regular
                system monitoring. However, no digital platform can guarantee
                absolute security, and users should take care to protect their
                account information.
              </p>
            </PolicySection>

            {/* Retention */}
            <PolicySection title="Retention of Information">
              <p>
                We retain personal data only for as long as necessary to provide
                services, fulfill legal obligations, resolve disputes, enforce
                agreements, and support business operations. When data is no
                longer required, it is deleted, anonymized, or securely archived
                in line with applicable law.
              </p>
            </PolicySection>

            {/* Rights */}
            <PolicySection title="Your Rights">
              <p>
                Depending on your location and applicable law, you may have the
                right to access, correct, delete, restrict, or object to the use
                of your personal data. You may also withdraw consent where
                consent is required.
              </p>

              <p>
                To exercise any of these rights, please contact us using the
                details below.
              </p>
            </PolicySection>

            {/* Contact */}
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-primary mb-5">
                Contact Us
              </h2>

              <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm">
                <p className="text-gray-600 leading-relaxed mb-5">
                  If you have questions about this privacy policy, how we
                  handle your information, or your rights under this policy,
                  please contact us at:
                </p>

                <div className="space-y-2 text-gray-700">
                  <p>
                    <strong className="text-primary">Email:</strong>{" "}
                    info@salamafarm.com
                  </p>

                  <p>
                    <strong className="text-primary">Company:</strong> Salama
                    Farm
                  </p>
                </div>

                <div className="mt-7 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-accent px-7 py-4 rounded-full font-bold hover:bg-secondary transition-all shadow-sm"
                  >
                    <span>Contact Support</span>

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

                  <Link
                    href="/data-deletion"
                    className="inline-flex items-center justify-center border border-primary text-primary px-7 py-4 rounded-full font-bold hover:bg-primary hover:text-accent transition-all"
                  >
                    Delete My Data
                  </Link>
                </div>
              </div>
            </div>
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
    <section className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm">
      <h2 className="text-2xl md:text-3xl font-black text-primary mb-5">
        {title}
      </h2>

      <div className="space-y-4 text-gray-600 leading-relaxed">{children}</div>
    </section>
  );
}

function PolicyList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc list-inside space-y-2 text-gray-600">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}