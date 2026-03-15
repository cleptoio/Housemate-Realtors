import { motion } from 'framer-motion';
import { Building2, Home, Layout, ShieldCheck, MapPin, Tool, Hammer, HardHat, Compass, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
    const services = [
        {
            title: "Civil Engineering",
            desc: "Industrial-grade construction services for commercial landmarks and elite residential redevelopment projects across Pune.",
            icon: <Hammer size={40} />,
            features: ["Landmark Redevelopment", "Structural Authority", "Industrial Precision", "Institutional Standards"]
        },
        {
            title: "Asset Acquisition",
            desc: "Strategically securing off-market units and high-growth assets within Pune's primary developer pipelines and elite quarters.",
            icon: <Building2 size={40} />,
            features: ["Pre-launch Alpha", "Portfolio Scaling", "Macro-Market Analysis", "Strategic Due Diligence"]
        },
        {
            title: "Interior Architecture",
            desc: "Transforming strategic assets into bespoke luxury environments that define the aesthetic of contemporary elite living.",
            icon: <Layout size={40} />,
            features: ["Architectural Planning", "Curated Material Sourcing", "Bespoke Furnishings", "Aesthetic Leadership"]
        },
        {
            title: "Portfolio Management",
            desc: "Expert tactical management of high-value residential and commercial assets to maximize yields and appreciation velocity.",
            icon: <ShieldCheck size={40} />,
            features: ["Yield Optimization", "Maintenance Protocols", "Asset Liquidation", "Strategic Advisory"]
        }
    ];

    return (
        <div className="bg-navy text-sand font-sans overflow-x-hidden">
            {/* Page Header */}
            <section className="py-40 md:py-60 bg-black border-b border-gold/10 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-1/3 h-full bg-gold/5 blur-[150px] pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="max-w-5xl">
                        <div className="flex items-center gap-6 mb-12">
                            <div className="h-[1px] w-16 bg-gold shadow-[0_0_15px_#D4AF37]" />
                            <span className="text-gold uppercase tracking-[0.6em] text-xs font-accent font-black">Group Capabilities</span>
                        </div>
                        <h1 className="text-6xl md:text-[9rem] font-display text-white mb-12 leading-[0.85] tracking-tighter uppercase">THE <br /><span className="text-gold italic font-light">VERTICALS.</span></h1>
                        <p className="text-white/50 text-xl md:text-3xl leading-relaxed max-w-3xl font-light tracking-wide italic">
                            Vertically integrated property intelligence. We provide total control over the entire asset lifecycle.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid - High Luxury */}
            <section className="py-40 md:py-60 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: i * 0.1 }}
                            className="group p-16 bg-deep/30 border border-white/5 rounded-3xl hover:border-gold/30 transition-all duration-700 shadow-4xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -mr-32 -mt-32 group-hover:bg-gold/10 transition-colors duration-1000" />
                            <div className="text-gold mb-16 p-6 bg-gold/5 w-fit rounded-full border border-gold/10 shadow-[0_0_30px_rgba(212,175,55,0.05)] group-hover:bg-gold group-hover:text-navy group-hover:scale-110 transition-all duration-700">
                                {service.icon}
                            </div>
                            <h3 className="text-4xl md:text-5xl font-display text-white mb-8 uppercase tracking-tighter group-hover:text-gold transition-colors duration-500">{service.title}</h3>
                            <p className="text-white/40 text-lg md:text-xl leading-relaxed mb-12 font-light italic">{service.desc}</p>

                            <ul className="grid grid-cols-1 gap-6 pt-12 border-t border-white/5">
                                {service.features.map((feature, f) => (
                                    <li key={f} className="flex items-center gap-5 text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-gold/60 group-hover:text-gold transition-colors duration-500">
                                        <div className="h-[1px] w-6 bg-gold/30 group-hover:w-10 transition-all" /> {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Strategic Authority Section */}
            <section className="py-40 md:py-60 bg-black border-y border-gold/10 relative overflow-hidden text-center">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <Sparkles className="text-gold mx-auto mb-12" size={40} />
                    <h2 className="text-5xl md:text-[7rem] font-display text-white mb-28 leading-tight uppercase tracking-tighter">THE <br /><span className="text-gold italic font-light">EXECUTIVE MODEL.</span></h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-24 text-left">
                        <div className="space-y-8">
                            <h4 className="text-white font-accent text-xl uppercase tracking-widest border-l-4 border-gold pl-8">Technically Biased</h4>
                            <p className="text-white/40 text-sm font-light leading-relaxed tracking-wide">Our background in civil construction enables us to evaluate asset quality with structural authority, beyond simple brokerage.</p>
                        </div>
                        <div className="space-y-8">
                            <h4 className="text-white font-accent text-xl uppercase tracking-widest border-l-4 border-gold pl-8">Absolute Velocity</h4>
                            <p className="text-white/40 text-sm font-light leading-relaxed tracking-wide">Our unified group eliminates third-party friction, accelerating project delivery and institutional liquidation cycles.</p>
                        </div>
                        <div className="space-y-8">
                            <h4 className="text-white font-accent text-xl uppercase tracking-widest border-l-4 border-gold pl-8">Strategic Discretion</h4>
                            <p className="text-white/40 text-sm font-light leading-relaxed tracking-wide">We operate as a private family office for our clients, ensuring total confidentiality in high-value asset deployments.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Bridge - High Contrast */}
            <section className="py-40 md:py-60 max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-6xl font-display text-white mb-16 tracking-tighter uppercase leading-[1.1]">EVALUATE YOUR NEXT <br /><span className="text-gold italic">CAPITAL DEPLOYMENT.</span></h2>
                <Link to="/contact" className="inline-block bg-gold hover:bg-white text-navy px-16 py-8 rounded-sm text-xs font-black uppercase tracking-[0.5em] transition-all duration-500 shadow-[0_30px_60px_rgba(212,175,55,0.3)] hover:shadow-[0_40px_80px_rgba(212,175,55,0.5)]">Request Brief</Link>
                <p className="mt-16 text-[9px] uppercase tracking-[0.6em] text-gold/40 font-black">DIRECT ROUTE: info@housematerealtors.com</p>
            </section>
        </div>
    );
};

export default Services;
