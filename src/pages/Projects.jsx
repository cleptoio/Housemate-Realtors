import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';
import { ArrowRight, Filter } from 'lucide-react';

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
        <div className="bg-navy min-h-screen pb-32">
            {/* Page Header */}
            <section className="py-24 bg-slate border-b border-sand/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-3xl">
                        <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-4 block">Portfolio</span>
                        <h1 className="text-5xl md:text-7xl font-display text-sand mb-8">Our <span className="text-gold italic">Work</span></h1>
                        <p className="text-muted text-lg leading-relaxed">
                            A curated selection of Pune's most distinguished properties, dynamic construction developments, and breathtaking interior transformations.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filter Bar */}
            <section className="sticky top-24 z-30 bg-navy/80 backdrop-blur-md py-6 border-b border-sand/5 mb-16">
                <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center gap-6">
                    <div className="flex items-center gap-2 text-gold mr-4">
                        <Filter size={16} />
                        <span className="text-[10px] uppercase tracking-widest font-bold">Filter By:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-6 py-2 text-[10px] uppercase tracking-widest transition-all rounded-full border ${activeFilter === filter
                                        ? 'bg-gold border-gold text-navy font-bold'
                                        : 'border-sand/10 text-sand/60 hover:border-sand/30'
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="max-w-7xl mx-auto px-6">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredProjects.map((project, i) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="group relative overflow-hidden bg-slate aspect-[4/5] rounded-lg"
                            >
                                <img
                                    src={project.heroImage}
                                    alt={project.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
                                <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="text-gold text-[10px] uppercase tracking-widest mb-3 block">{project.tag}</span>
                                    <h3 className="text-2xl font-display text-sand mb-2">{project.title}</h3>
                                    <p className="text-sand/50 text-[11px] mb-6 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity">{project.description}</p>
                                    <Link
                                        to={`/projects/${project.id}`}
                                        className="text-white text-[10px] uppercase tracking-[0.2em] flex items-center gap-2 group/btn font-bold"
                                    >
                                        Explore Project <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                                    </Link>
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
