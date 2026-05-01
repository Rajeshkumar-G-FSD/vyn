import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, 
  Building2, 
  Factory, 
  Lightbulb, 
  Fan, 
  Wind, 
  Monitor, 
  PlusCircle, 
  ArrowRight,
  Minus,
  Plus,
  BatteryCharging,
  Cpu,
  Sun
} from 'lucide-react';
import { cn } from '../lib/utils';

export default function Calculator() {
  const [systemType, setSystemType] = React.useState('residential');
  const [scale, setScale] = React.useState('2 BHK');
  const [devices, setDevices] = React.useState([
    { id: 'light', name: 'LED Bulbs', watt: 15, count: 8, icon: <Lightbulb className="w-5 h-5" /> },
    { id: 'fan', name: 'Ceiling Fans', watt: 75, count: 4, icon: <Fan className="w-5 h-5" /> },
    { id: 'ac', name: 'Split AC (1.5T)', watt: 1500, count: 1, icon: <Wind className="w-5 h-5" />, active: true },
    { id: 'tv', name: 'Television', watt: 100, count: 1, icon: <Monitor className="w-5 h-5" /> },
  ]);
  const [backup, setBackup] = React.useState(4);
  const [solar, setSolar] = React.useState(true);

  const updateCount = (id: string, delta: number) => {
    setDevices(prev => prev.map(d => 
      d.id === id ? { ...d, count: Math.max(0, d.count + delta) } : d
    ));
  };

  const totalWatt = devices.reduce((sum, d) => sum + (d.watt * d.count), 0);
  const totalKW = (totalWatt / 1000).toFixed(2);

  return (
    <div className="max-w-7xl mx-auto px-6 pt-16 pb-32">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-on-surface mb-3">Power Load Profile</h1>
        <p className="text-lg text-secondary max-w-2xl font-medium">Configure your property specifics and device inventory to generate a high-fidelity energy consumption model.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Config Side */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          
          {/* Step 1: System */}
          <section className="bg-white rounded-2xl p-8 card-shadow border border-surface-container">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-sm">1</div>
              <h2 className="text-xl font-bold text-on-surface">System Type</h2>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { id: 'residential', label: 'Residential', icon: <Home className="w-6 h-6" /> },
                { id: 'commercial', label: 'Commercial', icon: <Building2 className="w-6 h-6" /> },
                { id: 'industrial', label: 'Industrial', icon: <Factory className="w-6 h-6" /> },
              ].map(type => (
                <button
                  key={type.id}
                  onClick={() => setSystemType(type.id)}
                  className={cn(
                    "flex flex-col items-center justify-center gap-3 p-6 rounded-xl border-2 transition-all active:scale-[0.98]",
                    systemType === type.id 
                      ? "border-primary bg-primary-container/5 text-primary" 
                      : "border-surface-container bg-surface-container-low text-secondary hover:border-surface-container-highest"
                  )}
                >
                  {type.icon}
                  <span className="text-xs font-bold uppercase tracking-wider">{type.label}</span>
                </button>
              ))}
            </div>
          </section>

          {/* Step 2: Scale */}
          <section className="bg-white rounded-2xl p-8 card-shadow border border-surface-container">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-sm">2</div>
              <h2 className="text-xl font-bold text-on-surface">Property Scale</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['1 BHK', '2 BHK', '3 BHK', 'Custom'].map(s => (
                <button
                  key={s}
                  onClick={() => setScale(s)}
                  className={cn(
                    "relative p-6 rounded-xl border-2 text-left transition-all active:scale-[0.98]",
                    scale === s 
                      ? "border-primary bg-primary-container shadow-lg shadow-primary/20 text-on-primary" 
                      : "border-surface-container bg-surface-container-low text-secondary hover:border-primary/20"
                  )}
                >
                  {scale === s && (
                    <span className="absolute top-0 right-0 bg-primary/20 text-on-primary px-2 py-0.5 rounded-bl-lg text-[10px] uppercase font-black">Active</span>
                  )}
                  <div className="font-bold text-lg">{s}</div>
                  <div className={cn("text-xs font-medium", scale === s ? "text-on-primary/80" : "text-secondary")}>Standard Setup</div>
                </button>
              ))}
            </div>
          </section>

          {/* Step 3: Devices */}
          <section className="bg-white rounded-2xl p-8 card-shadow border border-surface-container">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-sm">3</div>
                <h2 className="text-xl font-bold text-on-surface">Active Devices</h2>
              </div>
              <div className="flex bg-surface-container rounded-full p-1 border border-surface-container">
                {['Lighting', 'Cooling', 'Others'].map(tab => (
                  <button key={tab} className="px-4 py-1.5 rounded-full text-xs font-bold transition-all hover:bg-white/50">{tab}</button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {devices.map(device => (
                <div key={device.id} className="flex items-center justify-between p-5 rounded-xl bg-surface-container-low border border-surface-container group transition-all hover:border-primary/10">
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center",
                      device.active ? "bg-primary-container text-on-primary-container" : "bg-surface-container-highest text-secondary"
                    )}>
                      {device.icon}
                    </div>
                    <div>
                      <div className="font-bold text-on-surface">{device.name}</div>
                      <div className="text-xs font-medium text-secondary">{device.watt}W each</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-white rounded-full px-2 py-1 border border-surface-container shadow-sm">
                    <button 
                      onClick={() => updateCount(device.id, -1)}
                      className="w-8 h-8 rounded-full flex items-center justify-center text-secondary hover:bg-surface-container transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="font-black text-on-surface w-4 text-center">{device.count}</span>
                    <button 
                      onClick={() => updateCount(device.id, 1)}
                      className="w-8 h-8 rounded-full flex items-center justify-center text-secondary hover:bg-surface-container transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-8 w-full py-4 rounded-xl border border-dashed border-outline-variant text-secondary hover:text-on-surface hover:bg-surface-container-low transition-all flex items-center justify-center gap-2 font-bold text-sm uppercase tracking-widest">
              <PlusCircle className="w-5 h-5" />
              Add Custom Device
            </button>
          </section>

          {/* Step 4: Generation */}
          <section className="bg-white rounded-2xl p-8 card-shadow border border-surface-container">
             <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-sm">4</div>
              <h2 className="text-xl font-bold text-on-surface">Resilience & Generation</h2>
            </div>
            <div className="space-y-12">
              <div>
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <div className="font-bold text-on-surface">Required Backup Duration</div>
                    <div className="text-xs font-medium text-secondary">Target hours during grid failure</div>
                  </div>
                  <div className="text-3xl font-black text-primary tracking-tighter">{backup} <span className="text-sm">Hours</span></div>
                </div>
                <input 
                  type="range" min="1" max="12" step="1"
                  value={backup} onChange={(e) => setBackup(parseInt(e.target.value))}
                  className="w-full h-2 bg-surface-container-highest rounded-full appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between mt-4 text-[10px] font-black text-secondary uppercase tracking-widest">
                  <span>1 Hr</span>
                  <span>12 Hrs</span>
                </div>
              </div>

              <div className="pt-10 border-t border-surface-container">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-surface-container-highest rounded-full flex items-center justify-center">
                      <Sun className="w-6 h-6 text-on-surface" />
                    </div>
                    <div>
                      <div className="font-bold text-on-surface">Integrate Solar PV</div>
                      <div className="text-xs font-medium text-secondary">Calculate required panel capacity</div>
                    </div>
                  </div>
                  <button 
                    onClick={() => setSolar(!solar)}
                    className={cn(
                      "w-14 h-8 rounded-full transition-all relative",
                      solar ? "bg-primary" : "bg-surface-container-highest"
                    )}
                  >
                    <motion.div 
                      animate={{ x: solar ? 24 : 4 }}
                      className="absolute top-1 left-0 w-6 h-6 bg-white rounded-full shadow-lg"
                    />
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Sticky Summary */}
        <aside className="lg:col-span-4 sticky top-[104px]">
          <div className="bg-white rounded-3xl card-shadow border border-surface-container overflow-hidden">
            <div className="h-2 w-full bg-primary" />
            <div className="p-8">
              <h3 className="text-xs font-black text-secondary uppercase tracking-[0.2em] mb-6">Estimated Peak Load</h3>
              <div className="flex items-baseline gap-2 mb-10">
                <span className="text-6xl font-black tracking-tighter text-on-surface">{totalKW}</span>
                <span className="text-2xl font-bold text-secondary">kW</span>
              </div>

              <div className="space-y-6 mb-10">
                 {[
                   { label: 'Cooling Load', val: 80, color: 'bg-primary' },
                   { label: 'Base Lighting', val: 15, color: 'bg-primary-container' },
                   { label: 'Entertainment/Misc', val: 5, color: 'bg-secondary' }
                 ].map(item => (
                   <div key={item.label}>
                    <div className="flex justify-between text-[10px] font-black text-on-surface-variant mb-2 uppercase">
                      <span>{item.label}</span>
                      <span>{item.val}%</span>
                    </div>
                    <div className="h-1.5 bg-surface-container rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${item.val}%` }}
                        className={cn("h-full", item.color)} 
                      />
                    </div>
                   </div>
                 ))}
              </div>

              <div className="bg-surface-container-low rounded-2xl p-6 mb-10 border border-surface-container">
                <h4 className="text-sm font-black text-on-surface mb-6 uppercase tracking-widest border-b border-surface-container pb-4">Recommendations</h4>
                <ul className="space-y-5">
                   <li className="flex items-center gap-4">
                     <Cpu className="w-5 h-5 text-primary" />
                     <div>
                       <div className="text-[10px] font-bold text-secondary uppercase">Inverter Capacity</div>
                       <div className="text-sm font-black text-on-surface">3.0 kVA Pure Sine</div>
                     </div>
                   </li>
                   <li className="flex items-center gap-4">
                     <BatteryCharging className="w-5 h-5 text-primary" />
                     <div>
                       <div className="text-[10px] font-bold text-secondary uppercase">Battery Bank</div>
                       <div className="text-sm font-black text-on-surface">2x 150Ah Tubular</div>
                     </div>
                   </li>
                   {solar && (
                     <li className="flex items-center gap-4">
                       <Sun className="w-5 h-5 text-primary" />
                       <div>
                         <div className="text-[10px] font-bold text-secondary uppercase">Solar Required</div>
                         <div className="text-sm font-black text-on-surface">2.5 kWp Monofacial</div>
                       </div>
                     </li>
                   )}
                </ul>
              </div>

              <button className="w-full bg-primary hover:bg-primary/90 text-on-primary py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all shadow-xl shadow-primary/20 active:scale-[0.98] flex items-center justify-center gap-2">
                Generate Full Report
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-center text-[10px] font-bold text-secondary mt-5 px-6">Estimations based on standard voltage and efficiency ratings.</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
