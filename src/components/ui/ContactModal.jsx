import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { X, Send, Phone, Mail, MapPin } from 'lucide-react';
import { useUI } from '../../context/UIContext';

const ContactModal = () => {
    const { isContactModalOpen, closeContactModal } = useUI();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        alert("Thank you! Your inquiry has been sent.");
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
                        className="fixed inset-0 bg-navy/90 backdrop-blur-md z-[200]"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed inset-0 m-auto w-full max-w-4xl h-fit max-h-[90vh] overflow-y-auto bg-slate z-[210] rounded-sm border border-sand/10 shadow-2xl p-6 md:p-12"
                    >
                        <button
                            onClick={closeContactModal}
                            className="absolute top-6 right-6 text-sand/40 hover:text-gold transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <span className="text-gold uppercase tracking-[0.2em] text-[10px] font-bold mb-4 block">Quick Inquiry</span>
                                <h2 className="text-4xl font-display text-sand mb-6">Let's Discuss Your <span className="text-gold italic">Requirement</span></h2>
                                <p className="text-muted text-sm leading-relaxed mb-8">
                                    Fill out the form below and our property experts will get back to you within 24 hours.
                                </p>

                                <div className="space-y-4 pt-4 border-t border-sand/5">
                                    <div className="flex items-center gap-4 text-xs text-sand/60 font-bold uppercase tracking-widest">
                                        <Phone size={16} className="text-gold" /> +91 81493 88788
                                    </div>
                                    <div className="flex items-center gap-4 text-xs text-sand/60 font-bold uppercase tracking-widest">
                                        <Mail size={16} className="text-gold" /> info@housematerealtors.com
                                    </div>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                                <div className="space-y-4">
                                    <div>
                                        <input
                                            {...register("name", { required: true })}
                                            placeholder="Your Full Name"
                                            className="w-full bg-navy/30 border border-sand/10 p-4 text-sand text-sm focus:border-gold outline-none transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            {...register("phone", { required: true })}
                                            placeholder="Phone Number"
                                            className="w-full bg-navy/30 border border-sand/10 p-4 text-sand text-sm focus:border-gold outline-none transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <select
                                            {...register("interest")}
                                            className="w-full bg-navy/30 border border-sand/10 p-4 text-sand text-sm focus:border-gold outline-none transition-colors appearance-none"
                                        >
                                            <option value="buy">Buying Property</option>
                                            <option value="sell">Selling Property</option>
                                            <option value="rent">Rentals</option>
                                            <option value="interiors">Interiors</option>
                                            <option value="construction">Construction</option>
                                        </select>
                                    </div>
                                    <div>
                                        <textarea
                                            {...register("message")}
                                            rows="3"
                                            placeholder="Message (Optional)"
                                            className="w-full bg-navy/30 border border-sand/10 p-4 text-sand text-sm focus:border-gold outline-none transition-colors resize-none"
                                        />
                                    </div>
                                </div>
                                <button type="submit" className="w-full bg-gold hover:bg-yellow-600 text-navy font-bold py-4 flex items-center justify-center gap-3 uppercase tracking-widest text-xs transition-all">
                                    Submit Inquiry <Send size={14} />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ContactModal;
