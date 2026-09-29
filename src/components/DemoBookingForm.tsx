import React, { useState } from 'react';
import { AddonItem } from '../data/addons';
import { CheckCircle2, Send, Loader2, Sparkles, MessageCircle, ExternalLink } from 'lucide-react';

interface DemoBookingFormProps {
  addons: AddonItem[];
  selectedAddonTitle: string;
  setSelectedAddonTitle: (title: string) => void;
}

export const DemoBookingForm: React.FC<DemoBookingFormProps> = ({
  addons,
  selectedAddonTitle,
  setSelectedAddonTitle,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    firmName: '',
    mobileNumber: '',
    selectedAddon: selectedAddonTitle || 'Explore All / General Demo',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<any>(null);

  // Target WhatsApp phone number (+91 98250 42042)
  const targetWhatsAppNumber = '919825042042';

  // Sync selectedAddon with prop when changed
  React.useEffect(() => {
    if (selectedAddonTitle) {
      setFormData((prev) => ({ ...prev, selectedAddon: selectedAddonTitle }));
    }
  }, [selectedAddonTitle]);

  const generateWhatsAppUrl = (data: {
    fullName: string;
    firmName: string;
    mobileNumber: string;
    selectedAddon: string;
    message: string;
    referenceId?: string;
  }) => {
    const lines = [
      `*New Tally Add-on Demo Request* 🚀`,
      ``,
      `*Full Name:* ${data.fullName}`,
      `*Firm / Company:* ${data.firmName}`,
      `*Mobile Number:* ${data.mobileNumber}`,
      `*Interested Add-on:* ${data.selectedAddon}`,
      data.message ? `*Requirements / Notes:* ${data.message}` : null,
      data.referenceId ? `*Reference ID:* ${data.referenceId}` : null,
      ``,
      `_Sent from VKCS Tally Add-on Storefront_`,
    ].filter(Boolean);

    const messageText = lines.join('\n');
    return `https://api.whatsapp.com/send?phone=${targetWhatsAppNumber}&text=${encodeURIComponent(
      messageText
    )}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const referenceId = 'VKCS-' + Math.floor(100000 + Math.random() * 900000);
    const submissionRecord = {
      ...formData,
      referenceId,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const whatsappUrl = generateWhatsAppUrl(submissionRecord);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({
        ...submissionRecord,
        whatsappUrl,
      });

      // Automatically open WhatsApp in a new tab or window
      try {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      } catch (err) {
        console.error('Popup blocked or error opening WhatsApp:', err);
      }

      // Reset form
      setFormData({
        fullName: '',
        firmName: '',
        mobileNumber: '',
        selectedAddon: 'Explore All / General Demo',
        message: '',
      });
    }, 600);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id="demo-booking">
      <div className="bg-[#131b2e] text-white rounded-2xl p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-2xl border border-[#bec6e0]/15">
        {/* Subtle dot background */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 relative z-10 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="text-[#22C55E] text-xs uppercase tracking-wider font-bold">
              FREE CONSULTATION
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Book Your Free Tally Add-on Demo
            </h2>
            <p className="text-sm sm:text-base text-[#bec6e0] leading-relaxed">
              Experience any add-on live with our Tally technical experts. We will configure and demonstrate the module directly on your workflow.
            </p>

            <div className="flex flex-col gap-3.5 mt-4">
              <div className="flex items-center gap-3 text-sm text-[#bec6e0]">
                <CheckCircle2 className="w-5 h-5 text-[#22C55E] shrink-0" />
                <span>100% Free Live Walkthrough on your Tally</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#bec6e0]">
                <CheckCircle2 className="w-5 h-5 text-[#22C55E] shrink-0" />
                <span>Custom Requirement &amp; Voucher Layout Discussion</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#bec6e0]">
                <CheckCircle2 className="w-5 h-5 text-[#22C55E] shrink-0" />
                <span>Direct WhatsApp notification to developer</span>
              </div>
            </div>

            <div className="mt-4 p-4 bg-white/5 rounded-xl border border-white/10 text-xs text-[#bec6e0]">
              <div className="font-semibold text-white mb-1">Direct Developer Help:</div>
              <div>Vinay Chauhan — V K Computerised System</div>
              <a
                href="https://api.whatsapp.com/send?phone=919825042042&text=Hello%20Vinay%20bhai%2C%20I%20am%20interested%20in%20Tally%20Add-ons"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#22C55E] font-medium mt-1 inline-flex items-center gap-1.5 hover:underline"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp: +91 98250 42042</span>
              </a>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl text-[#191c1e] shadow-xl">
            {submittedData ? (
              <div className="p-6 bg-[#22C55E]/15 border border-[#22C55E]/40 rounded-xl flex flex-col items-center text-center gap-3 animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-full bg-[#22C55E] text-slate-900 flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#191c1e]">Demo Request Submitted!</h3>
                <p className="text-sm text-[#45464d] max-w-md">
                  Thank you, <strong>{submittedData.fullName}</strong> ({submittedData.firmName}). Your request has been dispatched to our official WhatsApp (<strong>+91 98250 42042</strong>).
                </p>

                <div className="bg-white px-4 py-2 rounded-lg border border-[#e0e3e5] text-xs text-[#515f74] font-mono">
                  Ref: {submittedData.referenceId} | Add-on: {submittedData.selectedAddon}
                </div>

                {submittedData.whatsappUrl && (
                  <a
                    href={submittedData.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 bg-[#25D366] hover:bg-[#1ebd59] text-white font-bold px-5 py-2.5 rounded-lg text-xs flex items-center gap-2 shadow-md transition-all active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Open WhatsApp Chat (+91 98250 42042)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                <button
                  onClick={() => setSubmittedData(null)}
                  className="mt-2 text-xs text-[#16a34a] font-bold hover:underline cursor-pointer"
                >
                  Submit Another Demo Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs sm:text-sm font-semibold text-[#45464d]">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="bg-[#eceef0] border border-[#c6c6cd]/50 rounded-lg px-3.5 py-2.5 text-sm text-[#191c1e] focus:outline-none focus:border-[#22C55E] focus:bg-white transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs sm:text-sm font-semibold text-[#45464d]">
                      Business / Firm Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Company or CA Firm"
                      value={formData.firmName}
                      onChange={(e) => setFormData({ ...formData, firmName: e.target.value })}
                      className="bg-[#eceef0] border border-[#c6c6cd]/50 rounded-lg px-3.5 py-2.5 text-sm text-[#191c1e] focus:outline-none focus:border-[#22C55E] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs sm:text-sm font-semibold text-[#45464d]">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.mobileNumber}
                      onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                      className="bg-[#eceef0] border border-[#c6c6cd]/50 rounded-lg px-3.5 py-2.5 text-sm text-[#191c1e] focus:outline-none focus:border-[#22C55E] focus:bg-white transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs sm:text-sm font-semibold text-[#45464d]">
                      Select Interested Add-on
                    </label>
                    <select
                      value={formData.selectedAddon}
                      onChange={(e) => setFormData({ ...formData, selectedAddon: e.target.value })}
                      className="bg-[#eceef0] border border-[#c6c6cd]/50 rounded-lg px-3.5 py-2.5 text-sm text-[#191c1e] focus:outline-none focus:border-[#22C55E] focus:bg-white transition-all cursor-pointer"
                    >
                      <option value="Explore All / General Demo">Explore All / General Demo</option>
                      {addons.map((item) => (
                        <option key={item.id} value={item.title}>
                          {item.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs sm:text-sm font-semibold text-[#45464d]">
                    Message or Specific Requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your Tally version and customization needs..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-[#eceef0] border border-[#c6c6cd]/50 rounded-lg px-3.5 py-2.5 text-sm text-[#191c1e] focus:outline-none focus:border-[#22C55E] focus:bg-white transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#22C55E] text-slate-900 font-bold py-3.5 rounded-lg text-sm hover:bg-[#16a34a] hover:text-white transition-all mt-2 shadow-md cursor-pointer flex items-center justify-center gap-2 active:scale-95 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending to WhatsApp...</span>
                    </>
                  ) : (
                    <>
                      <MessageCircle className="w-4 h-4 fill-slate-900" />
                      <span>Book Free Demo Now</span>
                    </>
                  )}
                </button>
                <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#76777d] mt-1">
                  <MessageCircle className="w-3.5 h-3.5 text-[#22C55E]" />
                  <span>Details will be sent directly to our WhatsApp (+91 98250 42042)</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
