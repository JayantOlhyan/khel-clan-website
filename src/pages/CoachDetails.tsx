import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCoachStore } from '../store/useCoachStore';
import { Star, MapPin, Award, IndianRupee, ArrowLeft } from 'lucide-react';

export default function CoachDetails() {
  const { username } = useParams<{ username: string }>();
  const { getCoach } = useCoachStore();
  const c = username ? getCoach(username) : undefined;

  if (!c) return <div className="p-20 text-center text-brand-forest font-heading text-xl">Coach not found.</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link to="/coaches" className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-forest font-bold mb-6">
        <ArrowLeft size={20} /> Back to Coaches
      </Link>
      <div className="bg-white rounded-[32px] p-8 md:p-12 border border-black/5 shadow-sm">
        <div className="flex justify-between items-start mb-8 border-b pb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-brand-lime/20 text-brand-forest px-3 py-1 rounded font-bold text-sm uppercase tracking-wide">{c.sport}</span>
              <span className="flex items-center gap-1 text-amber-500 font-bold"><Star size={18} fill="currentColor"/> {c.rating}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-black text-brand-forest mb-4">{c.name}</h1>
            <p className="text-xl text-gray-600">{c.bio}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="flex items-center gap-3 text-gray-600">
            <MapPin className="text-brand-forest" size={24} />
            <div><p className="text-xs text-gray-400">Location</p><p className="font-bold">{c.location}</p></div>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <Award className="text-brand-forest" size={24} />
            <div><p className="text-xs text-gray-400">Experience</p><p className="font-bold">{c.experience}</p></div>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <IndianRupee className="text-brand-forest" size={24} />
            <div><p className="text-xs text-gray-400">Hourly Rate</p><p className="font-bold">{c.hourlyRate}</p></div>
          </div>
        </div>

        <div className="mb-8 border-b pb-8">
          <h3 className="text-xl font-heading font-bold text-brand-forest mb-4">Certifications</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            {c.certifications.map((cert, i) => <li key={i}>{cert}</li>)}
          </ul>
        </div>

        <div className="bg-brand-neutral p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-heading font-bold text-brand-forest mb-2">Book a Session</h3>
          <p className="text-gray-500 mb-6">Contact the coach directly to schedule training.</p>
          <a href={`/contact?coach=${c.username}`} className="inline-block bg-brand-forest text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-flame transition">
            Enquire
          </a>
        </div>
      </div>
    </div>
  );
}
