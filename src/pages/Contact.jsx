import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Linkedin, ArrowRight, Shield, Sparkles } from 'lucide-react';

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        alert("Enquiry Successful. Your request has been routed to info@housematerealtors.com. Our property specialists will contact you shortly.");
    };

    return (
        <div className="bg-navy min-h-screen text-sand font-sans overflow-x-hidden">
            {/* Page Header - High Impact */}
            <section className="py-40 md:py-60 bg-black border-b border-gold/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 blur-[150px] pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-5xl relative z-10">
                        <div className="flex items-center gap-6 mb-12">
                            <div className="h-[1px] w-16 bg-gold shadow-[0_0_15px_#D4AF37]" />
                            <span className="text-gold uppercase tracking-[0.6em] text-xs font-accent font-black">Global Operations</span>
                        </div>
                        <h1 className="text-6xl md:text-[9rem] font-display text-white mb-12 leading-[0.85] tracking-tighter uppercase">CENTRAL <br /><span className="text-gold italic font-light">OPERATIONS.</span></h1>
                        <p className="text-white/50 text-xl md:text-3xl leading-relaxed max-w-3xl font-light tracking-wide italic">
                            Direct communication channels for industrial construction, luxury interior design, and strategic asset acquisitions.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-40 md:py-60 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
                    {/* Info Side */}
                    <div className="space-y-32">
                        <div className="space-y-20">
                            <h3 className="text-5xl font-display text-white uppercase tracking-tighter">THE BUREAU</h3>
                            <div className="space-y-16">
                                <div className="flex gap-10 group">
                                    <div className="p-6 bg-gold/5 rounded-3xl text-gold shrink-0 border border-gold/10 group-hover:bg-gold group-hover:text-navy transition-all duration-500 shadow-2xl h-fit">
                                        <MapPin size={36} />
                                    </div>
                                    <div>
                                        <h4 className="text-gold font-accent uppercase tracking-[0.5em] text-[10px] mb-4 opacity-60">HQ LOCATION</h4>
                                        <p className="text-white/60 text-lg md:text-xl leading-relaxed font-light italic">Kharadi, Pune, Maharashtra,<br />India 411014</p>
                                    </div>
                                </div>
                                <div className="flex gap-10 group">
                                    <div className="p-6 bg-gold/5 rounded-3xl text-gold shrink-0 border border-gold/10 group-hover:bg-gold group-hover:text-navy transition-all duration-500 shadow-2xl h-fit">
                                        <Phone size={36} />
                                    </div>
                                    <div>
                                        <h4 className="text-gold font-accent uppercase tracking-[0.5em] text-[10px] mb-4 opacity-60">DIRECT ACCESS</h4>
                                        <p className="text-white text-lg md:text-xl font-bold tracking-widest hover:text-gold transition-colors duration-500">+91 81493 88788</p>
                                        <p className="text-white text-lg md:text-xl font-bold tracking-widest hover:text-gold transition-colors duration-500">+91 78882 33045</p>
                                    </div>
                                </div>
                                <div className="flex gap-10 group">
                                    <div className="p-6 bg-gold/5 rounded-3xl text-gold shrink-0 border border-gold/10 group-hover:bg-gold group-hover:text-navy transition-all duration-500 shadow-2xl h-fit">
                                        <Mail size={36} />
                                    </div>
                                    <div>
                                        <h4 className="text-gold font-accent uppercase tracking-[0.5em] text-[10px] mb-4 opacity-60">CORPORATE MAILING</h4>
                                        <p className="text-gold text-lg md:text-xl font-black tracking-widest border-b border-gold/20 pb-2">info@housematerealtors.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-12">
                            <h3 className="text-[11px] font-black text-gold/40 uppercase tracking-[0.6em]">Executive Feed</h3>
                            <div className="flex gap-6">
                                {[
                                    { icon: <Instagram size={28} />, url: "https://www.instagram.com/housemate_realtors" },
                                    { icon: <Facebook size={28} />, url: "https://www.facebook.com/HouseMateRealtors" },
                                    { icon: <Linkedin size={28} />, url: "#" }
                                ].map((item, i) => (
                                    <a key={i} href={item.url} target="_blank" rel="noopener" className="p-6 bg-deep/50 hover:bg-gold hover:text-navy transition-all duration-500 rounded-full text-gold/40 border border-gold/10 hover:shadow-3xl transform hover:-translate-y-2">
                                        {item.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Form Side - High Luxury */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="bg-black p-12 md:p-20 rounded-3xl border border-gold/20 shadow-[0_60px_120px_rgba(0,0,0,0.9)] relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-2 h-full bg-gold shadow-[0_0_30px_#D4AF37]" />
                        <div className="flex items-center gap-4 mb-16">
                            <Sparkles className="text-gold" size={32} />
                            <h3 className="text-4xl font-display text-white uppercase tracking-tighter">STRATEGIC BRIEF</h3>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="space-y-4 group">
                                    <label className="text-[10px] uppercase tracking-[0.5em] text-gold/60 font-black block group-focus-within:text-gold transition-colors">PRINCIPAL NAME</label>
                                    <input
                                        {...register("name", { required: true })}
                                        className="w-full bg-navy border-b border-white/10 p-6 text-white text-lg focus:border-gold outline-none transition-all placeholder:text-white/5"
                                        placeholder="Enter Full Name"
                                    />
                                    {errors.name && <span className="text-error text-[10px] mt-2 font-black uppercase tracking-widest">Authentication Required</span>}
                                </div>
                                <div className="space-y-4 group">
                                    <label className="text-[10px] uppercase tracking-[0.5em] text-gold/60 font-black block group-focus-within:text-gold transition-colors">CONTACT VECTOR</label>
                                    <input
                                        {...register("phone", { required: true })}
                                        className="w-full bg-navy border-b border-white/10 p-6 text-white text-lg focus:border-gold outline-none transition-all placeholder:text-white/5"
                                        placeholder="+91 Contact No."
                                    />
                                    {errors.phone && <span className="text-error text-[10px] mt-2 font-black uppercase tracking-widest">Authentication Required</span>}
                                </div>
                            </div>

                            <div className="space-y-4 group">
                                <label className="text-[10px] uppercase tracking-[0.5em] text-gold/60 font-black block group-focus-within:text-gold transition-colors">CAPABILITY REQUIRED</label>
                                <select
                                    {...register("interest")}
                                    className="w-full bg-navy border-b border-white/10 p-6 text-white text-lg focus:border-gold outline-none transition-all cursor-pointer appearance-none"
                                >
                                    <option className="bg-navy" value="buy">Residential Acquisition</option>
                                    <option className="bg-navy" value="sell">Asset Liquidation</option>
                                    <option className="bg-navy" value="rent">Portfolio Hosting</option>
                                    <option className="bg-navy" value="interiors">Interior Architecture</option>
                                    <option className="bg-navy" value="construction">Civil Engineering</option>
                                </select>
                            </div>

                            <div className="space-y-4 group">
                                <label className="text-[10px] uppercase tracking-[0.5em] text-gold/60 font-black block group-focus-within:text-gold transition-colors">PROJECT INTENT</label>
                                <textarea
                                    {...register("message")}
                                    rows="4"
                                    className="w-full bg-navy border-b border-white/10 p-6 text-white text-lg focus:border-gold outline-none transition-all resize-none placeholder:text-white/5"
                                    placeholder="Describe your property vision..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gold hover:bg-white text-navy font-black py-10 flex items-center justify-center gap-6 uppercase tracking-[0.5em] text-xs transition-all duration-500 shadow-[0_30px_60px_rgba(212,175,55,0.3)] hover:shadow-[0_40px_80px_rgba(212,175,55,0.5)] transform hover:-translate-y-2 group"
                            >
                                SUBMIT TO EXECUTIVE MAILING <ArrowRight size={24} className="group-hover:translate-x-4 transition-transform duration-500" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>

            {/* Compliance Strip - Luxury Design */}
            <section className="py-32 bg-deep border-t border-gold/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-16 opacity-40 hover:opacity-100 transition-opacity duration-[2s]">
                    <div className="flex items-center gap-8">
                        <Shield className="text-gold" size={60} />
                        <div>
                            <p className="text-xs font-black uppercase tracking-[0.4em] text-white">RERA REGULATED AUTHORITY</p>
                            <p className="text-[10px] font-light text-muted uppercase tracking-[0.3em] mt-2">Compliance & Tactical Disclosure Policy</p>
                        </div>
                    </div>
                    <div className="h-[1px] w-32 bg-gold/10 hidden md:block" />
                    <p className="text-[10px] text-center max-w-xl leading-relaxed uppercase tracking-[0.4em] font-light italic">All intellectual rights reserved Housemate Realtors 2026. A Strategic Portfolio Managed by the Executive Board of Housemate Group.</p>
                </div>
            </section>
        </div>
    );
};

export default Contact;
