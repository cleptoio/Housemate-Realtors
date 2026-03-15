import { motion } from 'framer-motion';
import { ShieldCheck, Award, Users, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="bg-navy min-h-screen">
            {/* Header */}
            <section className="py-24 bg-slate">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-3xl">
                        <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-4 block">Our Story</span>
                        <h1 className="text-5xl md:text-7xl font-display text-sand mb-8">Building <span className="text-gold italic">Trust</span> Since Day One</h1>
                        <p className="text-muted text-lg leading-relaxed">
                            Based in the heart of Pune, Housemate Realtors was founded on a simple promise: to make premium real estate accessible, transparent, and hassle-free.
                        </p>
                    </div>
                </div>
            </section>

            {/* Philosophy */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative aspect-square"
                    >
                        <img src="/assets/images/luxury-building.png" alt="Housemate Realtors Office" className="w-full h-full object-cover rounded-lg" />
                        <div className="absolute -bottom-10 -right-10 p-12 bg-gold text-navy hidden md:block">
                            <span className="text-5xl font-display font-bold block mb-2">10+</span>
                            <span className="uppercase tracking-widest text-[10px] font-bold">Years of Excellence</span>
                        </div>
                    </motion.div>

                    <div className="space-y-8">
                        <h2 className="text-4xl font-display text-sand leading-tight">Construction, Interiors, Sales & Rentals — <span className="text-gold italic">Under One Roof.</span></h2>
                        <div className="w-20 h-1 bg-gold" />
                        <p className="text-sand/70 leading-relaxed">
                            Most agencies focus on one thing. We focus on you. Whether you want to build a dream villa from scratch, design a modern apartment interior, or find a high-yield rental property in Kharadi, we have specialized teams for each.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                            {[
                                { icon: <ShieldCheck className="text-gold" />, title: "RERA Registered", desc: "Complete compliance and legal security for all transactions." },
                                { icon: <Award className="text-gold" />, title: "Premium Quality", desc: "Using the finest materials for construction and interiors." },
                                { icon: <Users className="text-gold" />, title: "Client First", desc: "Personalized advisory tailored to your financial goals." },
                                { icon: <Target className="text-gold" />, title: "Strategic Locations", desc: "Expertise in Pune's most promising real estate hubs." }
                            ].map((item, i) => (
                                <div key={i} className="space-y-3">
                                    <div className="p-3 bg-slate rounded-lg w-fit">{item.icon}</div>
                                    <h4 className="text-sand font-bold text-sm tracking-widest uppercase">{item.title}</h4>
                                    <p className="text-muted text-xs leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team/Mission Segment */}
            <section className="py-32 bg-slate">
                <div className="max-w-7xl mx-auto px-6 text-center mb-20">
                    <h2 className="text-4xl font-display text-sand mb-6">Our <span className="text-gold">Mission</span></h2>
                    <p className="text-muted max-w-2xl mx-auto italic font-display text-xl leading-relaxed">
                        "To redefine the Pune real estate experience by providing honest, integrated, and high-value solutions that grow with our clients."
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-navy border-y border-sand/5">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
                    <h3 className="text-3xl font-display text-sand text-center md:text-left">Ready to start your property journey?</h3>
                    <Link to="/contact" className="bg-gold text-navy px-12 py-5 font-bold uppercase tracking-widest text-xs flex items-center gap-3">
                        Talk to an Expert <ArrowRight size={18} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default About;
