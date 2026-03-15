import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { useUI } from '../context/UIContext';
import { MapPin, FileText, CheckCircle2, ArrowLeft, Send, Sparkles, Layout } from 'lucide-react';

const ProjectDetail = () => {
    const { id } = useParams();
    const { openContactModal } = useUI();
    const project = projects.find(p => p.id === parseInt(id));

    if (!project) return (
        <div className="py-40 text-center bg-navy min-h-screen flex flex-col items-center justify-center">
            <h2 className="text-sand font-display text-4xl mb-6 tracking-tighter uppercase">Project Not Found</h2>
            <Link to="/projects" className="text-cyan uppercase tracking-[0.3em] font-black text-xs border-b border-cyan/40 pb-2 hover:border-cyan transition-all">TERMINATE & RETURN</Link>
        </div>
    );

    return (
        <div className="bg-navy min-h-screen text-sand overflow-x-hidden">
            {/* Hero */}
            <section className="relative h-[75vh] flex items-end pb-20 md:pb-32 overflow-hidden">
                <div className="absolute inset-0">
                    <img src={project.heroImage} alt={project.title} className="w-full h-full object-cover grayscale-[20%]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-transparent shadow-[inset_0_-100px_100px_rgba(26,26,46,0.8)]" />
                    <div className="absolute inset-0 bg-cyan/5" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                    <Link to="/projects" className="group inline-flex items-center gap-3 text-cyan text-[10px] uppercase tracking-[0.4em] font-black mb-12 hover:text-white transition-all">
                        <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" /> BACK TO THE ARCHIVE
                    </Link>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-[2px] w-8 bg-cyan shadow-[0_0_10px_#00F2EA]" />
                        <span className="text-cyan uppercase tracking-[0.5em] text-[10px] md:text-sm font-black drop-shadow-md">{project.tag || project.category}</span>
                    </div>
                    <h1 className="text-5xl md:text-9xl font-display text-white mb-8 border-b border-white/5 pb-10 leading-[0.9]">{project.title.toUpperCase()}</h1>
                    <div className="flex items-center gap-4 text-cyan text-xs md:text-sm font-black uppercase tracking-[0.3em] drop-shadow-[0_0_10px_rgba(0,242,234,0.3)]">
                        <MapPin size={20} /> {project.location}
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-24 md:py-40 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-24">
                <div className="lg:col-span-2 space-y-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-2 mb-10">
                            <Sparkles size={20} className="text-cyan" />
                            <h2 className="text-3xl font-display text-white uppercase tracking-tighter">STRATEGIC OVERVIEW</h2>
                        </div>
                        <p className="text-muted text-lg md:text-xl leading-relaxed font-light first-letter:text-5xl first-letter:font-display first-letter:text-cyan first-letter:mr-4 first-letter:float-left first-letter:leading-none">{project.description}</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {project.highlights.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex gap-6 p-8 md:p-10 bg-deep/20 border border-cyan/5 rounded-xl group hover:border-cyan/30 transition-all shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                            >
                                <CheckCircle2 className="text-cyan shrink-0 mt-1 shadow-[0_0_15px_rgba(0,242,234,0.3)]" size={24} />
                                <span className="text-sand/80 text-sm md:text-base font-light leading-relaxed group-hover:text-sand transition-colors">{item}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Visual Strip */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="p-1 border border-cyan/10 rounded-2xl overflow-hidden"
                    >
                        <img src={project.heroImage} className="w-full h-[400px] object-cover rounded-xl grayscale-[40%] hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100" />
                    </motion.div>
                </div>

                {/* Sidebar */}
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="sticky top-40 p-10 md:p-12 bg-deep/40 backdrop-blur-3xl border border-cyan/20 rounded-2xl shadow-[0_40px_80px_rgba(0,0,0,0.6)] overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan/5 rounded-full -mr-16 -mt-16 blur-2xl" />
                        <div className="flex items-center gap-3 mb-12">
                            <Layout size={20} className="text-cyan shadow-[0_0_10px_#00F2EA]" />
                            <h3 className="text-2xl font-display text-white uppercase tracking-tighter">ASSET SPECS</h3>
                        </div>

                        <div className="space-y-8">
                            {Object.entries(project.specs).map(([key, value]) => (
                                <div key={key} className="flex justify-between items-center border-b border-cyan/5 pb-5 group">
                                    <span className="text-muted text-[10px] uppercase tracking-[0.3em] font-black group-hover:text-cyan transition-colors">{key}</span>
                                    <span className="text-white text-sm font-display font-medium tracking-wide">{value}</span>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-4 pt-16">
                            <a
                                href={project.brochure}
                                target="_blank"
                                rel="noopener"
                                className="w-full bg-cyan/5 hover:bg-cyan/10 text-cyan font-black py-6 px-6 flex items-center justify-center gap-3 uppercase tracking-[0.3em] text-[10px] transition-all border border-cyan/20 group rounded-sm shadow-xl"
                            >
                                ACCESS BLUEPRINT <FileText size={16} className="group-hover:translate-y-1 transition-transform" />
                            </a>

                            <button
                                onClick={openContactModal}
                                className="w-full bg-cyan hover:bg-white text-navy font-black py-7 px-6 flex items-center justify-center gap-3 uppercase tracking-[0.3em] text-[10px] transition-all shadow-[0_0_30px_rgba(0,242,234,0.3)] hover:shadow-[0_0_50px_rgba(0,242,234,0.5)] rounded-sm"
                            >
                                CONSULT EXPERT <Send size={14} className="group-hover:rotate-12 transition-transform" />
                            </button>
                        </div>

                        <p className="mt-10 text-[9px] text-center text-cyan/40 uppercase tracking-[0.4em] font-black">Direct Inquiry: info@housematerealtors.com</p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetail;
