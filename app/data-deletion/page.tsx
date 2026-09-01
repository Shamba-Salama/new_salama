"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";

export default function DataDeletionPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    appName: "Salama Farm / Salama Agrovet Store / Salama Main App",
    userId: "",
    reason: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const resetFormData = {
    fullName: "",
    email: "",
    phone: "",
    appName: "Salama Farm / Salama Agrovet Store / Salama Main App",
    userId: "",
    reason: "",
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent("Data Deletion Request - Salama Farm");
    const body = encodeURIComponent(
      `Hello Salama Farm Team,\n\nI would like to request deletion of my personal data from the Salama Farm platform and mobile applications.\n\nFull Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nApp / Platform: ${formData.appName}\nUser ID / Account Reference: ${formData.userId}\nReason for Request: ${formData.reason || "Not specified"}\n\nPlease confirm receipt of this request and let me know the deletion timeline and any further steps required.\n\nThank you.`,
    );

    const mailtoLink = `mailto:info@salamafarm.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
    setFormData(resetFormData);
    setSubmitted(true);

    setTimeout(() => {
      window.location.reload();
    }, 1200);
  };

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
            Data Rights
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Delete My Data
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Request the removal of your personal information from our systems and mobile apps
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gray-50 p-8 rounded-3xl mb-12 border border-gray-100">
            <p className="text-gray-600 leading-relaxed mb-0">
              If you want to delete your personal data from the Salama Farm system,
              Salama Agrovet Store, or the Salama Main App, please complete the form below.
              Your request will be prepared and sent to info@salamafarm.com.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h2 className="text-3xl font-black text-primary mb-6">Data Deletion Request</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 focus:border-primary focus:outline-none"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 focus:border-primary focus:outline-none"
                    placeholder="name@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 focus:border-primary focus:outline-none"
                    placeholder="+254 ..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Platform
                  </label>
                  <select
                    name="appName"
                    value={formData.appName}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 focus:border-primary focus:outline-none"
                  >
                    <option>Salama Farm / Salama Agrovet Store / Salama Main App</option>
                    <option>Salama Farm System</option>
                    <option>Salama Agrovet Store Mobile App</option>
                    <option>Salama Main App</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    User ID / Account Reference (optional)
                  </label>
                  <input
                    type="text"
                    name="userId"
                    value={formData.userId}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 focus:border-primary focus:outline-none"
                    placeholder="Account ID / phone number / username"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Reason for Deletion Request
                  </label>
                  <textarea
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    rows={5}
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 focus:border-primary focus:outline-none"
                    placeholder="Tell us why you want your data deleted"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-accent font-bold py-4 px-6 rounded-full hover:bg-secondary transition-all shadow-lg"
                >
                  Send Deletion Request
                </button>

                {submitted && (
                  <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-xl px-4 py-3">
                    Your email client should open now with your request prepared for info@salamafarm.com.
                  </p>
                )}
              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-primary text-white p-8 rounded-3xl shadow-lg">
                <h3 className="text-2xl font-black mb-4">What happens next?</h3>
                <ul className="space-y-3 text-sm text-gray-100">
                  <li>• We review your request to delete your personal data.</li>
                  <li>• We remove identifiable data from the relevant systems where required.</li>
                  <li>• We may contact you if we need more details to verify your identity.</li>
                  <li>• All requests are handled through our support team at info@salamafarm.com.</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                <h3 className="text-2xl font-black text-primary mb-4">Need to contact us directly?</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  You can also send your request directly to our privacy and data support team.
                </p>
                <a
                  href="mailto:info@salamafarm.com?subject=Data%20Deletion%20Request"
                  className="inline-flex items-center space-x-2 bg-accent text-primary px-6 py-3 rounded-full font-bold hover:bg-primary hover:text-accent transition-all"
                >
                  <span>Email Us</span>
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
                </a>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-gray-100">
                <Link
                  href="/privacy"
                  className="inline-flex items-center text-primary font-bold hover:text-secondary transition-colors"
                >
                  <span>Back to Privacy Policy</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
