import React from 'react';
import { motion } from 'motion/react';
import { 
  BatteryCharging, 
  Car, 
  Briefcase, 
  UploadCloud, 
  ArrowRight, 
  ChevronDown,
  Info,
  Search,
  Handshake,
  Wrench,
  PhoneCall
} from 'lucide-react';
import { cn } from '../lib/utils';

export default function Request() {
  const [activeTab, setActiveTab] = React.useState('maintenance');

  return (
    <div className="max-w-7xl mx-auto px-6 pt-24 pb-32">
      <header className="mb-16 max-w-2xl">
        <h1 className="text-5xl font-bold tracking-tight text-on-surface mb-6">Request Service</h1>
        <p className="text-lg text-on-surface-variant leading-relaxed">Submit a detailed inquiry for battery maintenance, standard EV servicing, or customized B2B engineering solutions. Our technical team will review your parameters promptly.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Form Side */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          
          {/* Segmented Control */}
          <div className="bg-surface-container-low p-1.5 rounded-2xl flex flex-col md:flex-row gap-2 border border-surface-container">
            {[
              { id: 'maintenance', label: 'Battery Maintenance', icon: <BatteryCharging className="w-4 h-4" /> },
              { id: 'booking', label: 'EV Booking', icon: <Car className="w-4 h-4" /> },
              { id: 'b2b', label: 'B2B/Inquiry', icon: <Briefcase className="w-4 h-4" /> },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex-1 py-4 px-6 rounded-xl font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-3",
                  activeTab === tab.id 
                    ? "bg-white text-primary shadow-sm ring-1 ring-surface-container" 
                    : "text-secondary hover:text-on-surface hover:bg-surface-container"
                )}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-3xl p-10 card-shadow border border-surface-container">
            <div className="mb-10 pb-8 border-b border-surface-container">
              <h2 className="text-2xl font-bold text-on-surface mb-2 tracking-tight">Technical Diagnostics</h2>
              <p className="text-sm font-medium text-secondary">Provide vehicle and primary contact parameters.</p>
            </div>

            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-secondary uppercase tracking-[0.2em]">Full Name</label>
                  <input type="text" placeholder="Jane Doe" className="w-full bg-surface px-5 py-4 rounded-xl border border-surface-container focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium text-sm" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-secondary uppercase tracking-[0.2em]">Contact Number</label>
                  <input type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-surface px-5 py-4 rounded-xl border border-surface-container focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium text-sm" />
                </div>
                <div className="md:col-span-2 space-y-3">
                  <label className="text-[10px] font-black text-secondary uppercase tracking-[0.2em]">Email Address</label>
                  <input type="email" placeholder="jane@company.com" className="w-full bg-surface px-5 py-4 rounded-xl border border-surface-container focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium text-sm" />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black text-secondary uppercase tracking-[0.2em]">Vehicle Make & Model</label>
                <div className="relative">
                  <select className="w-full bg-surface px-5 py-4 rounded-xl border border-surface-container focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium text-sm appearance-none cursor-pointer">
                    <option value="">Select vehicle specification...</option>
                    <option>Tesla Model S Plaid</option>
                    <option>Lucid Air Sapphire</option>
                    <option>Rimac Nevera</option>
                    <option>Custom Engineering</option>
                  </select>
                  <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary pointer-events-none" />
                </div>
              </div>

              <div className="space-y-3">
                 <label className="text-[10px] font-black text-secondary uppercase tracking-[0.2em]">Issue Description</label>
                 <textarea 
                    rows={4}
                    placeholder="Detail the diagnostic codes, battery degradation symptoms, or performance irregularities..." 
                    className="w-full bg-surface px-5 py-4 rounded-xl border border-surface-container focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium text-sm resize-none"
                 />
              </div>

              <div className="space-y-3">
                 <label className="text-[10px] font-black text-secondary uppercase tracking-[0.2em]">Diagnostic Logs / Image Upload</label>
                 <div className="w-full border-2 border-dashed border-surface-container-highest rounded-2xl p-12 flex flex-col items-center justify-center text-center bg-surface-container-low hover:bg-white hover:border-primary/30 transition-all cursor-pointer group">
                   <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm">
                    <UploadCloud className="w-6 h-6 text-secondary group-hover:text-primary" />
                   </div>
                   <div className="font-bold text-on-surface mb-1">Click to upload or drag and drop</div>
                   <div className="text-xs font-medium text-secondary">SVG, PNG, JPG or CSV (max. 10MB)</div>
                 </div>
              </div>

              <div className="pt-10 flex justify-end">
                <button className="bg-primary text-on-primary px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl shadow-primary/20 hover:bg-primary/90 flex items-center gap-3 transition-all active:scale-95">
                  Submit Request
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-8">
          <div className="bg-white rounded-3xl p-10 card-shadow border border-surface-container sticky top-[104px]">
            <h3 className="text-xl font-bold text-on-surface mb-10 flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-container/20 rounded-xl flex items-center justify-center">
                <Info className="w-5 h-5 text-primary" />
              </div>
              What happens next?
            </h3>

            <div className="space-y-12 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-[2px] before:bg-surface-container">
              {[
                { title: 'Technical Review', text: 'Our engineering team analyzes your parameters within 24 hours.', icon: <Search /> },
                { title: 'Proposal & Scheduling', text: 'We provide a detailed diagnostic plan and coordinate a service window.', icon: <Handshake /> },
                { title: 'Execution', text: 'Precision execution at our high-fidelity hardware facility.', icon: <Wrench /> }
              ].map((step, i) => (
                <div key={i} className="relative flex items-start gap-6">
                  <div className={cn(
                    "w-10 h-10 rounded-xl border-2 flex items-center justify-center z-10",
                    i === 0 ? "bg-primary border-primary text-on-primary shadow-lg shadow-primary/20" : "bg-white border-surface-container text-secondary"
                  )}>
                    {React.cloneElement(step.icon as React.ReactElement, { size: 18 })}
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface mb-1">{step.title}</h4>
                    <p className="text-sm font-medium text-on-surface-variant leading-relaxed">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 pt-10 border-t border-surface-container">
              <p className="text-[10px] font-black text-secondary uppercase tracking-[0.2em] mb-4">Urgent Support</p>
              <a href="tel:+18005558658" className="flex items-center gap-3 text-primary hover:text-primary/80 font-black text-lg transition-all">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <PhoneCall className="w-5 h-5" />
                </div>
                +1 (800) 555-VYN-NEXT
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
