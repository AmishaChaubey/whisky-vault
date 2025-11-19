// src/components/PrivacyPolicy.jsx
import React from "react";

const PrivacyPolicy = () => {
     window.scrollTo(0, 0);
  return (
    <main className="min-h-screen bg-white text-[#404072] font-sans px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12 lg:px-20 xl:px-32 2xl:px-40">
      {/* Header */}
      <header className="mb-8 sm:mb-10 md:mb-12 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3">Privacy Policy</h1>
        <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
          Last Updated: October 22, 2025
        </p>
        <p className="text-sm sm:text-base md:text-lg max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2">
          At <span className="font-semibold">Blu Kings Distillers</span>, your privacy and
          trust are very important to us. This Privacy Policy explains how we
          collect, use, and protect your personal information when you use our
          website, purchase our premium spirits, and engage with our services.
        </p>
      </header>

      {/* Sections */}
      <section className="space-y-6 sm:space-y-8 md:space-y-10 text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
        {/* 1. Information We Collect */}
        <div>
          <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3">
            1. Information We Collect
          </h2>
          <p className="mb-2 sm:mb-3">
            We collect both personal and non-personal information to provide you
            with a seamless experience. The types of information we may collect
            include:
          </p>
          <ul className="list-disc list-inside space-y-1 sm:space-y-2 pl-2 sm:pl-4">
            <li>Your name, email address, phone number, and shipping address when you contact us, register, or place an order.</li>
            <li>Payment information (processed securely through trusted payment providers).</li>
            <li>Age verification data to ensure compliance with legal drinking age requirements.</li>
            <li>Technical data such as browser type, IP address, and device details.</li>
            <li>Usage data including the pages you visit, time spent on pages, and interactions.</li>
          </ul>
        </div>

        {/* 2. How We Use Your Information */}
        <div>
          <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3">
            2. How We Use Your Information
          </h2>
          <p>
            We use your data responsibly to improve your experience and our
            services. Specifically, your information is used to:
          </p>
          <ul className="list-disc list-inside space-y-1 sm:space-y-2 pl-2 sm:pl-4 mt-2">
            <li>Process and fulfill your orders for our distilled spirits.</li>
            <li>Verify that you meet the legal drinking age in your jurisdiction.</li>
            <li>Provide, maintain, and personalize our services.</li>
            <li>Respond to your queries, feedback, or support requests.</li>
            <li>Improve the design, functionality, and content of our website.</li>
            <li>Send you updates about new products, special offers, or notifications (only with your consent).</li>
            <li>Comply with legal obligations related to alcohol sales and distribution.</li>
          </ul>
        </div>

        {/* 3. Cookies and Tracking */}
        <div>
          <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3">
            3. Cookies and Tracking Technologies
          </h2>
          <p>
            We use cookies and similar tracking tools to improve user experience
            and analyze traffic. Cookies help us remember your preferences (including age verification status),
            customize content, and deliver relevant information about our products. You can manage or
            disable cookies in your browser settings at any time, though this may affect certain
            features of our website.
          </p>
        </div>

        {/* 4. Sharing Your Information */}
        <div>
          <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3">
            4. Sharing Your Information
          </h2>
          <p className="mb-2 sm:mb-3">
            Blu Kings Distillers does not sell, rent, or trade your personal information.
            However, we may share information with trusted third parties only in
            the following cases:
          </p>
          <ul className="list-disc list-inside space-y-1 sm:space-y-2 pl-2 sm:pl-4">
            <li>With service providers who help us operate our business (e.g., hosting, analytics, payment processing, shipping).</li>
            <li>With age verification services to ensure legal compliance.</li>
            <li>When required by law, regulation, or legal process.</li>
            <li>To protect our legal rights or prevent fraud and abuse.</li>
          </ul>
        </div>

        {/* 5. Security */}
        <div>
          <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3">5. Security</h2>
          <p>
            We take strong precautions to protect your personal data against
            unauthorized access, alteration, or destruction. We use industry-standard encryption
            for payment processing and secure storage for sensitive information. Despite our best
            efforts, please note that no method of internet transmission or
            electronic storage is 100% secure.
          </p>
        </div>

        {/* 6. Age Verification */}
        <div>
          <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3">
            6. Age Verification and Compliance
          </h2>
          <p>
            As a distiller of alcoholic beverages, we are legally required to verify that all
            customers are of legal drinking age. We collect and process age verification data
            in compliance with applicable laws. By using our services, you confirm that you meet
            the legal drinking age in your jurisdiction.
          </p>
        </div>

        {/* 7. Data Retention */}
        <div>
          <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3">
            7. Data Retention
          </h2>
          <p>
            We retain your information only as long as necessary to fulfill the
            purposes outlined in this policy, comply with legal requirements for alcohol sales,
            or as required by applicable law. Transaction records may be retained for tax
            and regulatory compliance purposes.
          </p>
        </div>

        {/* 8. Your Rights */}
        <div>
          <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3">
            8. Your Rights and Choices
          </h2>
          <p className="mb-2 sm:mb-3">
            Depending on your location, you may have certain rights regarding
            your personal data, such as:
          </p>
          <ul className="list-disc list-inside space-y-1 sm:space-y-2 pl-2 sm:pl-4">
            <li>Accessing and reviewing your information.</li>
            <li>Requesting corrections or deletion of your data (subject to legal retention requirements).</li>
            <li>Withdrawing consent for marketing communications.</li>
            <li>Objecting to certain data processing activities.</li>
          </ul>
        </div>

        {/* 9. International Data Transfers */}
        <div>
          <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3">
            9. International Data Transfers
          </h2>
          <p>
            If you access our services from outside our primary jurisdiction, please note that
            your information may be transferred to and processed in other countries. We ensure
            that appropriate safeguards are in place to protect your data in accordance with
            this Privacy Policy.
          </p>
        </div>

        {/* 10. Changes to This Policy */}
        <div>
          <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3">
            10. Changes to This Policy
          </h2>
          <p>
            Blu Kings Distillers reserves the right to update this Privacy Policy at any
            time. When we make significant changes, we will post a notice on our
            website and update the revision date at the top of this page. We encourage you
            to review this policy periodically.
          </p>
        </div>

        {/* 11. Contact Us */}
        <div className="pb-4">
          <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3">
            11. Contact Us
          </h2>
          <p className="mb-2 sm:mb-3">
            If you have any questions, suggestions, or concerns about our
            Privacy Policy or data practices, please contact us at:
          </p>
          <a
            href="mailto:info@blukingsdistillers.com"
            className="text-[#404072] font-medium underline block mt-2 break-all sm:break-normal"
          >
            info@blukingsdistillers.com
          </a>
          <p className="text-xs sm:text-sm mt-3 sm:mt-4 text-gray-600">
            © 2025 Blu Kings Distillers. All rights reserved.
          </p>
          <p className="text-xs sm:text-sm mt-1 text-gray-500">
            Please drink responsibly. Must be of legal drinking age.
          </p>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;