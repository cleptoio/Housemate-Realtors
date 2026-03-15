import { motion } from 'framer-motion';
import { ShieldCheck, Award, Users, Target, ArrowRight } from 'lucide-react';
import { useUI } from '../context/UIContext';

const About = () => {
    const { openContactModal } = useUI();

    return (
        <div className="bg-navy min-h-screen">
            {/* Header */}
            <section className="py-24 bg-slate">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-3xl">
                        <span className="text-gold uppercase tracking-[0.2em] text-[10px] font-bold mb-4 block">Our Story</span>
                        <h1 className="text-5xl md:text-7xl font-display text-sand mb-8 drop-shadow-xl overflow-visible h-auto">Building <span className="text-gold italic">Trust</span> Since Day One</h1>
                        <p className="text-muted text-base md:text-lg leading-relaxed drop-shadow-md">
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
                        className="relative aspect-square md:aspect-auto"
                    >
                        <img src="/assets/images/luxury-building.png" alt="Housemate Realtors Office" className="w-full h-full object-cover rounded-sm shadow-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
                        <div className="absolute -bottom-10 -right-10 p-12 bg-gold text-navy hidden md:block shadow-2xl">
                            <span className="text-5xl font-display font-bold block mb-2">10+</span>
                            <span className="uppercase tracking-widest text-[10px] font-bold">Years of Excellence</span>
                        </div>
                    </motion.div>

                    <div className="space-y-8">
                        <h2 className="text-3xl md:text-4xl font-display text-sand leading-tight drop-shadow-md">Construction, Interiors, Sales & Rentals — <span className="text-gold italic">Under One Roof.</span></h2>
                        <div className="w-20 h-1 bg-gold" />
                        <p className="text-muted leading-relaxed text-sm md:text-base">
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
                                    <div className="p-3 bg-slate rounded-lg w-fit border border-sand/5">{item.icon}</div>
                                    <h4 className="text-sand font-bold text-[10px] md:text-xs tracking-widest uppercase">{item.title}</h4>
                                    <p className="text-muted text-[10px] md:text-xs leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Segment */}
            <section className="py-32 bg-slate overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="max-w-7xl mx-auto px-6 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-display text-sand mb-6">Our <span className="text-gold">Mission</span></h2>
                    <p className="text-muted max-w-2xl mx-auto italic font-display text-xl md:text-2xl leading-relaxed drop-shadow-sm">
                        "To redefine the Pune real estate experience by providing honest, integrated, and high-value solutions that grow with our clients."
                    </p>
                </motion.div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-navy border-y border-sand/5">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
                    <h3 className="text-3xl font-display text-sand text-center md:text-left shadow-gold/10 drop-shadow-lg">Ready to start your property journey?</h3>
                    <button
                        onClick={openContactModal}
                        className="bg-gold text-navy px-12 py-5 font-bold uppercase tracking-widest text-[10px] flex items-center gap-3 shadow-xl hover:bg-yellow-600 transition-all"
                    >
                        Talk to an Expert <ArrowRight size={18} />
                    </button>
                </div>
            </section>
        </div>
    );
};

export default About;
