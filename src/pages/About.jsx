import { motion } from 'framer-motion';
import { ShieldCheck, Award, Users, Target, ArrowRight, Shield, Zap, TrendingUp, Globe } from 'lucide-react';
import { useUI } from '../context/UIContext';

const About = () => {
    const { openContactModal } = useUI();

    return (
        <div className="bg-navy min-h-screen text-sand">
            {/* Header */}
            <section className="py-32 bg-deep/30 border-b border-cyan/10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-[2px] w-12 bg-cyan shadow-[0_0_10px_#00F2EA]" />
                            <span className="text-cyan uppercase tracking-[0.4em] text-[10px] font-bold">The Hybrid Model</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-display text-white mb-8 drop-shadow-xl leading-tight">BUILDING <br /><span className="text-cyan italic">TRUST</span> IN PUNE.</h1>
                        <p className="text-muted text-lg md:text-xl leading-relaxed max-w-2xl font-light">
                            Housemate Realtors was founded to bridge the gap between traditional brokerage and architectural engineering. Transparent, technical, and high-value.
                        </p>
                    </div>
                </div>
            </section>

            {/* Philosophy */}
            <section className="py-40 max-w-7xl mx-auto px-6 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative group"
                    >
                        <div className="absolute -inset-6 border border-cyan/10 translate-x-4 translate-y-4 -z-10 rounded-sm" />
                        <img src="/assets/images/luxury-building.png" alt="Housemate Realtors Core" className="w-full aspect-[4/5] object-cover rounded-xl shadow-[0_30px_100px_rgba(0,0,0,0.5)] grayscale-[50%] group-hover:grayscale-0 transition-all duration-1000" />
                        <div className="absolute -bottom-12 -right-12 p-12 bg-cyan text-navy rounded-sm shadow-2xl">
                            <span className="text-6xl font-display font-black block mb-2">10+</span>
                            <span className="uppercase tracking-[0.2em] text-[10px] font-black">Years Excellence</span>
                        </div>
                    </motion.div>

                    <div className="space-y-12">
                        <h2 className="text-4xl md:text-6xl font-display text-white leading-tight">Construction, Interiors, & Strategic Portfolio Sales.</h2>
                        <div className="w-32 h-[1px] bg-cyan/50 shadow-[0_0_10px_#00F2EA]" />
                        <p className="text-muted leading-relaxed text-lg font-light">
                            Most agencies trade in volume. We trade in value. Whether we are constructing a 50,000 sq.ft commercial asset or managing a residential exit in Wagholi, our approach remains technical and data-driven.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                            {[
                                { icon: <ShieldCheck className="text-cyan" />, title: "RERA CERTIFIED", desc: "Rigorous legal vetting for all asset classes." },
                                { icon: <Zap className="text-cyan" />, title: "TECH DRIVEN", desc: "Digital-first property evaluations and designs." },
                                { icon: <TrendingUp className="text-cyan" />, title: "ALPHA YIELDS", desc: "Strategic focus on Pune's growth corridors." },
                                { icon: <Globe className="text-cyan" />, title: "INTEGRATED", desc: "Construction to management under one roof." }
                            ].map((item, i) => (
                                <div key={i} className="space-y-4 p-6 bg-deep/20 border border-cyan/5 rounded-xl hover:border-cyan/30 transition-all group">
                                    <div className="p-4 bg-navy rounded-full w-fit border border-cyan/10 group-hover:bg-cyan group-hover:text-navy transition-all">{item.icon}</div>
                                    <h4 className="text-sand font-black text-[10px] tracking-[0.3em] uppercase">{item.title}</h4>
                                    <p className="text-muted text-[11px] leading-relaxed group-hover:text-sand/80 transition-colors">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Scale Segment */}
            <section className="py-40 bg-deep/40 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-cyan/5 blur-[200px] -z-10" />
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-7xl mx-auto px-6 text-center"
                >
                    <span className="text-cyan uppercase tracking-[0.5em] text-[10px] font-black mb-10 block">PROMISE OF TRANSPARENCY</span>
                    <h2 className="text-3xl md:text-6xl font-display text-white mb-10 uppercase tracking-tighter">"Redefining asset and land <br /> management in <span className="text-cyan">PUNE INDIA.</span>"</h2>
                    <div className="w-1 h-20 bg-gradient-to-b from-cyan to-transparent mx-auto mt-16" />
                </motion.div>
            </section>

            {/* High Impact Footer CTA */}
            <section className="py-32 bg-navy border-y border-cyan/10">
                <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-center gap-16">
                    <div className="max-w-2xl text-center lg:text-left">
                        <h3 className="text-4xl md:text-5xl font-display text-white leading-tight mb-4">Ready to start your property journey?</h3>
                        <p className="text-cyan/60 uppercase tracking-[0.3em] text-[10px] font-black">Direct Access: info@housematerealtors.com</p>
                    </div>
                    <button
                        onClick={openContactModal}
                        className="w-full lg:w-auto bg-cyan hover:bg-white text-navy px-16 py-6 font-black uppercase tracking-[0.3em] text-xs shadow-[0_0_30px_rgba(0,242,234,0.3)] transition-all rounded-sm flex items-center justify-center gap-4"
                    >
                        CONNECT WITH EXPERTS <ArrowRight size={20} />
                    </button>
                </div>
            </section>
        </div>
    );
};

export default About;
