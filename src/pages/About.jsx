import { motion } from 'framer-motion';
import { Target, Eye, Users, ShieldCheck, TrendingUp, Award, Clock, MapPin } from 'lucide-react';

const About = () => {
    return (
        <div className="bg-navy text-sand font-sans">
            {/* Hero Section */}
            <section className="relative py-32 md:py-48 bg-deep/30 border-b border-gold/10 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 blur-[120px]" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-[2px] w-12 bg-gold shadow-[0_0_10px_#D4AF37]" />
                            <span className="text-gold uppercase tracking-[0.5em] text-[10px] md:text-sm font-black">Strategic Identity</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-display text-white mb-10 leading-tight">THE HOUSEMATE <br /><span className="text-gold italic">AUTHORITY.</span></h1>
                        <p className="text-muted text-lg md:text-2xl leading-relaxed max-w-2xl font-light">
                            Operating as a unified strategic group to deliver industrial-grade precision in Pune's luxury real estate sector.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Story / Philosophy */}
            <section className="py-24 md:py-40 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="space-y-12">
                        <h2 className="text-4xl md:text-6xl font-display text-white uppercase tracking-tighter">OUR <span className="text-gold italic">PHILOSOPHY.</span></h2>
                        <div className="space-y-8 text-muted text-lg leading-relaxed font-light">
                            <p>
                                Housemate Realtors was founded on a single core principle: <span className="text-white font-bold italic">Unification.</span> In a fragmented market, we recognized that elite clients require a single, professional authority to manage the entire property lifecycle.
                            </p>
                            <p>
                                From the first brick of <span className="text-gold font-bold">Civil Construction</span> to the final stroke of <span className="text-gold font-bold">Interior Architecture</span>, and the strategic scaling of <span className="text-gold font-bold">Residential Portfolios</span>, we operate with the precision of an industrial group and the discretion of a private bank.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-10 pt-10 border-t border-gold/10">
                            <div>
                                <h4 className="text-gold font-black uppercase tracking-widest text-[10px] mb-3">ASSETS MANAGED</h4>
                                <p className="text-4xl font-display text-white">500+</p>
                            </div>
                            <div>
                                <h4 className="text-gold font-black uppercase tracking-widest text-[10px] mb-3">EXPERTISE</h4>
                                <p className="text-4xl font-display text-white">15 YRS</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gold/10 blur-[100px] opacity-20 -z-10" />
                        <img src="/assets/images/about_story.png" alt="Our Philosophy" className="rounded-2xl shadow-3xl grayscale-[30%] border border-gold/10" />
                        <div className="absolute top-10 -left-10 bg-gold p-8 text-navy shadow-2xl hidden md:block">
                            <ShieldCheck size={40} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Grid */}
            <section className="py-24 md:py-40 bg-deep border-y border-gold/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-24">
                        <h2 className="text-4xl md:text-5xl font-display text-white uppercase tracking-tighter mb-8">THE <span className="text-gold italic">HYBRID</span> MODEL</h2>
                        <p className="text-muted font-light leading-relaxed">Our competitive advantage lies in our ability to bridge the gap between technical construction and strategic investment.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: <Target />, title: "Precision", desc: "Industrial-grade accuracy in both construction and portfolio management." },
                            { icon: <Clock />, title: "Velocity", desc: "Accelerating project timelines through vertically integrated processes." },
                            { icon: <TrendingUp />, title: "Growth", desc: "Focusing exclusively on Pune's primary appreciation corridors." },
                            { icon: <Award />, title: "Excellence", desc: "Uncompromising standards in luxury materials and architectural finishes." }
                        ].map((v, i) => (
                            <div key={i} className="p-10 bg-navy/40 border border-gold/5 hover:border-gold/30 transition-all rounded-xl group overflow-hidden relative">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full -mr-12 -mt-12 group-hover:bg-gold/10 transition-colors" />
                                <div className="text-gold mb-8 group-hover:scale-110 transition-transform origin-left">{v.icon}</div>
                                <h4 className="text-white font-black uppercase tracking-widest text-xs mb-4">{v.title}</h4>
                                <p className="text-muted text-xs leading-relaxed font-light">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-24 md:py-40 max-w-7xl mx-auto px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-7xl font-display text-white mb-10 leading-none">JOIN THE <br /><span className="text-gold italic">ELITE CIRCLE.</span></h2>
                    <p className="text-muted text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto">Whether you are building a landmark or acquiring an asset, we provide the authority you need.</p>
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <Link to="/contact" className="bg-gold hover:bg-white text-navy px-12 py-6 rounded-sm text-[11px] font-black uppercase tracking-[0.3em] transition-all shadow-[0_20px_40px_rgba(212,175,55,0.2)]">Connect with Advisors</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
