import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Battery, Zap, Cpu, Car, ShieldCheck, Recycle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-8 z-10"
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] text-on-surface">
              Power Your Future with <span className="text-primary">VYN</span> Smart Energy Solutions
            </h1>
            <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">
              AI-driven battery systems, EV manufacturing, and intelligent energy planning engineered for high performance and environmental stewardship.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/calculator"
                className="bg-primary text-on-primary px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-all card-shadow flex items-center gap-2"
              >
                Calculate Power Needs
                <Zap className="w-4 h-4 fill-current" />
              </Link>
              <Link 
                to="/request"
                className="border border-surface-container-highest bg-white text-on-surface px-8 py-4 rounded-lg font-medium hover:bg-surface-container-low transition-all"
              >
                Request Service
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative hero-shadow rounded-2xl overflow-hidden aspect-square bg-surface-container"
          >
            <img 
              referrerPolicy="no-referrer"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDljly8lfhKOvAcg_pjly1gBzr8CD5_NOgc0PbzCtCGEB1zhEtg5v9C8xwoCtyhS6wv1hmm83in_U5HFnEygjF-lxDfm4bEqx-PKBgBrcySzLLSerhOLxAf6idRBEM2oxUFe_Xm8VH1968f5UM5-QTm6P_1CpK1rCMx_i1YWaORyyh35bxPT9JgpVTpSLrx-ht-35f8PC_JYqcVJnpmNISmINCosTMTfTBMHiiBtkASNfyeuWsCHVkn95-cPiRai6RXGjWSNFpItUM" 
              alt="High-end 3D render of a futuristic lithium-ion battery pack"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-12 bg-surface-container-low border-y border-surface-container">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-semibold text-secondary uppercase tracking-[0.2em] mb-10">
            Trusted by Industry Leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale contrast-125">
            {['AutoTech', 'EcoCharge', 'VoltCorp', 'NextGen Power', 'AeroEV'].map(brand => (
              <span key={brand} className="text-xl font-black tracking-tighter text-on-surface">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24 px-6">
        <motion.div 
          {...fadeIn}
          className="max-w-[800px] mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-on-surface mb-8">The Future of Energy</h2>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            VYN merges environmental stewardship with high-performance engineering. Our technology-first approach ensures that every battery system and charging infrastructure we deploy operates with maximum efficiency, transparent data insights, and unparalleled reliability. We don't just build power solutions; we engineer the future of intelligent energy.
          </p>
        </motion.div>
      </section>

      {/* Bento Services */}
      <section className="py-24 px-6 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-on-surface mb-4">Core Services</h2>
            <p className="text-on-surface-variant max-w-xl font-medium">Precision engineering across the entire EV and battery lifecycle.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Manufacturing Card */}
            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-10 card-shadow md:col-span-2 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="w-12 h-12 bg-primary-container/20 rounded-xl flex items-center justify-center mb-8">
                  <Cpu className="text-primary w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-on-surface mb-4">EV Manufacturing</h3>
                <p className="text-on-surface-variant max-w-md">
                  End-to-end assembly line design and optimization for electric vehicles, focusing on lightweight materials and integrated drivetrain solutions.
                </p>
              </div>
              <Link to="/services" className="mt-10 flex items-center gap-2 text-sm font-bold text-primary group-hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* BESS Card */}
            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-10 card-shadow flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="w-12 h-12 bg-primary-container/20 rounded-xl flex items-center justify-center mb-8">
                  <Battery className="text-primary w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-on-surface mb-4">BESS Integration</h3>
                <p className="text-on-surface-variant">
                  Scalable Battery Energy Storage Systems designed for grid stability and renewable energy capture.
                </p>
              </div>
              <Link to="/services" className="mt-10 flex items-center gap-2 text-sm font-bold text-primary group-hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Charging Infrastructure */}
            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-10 card-shadow md:col-span-3 flex flex-col md:flex-row items-center gap-12 group hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex-1">
                <div className="w-12 h-12 bg-primary-container/20 rounded-xl flex items-center justify-center mb-8">
                  <Zap className="text-primary w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-on-surface mb-4">Intelligent Charging Networks</h3>
                <p className="text-on-surface-variant max-w-2xl mb-10 leading-relaxed">
                  Deploying ultra-fast, smart EV charging stations equipped with AI load balancing to minimize grid impact while maximizing vehicle uptime.
                </p>
                <Link to="/services" className="flex items-center gap-2 text-sm font-bold text-primary group-hover:gap-3 transition-all uppercase tracking-wider">
                  Explore Infrastructure <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="w-full md:w-1/3 aspect-[4/3] rounded-xl overflow-hidden relative hero-shadow">
                <img 
                  referrerPolicy="no-referrer"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQIXy_BOF7bO5oy5D313UrXPQ03qy1dtwTf0X9XLILuR7HyOLD9cFHfagfqthlUf0sneikPoAx3iL2B-o9FYFSEFosvL-4Sr0GFgfrOtVSaarHhyp2BX9Js_JP6C0HvdZO8JMMoeu3WYXUogJhP_i5OScVIi48i00y-sPaIvrbt6Tjd4UI7TYTq_p2QSvJhI-mzN6qKdmr7sMI7gU3Z-WUWKmXvZSlCX7FeN4vcDVV-vA2HzV0niVswwJnIyG4dMj4KExVZ1u0JVc"
                  alt="Modern electric vehicle charging"
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Calculator CTA - Final section before footer */}
       <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-surface-container rounded-3xl p-12 md:p-16 relative overflow-hidden card-shadow">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-container/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
            <div className="flex flex-col justify-center">
              <span className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full text-xs font-semibold text-primary border border-surface-container-highest mb-8 w-fit shadow-sm">
                <Zap className="w-3 h-3 fill-current" />
                INTELLIGENT TOOLING
              </span>
              <h2 className="text-3xl font-bold text-on-surface mb-6">Power Load Calculator</h2>
              <p className="text-on-surface-variant mb-10 font-medium">
                Accurately estimate your facility's energy requirements. Our AI-driven calculator analyzes your operational data to recommend the optimal BESS capacity.
              </p>
              <Link 
                to="/calculator"
                className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-all inline-flex items-center gap-2 w-fit shadow-lg shadow-primary/20"
              >
                Explore Calculator
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="bg-white rounded-2xl p-8 border border-surface-container-highest hero-shadow flex flex-col gap-8">
              <div className="flex justify-between items-center border-b border-surface-container pb-6">
                <span className="text-xs font-bold text-secondary uppercase tracking-widest">Estimated Load</span>
                <span className="text-3xl font-bold text-primary tracking-tighter">450 <span className="text-lg">kW</span></span>
              </div>
              <div className="space-y-6">
                 {[
                   { label: 'Base Operation', val: 60, color: 'bg-primary' },
                   { label: 'Peak Charging', val: 30, color: 'bg-primary-container' },
                   { label: 'Reserve Margin', val: 10, color: 'bg-secondary' }
                 ].map(item => (
                   <div key={item.label}>
                    <div className="flex justify-between text-xs font-bold text-on-surface-variant mb-3 uppercase">
                      <span>{item.label}</span>
                      <span>{item.val}%</span>
                    </div>
                    <div className="h-2 bg-surface-container rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.val}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className={cn("h-full rounded-full", item.color)} 
                      />
                    </div>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
