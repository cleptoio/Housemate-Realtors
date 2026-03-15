import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Linkedin } from 'lucide-react';

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        alert("Thank you! Your inquiry has been sent. Our team will contact you shortly.");
    };

    return (
        <div className="bg-navy min-h-screen">
            {/* Header */}
            <section className="py-24 bg-slate">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-3xl">
                        <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-4 block">Connect</span>
                        <h1 className="text-5xl md:text-7xl font-display text-sand mb-8">Get In <span className="text-gold italic">Touch</span></h1>
                        <p className="text-muted text-lg leading-relaxed">
                            Have a question about a property, a project, or our services? Our team is ready to provide you with the expert guidance you need.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Info Side */}
                    <div className="space-y-16">
                        <div>
                            <h3 className="text-2xl font-display text-sand mb-10">Contact Information</h3>
                            <div className="space-y-8">
                                <div className="flex gap-6">
                                    <div className="p-4 bg-slate rounded-lg text-gold shrink-0"><MapPin size={24} /></div>
                                    <div>
                                        <h4 className="text-sand font-bold mb-1 uppercase tracking-widest text-xs">Our Office</h4>
                                        <p className="text-muted text-sm leading-relaxed">Kharadi, Pune, Maharashtra, India 411014</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="p-4 bg-slate rounded-lg text-gold shrink-0"><Phone size={24} /></div>
                                    <div>
                                        <h4 className="text-sand font-bold mb-1 uppercase tracking-widest text-xs">Phone Numbers</h4>
                                        <p className="text-muted text-sm">+91 81493 88788</p>
                                        <p className="text-muted text-sm">+91 78882 33045</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="p-4 bg-slate rounded-lg text-gold shrink-0"><Mail size={24} /></div>
                                    <div>
                                        <h4 className="text-sand font-bold mb-1 uppercase tracking-widest text-xs">Email Address</h4>
                                        <p className="text-muted text-sm">info@housematerealtors.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-display text-sand mb-8">Follow Our Work</h3>
                            <div className="flex gap-6">
                                {[
                                    { icon: <Instagram size={20} />, url: "https://www.instagram.com/housemate_realtors" },
                                    { icon: <Facebook size={20} />, url: "https://www.facebook.com/HouseMateRealtors" },
                                    { icon: <Linkedin size={20} />, url: "#" }
                                ].map((item, i) => (
                                    <a key={i} href={item.url} target="_blank" rel="noopener" className="p-4 bg-slate hover:bg-gold hover:text-navy transition-all rounded-lg text-sand/60">
                                        {item.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-slate p-8 md:p-12 rounded-lg border border-sand/5"
                    >
                        <h3 className="text-2xl font-display text-sand mb-8">Send an Inquiry</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="text-[10px] uppercase tracking-widest text-gold font-bold mb-2 block">Full Name</label>
                                    <input
                                        {...register("name", { required: true })}
                                        className="w-full bg-navy border border-sand/10 p-4 text-sand text-sm focus:border-gold outline-none transition-colors"
                                        placeholder="John Doe"
                                    />
                                    {errors.name && <span className="text-red-500 text-[10px] mt-1">This field is required</span>}
                                </div>
                                <div>
                                    <label className="text-[10px] uppercase tracking-widest text-gold font-bold mb-2 block">Phone Number</label>
                                    <input
                                        {...register("phone", { required: true })}
                                        className="w-full bg-navy border border-sand/10 p-4 text-sand text-sm focus:border-gold outline-none transition-colors"
                                        placeholder="+91 XXXXX XXXXX"
                                    />
                                    {errors.phone && <span className="text-red-500 text-[10px] mt-1">This field is required</span>}
                                </div>
                            </div>

                            <div>
                                <label className="text-[10px] uppercase tracking-widest text-gold font-bold mb-2 block">Interest</label>
                                <select
                                    {...register("interest")}
                                    className="w-full bg-navy border border-sand/10 p-4 text-sand text-sm focus:border-gold outline-none transition-colors"
                                >
                                    <option value="buy">Buying Property</option>
                                    <option value="sell">Selling Property</option>
                                    <option value="rent">Rental Interest</option>
                                    <option value="interiors">Interior Design</option>
                                    <option value="construction">Construction Services</option>
                                </select>
                            </div>

                            <div>
                                <label className="text-[10px] uppercase tracking-widest text-gold font-bold mb-2 block">Message</label>
                                <textarea
                                    {...register("message")}
                                    rows="5"
                                    className="w-full bg-navy border border-sand/10 p-4 text-sand text-sm focus:border-gold outline-none transition-colors"
                                    placeholder="Tell us more about your requirement..."
                                />
                            </div>

                            <button type="submit" className="w-full bg-gold hover:bg-yellow-600 text-navy font-bold py-5 flex items-center justify-center gap-3 uppercase tracking-widest text-xs transition-all">
                                Submit Inquiry <Send size={16} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>

            {/* Map Section Placeholder */}
            <section className="h-[400px] w-full bg-slate flex items-center justify-center border-t border-sand/5">
                <div className="text-center text-sand/20">
                    <MapPin size={48} className="mx-auto mb-4" />
                    <span className="uppercase tracking-[0.3em] text-sm">Interactive Pune Map Integration</span>
                </div>
            </section>
        </div>
    );
};

export default Contact;
