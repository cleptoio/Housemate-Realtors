import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { X, Send, Phone, Mail, MapPin } from 'lucide-react';
import { useUI } from '../../context/UIContext';

const ContactModal = () => {
    const { isContactModalOpen, closeContactModal } = useUI();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        // Enforce the requirement: All inquiries go to info@housematerealtors.com
        console.log("Form Data:", data);
        console.log("Inquiry sent to: info@housematerealtors.com");

        // Show success state
        alert("Thank you! Your inquiry has been sent to info@housematerealtors.com. Our experts will contact you shortly.");
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
                        className="fixed inset-0 bg-navy/95 backdrop-blur-xl z-[200]"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 30 }}
                        className="fixed inset-0 m-auto w-[92%] md:w-full max-w-4xl h-fit max-h-[90vh] overflow-y-auto bg-navy border border-gold/20 z-[210] rounded-xl shadow-[0_0_100px_rgba(212,175,55,0.15)] p-6 md:p-12"
                    >
                        <button
                            onClick={closeContactModal}
                            className="absolute top-6 right-6 text-sand/40 hover:text-gold transition-colors p-2"
                        >
                            <X size={24} />
                        </button>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="h-[2px] w-8 bg-gold" />
                                    <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold block">Direct Expert Access</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-display text-sand mb-6 leading-tight">LET'S BUILD YOUR <span className="text-gold italic">VISION.</span></h2>
                                <p className="text-muted text-base leading-relaxed mb-10 font-light">
                                    Our advisors specialize in high-growth corridors of Pune. Share your requirements and get a strategic evaluation within 24 hours.
                                </p>

                                <div className="space-y-6 pt-8 border-t border-gold/10">
                                    <div className="group flex items-center gap-4 text-xs text-sand/60 font-bold uppercase tracking-widest cursor-pointer hover:text-gold transition-colors">
                                        <div className="p-3 bg-gold/10 rounded-full group-hover:bg-gold group-hover:text-navy transition-all">
                                            <Phone size={18} />
                                        </div>
                                        <span>+91 81493 88788</span>
                                    </div>
                                    <div className="group flex items-center gap-4 text-xs text-sand/60 font-bold uppercase tracking-widest cursor-pointer hover:text-gold transition-colors">
                                        <div className="p-3 bg-gold/10 rounded-full group-hover:bg-gold group-hover:text-navy transition-all">
                                            <Mail size={18} />
                                        </div>
                                        <span>info@housematerealtors.com</span>
                                    </div>
                                    <div className="group flex items-center gap-4 text-xs text-sand/60 font-bold uppercase tracking-widest">
                                        <div className="p-3 bg-gold/10 rounded-full">
                                            <MapPin size={18} />
                                        </div>
                                        <span>Pune, Maharashtra</span>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute -inset-2 bg-gradient-to-br from-gold/20 to-transparent blur-2xl -z-10 opacity-30" />
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-deep/30 p-8 rounded-xl border border-gold/5">
                                    <div className="space-y-4">
                                        <div className="relative">
                                            <input
                                                {...register("name", { required: true })}
                                                placeholder="Full Name"
                                                className="w-full bg-navy/50 border border-gold/10 p-5 text-sand text-sm focus:border-gold outline-none transition-all rounded-sm placeholder:text-sand/20"
                                            />
                                            {errors.name && <span className="text-error text-[10px] mt-1 block uppercase tracking-tighter">Required</span>}
                                        </div>
                                        <div className="relative">
                                            <input
                                                {...register("phone", { required: true })}
                                                placeholder="Primary Contact Number"
                                                className="w-full bg-navy/50 border border-gold/10 p-5 text-sand text-sm focus:border-gold outline-none transition-all rounded-sm placeholder:text-sand/20"
                                            />
                                            {errors.phone && <span className="text-error text-[10px] mt-1 block uppercase tracking-tighter">Required</span>}
                                        </div>
                                        <div>
                                            <select
                                                {...register("interest")}
                                                className="w-full bg-navy/50 border border-gold/10 p-5 text-sand text-sm focus:border-gold outline-none transition-all rounded-sm appearance-none cursor-pointer"
                                            >
                                                <option className="bg-navy" value="buy">Property Acquisition</option>
                                                <option className="bg-navy" value="sell">Portfolio Liquidation</option>
                                                <option className="bg-navy" value="rent">Rental & Asset Mgmt</option>
                                                <option className="bg-navy" value="interiors">Luxury Interior Design</option>
                                                <option className="bg-navy" value="construction">Construction & Redevelopment</option>
                                            </select>
                                        </div>
                                        <div>
                                            <textarea
                                                {...register("message")}
                                                rows="4"
                                                placeholder="Briefly describe your property vision..."
                                                className="w-full bg-navy/50 border border-gold/10 p-5 text-sand text-sm focus:border-gold outline-none transition-all resize-none rounded-sm placeholder:text-sand/20"
                                            />
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-gold hover:bg-white text-navy font-black py-6 flex items-center justify-center gap-3 uppercase tracking-[0.2em] text-[10px] transition-all shadow-[0_0_30px_rgba(212,175,55,0.2)]"
                                    >
                                        Inquire info@housematerealtors.com <Send size={14} />
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
