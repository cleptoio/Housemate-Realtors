import { motion } from 'framer-motion';
import { services as servicesData } from '../data/services';
import { useUI } from '../context/UIContext';
import { ArrowRight, Check } from 'lucide-react';

const Services = () => {
    const { openContactModal } = useUI();

    return (
        <div className="bg-navy min-h-screen text-sand">
            {/* Header */}
            <section className="py-32 bg-deep/20 border-b border-cyan/10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-[2px] w-12 bg-cyan shadow-[0_0_10px_#00F2EA]" />
                            <span className="text-cyan uppercase tracking-[0.4em] text-[10px] md:text-sm font-bold">Capabilities & Expertise</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-display text-white mb-8 leading-tight">ELEVATING EVERY <br /><span className="text-cyan italic">PROPERTY NEED.</span></h1>
                        <p className="text-muted text-lg md:text-xl leading-relaxed font-light max-w-2xl">
                            Housemate Realtors provides specialized solutions tailored to Pune's high-growth markets. From industrial-scale constructions to high-yield asset advisory.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services List */}
            <section className="py-32">
                <div className="max-w-7xl mx-auto px-6 space-y-40">
                    {servicesData.map((service, i) => (
                        <div
                            key={service.id}
                            className={`flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 lg:gap-32 items-center`}
                        >
                            {/* Image Side */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="w-full lg:w-1/2 relative aspect-[16/10] overflow-hidden group rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-cyan/10"
                            >
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-500" />
                                <div className="absolute top-6 left-6 px-4 py-1.5 bg-cyan/90 text-navy text-[10px] font-black uppercase tracking-widest rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                    Strategic Capability
                                </div>
                            </motion.div>

                            {/* Content Side */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="w-full lg:w-1/2 space-y-10"
                            >
                                <div className="space-y-4">
                                    <span className="text-cyan text-[10px] uppercase tracking-[0.4em] font-black">Segment 0{i + 1}</span>
                                    <h3 className="text-4xl md:text-6xl font-display text-white leading-tight drop-shadow-md">{service.title}</h3>
                                </div>
                                <p className="text-muted text-base md:text-lg leading-relaxed font-light">
                                    {service.description}
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-4 text-sand/80 text-[10px] font-black uppercase tracking-widest bg-deep/30 p-5 border border-cyan/10 rounded-lg group hover:border-cyan/40 transition-colors">
                                            <Check className="text-cyan" size={18} /> {feature}
                                        </div>
                                    ))}
                                </div>
                                <div className="pt-6">
                                    <button
                                        onClick={openContactModal}
                                        className="bg-cyan hover:bg-white text-navy px-12 py-5 font-black uppercase tracking-widest text-xs flex items-center justify-center gap-4 transition-all shadow-[0_0_30px_rgba(0,242,234,0.2)] rounded-sm group"
                                    >
                                        Inquire Now <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Trust Segment */}
            <section className="py-32 bg-deep/30 border-y border-cyan/10 mb-32 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan/30 to-transparent" />
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-display text-white mb-10 leading-tight">Every service is backed by <span className="text-cyan">10+ years</span> of asset mastery in Pune.</h2>
                    <button
                        onClick={openContactModal}
                        className="text-cyan uppercase tracking-[.4em] font-black text-[10px] md:text-xs border-b border-cyan/40 pb-3 hover:border-cyan hover:text-white transition-all shadow-[0_5px_15px_rgba(0,242,234,0.1)]"
                    >
                        Schedule a Strategic Consultation
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Services;
