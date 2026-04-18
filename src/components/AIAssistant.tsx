// src/components/AIAssistant.tsx
import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react';
import cultureData from '../data/cultureData.json';

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hi! I am the KhelClan Assistant. Ask me anything about our culture, rules, or how we work!' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { role: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Mock RAG Logic: Simple keyword matching over cultureData.json
    setTimeout(() => {
      let response = "I'm not sure about that. Try asking about our rules, highlights, or community values!";
      const query = input.toLowerCase();

      if (query.includes('rule') || query.includes('shoe') || query.includes('stud') || query.includes('gear')) {
        response = `Our rules include: ${cultureData.rules.join(' ')}`;
      } else if (query.includes('highlight') || query.includes('clip') || query.includes('video')) {
        response = cultureData.faq.find(f => f.q.toLowerCase().includes('highlight'))?.a || response;
      } else if (query.includes('culture') || query.includes('vision') || query.includes('value')) {
        response = `At KhelClan, our culture is built on: ${cultureData.culture.join(' ')}`;
      } else if (query.includes('mission') || query.includes('who are you')) {
        response = `${cultureData.company.name} is ${cultureData.company.mission} We were founded in ${cultureData.company.founded} in ${cultureData.company.location}.`;
      } else if (query.includes('cancel') || query.includes('refund')) {
        response = cultureData.rules.find(r => r.toLowerCase().includes('cancellation')) || response;
      } else if (query.includes('contact') || query.includes('email') || query.includes('phone')) {
        response = `You can reach us at ${cultureData.contacts.email} or call ${cultureData.contacts.phone}. We offer ${cultureData.contacts.support} support.`;
      }

      setMessages((prev) => [...prev, { role: 'bot', text: response }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-body">
      {/* Toggle Button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-brand-forest text-brand-lime rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition transform active:scale-95 group"
        >
          <MessageCircle size={32} className="group-hover:rotate-12 transition-transform" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[350px] md:w-[400px] h-[500px] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 animate-slideUp">
          {/* Header */}
          <div className="bg-brand-forest p-6 text-white flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-brand-lime rounded-full flex items-center justify-center text-brand-forest">
                <Bot size={24} />
              </div>
              <div>
                <h4 className="font-bold">Clan assistant</h4>
                <p className="text-xs text-brand-lime/70 uppercase tracking-widest font-bold">RAG Enabled AI</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition transform">
              <X size={24} />
            </button>
          </div>

          {/* Messages Area */}
          <div ref={scrollRef} className="flex-grow p-6 overflow-y-auto space-y-4 bg-brand-neutral/50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-brand-forest text-white rounded-tr-none' 
                    : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-none'
                }`}>
                  <div className="flex items-center space-x-2 mb-1 opacity-50 uppercase text-[10px] font-bold tracking-tighter">
                    {msg.role === 'user' ? <User size={10} /> : <Bot size={10} />}
                    <span>{msg.role === 'user' ? 'You' : 'AI Assistant'}</span>
                  </div>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start italic text-gray-400 text-xs animate-pulse">
                Assistant is thinking...
              </div>
            )}
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-4 bg-white border-t border-gray-100 flex items-center space-x-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about culture, rules..."
              className="flex-grow bg-gray-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-lime transition outline-none"
            />
            <button 
              type="submit"
              disabled={!input.trim()}
              className="w-12 h-12 bg-brand-lime text-brand-forest rounded-xl flex items-center justify-center hover:bg-brand-forest hover:text-white transition disabled:opacity-50"
            >
              <Send size={20} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
