import { motion } from 'framer-motion';
import { Building2, Home, Layout, ShieldCheck, MapPin, Tool, Hammer, HardHat, Compass, Sparkles } from 'lucide-react';

const Services = () => {
    const services = [
        {
            title: "Civil Construction",
            desc: "Industrial-grade engineering for commercial landmarks and high-end residential redevelopment projects across Pune.",
            icon: <Hammer size={32} />,
            features: ["Landmark Redevelopment", "Structural Engineering", "Industrial Precision", "End-to-end Project Mgmt"]
        },
        {
            title: "Residential Acquisitions",
            desc: "Direct access to Pune's primary developer inventories. We secure off-market units and high-growth assets for elite investors.",
            icon: <Building2 size={32} />,
            features: ["Pre-launch Access", "Portfolio Diversification", "Market Analysis", "Legal Due Diligence"]
        },
        {
            title: "Interior Architecture",
            desc: "Transforming raw spaces into bespoke luxury environments. Every stroke reflects the aesthetic of elite contemporary living.",
            icon: <Layout size={32} />,
            features: ["Architectural Planning", "Premium Material Sourcing", "Smart Home Integration", "Custom Furnishings"]
        },
        {
            title: "Asset Management",
            desc: "Strategically managing residential and commercial portfolios to minimize vacancy and maximize appreciation yields.",
            icon: <ShieldCheck size={32} />,
            features: ["Lease Management", "Maintenance Protocols", "Financial Reporting", "Exit Strategy Advisory"]
        }
    ];

    return (
        <div className="bg-navy text-sand font-sans">
            {/* Page Header */}
            <section className="py-32 md:py-48 bg-deep/30 border-b border-gold/10 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-1/4 h-full bg-gold/5 blur-[120px]" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-[2px] w-12 bg-gold shadow-[0_0_10px_#D4AF37]" />
                            <span className="text-gold uppercase tracking-[0.5em] text-[10px] md:text-sm font-black">Core Capabilities</span>
                        </div>
                        <h1 className="text-5xl md:text-9xl font-display text-white mb-10 leading-[0.85] tracking-tighter">THE <br /><span className="text-gold italic font-light">SPECTRUM.</span></h1>
                        <p className="text-muted text-lg md:text-2xl leading-relaxed max-w-2xl font-light">
                            Vertically integrated real estate intelligence. One group, total control over the property lifecycle.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 md:py-40 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group p-10 md:p-14 bg-deep/20 border border-gold/10 rounded-2xl hover:border-gold/40 transition-all duration-700 shadow-3xl hover:shadow-[0_40px_100px_rgba(212,175,55,0.08)] relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 rounded-full -mr-24 -mt-24 group-hover:bg-gold/10 transition-colors duration-700" />
                            <div className="text-gold mb-10 p-5 bg-gold/5 w-fit rounded-2xl border border-gold/10 shadow-[0_0_20px_rgba(212,175,55,0.1)] group-hover:bg-gold group-hover:text-navy group-hover:scale-110 transition-all duration-500">
                                {service.icon}
                            </div>
                            <h3 className="text-3xl md:text-4xl font-display text-white mb-6 uppercase tracking-tighter group-hover:text-gold transition-colors">{service.title}</h3>
                            <p className="text-muted text-base md:text-lg leading-relaxed mb-10 font-light">{service.desc}</p>

                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4">
                                {service.features.map((feature, f) => (
                                    <li key={f} className="flex items-center gap-3 text-xs md:text-sm font-black uppercase tracking-widest text-gold/60 border-b border-gold/5 pb-2">
                                        <Compass size={14} className="text-gold" /> {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Strategic Authority Section */}
            <section className="py-24 md:py-40 bg-deep border-y border-gold/5 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03)_0%,transparent_70%)]" />
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-4 mb-10">
                        <Sparkles className="text-gold" size={24} />
                        <h2 className="text-gold uppercase tracking-[1em] text-xs font-black">Industrial Grade Authority</h2>
                    </div>
                    <h2 className="text-4xl md:text-7xl font-display text-white mb-20 leading-tight uppercase tracking-tighter">WHY THE <br /><span className="text-gold italic font-light">HOUSEMATE HYBRID?</span></h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-left">
                        <div className="space-y-6">
                            <h4 className="text-white font-black text-xl uppercase tracking-widest border-l-4 border-gold pl-6">Technical Bias</h4>
                            <p className="text-muted text-sm font-light leading-relaxed">Unlike traditional real estate agents, our background in civil construction allows us to evaluate asset quality with structural precision.</p>
                        </div>
                        <div className="space-y-6">
                            <h4 className="text-white font-black text-xl uppercase tracking-widest border-l-4 border-gold pl-6">Velocity First</h4>
                            <p className="text-muted text-sm font-light leading-relaxed">Our unified model eliminates third-party friction, accelerating project delivery and asset liquidation cycles.</p>
                        </div>
                        <div className="space-y-6">
                            <h4 className="text-white font-black text-xl uppercase tracking-widest border-l-4 border-gold pl-6">Elite Discretion</h4>
                            <p className="text-muted text-sm font-light leading-relaxed">We operate as a private family office for our clients, ensuring total confidentiality in high-value asset acquisitions.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Bridge */}
            <section className="py-32 md:py-48 max-w-7xl mx-auto px-6 text-center">
                <div className="inline-block p-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent w-full max-w-lg mb-16" />
                <h2 className="text-3xl md:text-5xl font-display text-white mb-10 tracking-tighter">EVALUATE YOUR NEXT <br /><span className="text-gold italic">CAPITAL DEPLOYMENT.</span></h2>
                <Link to="/contact" className="inline-block bg-gold hover:bg-white text-navy px-14 py-7 rounded-sm text-[11px] font-black uppercase tracking-[0.4em] transition-all shadow-[0_30px_60px_rgba(212,175,55,0.25)]">Request Strategic Brief</Link>
            </section>
        </div>
    );
};

export default Services;
