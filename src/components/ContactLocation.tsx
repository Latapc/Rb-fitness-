import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check, Send, ExternalLink, AlertCircle } from 'lucide-react';
import { getDirectionsUrl, validateInquiryForm } from '../utils/validation.ts';
import type { InquiryFormData } from '../types/index.ts';

interface ContactLocationProps {
  onShowToast: (message: string) => void;
}

export const ContactLocation: React.FC<ContactLocationProps> = ({ onShowToast }) => {
  const directionsUrl = getDirectionsUrl();
  const [copied, setCopied] = useState(false);

  // Form state
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    contact: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<{
    name?: string;
    contact?: string;
    message?: string;
  }>({});

  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState('');

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(directionsUrl);
      setCopied(true);
      onShowToast('Google Maps location link copied to clipboard!');
      setTimeout(() => setCopied(false), 3000);
    } catch {
      onShowToast('Location: https://maps.app.goo.gl/As652kHdXjzdMuYWA');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateInquiryForm(formData);

    if (!validation.isValid) {
      setFormErrors(validation.errors);
      return;
    }

    setSubmittedName(formData.name.trim());
    setSubmitted(true);
    setFormData({ name: '', contact: '', message: '' });
    setFormErrors({});
    onShowToast('Your inquiry has been submitted successfully!');
  };

  const handleResetForm = () => {
    setSubmitted(false);
    setSubmittedName('');
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative border-t border-neutral-900">
      {/* Background glow accent */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#FF1E27]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-widest text-[#FF1E27] font-semibold mb-2">
            Location & Contact
          </div>
          <h2 className="font-athletic text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white">
            FIND US IN MAINPURI
          </h2>
          <div className="w-16 h-1 bg-[#FF1E27] mx-auto mt-4 mb-6 shadow-[0_0_10px_#FF1E27]" />
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            Ready to take your next step? Find RB Fitness Club on Google Maps or send an inquiry to connect with us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Location & Navigation Card (Left column - 7 cols) */}
          <div className="lg:col-span-7 bg-neutral-950 border border-neutral-800 rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF1E27] to-transparent" />

            <div>
              <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                <div>
                  <span className="text-xs font-semibold text-[#FF1E27] uppercase tracking-wider">
                    Official Location
                  </span>
                  <h3 className="font-athletic text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide mt-1">
                    RB FITNESS CLUB
                  </h3>
                  <p className="text-sm text-[#FF1E27] font-medium tracking-wide mt-0.5 uppercase">
                    Mainpuri, Uttar Pradesh
                  </p>
                </div>

                <button
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1E27]"
                  title="Copy Google Maps directions link"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#FF1E27]" />
                      <span className="text-[#FF1E27]">Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Maps Link</span>
                    </>
                  )}
                </button>
              </div>

              {/* Location details card */}
              <div className="p-4 rounded-lg bg-neutral-900/60 border border-neutral-800/80 mb-6 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FF1E27] shrink-0 mt-0.5" />
                <div className="text-sm">
                  <div className="font-medium text-white">Mainpuri, Uttar Pradesh, India</div>
                  <div className="text-neutral-400 text-xs mt-1">
                    For exact turn-by-turn navigation, click the direct Google Maps link below.
                  </div>
                </div>
              </div>

              {/* Embedded Interactive Map Preview */}
              <div className="relative w-full h-64 sm:h-72 rounded-lg overflow-hidden border border-neutral-800 bg-neutral-900 mb-6">
                <iframe
                  title="RB Fitness Club Location Map Mainpuri"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113428.84755106197!2d78.96696435000001!3d27.2289659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39745e40e69888f1%3A0xcda6b08e75dbd1b5!2sMainpuri%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0 grayscale contrast-125 opacity-80 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <div className="absolute bottom-3 right-3 pointer-events-auto">
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/90 hover:bg-black text-[#FF1E27] text-xs font-semibold rounded border border-[#FF1E27]/40 shadow-lg backdrop-blur-md transition-all hover:scale-105"
                  >
                    <span>Enlarge Map</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Prominent Google Maps Action Button */}
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-[#FF1E27] hover:bg-[#D6151E] text-white font-athletic text-base sm:text-lg font-bold tracking-wider uppercase rounded transition-all duration-200 active:scale-98 shadow-[0_0_20px_rgba(255,30,39,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Navigation className="w-5 h-5 fill-white" />
              <span>GET DIRECTIONS ON GOOGLE MAPS</span>
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>

          {/* Visitor Inquiry Form (Right column - 5 cols) */}
          <div className="lg:col-span-5 bg-neutral-950 border border-neutral-800 rounded-xl p-6 sm:p-8 shadow-2xl relative">
            <div className="mb-6">
              <span className="text-xs font-semibold text-[#FF1E27] uppercase tracking-wider">
                {submitted ? 'Inquiry Status' : 'Get In Touch'}
              </span>
              <h3 className="font-athletic text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide mt-1">
                {submitted ? 'THANK YOU' : 'SEND AN INQUIRY'}
              </h3>
              {!submitted && (
                <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
                  Have questions regarding workout hours, gym guidance, or getting started? Leave a message below or visit directly in Mainpuri.
                </p>
              )}
            </div>

            {submitted ? (
              <div className="bg-neutral-900/90 border border-[#FF1E27]/40 rounded-xl p-6 text-center animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-[#FF1E27]/20 text-[#FF1E27] flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-athletic text-xl font-bold uppercase text-white mb-2">
                  MESSAGE RECEIVED
                </h4>
                <p className="text-sm text-neutral-300 mb-6 leading-relaxed">
                  Thank you, <span className="text-[#FF1E27] font-semibold">{submittedName}</span>! Your inquiry has been noted. You are warmly welcomed to visit RB Fitness Club in Mainpuri.
                </p>
                <div className="space-y-3">
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#FF1E27] text-white font-athletic text-sm uppercase font-bold tracking-wider rounded hover:bg-[#D6151E] transition-colors shadow-[0_0_15px_rgba(255,30,39,0.35)]"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>Get Directions to Visit</span>
                  </a>
                  <button
                    onClick={handleResetForm}
                    className="w-full px-4 py-2 text-xs uppercase tracking-wider text-neutral-400 hover:text-white transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Your Name <span className="text-[#FF1E27]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Amit Kumar"
                    className={`w-full px-4 py-3 rounded bg-neutral-900 border text-white placeholder-neutral-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF1E27] transition-all ${
                      formErrors.name ? 'border-red-500' : 'border-neutral-800 focus:border-transparent'
                    }`}
                  />
                  {formErrors.name && (
                    <div className="flex items-center gap-1.5 mt-1.5 text-xs text-red-400">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{formErrors.name}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="contact" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Your Contact (Phone or Email) <span className="text-[#FF1E27]">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    placeholder="e.g. 9876543210 or name@example.com"
                    className={`w-full px-4 py-3 rounded bg-neutral-900 border text-white placeholder-neutral-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF1E27] transition-all ${
                      formErrors.contact ? 'border-red-500' : 'border-neutral-800 focus:border-transparent'
                    }`}
                  />
                  {formErrors.contact && (
                    <div className="flex items-center gap-1.5 mt-1.5 text-xs text-red-400">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{formErrors.contact}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Your Message / Question <span className="text-[#FF1E27]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Ask about workout shifts, joining, or training..."
                    className={`w-full px-4 py-3 rounded bg-neutral-900 border text-white placeholder-neutral-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF1E27] transition-all resize-none ${
                      formErrors.message ? 'border-red-500' : 'border-neutral-800 focus:border-transparent'
                    }`}
                  />
                  {formErrors.message && (
                    <div className="flex items-center gap-1.5 mt-1.5 text-xs text-red-400">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{formErrors.message}</span>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-neutral-800 hover:bg-neutral-700 text-white font-athletic text-sm uppercase font-bold tracking-wider rounded border border-neutral-700 hover:border-[#FF1E27]/70 active:scale-98 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1E27]"
                >
                  <Send className="w-4 h-4 text-[#FF1E27]" />
                  <span>Send Inquiry</span>
                </button>

                <p className="text-[11px] text-neutral-500 text-center mt-3">
                  Direct navigation is accessible at any time via the Google Maps link.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
