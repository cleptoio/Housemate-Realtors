import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { X, Send, Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';
import { useUI } from '../../context/UIContext';

const ContactModal = () => {
    const { isContactModalOpen, closeContactModal } = useUI();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        alert("Strategic Inquiry Received. Your request has been routed to info@housematerealtors.com. An advisor will contact you within 24 hours.");
        reset();
        closeContactModal();
    };

    return (
        <AnimatePresence>
            {isContactModalOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeContactModal}
                        className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-[200]"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 30 }}
                        className="fixed inset-0 m-auto w-[94%] md:w-full max-w-5xl h-fit max-h-[90vh] overflow-y-auto bg-navy border border-gold/20 z-[210] rounded-xl shadow-[0_0_150px_rgba(212,175,55,0.15)] p-8 md:p-16"
                    >
                        <button
                            onClick={closeContactModal}
                            className="absolute top-8 right-8 text-white/20 hover:text-gold transition-colors p-3"
                        >
                            <X size={28} />
                        </button>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                            <div>
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="h-[1px] w-12 bg-gold" />
                                    <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-accent font-bold">Executive Consultation</span>
                                </div>
                                <h2 className="text-5xl md:text-7xl font-display text-white mb-10 leading-[0.9] tracking-tighter uppercase">SECURE YOUR <br /><span className="text-gold italic font-light">VISION.</span></h2>
                                <p className="text-white/50 text-lg leading-relaxed mb-12 font-light tracking-wide italic">
                                    Direct access to our strategic advisory board. Share your portfolio requirements and receive a tactical evaluation from our core partners.
                                </p>

                                <div className="space-y-8 pt-12 border-t border-gold/10">
                                    <div className="flex items-center gap-6 group">
                                        <div className="p-4 bg-gold/5 rounded-full border border-gold/10 group-hover:bg-gold group-hover:text-navy transition-all duration-500 shadow-lg">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-[0.4em] text-gold/40 mb-1">Direct Line</p>
                                            <p className="text-white font-bold tracking-widest">+91 81493 88788</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6 group">
                                        <div className="p-4 bg-gold/5 rounded-full border border-gold/10 group-hover:bg-gold group-hover:text-navy transition-all duration-500 shadow-lg">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-[0.4em] text-gold/40 mb-1">Corporate Mailing</p>
                                            <p className="text-white font-bold tracking-widest">info@housematerealtors.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6 group">
                                        <div className="p-4 bg-gold/5 rounded-full border border-gold/10 shadow-lg">
                                            <ShieldCheck size={24} className="text-gold" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-[0.4em] text-gold/40 mb-1">Status</p>
                                            <p className="text-white font-bold tracking-widest uppercase">Verified Authority</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute -inset-10 bg-gold/5 blur-[100px] -z-10 opacity-30" />
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 bg-black/40 p-10 md:p-14 rounded-2xl border border-white/5 shadow-2xl">
                                    <div className="space-y-6">
                                        <div className="relative group">
                                            <label className="text-[9px] uppercase tracking-[0.5em] text-gold/60 mb-3 block font-bold transition-colors group-focus-within:text-gold">Principal Name</label>
                                            <input
                                                {...register("name", { required: true })}
                                                placeholder="Enter full name"
                                                className="w-full bg-navy border-b border-white/10 p-4 text-white text-sm focus:border-gold outline-none transition-all placeholder:text-white/10"
                                            />
                                            {errors.name && <span className="text-error text-[9px] mt-2 block font-black uppercase tracking-widest">Required</span>}
                                        </div>
                                        <div className="relative group">
                                            <label className="text-[9px] uppercase tracking-[0.5em] text-gold/60 mb-3 block font-bold transition-colors group-focus-within:text-gold">Contact Vector</label>
                                            <input
                                                {...register("phone", { required: true })}
                                                placeholder="+91 Contact Number"
                                                className="w-full bg-navy border-b border-white/10 p-4 text-white text-sm focus:border-gold outline-none transition-all placeholder:text-white/10"
                                            />
                                            {errors.phone && <span className="text-error text-[9px] mt-2 block font-black uppercase tracking-widest">Required</span>}
                                        </div>
                                        <div className="relative group">
                                            <label className="text-[9px] uppercase tracking-[0.5em] text-gold/60 mb-3 block font-bold transition-colors group-focus-within:text-gold">Asset Segment</label>
                                            <select
                                                {...register("interest")}
                                                className="w-full bg-navy border-b border-white/10 p-4 text-white text-sm focus:border-gold outline-none transition-all cursor-pointer appearance-none"
                                            >
                                                <option className="bg-navy" value="buy">Strategic Acquisition</option>
                                                <option className="bg-navy" value="sell">Asset Liquidation</option>
                                                <option className="bg-navy" value="rent">Portfolio Hosting</option>
                                                <option className="bg-navy" value="interiors">Architectural Design</option>
                                                <option className="bg-navy" value="construction">Civil Redesign</option>
                                            </select>
                                        </div>
                                        <div className="relative group">
                                            <label className="text-[9px] uppercase tracking-[0.5em] text-gold/60 mb-3 block font-bold transition-colors group-focus-within:text-gold">Strategic Brief</label>
                                            <textarea
                                                {...register("message")}
                                                rows="3"
                                                placeholder="Briefly describe your property goal..."
                                                className="w-full bg-navy border-b border-white/10 p-4 text-white text-sm focus:border-gold outline-none transition-all resize-none placeholder:text-white/10"
                                            />
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-gold hover:bg-white text-navy font-black py-8 flex items-center justify-center gap-4 uppercase tracking-[0.5em] text-[10px] transition-all duration-500 shadow-[0_20px_40px_rgba(212,175,55,0.2)] hover:shadow-[0_20px_60px_rgba(212,175,55,0.4)]"
                                    >
                                        SECURE CONSULTATION <Send size={16} />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ContactModal;
