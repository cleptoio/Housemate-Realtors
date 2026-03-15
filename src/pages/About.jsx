import { motion } from 'framer-motion';
import { Target, Eye, Users, ShieldCheck, TrendingUp, Award, Clock, MapPin, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="bg-navy text-sand font-sans overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative py-40 md:py-60 bg-black border-b border-gold/10 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 blur-[150px] pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="max-w-5xl">
                        <div className="flex items-center gap-6 mb-12">
                            <div className="h-[1px] w-16 bg-gold shadow-[0_0_15px_#D4AF37]" />
                            <span className="text-gold uppercase tracking-[0.6em] text-xs font-accent font-black">Strategic Heritage</span>
                        </div>
                        <h1 className="text-6xl md:text-[8rem] font-display text-white mb-12 leading-[0.85] tracking-tighter">THE <br /><span className="text-gold italic font-light">HOUSEMATE</span><br />AUTHORITY.</h1>
                        <p className="text-white/60 text-xl md:text-3xl leading-relaxed max-w-3xl font-light tracking-wide">
                            Operating as a unified institutional group to deliver industrial-grade precision in Pune's luxury real estate sector.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Story / Philosophy */}
            <section className="py-40 md:py-60 bg-navy">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                        <div className="space-y-16">
                            <h2 className="text-5xl md:text-7xl font-display text-white uppercase tracking-tighter leading-none">THE <br /><span className="text-gold italic">PHILOSOPHY.</span></h2>
                            <div className="space-y-10 text-white/50 text-lg md:text-xl leading-relaxed font-light tracking-wide">
                                <p>
                                    Housemate Realtors was founded on a single core principle: <span className="text-white font-bold border-b border-gold/40">Mastery.</span> In a fragmented market, we recognized that elite clients require a single, professional authority to manage the entire property lifecycle.
                                </p>
                                <p>
                                    From the first brick of <span className="text-gold font-accent uppercase tracking-widest text-sm">Industrial Construction</span> to the final stroke of <span className="text-gold font-accent uppercase tracking-widest text-sm">Interior Architecture</span>, we operate with the precision of a strategic board and the discretion of a private bank.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-16 pt-16 border-t border-gold/20">
                                <div className="group">
                                    <h4 className="text-gold font-accent uppercase tracking-[0.4em] text-[10px] mb-4 opacity-60 group-hover:opacity-100 transition-opacity">ASSETS MANAGED</h4>
                                    <p className="text-5xl md:text-7xl font-display text-white">500+</p>
                                </div>
                                <div className="group">
                                    <h4 className="text-gold font-accent uppercase tracking-[0.4em] text-[10px] mb-4 opacity-60 group-hover:opacity-100 transition-opacity">EXPERTISE</h4>
                                    <p className="text-5xl md:text-7xl font-display text-white">15Y</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute -inset-10 bg-gold/5 blur-[120px] opacity-20 -z-10 group-hover:opacity-40 transition-opacity duration-[2s]" />
                            <img src="/assets/images/about_story.png" alt="Our Philosophy" className="rounded-3xl shadow-[0_60px_100px_rgba(0,0,0,0.8)] grayscale-[30%] hover:grayscale-0 transition-all duration-[2s] border border-white/5" />
                            <div className="absolute -top-12 -left-12 bg-gold p-12 text-navy shadow-4xl hidden xl:block rounded-sm transform -rotate-6 group-hover:rotate-0 transition-transform duration-1000">
                                <ShieldCheck size={48} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hybrid Model - Strategic Visual */}
            <section className="py-40 md:py-60 bg-black border-y border-gold/10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto mb-32">
                        <span className="text-gold font-accent text-sm uppercase tracking-[0.6em] mb-6 block">Unified Operational Model</span>
                        <h2 className="text-5xl md:text-8xl font-display text-white uppercase tracking-tighter mb-12">THE <span className="text-gold italic">HYBRID</span> ADVANTAGE.</h2>
                        <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed italic">Bridging the critical gap between technical execution and high-yield strategic investment.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {[
                            { icon: <Target />, title: "Precision", desc: "Institutional-grade accuracy in both civil engineering and portfolio management." },
                            { icon: <Clock />, title: "Velocity", desc: "Compressing project timelines through vertically integrated operational chains." },
                            { icon: <TrendingUp />, title: "Appreciation", desc: "Exclusive focus on assets within Pune's primary elite growth corridors." },
                            { icon: <Award />, title: "Distinction", desc: "Signature standards in luxury materials and bespoke architectural finishes." }
                        ].map((v, i) => (
                            <div key={i} className="p-12 bg-deep/50 border border-gold/5 hover:border-gold/30 transition-all duration-700 rounded-2xl group relative overflow-hidden text-center">
                                <div className="text-gold mb-10 mx-auto w-fit p-4 bg-gold/5 rounded-full group-hover:bg-gold group-hover:text-navy transition-all duration-500">{v.icon}</div>
                                <h4 className="text-white font-accent uppercase tracking-widest text-xs mb-6">{v.title}</h4>
                                <p className="text-white/40 text-sm leading-relaxed font-light">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action - Executive */}
            <section className="py-40 md:py-60 max-w-7xl mx-auto px-6 text-center">
                <div className="max-w-5xl mx-auto">
                    <Sparkles className="text-gold mx-auto mb-12" size={48} />
                    <h2 className="text-6xl md:text-[8rem] font-display text-white mb-16 leading-[0.85] tracking-tighter">SECURE YOUR <br /><span className="text-gold italic font-light">LEGACY.</span></h2>
                    <p className="text-white/50 text-xl md:text-2xl font-light mb-20 max-w-3xl mx-auto tracking-wide">Whether building a landmark or acquiring an institutional asset, we provide the authority you require.</p>
                    <Link to="/contact" className="inline-block bg-gold hover:bg-white text-navy px-16 py-8 rounded-sm text-xs font-black uppercase tracking-[0.5em] transition-all duration-500 shadow-[0_30px_60px_rgba(212,175,55,0.3)] hover:shadow-[0_40px_80px_rgba(212,175,55,0.5)]">Connect with Advisors</Link>
                </div>
            </section>
        </div>
    );
};

export default About;
