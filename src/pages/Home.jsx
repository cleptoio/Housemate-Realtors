import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Star, Shield, Layout as LayoutIcon, Home as HomeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { useUI } from '../context/UIContext';

const ProjectCard = ({ project }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group relative overflow-hidden bg-slate border border-sand/5"
    >
        <div className="aspect-[4/5] overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-60" />
        </div>
        <div className="absolute bottom-0 left-0 p-8 w-full transform transition-transform duration-500">
            <span className="text-gold text-[10px] uppercase tracking-widest font-bold mb-3 block drop-shadow-md">{project.category}</span>
            <h3 className="text-2xl font-display text-sand mb-4 drop-shadow-md">{project.title}</h3>
            <Link to={`/projects/${project.id}`} className="inline-flex items-center gap-2 text-sand text-[10px] uppercase tracking-widest font-bold hover:text-gold transition-colors">
                View Project <ChevronRight size={14} />
            </Link>
        </div>
    </motion.div>
);

const Home = () => {
    const { openContactModal } = useUI();
    const featuredProjects = projects.slice(0, 3);

    return (
        <div className="bg-navy">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/assets/images/luxury-building.png"
                        alt="Hero Background"
                        className="w-full h-full object-cover opacity-40 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/60 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="max-w-3xl"
                    >
                        <span className="text-gold uppercase tracking-[0.3em] text-[10px] md:text-sm font-bold mb-6 block drop-shadow-sm">Pune's Premier Property Advisory</span>
                        <h1 className="text-4xl md:text-8xl font-display text-sand mb-8 leading-[1.1] drop-shadow-xl">
                            Building <span className="text-gold italic">Excellence</span> <br className="hidden md:block" /> Under One Roof.
                        </h1>
                        <p className="text-muted text-sm md:text-xl mb-12 leading-relaxed max-w-xl drop-shadow-sm">
                            From premium construction and interior design to high-yield investment advisory. We turn property visions into reality.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <button
                                onClick={openContactModal}
                                className="bg-gold hover:bg-yellow-600 text-navy px-10 py-5 font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-all shadow-2xl"
                            >
                                Start Your Journey <ArrowRight size={18} />
                            </button>
                            <Link to="/projects" className="border border-sand/20 hover:border-gold px-10 py-5 text-sand font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-all backdrop-blur-sm">
                                View Portfolio
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Service Strip */}
            <section className="bg-slate py-12 border-y border-sand/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: 'Construction', icon: <HomeIcon size={20} /> },
                            { label: 'Real Estate Sales', icon: <Star size={20} /> },
                            { label: 'Rentals & Management', icon: <Shield size={20} /> },
                            { label: 'Interior Design', icon: <LayoutIcon size={20} /> }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center md:flex-row gap-4 group cursor-default">
                                <div className="p-3 bg-navy text-gold group-hover:bg-gold group-hover:text-navy transition-colors duration-500 rounded-sm">
                                    {item.icon}
                                </div>
                                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-sand/60 group-hover:text-gold transition-colors text-center md:text-left">
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="py-32 bg-navy">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                        <div className="max-w-xl">
                            <span className="text-gold uppercase tracking-[0.2em] text-[10px] font-bold mb-4 block">Curated Selection</span>
                            <h2 className="text-4xl md:text-6xl font-display text-sand leading-tight">Featured <br /> <span className="text-gold italic">Developments</span></h2>
                        </div>
                        <Link to="/projects" className="text-gold text-[10px] uppercase tracking-widest font-bold border-b border-gold/30 pb-2 hover:border-gold transition-all mb-2">
                            Explore All Projects
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {featuredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-32 bg-slate overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative z-10"
                        >
                            <img src="/assets/images/godrej_ivara_hero.png" alt="Why Housemate" className="rounded-sm shadow-2xl w-full" />
                            <div className="absolute -bottom-10 -right-10 p-12 bg-gold text-navy hidden md:block">
                                <p className="text-5xl font-display font-bold mb-2">10+</p>
                                <p className="uppercase tracking-widest text-[10px] font-bold">Years of Trust</p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="space-y-8">
                        <span className="text-gold uppercase tracking-[0.2em] text-[10px] font-bold block">The Housemate Advantage</span>
                        <h2 className="text-3xl md:text-5xl font-display text-sand leading-tight">Expertise across the <span className="text-gold italic">entire lifecycle</span> of property.</h2>
                        <p className="text-muted text-sm md:text-base leading-relaxed">
                            We provide a seamless 'Under One Roof' experience. From evaluating land and managing construction to designing premium interiors and securing the best sales or rental deals.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-sand/5">
                            <div>
                                <h4 className="text-sand font-bold text-sm tracking-widest uppercase mb-3">RERA Certified</h4>
                                <p className="text-xs text-muted leading-relaxed">Complete legal transparency and compliance for every transaction.</p>
                            </div>
                            <div>
                                <h4 className="text-sand font-bold text-sm tracking-widest uppercase mb-3">Pune Experts</h4>
                                <p className="text-xs text-muted leading-relaxed">Hyper-local knowledge of Kharadi, Baner, and upcoming growth corridors.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="py-32 bg-gold text-navy text-center">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-display mb-8">Ready to secure your <br /> dream property?</h2>
                    <p className="font-bold uppercase tracking-[.3em] text-[10px] mb-12 opacity-80">Book a private consultation today</p>
                    <button
                        onClick={openContactModal}
                        className="inline-flex bg-navy text-sand px-12 py-6 font-bold uppercase tracking-widest text-[10px] md:text-xs hover:scale-105 transition-transform shadow-xl"
                    >
                        Connect with Experts
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Home;
