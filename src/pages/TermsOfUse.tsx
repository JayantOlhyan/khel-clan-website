import React from 'react';

export default function TermsOfUse() {
  return (
    <div className="bg-muted-green min-h-screen py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20 animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-heading font-black text-brand-forest mb-6">
            Terms of Use
          </h1>
          <p className="text-xl text-gray-500 font-body max-w-2xl mx-auto leading-relaxed">
            Please read these terms carefully before using the KhelClan platform.
          </p>
        </div>
        
        <div className="bg-white rounded-[32px] p-10 shadow-xl border border-gray-100 animate-slideUp font-body text-gray-600 space-y-8">
          <section>
            <h2 className="text-2xl font-heading font-bold text-brand-forest mb-4">1. Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By accessing and using the KhelClan platform, including our website, mobile applications, and services (collectively, the "Services"), you agree to be bound by these Terms of Use. If you do not agree to all of these Terms, do not use our Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-brand-forest mb-4">2. Description of Services</h2>
            <p className="leading-relaxed">
              KhelClan provides a platform that enables users to discover, book, and participate in sports activities, tournaments, and events. We also provide features such as automated highlights recording, player statistics tracking, and community engagement tools.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-brand-forest mb-4">3. User Accounts</h2>
            <p className="leading-relaxed mb-4">
              To use certain features of the Services, you must register for an account. You agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate, current, and complete information during registration.</li>
              <li>Maintain the security of your password and accept all risks of unauthorized access.</li>
              <li>Notify us immediately if you discover any unauthorized use of your account.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-brand-forest mb-4">4. Bookings and Payments</h2>
            <p className="leading-relaxed mb-4">
              When you book a slot or enter a tournament through KhelClan:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You agree to pay all applicable fees and taxes.</li>
              <li>Payments are processed securely via our third-party payment gateways (e.g., Razorpay).</li>
              <li>Cancellations are subject to our Cancellation Policy, which is outlined on the booking page. Late cancellations may incur a fee or result in a forfeit of the booking amount.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-brand-forest mb-4">5. Conduct and Fair Play</h2>
            <p className="leading-relaxed">
              We expect all KhelClan members to exhibit sportsmanship and respect towards other players, venue staff, and our community. Harassment, abuse, cheating, or any disruptive behavior will not be tolerated and may result in immediate suspension or termination of your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-brand-forest mb-4">6. Media and Content</h2>
            <p className="leading-relaxed">
              By participating in games booked through KhelClan where our recording equipment is present, you consent to being recorded. You grant KhelClan a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and distribute these highlights for the purpose of providing the Services and marketing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-brand-forest mb-4">7. Limitation of Liability</h2>
            <p className="leading-relaxed">
              Sports inherently involve physical risk. KhelClan and our partner venues are not liable for any injuries, damages, or losses incurred during your participation in activities booked through our platform. You assume full responsibility for your health and safety.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-brand-forest mb-4">8. Modifications to Terms</h2>
            <p className="leading-relaxed">
              We reserve the right to modify these Terms at any time. We will provide notice of significant changes by updating the date at the top of this policy or by sending you an email. Your continued use of the Services after any modifications indicates your acceptance of the updated Terms.
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
