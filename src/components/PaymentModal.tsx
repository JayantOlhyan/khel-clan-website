import React, { useState } from 'react';
import { useAppStore } from '../store/useAppStore';
import { useNavigate } from 'react-router-dom';

export default function PaymentModal() {
  const { paymentModalOpen, closePaymentModal, activeGamePayment, processPayment } = useAppStore();
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  if (!paymentModalOpen || !activeGamePayment) return null;

  const handlePay = async () => {
    setProcessing(true);
    await processPayment();
    setProcessing(false);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      closePaymentModal();
      navigate('/dashboard'); // route to dashboard after success
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-0 max-w-sm w-full shadow-2xl overflow-hidden flex flex-col animate-in slide-in-from-bottom-8 duration-300">
        <div className="bg-primary-green p-6 text-white text-center relative">
           <h3 className="font-heading font-bold opacity-80">Test Environment</h3>
           <p className="font-mono text-4xl font-bold mt-2 text-energy-gold">{activeGamePayment.price || '₹250'}</p>
        </div>
        
        <div className="p-8 space-y-6">
           <div className="flex justify-between items-center border-b border-black/5 pb-4">
             <span className="font-body text-deep-black/60">Game</span>
             <span className="font-heading font-bold text-deep-black text-right max-w-[150px] truncate">{activeGamePayment.title}</span>
           </div>
           
           <div className="flex justify-between items-center border-b border-black/5 pb-4">
             <span className="font-body text-deep-black/60">Phone</span>
             <span className="font-mono font-medium text-deep-black text-right">+91 **** 0000</span>
           </div>

           {success ? (
             <div className="bg-green-100 border border-green-200 text-green-800 p-4 rounded-xl text-center font-heading font-bold animate-in zoom-in">
               ✅ Payment Successful!<br/><span className="text-sm opacity-80 font-body block mt-1">Redirecting to Dashboard...</span>
             </div>
           ) : (
             <div className="flex flex-col gap-3">
               <button 
                 onClick={handlePay}
                 disabled={processing}
                 className="w-full bg-deep-black text-white font-heading font-bold text-lg py-4 rounded-xl shadow-lg hover:bg-black transition-all disabled:opacity-70 flex justify-center items-center group relative overflow-hidden"
               >
                 <div className="absolute inset-0 w-full h-full bg-energy-gold/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out"></div>
                 {processing ? <span className="animate-pulse">Processing...</span> : 'Pay via Razorpay'}
               </button>
               <button onClick={closePaymentModal} disabled={processing} className="w-full font-body font-medium text-deep-black/60 hover:text-deep-black transition-colors py-2">
                 Cancel Booking
               </button>
             </div>
           )}
        </div>
      </div>
    </div>
  );
}
