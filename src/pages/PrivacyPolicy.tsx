import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="bg-muted-green min-h-screen py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20 animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-heading font-black text-brand-forest mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-500 font-body max-w-2xl mx-auto leading-relaxed">
            How we collect, use, and protect your personal information at KhelClan.
          </p>
        </div>
        
        <div className="bg-white rounded-[32px] p-10 shadow-xl border border-gray-100 animate-slideUp font-body text-gray-600 space-y-8">
          <section>
            <h2 className="text-2xl font-heading font-bold text-brand-forest mb-4">1. Introduction</h2>
            <p className="leading-relaxed">
              At KhelClan, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our mobile application, or participate in our sports and gaming events. Please read this privacy policy carefully.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-brand-forest mb-4">2. Information We Collect</h2>
            <div className="space-y-4">
              <p className="leading-relaxed">We may collect information about you in a variety of ways. The information we may collect includes:</p>
              <div>
                <h3 className="font-bold text-gray-800">Personal Data</h3>
                <p className="leading-relaxed">Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the platform.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Financial Data</h3>
                <p className="leading-relaxed">Financial information, such as data related to your payment method (e.g. valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services. All payment processing is handled by secure third-party providers (like Razorpay).</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Media and Biometric Data</h3>
                <p className="leading-relaxed">When you play in matches that are recorded by KhelClan cameras, we collect video and image data which may be used to generate highlights, player statistics, and promotional content.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-brand-forest mb-4">3. Use of Your Information</h2>
            <p className="leading-relaxed mb-4">Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Services to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Create and manage your account.</li>
              <li>Process your bookings, payments, and refunds.</li>
              <li>Generate your personal game highlights and statistics.</li>
              <li>Deliver targeted advertising, newsletters, and other information regarding promotions and the KhelClan platform to you.</li>
              <li>Improve the efficiency and operation of our platform.</li>
              <li>Resolve disputes and troubleshoot problems.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-brand-forest mb-4">4. Disclosure of Your Information</h2>
            <p className="leading-relaxed mb-4">We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others.</li>
              <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
              <li><strong>Public Highlights:</strong> Unless your privacy settings specify otherwise, game highlights and leaderboards may be visible to other members of the KhelClan community.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-brand-forest mb-4">5. Security of Your Information</h2>
            <p className="leading-relaxed">
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-brand-forest mb-4">6. Contact Us</h2>
            <p className="leading-relaxed">
              If you have questions or comments about this Privacy Policy, please contact us directly via our Contact Support page or email us at privacy@khelclan.online.
            </p>
          </section>

          <div className="pt-8 mt-8 border-t border-gray-100 text-center text-sm text-gray-500">
            Last Updated: May 2026
          </div>
        </div>
      </div>
    </div>
  );
}
