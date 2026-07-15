import React, { useState } from 'react';
import { AlertTriangle, Send } from 'lucide-react';

export default function Report() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-gray-50 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-black/5">
        <h1 className="text-3xl font-heading font-black text-brand-forest mb-2 flex items-center gap-3">
          <AlertTriangle className="text-brand-flame" /> Report an Incident
        </h1>
        <p className="text-gray-600 mb-8">Our trust and safety team reviews every report. False reporting violates our guidelines.</p>

        {submitted ? (
          <div className="bg-green-50 text-green-700 p-6 rounded-2xl font-bold text-center">
            Report submitted successfully. Our safety team will review this within 24 hours.
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
            <div>
              <label className="block font-bold text-gray-700 mb-2">What are you reporting?</label>
              <select className="w-full border rounded-xl p-4 bg-gray-50 outline-none focus:border-brand-lime">
                <option>A specific player/user</option>
                <option>A group</option>
                <option>A game or event</option>
                <option>Suspicious activity / Scam</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-gray-700 mb-2">Entity Name or URL</label>
              <input type="text" placeholder="e.g. @username or Group Name" className="w-full border rounded-xl p-4 bg-gray-50 outline-none focus:border-brand-lime" required />
            </div>

            <div>
              <label className="block font-bold text-gray-700 mb-2">Description of the Incident</label>
              <textarea rows={5} placeholder="Please provide specific details..." className="w-full border rounded-xl p-4 bg-gray-50 outline-none focus:border-brand-lime" required></textarea>
            </div>

            <button type="submit" className="w-full bg-brand-forest text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-brand-flame transition">
              <Send size={18} /> Submit Report
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
