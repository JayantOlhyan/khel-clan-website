// src/components/FAQItem.tsx
import React, { useState } from 'react';

interface Props {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="w-full flex justify-between items-center text-left font-body text-deep-black"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold">{question}</span>
        <span>{open ? '-' : '+'}</span>
      </button>
      {open && (
        <p className="mt-2 text-sm text-deep-black/70">{answer}</p>
      )}
    </div>
  );
}
