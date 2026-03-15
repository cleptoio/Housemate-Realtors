import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { useUI } from '../context/UIContext';
import { MapPin, FileText, CheckCircle2, ArrowLeft, Send, Sparkles, Layout, Building2, Calendar, IndianRupee, Layers } from 'lucide-react';

const ProjectDetail = () => {
    const { id } = useParams();
    const { openContactModal } = useUI();
    const project = projects.find(p => p.id === id);

    if (!project) return (
        <div className="py-40 text-center bg-navy min-h-screen flex flex-col items-center justify-center font-sans">
            <Sparkles className="text-gold mx-auto mb-10 opacity-20" size={60} />
            <h2 className="text-white font-display text-5xl mb-10 tracking-tighter uppercase leading-none">PROJECT <br /><span className="text-gold italic font-light">NOT LOCATED.</span></h2>
            <p className="text-white/40 mb-12 font-light italic">The requested asset analysis is unavailable or restricted.</p>
            <Link to="/projects" className="text-gold uppercase tracking-[0.5em] font-black text-[10px] border-b border-gold/40 pb-3 hover:border-gold transition-all">RETURN TO THE ARCHIVE</Link>
        </div>
    );

    return (
        <div className="bg-navy min-h-screen text-sand font-sans overflow-x-hidden">
            {/* Hero Section - High Luxury */}
            <section className="relative h-[85vh] flex items-end pb-32 md:pb-48 overflow-hidden">
                <div className="absolute inset-0">
                    <img src={project.heroImage} alt={project.title} className="w-full h-full object-cover grayscale-[20%] transition-transform duration-[10s] hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                    <div className="absolute inset-0 bg-gold/5" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                    <Link to="/projects" className="group inline-flex items-center gap-4 text-gold text-[10px] uppercase tracking-[0.6em] font-black mb-16 hover:text-white transition-all duration-500">
                        <ArrowLeft size={18} className="group-hover:-translate-x-4 transition-transform duration-500" /> BACK TO THE ARCHIVE
                    </Link>
                    <div className="flex items-center gap-6 mb-10">
                        <div className="h-[1px] w-12 bg-gold shadow-[0_0_15px_#D4AF37]" />
                        <span className="text-gold uppercase tracking-[0.6em] text-xs font-accent font-black drop-shadow-2xl">{project.tag || project.type}</span>
                    </div>
                    <h1 className="text-6xl md:text-[10rem] font-display text-white mb-10 leading-[0.8] tracking-tighter uppercase drop-shadow-2xl">{project.title}</h1>
                    <div className="flex items-center gap-5 text-gold text-sm md:text-lg font-accent font-bold uppercase tracking-[0.4em] drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                        <MapPin size={24} /> {project.location}
                    </div>
                </div>
            </section>

            {/* Asset Intelligence */}
            <section className="py-40 md:py-60 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-32">
                <div className="lg:col-span-2 space-y-32">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <div className="flex items-center gap-4 mb-12">
                            <Sparkles size={32} className="text-gold" />
                            <h2 className="text-4xl font-display text-white uppercase tracking-tighter">STRATEGIC EVALUATION</h2>
                        </div>
                        <p className="text-white/60 text-xl md:text-2xl leading-relaxed font-light tracking-wide italic first-letter:text-6xl first-letter:font-display first-letter:text-gold first-letter:mr-6 first-letter:float-left first-letter:leading-none">{project.description}</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {project.highlights.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: i * 0.1 }}
                                className="flex gap-8 p-10 md:p-12 bg-deep/30 border border-white/5 rounded-3xl group hover:border-gold/30 transition-all duration-700 shadow-4xl relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -mr-16 -mt-16 group-hover:bg-gold/10 transition-colors" />
                                <CheckCircle2 className="text-gold shrink-0 mt-1 shadow-[0_0_20px_rgba(212,175,55,0.4)]" size={28} />
                                <div className="space-y-4 relative z-10">
                                    <h4 className="text-white font-accent uppercase tracking-widest text-xs">{item.title}</h4>
                                    <p className="text-white/40 text-sm font-light leading-relaxed group-hover:text-white/60 transition-colors">{item.detail}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Visual Command Strip */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5 }}
                        className="p-1 border border-gold/10 rounded-3xl overflow-hidden shadow-5xl group"
                    >
                        <img src={project.heroImage} className="w-full h-[550px] object-cover rounded-2xl grayscale-[30%] group-hover:grayscale-0 transition-all duration-[2s] scale-105 group-hover:scale-100" />
                    </motion.div>
                </div>

                {/* Tactical Sidebar */}
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="sticky top-40 p-12 md:p-16 bg-black border border-gold/20 rounded-3xl shadow-[0_50px_100px_rgba(0,0,0,0.8)] overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 rounded-full -mr-24 -mt-24 blur-[80px]" />
                        <div className="flex items-center gap-4 mb-16">
                            <Layout size={24} className="text-gold shadow-[0_0_15px_#D4AF37]" />
                            <h3 className="text-3xl font-display text-white uppercase tracking-tighter">ASSET SPECS</h3>
                        </div>

                        <div className="space-y-10">
                            {[
                                { icon: <Building2 size={16} />, label: "DEVELOPER", val: project.developer },
                                { icon: <Layers size={16} />, label: "CONFIG", val: project.config },
                                { icon: <Calendar size={16} />, label: "STATUS", val: project.status },
                                { icon: <IndianRupee size={16} />, label: "CAPITAL", val: project.price }
                            ].map((spec, i) => (
                                <div key={i} className="flex flex-col gap-4 border-b border-white/5 pb-8 group">
                                    <div className="flex items-center gap-3 text-gold/40 group-hover:text-gold transition-colors duration-500">
                                        {spec.icon}
                                        <span className="text-[10px] uppercase tracking-[0.5em] font-black">{spec.label}</span>
                                    </div>
                                    <span className="text-white text-xl font-display tracking-wide group-hover:translate-x-2 transition-transform duration-500">{spec.val}</span>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-6 pt-20">
                            {project.brochure && (
                                <a
                                    href={project.brochure}
                                    target="_blank"
                                    rel="noopener"
                                    className="w-full bg-deep hover:bg-gold/10 text-gold font-black py-7 px-8 flex items-center justify-center gap-4 uppercase tracking-[0.4em] text-[10px] transition-all duration-500 border border-gold/20 group rounded-sm shadow-2xl"
                                >
                                    THE BLUEPRINT <FileText size={18} className="group-hover:translate-y-2 transition-transform duration-500" />
                                </a>
                            )}

                            <button
                                onClick={openContactModal}
                                className="w-full bg-gold hover:bg-white text-navy font-black py-8 px-8 flex items-center justify-center gap-4 uppercase tracking-[0.5em] text-[10px] transition-all duration-500 shadow-[0_0_40px_rgba(212,175,55,0.3)] hover:shadow-[0_0_60px_rgba(212,175,55,0.5)] transform hover:-translate-y-1 rounded-sm"
                            >
                                SECURE ASSET <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                            </button>
                        </div>

                        <p className="mt-12 text-[10px] text-center text-gold/40 uppercase tracking-[0.6em] font-black italic">Confidential Routing Required</p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetail;
