"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Calendar, Mail, Phone, Check, ArrowRight, X } from "lucide-react";

export function CallToAction() {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", company: "", size: "10-50" });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setShowBookingForm(false);
      setFormData({ name: "", email: "", company: "", size: "10-50" });
    }, 2000);
  };

  return (
    <section id="cta" className="relative py-28 bg-[#090d16] text-white overflow-hidden scroll-mt-20">
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-indigo-600/20 blur-[150px]" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-blue-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        <Badge variant="primary" className="mb-6 bg-indigo-950/60 text-indigo-300 border-indigo-900">
          Get Started Today
        </Badge>
        
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight max-w-3xl leading-tight">
          Ready to Upskill Your <br />
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
            Workforce?
          </span>
        </h2>

        <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
          Schedule a detailed discovery session with our curriculum architects. We'll map your technical goals, configure VM trial keys, and draft custom learning paths.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap gap-4 justify-center items-center w-full sm:w-auto">
          <Button
            variant="primary"
            size="lg"
            className="w-full sm:w-auto flex items-center justify-center gap-2"
            onClick={() => setShowBookingForm(true)}
          >
            <Calendar className="w-5 h-5" />
            Book Consultation
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto text-white border-slate-700 bg-slate-900/35 hover:bg-slate-900/60"
            onClick={() => {
              const email = "sales@accredian.com";
              window.location.href = `mailto:${email}?subject=Enterprise Upskilling Inquiry`;
            }}
          >
            <Mail className="w-5 h-5 mr-2 inline" />
            Contact Sales
          </Button>
        </div>

        {/* Modal Booking Form (Animated) */}
        <AnimatePresence>
          {showBookingForm && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-md relative z-10"
              >
                <Card variant="glass-dark" className="border-white/10 p-6 sm:p-8 bg-slate-900 shadow-2xl relative">
                  
                  {/* Close Button */}
                  <button
                    onClick={() => setShowBookingForm(false)}
                    className="absolute top-4 right-4 p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white cursor-pointer"
                    aria-label="Close form"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  {formSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-10 text-center">
                      <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-4">
                        <Check className="w-8 h-8" />
                      </div>
                      <h4 className="font-extrabold text-xl">Consultation Requested!</h4>
                      <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                        An enterprise coordinator will email you at <span className="text-white font-bold">{formData.email}</span> within 2 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="text-left mb-6">
                        <h3 className="font-extrabold text-2xl tracking-tight text-white">Book Discovery Session</h3>
                        <p className="text-xs sm:text-sm text-slate-400 mt-1">Please provide details to schedule your meeting.</p>
                      </div>

                      <div className="text-left">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wide block mb-1">Full Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-indigo-500 text-sm font-semibold transition-all"
                          placeholder="e.g. Siddharth Kumar"
                        />
                      </div>

                      <div className="text-left">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wide block mb-1">Work Email</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-indigo-500 text-sm font-semibold transition-all"
                          placeholder="e.g. sid@company.com"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-left">
                          <label className="text-xs font-bold text-slate-400 uppercase tracking-wide block mb-1">Company Name</label>
                          <input
                            type="text"
                            required
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-indigo-500 text-sm font-semibold transition-all"
                            placeholder="e.g. SaaSify Inc."
                          />
                        </div>
                        <div className="text-left">
                          <label className="text-xs font-bold text-slate-400 uppercase tracking-wide block mb-1">Team Size</label>
                          <select
                            value={formData.size}
                            onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-slate-300 focus:outline-none focus:border-indigo-500 text-sm font-semibold transition-all"
                          >
                            <option value="10-50">10-50 devs</option>
                            <option value="50-200">50-200 devs</option>
                            <option value="200-500">200-500 devs</option>
                            <option value="500+">500+ devs</option>
                          </select>
                        </div>
                      </div>

                      <Button type="submit" variant="primary" size="md" className="w-full justify-center mt-4">
                        Submit Request
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </form>
                  )}

                </Card>
              </motion.div>
              {/* Clicking background overlay closes form */}
              <div className="absolute inset-0 z-0" onClick={() => setShowBookingForm(false)} />
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
