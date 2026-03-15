import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';
import { ArrowRight, Filter, Sparkles, LayoutGrid } from 'lucide-react';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const filters = ['All', 'Residential', 'Interiors', 'Ongoing', 'Completed'];

    const filteredProjects = projects.filter(project => {
        if (activeFilter === 'All') return true;
        if (activeFilter === 'Residential') return project.type === 'Residential';
        if (activeFilter === 'Interiors') return project.type === 'Interior';
        if (activeFilter === 'Ongoing') return project.status.toLowerCase().includes('ongoing') || project.status.toLowerCase().includes('possession');
        if (activeFilter === 'Completed') return project.status.toLowerCase().includes('completed');
        return true;
    });

    return (
        <div className="bg-navy min-h-screen text-sand font-sans overflow-x-hidden">
            {/* Page Header */}
            <section className="py-40 md:py-60 bg-black border-b border-gold/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 blur-[150px] pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="max-w-5xl">
                        <div className="flex items-center gap-6 mb-12">
                            <div className="h-[1px] w-16 bg-gold shadow-[0_0_15px_#D4AF37]" />
                            <span className="text-gold uppercase tracking-[0.6em] text-xs font-accent font-black">Strategic Assets</span>
                        </div>
                        <h1 className="text-6xl md:text-[9rem] font-display text-white mb-12 leading-[0.85] tracking-tighter uppercase">THE <br /><span className="text-gold italic font-light">ARCHIVE.</span></h1>
                        <p className="text-white/50 text-xl md:text-3xl leading-relaxed max-w-3xl font-light tracking-wide italic">
                            A curated selection of Pune's most distinguished properties and architectural landmarks.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filter Bar - Luxury Design */}
            <section className="sticky top-20 md:top-24 z-30 bg-black/95 backdrop-blur-3xl py-10 border-b border-gold/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
                <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="flex items-center gap-5 text-gold">
                        <LayoutGrid size={24} />
                        <span className="text-[11px] uppercase tracking-[0.5em] font-accent font-bold">Market Segmentation</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-10 py-4 text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-500 rounded-sm border ${activeFilter === filter
                                    ? 'bg-gold border-gold text-navy shadow-xl scale-105'
                                    : 'border-white/10 text-white/40 hover:border-gold hover:text-gold'
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="max-w-7xl mx-auto px-6 py-40 md:py-60">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-24"
                    >
                        {filteredProjects.map((project, i) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.8, delay: i * 0.05 }}
                                className="group relative overflow-hidden aspect-[4/5] rounded-3xl border border-white/5 bg-deep/50 hover:border-gold/30 transition-all duration-1000 shadow-4xl"
                            >
                                <img
                                    src={project.heroImage}
                                    alt={project.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 grayscale-[40%] group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700" />

                                <div className="absolute bottom-0 left-0 p-12 w-full transform transition-all duration-700">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="h-[1px] w-8 bg-gold/60 shadow-[0_0_10px_#D4AF37]" />
                                        <span className="text-gold text-[10px] font-accent font-black uppercase tracking-[0.5em]">{project.tag}</span>
                                    </div>
                                    <h3 className="text-4xl font-display text-white mb-8 uppercase tracking-tighter leading-tight group-hover:text-gold transition-colors duration-500">{project.title}</h3>

                                    <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-1000">
                                        <p className="text-white/40 text-sm mb-12 font-light leading-relaxed italic border-l border-gold/20 pl-6">{project.description}</p>
                                    </div>

                                    <Link
                                        to={`/projects/${project.id}`}
                                        className="inline-flex items-center gap-4 text-white text-[11px] font-black uppercase tracking-[0.5em] group/btn border-b border-white/10 pb-3 hover:border-gold hover:text-gold transition-all duration-500"
                                    >
                                        ANALYZE ASSET <ArrowRight size={18} className="group-hover/btn:translate-x-4 transition-transform duration-500" />
                                    </Link>
                                </div>

                                <div className="absolute top-10 right-10 p-4 bg-black/60 backdrop-blur-md rounded-full border border-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 shadow-2xl">
                                    <Sparkles size={20} className="text-gold" />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </section>
        </div>
    );
};

export default Projects;
