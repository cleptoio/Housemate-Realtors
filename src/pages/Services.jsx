import { motion } from 'framer-motion';
import { services } from '../data/services';
import { ArrowRight, Hammer, Home, Key, Palette, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
    const icons = [<Hammer size={32} />, <Home size={32} />, <Key size={32} />, <Palette size={32} />];

    return (
        <div className="bg-navy min-h-screen">
            {/* Header */}
            <section className="py-24 bg-slate">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-3xl">
                        <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-4 block">Our Expertise</span>
                        <h1 className="text-5xl md:text-7xl font-display text-sand mb-8">What We <span className="text-gold italic">Do</span></h1>
                        <p className="text-muted text-lg leading-relaxed">
                            Housemate Realtors is more than just a real estate agency. We are a comprehensive property partner offering a 360-degree approach to residential and commercial real estate in Pune.
                        </p>
                    </div>
                </div>
            </section>

            {/* Service Blocks */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6 space-y-24">
                    {services.map((service, i) => (
                        <div
                            id={service.slug}
                            key={service.id}
                            className={`flex flex-col lg:flex-row gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            {/* Content */}
                            <motion.div
                                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="lg:w-1/2"
                            >
                                <div className="text-gold mb-8">{icons[i]}</div>
                                <h2 className="text-4xl font-display text-sand mb-6">{service.title}</h2>
                                <div className="w-16 h-1 bg-gold mb-8" />
                                <p className="text-sand/70 text-lg leading-relaxed mb-10">{service.fullDesc}</p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3 text-sand/80 text-sm">
                                            <CheckCircle2 size={16} className="text-gold shrink-0" />
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                <Link to="/contact" className="inline-flex items-center gap-4 text-gold uppercase tracking-widest text-[10px] font-bold border-b border-gold/20 pb-2 hover:border-gold transition-colors">
                                    Enquire about {service.title} <ArrowRight size={14} />
                                </Link>
                            </motion.div>

                            {/* Placeholder Image/Visual */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="lg:w-1/2 aspect-video bg-slate rounded-lg border border-sand/5 overflow-hidden flex items-center justify-center relative group"
                            >
                                <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <span className="text-sand/20 font-display text-2xl uppercase tracking-[0.2em]">{service.slug} visual</span>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 bg-slate border-t border-sand/5">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-display text-sand mb-8">Need a Custom <span className="text-gold italic">Real Estate Solution?</span></h2>
                    <p className="text-muted mb-12">Whether you're looking for society redevelopment, land appraisal, or luxury fit-out, we have the experts to guide you.</p>
                    <Link to="/contact" className="bg-royal text-sand px-12 py-5 uppercase tracking-widest font-bold text-xs hover:bg-blue-700 transition-all">
                        Schedule a Consultation
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Services;
