import React from 'react';
import { motion } from 'motion/react';
import { Bolt, LayoutGrid, Zap, Battery, Car, RefreshCw, Scissors, Cog, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "EV Lithium Battery Pack Manufacturing",
    desc: "High-density, thermally stabilized lithium-ion and solid-state pack design. Engineered for rapid scale and integration.",
    icon: <Cog className="w-6 h-6" />,
    featured: true
  },
  {
    title: "Lithium Inverters",
    desc: "High-efficiency DC-to-AC conversion designed for optimal lithium chemistry.",
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "Battery Energy Storage (BESS)",
    desc: "Grid-scale storage capturing renewable generation for peak shaving.",
    icon: <Battery className="w-6 h-6" />
  },
  {
    title: "EV Charging Stations",
    desc: "Level 3 DC fast-charging deployment and reliable fleet management.",
    icon: <LayoutGrid className="w-6 h-6" />
  },
  {
    title: "End of Life Solutions",
    desc: "Safe disassembly and material extraction ensuring zero-waste cycles.",
    icon: <RefreshCw className="w-6 h-6" />
  },
  {
    title: "Electric Vehicle Servicing",
    desc: "Specialized diagnostics for high-voltage drivetrains and firmware.",
    icon: <Scissors className="w-6 h-6" />
  },
  {
    title: "Secondary Life Packs",
    desc: "Repurposing degraded batteries into stationary stationary assets.",
    icon: <RefreshCw className="w-6 h-6" />
  },
  {
     title: "Custom EV Manufacturing",
     desc: "End-to-end bespoke fabrication of specialized electric platforms.",
     icon: <Car className="w-6 h-6" />,
     spanLg: true
  }
];

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-24 pb-32">
      <header className="mb-16 max-w-3xl">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold tracking-tight text-on-surface mb-6"
        >
          Advanced Energy & Mobility Solutions.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-on-surface-variant leading-relaxed"
        >
          A comprehensive suite of engineering services dedicated to the electric vehicle and battery ecosystem. From bespoke manufacturing to secondary-life architectures, we build the infrastructure of tomorrow.
        </motion.p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className={`
              bg-surface-container-low rounded-2xl p-10 flex flex-col justify-between group 
              hover:bg-white hover:card-shadow transition-all duration-300
              ${service.featured ? "md:col-span-2" : ""}
              ${service.spanLg ? "lg:col-span-2" : ""}
            `}
          >
            <div>
              <div className={`
                w-12 h-12 rounded-xl flex items-center justify-center mb-10 transition-colors
                ${service.featured ? "bg-primary-container text-on-primary-container" : "bg-surface-container-highest text-on-surface"}
                group-hover:bg-primary group-hover:text-on-primary
              `}>
                {service.icon}
              </div>
              <h3 className={`font-bold mb-4 ${service.featured ? "text-2xl" : "text-xl"}`}>
                {service.title}
              </h3>
              <p className="text-on-surface-variant leading-relaxed mb-10">
                {service.desc}
              </p>
            </div>
            
            <Link 
              to="/request" 
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 group-hover:gap-3 transition-all"
            >
              Request Service <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
