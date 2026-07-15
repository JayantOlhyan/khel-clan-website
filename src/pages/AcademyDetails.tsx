import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAcademyStore } from '../store/useAcademyStore';
import { MapPin, ArrowLeft, Mail } from 'lucide-react';

export default function AcademyDetails() {
  const { academySlug } = useParams<{ academySlug: string }>();
  const { getAcademy } = useAcademyStore();
  const a = academySlug ? getAcademy(academySlug) : undefined;

  if (!a) return <div className="p-20 text-center text-brand-forest font-heading text-xl">Academy not found.</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link to="/academies" className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-forest font-bold mb-6">
        <ArrowLeft size={20} /> Back to Academies
      </Link>
      <div className="bg-white rounded-[32px] p-8 md:p-12 border border-black/5 shadow-sm">
        <div className="mb-8 border-b pb-8">
          <h1 className="text-4xl md:text-5xl font-heading font-black text-brand-forest mb-4">{a.name}</h1>
          <p className="text-xl text-gray-600">{a.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="flex items-center gap-3 text-gray-600">
            <MapPin className="text-brand-forest" size={24} />
            <div><p className="text-xs text-gray-400">Location</p><p className="font-bold">{a.location}</p></div>
          </div>
          <div>
            <p className="text-xs text-gray-400 mb-2">Sports Offered</p>
            <div className="flex gap-2">
              {a.sports.map(s => <span key={s} className="bg-brand-lime/20 text-brand-forest px-3 py-1 rounded font-bold text-sm uppercase tracking-wide">{s}</span>)}
            </div>
          </div>
        </div>

        <div className="bg-brand-neutral p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-heading font-bold text-brand-forest mb-2">Admissions & Enquiries</h3>
          <p className="text-gray-500 mb-6">Contact the academy directly for fee structures and trials.</p>
          <a href={`mailto:${a.contactEmail}`} className="inline-flex items-center gap-2 bg-brand-forest text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-flame transition">
            <Mail size={20} /> Email Academy
          </a>
        </div>
      </div>
    </div>
  );
}
