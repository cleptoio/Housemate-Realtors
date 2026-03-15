import { motion } from 'framer-motion';
import { services as servicesData } from '../data/services';
import { useUI } from '../context/UIContext';
import { ArrowRight, Check } from 'lucide-react';

const Services = () => {
    const { openContactModal } = useUI();

    return (
        <div className="bg-navy min-h-screen">
            {/* Header */}
            <section className="py-24 bg-slate">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-3xl">
                        <span className="text-gold uppercase tracking-[0.2em] text-[10px] font-bold mb-4 block">Our Expertise</span>
                        <h1 className="text-5xl md:text-7xl font-display text-sand mb-8 leading-tight">Elevating Every <br /><span className="text-gold italic">Property Need</span></h1>
                        <div className="w-20 h-1 bg-gold mb-8" />
                        <p className="text-muted text-lg leading-relaxed drop-shadow-md">
                            Housemate Realtors provides specialized solutions tailored to Pune's dynamic market. From luxury residential constructions to strategic commercial rentals.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services List */}
            <section className="py-32">
                <div className="max-w-7xl mx-auto px-6 space-y-32">
                    {servicesData.map((service, i) => (
                        <div
                            key={service.id}
                            className={`flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}
                        >
                            {/* Image Side */}
                            <motion.div
                                initial={{ opacity: 0, x: i % 2 !== 0 ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="w-full lg:w-1/2 relative aspect-[4/3] overflow-hidden group rounded-sm shadow-2xl"
                            >
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-500" />
                            </motion.div>

                            {/* Content Side */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="w-full lg:w-1/2 space-y-8"
                            >
                                <h3 className="text-4xl md:text-5xl font-display text-sand leading-tight drop-shadow-md">{service.title}</h3>
                                <p className="text-muted text-base md:text-lg leading-relaxed drop-shadow-sm">
                                    {service.description}
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3 text-sand/80 text-xs font-bold uppercase tracking-widest bg-slate/50 p-4 border border-sand/5">
                                            <Check className="text-gold" size={16} /> {feature}
                                        </div>
                                    ))}
                                </div>
                                <div className="pt-4 flex flex-col sm:flex-row gap-6">
                                    <button
                                        onClick={openContactModal}
                                        className="bg-gold text-navy px-10 py-5 font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-yellow-600 transition-all shadow-xl"
                                    >
                                        Enquire Now <ArrowRight size={16} />
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Trust Segment */}
            <section className="py-24 bg-slate border-y border-sand/5 mb-32">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-display text-sand mb-8 leading-tight">Every service is backed by our <span className="text-gold">10+ years</span> of local expertise in Pune.</h2>
                    <button
                        onClick={openContactModal}
                        className="text-gold uppercase tracking-[.3em] font-bold text-[10px] md:text-xs border-b border-gold/40 pb-2 hover:border-gold transition-all"
                    >
                        Schedule a Strategy Call
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Services;
