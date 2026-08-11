// src/pages/Admin/CultureManager.tsx
import React, { useState } from 'react';
import { Save, RefreshCw, FileText } from 'lucide-react';

export default function CultureManager() {
  const [cultureText, setCultureText] = useState(`
KhelClan is more than just a sports booking platform. We are a community of passionate athletes who believe in the power of competition and technology.

Our Values:
1. Community First: Everything we do is to bring people together.
2. Innovation: Automating the highlights experience.
3. Accessibility: Premium sports venues for everyone.

Rules & Guidelines:
- Players must arrive 15 minutes before the slot.
- Appropriate sports gear is mandatory.
- Highlights are usually delivered within 30 minutes of game completion.
  `.trim());

  const [saving, setSaving] = useState(false);

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      alert('Culture data updated! RAG system is re-indexing.');
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold">RAG Knowledge Base</h2>
          <p className="text-sm text-gray-500">Edit the core data that the AI Assistant uses to answer questions about KhelClan.</p>
        </div>
        <button 
          onClick={handleSave}
          disabled={saving}
          className="flex items-center space-x-2 bg-brand-lime text-brand-forest px-4 py-2 rounded-lg font-bold hover:shadow-lg transition disabled:opacity-50"
        >
          {saving ? <RefreshCw className="animate-spin" size={18} /> : <Save size={18} />}
          <span>{saving ? 'Indexing...' : 'Save & Sync'}</span>
        </button>
      </div>

      <div className="grid grid-autofit gap-8">
        {/* Editor */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
             <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Culture Document (Markdown)</label>
             <textarea 
               value={cultureText}
               onChange={(e) => setCultureText(e.target.value)}
               className="w-full h-[500px] bg-white border-2 border-transparent focus:border-brand-lime rounded-xl p-4 font-mono text-sm shadow-inner transition outline-none"
               placeholder="Enter KhelClan values, history, and guidelines here..."
             />
          </div>
        </div>

        {/* Info / Tips */}
        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
            <div className="flex items-center space-x-2 text-blue-700 mb-3">
              <FileText size={20} />
              <h4 className="font-bold">How RAG Works</h4>
            </div>
            <p className="text-sm text-blue-600 leading-relaxed">
              When you save this document, our AI assistant processes the text into "embeddings." 
              Next time a user asks a question like "What are the gear rules?", the AI will search 
              this document to provide an accurate answer.
            </p>
          </div>

          <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-100 italic text-sm text-yellow-700">
            Tip: Be specific about rules and scheduling to reduce support tickets.
          </div>
        </div>
      </div>
    </div>
  );
}
