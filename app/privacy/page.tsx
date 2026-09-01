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
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            How Salama Farm collects, uses, and protects your information
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-gray-50 p-8 rounded-3xl mb-12 border border-gray-100">
            <p className="text-gray-600 leading-relaxed mb-0">
              Last updated: {lastUpdated}
            </p>
          </div>

          <div className="space-y-12">
            <div className="bg-white p-8 rounded-3xl border border-gray-100">
              <h2 className="text-3xl font-black text-primary mb-6">
                Who We Are
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Salama Farm is an agritech company that provides smart farming
                solutions to help farmers improve productivity, increase yields,
                manage farm operations, access agricultural inputs, and connect
                with services that support modern agriculture.
              </p>
              <p className="text-gray-600 leading-relaxed mb-0">
                Our digital ecosystem includes the Salama Farm system, the
                Salama Agrovet Store mobile app, and the Salama Main App. These
                platforms are designed to support farmers, agrovet users,
                customers, suppliers, and partners across the agricultural value
                chain.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-black text-primary mb-6">
                Scope of This Policy
              </h2>
              <div className="bg-white p-8 rounded-3xl border border-gray-100">
                <p className="text-gray-600 leading-relaxed">
                  This privacy policy applies to the Salama Farm system,
                  Salama Agrovet Store mobile application, Salama Main App, and
                  any related website or platform operated by Salama Farm. It
                  explains what information we collect, how we use it, how we
                  protect it, and your rights regarding your personal data.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-black text-primary mb-6">
                Information We Collect
              </h2>
              <div className="bg-white p-8 rounded-3xl border border-gray-100 space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  We collect personal and operational data to provide services,
                  improve user experience, support transactions, and manage farm
                  operations effectively.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Full name, email address, phone number, and address</li>
                  <li>Farm or business name, location, and agricultural activity</li>
                  <li>Product orders, purchases, sales, inventory, and payment records</li>
                  <li>Agrovet store activity, supplier information, and customer records</li>
                  <li>Account credentials, login information, and user role details</li>
                  <li>Location data when permission is granted for maps or delivery features</li>
                  <li>Device information such as operating system, device type, app version, and IP address</li>
                  <li>Photos, documents, support messages, complaint data, and feedback</li>
                  <li>Usage analytics, crash reports, and application performance data</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-black text-primary mb-6">
                How We Use Your Information
              </h2>
              <div className="bg-white p-8 rounded-3xl border border-gray-100">
                <p className="text-gray-600 leading-relaxed">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 mt-4">
                  <li>Create and manage user accounts and profiles</li>
                  <li>Provide farm management, agricultural support, and agrovet services</li>
                  <li>Process product orders, payments, deliveries, and returns</li>
                  <li>Offer recommendations, notifications, and alerts relevant to the user</li>
                  <li>Improve our platform, mobile apps, and farming tools</li>
                  <li>Support customer service, dispute resolution, and technical assistance</li>
                  <li>Detect fraud, misuse, security issues, and operational risks</li>
                  <li>Comply with legal, tax, and regulatory requirements</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-black text-primary mb-6">
                Data Sharing and Disclosure
              </h2>
              <div className="bg-white p-8 rounded-3xl border border-gray-100">
                <p className="text-gray-600 leading-relaxed">
                  We may share your information with trusted service providers and
                  partners only where necessary to operate the platform and deliver
                  services. This may include payment providers, logistics partners,
                  cloud hosting providers, customer support tools, analytics
                  services, and agricultural partners.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  We do not sell personal information for marketing purposes. We
                  may disclose personal data when required by law, court order, or
                  legitimate regulatory request.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-black text-primary mb-6">
                Mobile Applications and Device Data
              </h2>
              <div className="bg-white p-8 rounded-3xl border border-gray-100">
                <p className="text-gray-600 leading-relaxed">
                  For the Salama Agrovet Store mobile app and the Salama Main App,
                  we may collect mobile device data such as app usage, crash logs,
                  push notification tokens, device identifiers, network details,
                  and operating system information to improve app performance,
                  support updates, and provide relevant notifications.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  If location services are enabled, we may use approximate or
                  precise location to support store discovery, delivery, farm
                  mapping, or route optimization. You may disable this feature in
                  your device settings.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-black text-primary mb-6">
                Data Security
              </h2>
              <div className="bg-white p-8 rounded-3xl border border-gray-100">
                <p className="text-gray-600 leading-relaxed">
                  We take reasonable technical and organizational measures to
                  protect the information we collect, including secure hosting,
                  access controls, encryption where appropriate, and regular
                  system monitoring. However, no digital platform can guarantee
                  absolute security, and users should take care to protect their
                  account information.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-black text-primary mb-6">
                Retention of Information
              </h2>
              <div className="bg-white p-8 rounded-3xl border border-gray-100">
                <p className="text-gray-600 leading-relaxed">
                  We retain personal data only for as long as necessary to provide
                  services, fulfill legal obligations, resolve disputes, enforce
                  agreements, and support business operations. When data is no
                  longer required, it is deleted, anonymized, or securely archived
                  in line with applicable law.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-black text-primary mb-6">
                Your Rights
              </h2>
              <div className="bg-white p-8 rounded-3xl border border-gray-100">
                <p className="text-gray-600 leading-relaxed">
                  Depending on your location and applicable law, you may have the
                  right to access, correct, delete, restrict, or object to the use
                  of your personal data. You may also withdraw consent where
                  consent is required.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  To exercise any of these rights, please contact us using the
                  details below.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-black text-primary mb-6">
                Contact Us
              </h2>
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you have questions about this privacy policy, how we handle
                  your information, or your rights under this policy, please
                  contact us at:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <strong>Email:</strong> info@salamafarm.com
                  </p>
                  <p>
                    <strong>Company:</strong> Salama Farm
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-2 bg-primary text-accent px-8 py-4 rounded-full font-bold hover:bg-secondary transition-all shadow-lg"
                  >
                    <span>Contact Support</span>
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

                  <Link
                    href="/data-deletion"
                    className="inline-flex items-center space-x-2 border border-primary text-primary px-8 py-4 rounded-full font-bold hover:bg-primary hover:text-accent transition-all"
                  >
                    <span>Delete My Data</span>
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
