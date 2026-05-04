import React, { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';

export const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null); 

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(
      'YOUR_SERVICE_ID', 
      'YOUR_TEMPLATE_ID', 
      form.current, 
      'YOUR_PUBLIC_KEY'
    )
    .then(() => {
        setStatus('success');
        form.current.reset();
        // Hide success message after 5 seconds
        setTimeout(() => setStatus(null), 5000);
    }, () => {
        setStatus('error');
        setTimeout(() => setStatus(null), 5000);
    })
    .finally(() => setIsSending(false));
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "sampaththarindu119@gmail.com", href: "mailto:sampaththarindu119@gmail.com" },
    { icon: Phone, label: "Phone", value: "+94 74 303 3657", href: "tel:+94 74 303 3657" },
    { icon: MapPin, label: "Location", value: "Badulla, Sri Lanka", href: "#" },
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-slate-950 scroll-mt-20">
      {/* Dynamic Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.12, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px]" 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Left Side: Info with Staggered Entrance */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Get in Touch</h2>
              <p className="text-slate-400 mb-10 leading-relaxed max-w-md">
                "Let's build something together. Contact me anytime to discuss my designs or a new project."
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a 
                    key={index} 
                    href={info.href}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.08)" }}
                    className="flex items-center gap-5 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                      <info.icon size={22} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Right Side: Animated Form Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm shadow-2xl relative overflow-hidden">
                
                <form ref={form} onSubmit={sendEmail} className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase ml-1">Name</label>
                    <input 
                      name="user_name" 
                      type="text" 
                      required 
                      placeholder="Your Name"
                      className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-slate-600" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase ml-1">Email</label>
                    <input 
                      name="user_email" 
                      type="email" 
                      required 
                      placeholder="email@example.com"
                      className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-slate-600" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase ml-1">Message</label>
                    <textarea 
                      name="message" 
                      rows="4" 
                      required 
                      placeholder="Tell me about your project..."
                      className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all resize-none placeholder:text-slate-600"
                    ></textarea>
                  </div>
                  
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit" 
                    disabled={isSending}
                    className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-50 shadow-lg shadow-blue-500/20"
                  >
                    {isSending ? "Sending..." : "Send Message"} 
                    <Send size={18} className={isSending ? "animate-pulse" : ""} />
                  </motion.button>
                </form>

                {/* Status Overlay - replaces alert() */}
                <AnimatePresence>
                  {status && (
                    <motion.div 
                      initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                      animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-slate-950/60 p-6 text-center"
                    >
                      <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="space-y-4"
                      >
                        {status === 'success' ? (
                          <>
                            <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto">
                              <CheckCircle2 size={40} className="text-emerald-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                            <p className="text-slate-400">Thank you for reaching out. I'll get back to you soon.</p>
                          </>
                        ) : (
                          <>
                            <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto">
                              <AlertCircle size={40} className="text-red-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Oops!</h3>
                            <p className="text-slate-400">Something went wrong. Please try again later.</p>
                          </>
                        )}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};