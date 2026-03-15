import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';
import { ArrowRight, Filter, Sparkles } from 'lucide-react';

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
        <div className="bg-navy min-h-screen text-sand font-sans">
            {/* Page Header */}
            <section className="py-32 md:py-48 bg-deep/30 border-b border-gold/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 blur-[120px]" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-[2px] w-12 bg-gold shadow-[0_0_10px_#D4AF37]" />
                            <span className="text-gold uppercase tracking-[0.5em] text-[10px] md:text-sm font-black">Strategic Portfolio</span>
                        </div>
                        <h1 className="text-5xl md:text-9xl font-display text-white mb-10 leading-[0.85] tracking-tighter">THE <br /><span className="text-gold italic font-light">ARCHIVE.</span></h1>
                        <p className="text-muted text-lg md:text-2xl leading-relaxed max-w-2xl font-light">
                            A curated selection of Pune's most distinguished properties, high-scale construction developments, and breathtaking interior transformations.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filter Bar */}
            <section className="sticky top-20 md:top-24 z-30 bg-navy/90 backdrop-blur-2xl py-8 border-b border-gold/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    <div className="flex items-center gap-3 text-gold">
                        <Filter size={18} />
                        <span className="text-[10px] uppercase tracking-[0.3em] font-black">Segment Analysis:</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-8 py-3 text-[9px] font-black uppercase tracking-[0.25em] transition-all rounded-full border ${activeFilter === filter
                                    ? 'bg-gold border-gold text-navy shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                                    : 'border-gold/10 text-sand/40 hover:border-gold hover:text-gold'
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
                    >
                        {filteredProjects.map((project, i) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.6, delay: i * 0.05 }}
                                className="group relative overflow-hidden bg-deep/20 aspect-[4/5] rounded-2xl border border-gold/5 hover:border-gold/30 transition-all duration-700 shadow-3xl"
                            >
                                <img
                                    src={project.heroImage}
                                    alt={project.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent opacity-90" />
                                <div className="absolute inset-0 bg-gold/5 group-hover:bg-gold/10 transition-colors duration-700" />

                                <div className="absolute bottom-0 left-0 p-10 w-full transform transition-all duration-700">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="h-[1px] w-6 bg-gold/60 shadow-[0_0_8px_#D4AF37]" />
                                        <span className="text-gold text-[9px] font-black uppercase tracking-[0.4em] drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">{project.tag}</span>
                                    </div>
                                    <h3 className="text-3xl font-display text-white mb-6 uppercase tracking-tight group-hover:text-gold transition-colors">{project.title}</h3>
                                    <p className="text-muted text-[11px] mb-10 line-clamp-2 font-light opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700 leading-relaxed">{project.description}</p>
                                    <Link
                                        to={`/projects/${project.id}`}
                                        className="inline-flex items-center gap-3 text-white text-[10px] font-black uppercase tracking-[0.4em] group/btn border-b border-gold/20 pb-2 hover:border-gold hover:text-gold transition-all"
                                    >
                                        ANALYZE ASSET <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                                    </Link>
                                </div>

                                <div className="absolute top-8 right-8 p-3 bg-navy/60 backdrop-blur-md rounded-full border border-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <Sparkles size={16} className="text-gold" />
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
