import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { useUI } from '../context/UIContext';
import { MapPin, FileText, CheckCircle2, ArrowLeft, Send } from 'lucide-react';

const ProjectDetail = () => {
    const { id } = useParams();
    const { openContactModal } = useUI();
    const project = projects.find(p => p.id === parseInt(id));

    if (!project) return (
        <div className="py-40 text-center bg-navy min-h-screen flex flex-col items-center justify-center">
            <h2 className="text-sand font-display text-4xl mb-6">Project Not Found</h2>
            <Link to="/projects" className="text-gold uppercase tracking-widest text-xs border-b border-gold/40 pb-1">Back to Portfolio</Link>
        </div>
    );

    return (
        <div className="bg-navy min-h-screen">
            {/* Hero */}
            <section className="relative h-[65vh] flex items-end pb-12 overflow-hidden">
                <div className="absolute inset-0">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-50" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                    <Link to="/projects" className="inline-flex items-center gap-2 text-gold text-[10px] uppercase tracking-widest font-bold mb-8 hover:-translate-x-2 transition-transform">
                        <ArrowLeft size={16} /> Back to Portfolio
                    </Link>
                    <span className="text-gold uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold mb-4 block drop-shadow-md">{project.category}</span>
                    <h1 className="text-5xl md:text-8xl font-display text-sand mb-6 drop-shadow-xl leading-none">{project.title}</h1>
                    <div className="flex items-center gap-4 text-sand/80 text-xs md:text-sm font-bold uppercase tracking-widest drop-shadow-md">
                        <MapPin size={18} className="text-gold" /> {project.location}
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-20">
                <div className="lg:col-span-2 space-y-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-display text-sand mb-8 border-l-4 border-gold pl-6">Strategic Overview</h2>
                        <p className="text-muted text-lg leading-relaxed drop-shadow-sm">{project.description}</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {project.highlights.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex gap-4 p-8 bg-slate border border-sand/5 rounded-sm shadow-xl hover:border-gold/20 transition-all"
                            >
                                <CheckCircle2 className="text-gold shrink-0" size={24} />
                                <span className="text-sand/90 text-sm font-medium leading-relaxed">{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-10 bg-slate border border-gold/10 rounded-sm shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -mr-16 -mt-16" />
                        <h3 className="text-2xl font-display text-sand mb-10 relative z-10">Asset Details</h3>
                        <div className="space-y-6 relative z-10">
                            {Object.entries(project.specs).map(([key, value]) => (
                                <div key={key} className="flex justify-between items-center border-b border-sand/5 pb-4">
                                    <span className="text-muted text-[10px] uppercase tracking-widest font-black opacity-60">{key}</span>
                                    <span className="text-sand text-sm font-display font-medium">{value}</span>
                                </div>
                            ))}
                        </div>

                        <a
                            href={project.brochure}
                            target="_blank"
                            rel="noopener"
                            className="w-full bg-sand/5 hover:bg-gold/10 text-gold font-bold py-5 px-6 flex items-center justify-center gap-3 uppercase tracking-widest text-[10px] transition-all border border-gold/20 mt-12 mb-4 shadow-lg group"
                        >
                            Access Brochure <FileText size={16} className="group-hover:translate-y-1 transition-transform" />
                        </a>

                        <button
                            onClick={openContactModal}
                            className="w-full bg-gold hover:bg-yellow-600 text-navy font-bold py-6 px-6 flex items-center justify-center gap-3 uppercase tracking-widest text-[10px] transition-all shadow-xl hover:scale-[1.02]"
                        >
                            Enquire & Schedule <Send size={14} />
                        </button>
                </div>
        </div>
      </section >
    </div >
  );
};

export default ProjectDetail;
