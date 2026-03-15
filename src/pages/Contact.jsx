import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Linkedin, ArrowRight, Shield } from 'lucide-react';

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log("Inquiry Form Data:", data);
        alert("Success! Your inquiry has been routed to info@housematerealtors.com. Our property specialists will contact you shortly.");
    };

    return (
        <div className="bg-navy min-h-screen text-sand overflow-x-hidden">
            {/* Page Header */}
            <section className="py-32 bg-deep/30 border-b border-cyan/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-cyan/5 blur-[120px]" />
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-4xl relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-[2px] w-12 bg-cyan shadow-[0_0_10px_#00F2EA]" />
                            <span className="text-cyan uppercase tracking-[0.5em] text-[10px] md:text-sm font-black">Global Access</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-display text-white mb-8 leading-tight">CENTRAL <br /><span className="text-cyan italic">OPERATIONS.</span></h1>
                        <p className="text-muted text-lg md:text-xl leading-relaxed max-w-2xl font-light">
                            Direct communication channels for industrial construction, luxury interior design, and strategic asset acquisitions in Pune.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24 md:py-40 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                    {/* Info Side */}
                    <div className="space-y-20">
                        <div className="space-y-12">
                            <h3 className="text-4xl font-display text-white uppercase tracking-tighter">Inquiry Channels</h3>
                            <div className="space-y-10">
                                <div className="flex gap-8 group">
                                    <div className="p-5 bg-deep/20 rounded-xl text-cyan shrink-0 border border-cyan/5 group-hover:border-cyan/30 transition-all shadow-xl h-fit">
                                        <MapPin size={28} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-black mb-3 uppercase tracking-[0.3em] text-[11px]">Central Headquarters</h4>
                                        <p className="text-muted text-sm leading-relaxed font-light">Kharadi, Pune, Maharashtra,<br />India 411014</p>
                                    </div>
                                </div>
                                <div className="flex gap-8 group">
                                    <div className="p-5 bg-deep/20 rounded-xl text-cyan shrink-0 border border-cyan/5 group-hover:border-cyan/30 transition-all shadow-xl h-fit">
                                        <Phone size={28} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-black mb-3 uppercase tracking-[0.3em] text-[11px]">Priority Support</h4>
                                        <p className="text-muted text-sm font-light hover:text-cyan transition-colors">+91 81493 88788</p>
                                        <p className="text-muted text-sm font-light hover:text-cyan transition-colors">+91 78882 33045</p>
                                    </div>
                                </div>
                                <div className="flex gap-8 group">
                                    <div className="p-5 bg-deep/20 rounded-xl text-cyan shrink-0 border border-cyan/5 group-hover:border-cyan/30 transition-all shadow-xl h-fit">
                                        <Mail size={28} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-black mb-3 uppercase tracking-[0.3em] text-[11px]">Primary Email</h4>
                                        <p className="text-cyan text-sm font-bold tracking-wider">info@housematerealtors.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-10">
                            <h3 className="text-xs font-black text-cyan uppercase tracking-[0.5em]">Digital Presence</h3>
                            <div className="flex gap-4">
                                {[
                                    { icon: <Instagram size={24} />, url: "https://www.instagram.com/housemate_realtors" },
                                    { icon: <Facebook size={24} />, url: "https://www.facebook.com/HouseMateRealtors" },
                                    { icon: <Linkedin size={24} />, url: "#" }
                                ].map((item, i) => (
                                    <a key={i} href={item.url} target="_blank" rel="noopener" className="p-4 bg-deep/20 hover:bg-cyan hover:text-navy transition-all rounded-full text-cyan/60 border border-cyan/10">
                                        {item.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-deep/10 p-10 md:p-14 rounded-2xl border border-cyan/10 shadow-[0_40px_100px_rgba(0,0,0,0.5)] relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-2 h-full bg-cyan" />
                        <h3 className="text-3xl font-display text-white mb-10 uppercase tracking-tighter">Draft Inquiry</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] uppercase tracking-[0.4em] text-cyan font-black block">Entity Name</label>
                                    <input
                                        {...register("name", { required: true })}
                                        className="w-full bg-navy/50 border border-cyan/10 p-5 text-sand text-sm focus:border-cyan outline-none transition-all rounded-sm placeholder:text-sand/20"
                                        placeholder="Full Name"
                                    />
                                    {errors.name && <span className="text-error text-[10px] mt-1 font-bold uppercase tracking-tighter">Authentication Required</span>}
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] uppercase tracking-[0.4em] text-cyan font-black block">Contact Frequency</label>
                                    <input
                                        {...register("phone", { required: true })}
                                        className="w-full bg-navy/50 border border-cyan/10 p-5 text-sand text-sm focus:border-cyan outline-none transition-all rounded-sm placeholder:text-sand/20"
                                        placeholder="+91 XXXXX XXXXX"
                                    />
                                    {errors.phone && <span className="text-error text-[10px] mt-1 font-bold uppercase tracking-tighter">Authentication Required</span>}
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] uppercase tracking-[0.4em] text-cyan font-black block">Capability required</label>
                                <select
                                    {...register("interest")}
                                    className="w-full bg-navy/50 border border-cyan/10 p-5 text-sand text-sm focus:border-cyan outline-none transition-all rounded-sm appearance-none cursor-pointer"
                                >
                                    <option className="bg-navy" value="buy">Residential Acquisition</option>
                                    <option className="bg-navy" value="sell">Asset Liquidation</option>
                                    <option className="bg-navy" value="rent">Rental & Portfolio Mgmt</option>
                                    <option className="bg-navy" value="interiors">Interior Architecture</option>
                                    <option className="bg-navy" value="construction">Civil Construction</option>
                                </select>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] uppercase tracking-[0.4em] text-cyan font-black block">Project brief</label>
                                <textarea
                                    {...register("message")}
                                    rows="5"
                                    className="w-full bg-navy/50 border border-cyan/10 p-5 text-sand text-sm focus:border-cyan outline-none transition-all resize-none rounded-sm placeholder:text-sand/20"
                                    placeholder="Describe your property vision..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-cyan hover:bg-white text-navy font-black py-7 flex items-center justify-center gap-4 uppercase tracking-[0.3em] text-xs transition-all shadow-[0_0_40px_rgba(0,242,234,0.3)] hover:shadow-[0_0_60px_rgba(0,242,234,0.5)] group"
                            >
                                SUBMIT TO info@housematerealtors.com <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>

            {/* Central Compliance Strip */}
            <section className="py-20 bg-deep/30 border-t border-cyan/10">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
                    <div className="flex items-center gap-4">
                        <Shield className="text-cyan" size={40} />
                        <div>
                            <p className="text-xs font-black uppercase tracking-[0.2em]">RERA REGULATED</p>
                            <p className="text-[10px] font-light">Compliance & Transparency Policy</p>
                        </div>
                    </div>
                    <div className="h-[1px] w-20 bg-cyan/20 hidden md:block" />
                    <p className="text-[10px] text-center max-w-lg leading-relaxed uppercase tracking-widest">A Clepto.io Managed Real Estate Initiative. All rights reserved Housemate Realtors 2026.</p>
                </div>
            </section>
        </div>
    );
};

export default Contact;
