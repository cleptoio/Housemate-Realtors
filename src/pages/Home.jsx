import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Star, Shield, Layout as LayoutIcon, Home as HomeIcon, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { useUI } from '../context/UIContext';

const ProjectCard = ({ project }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="group relative overflow-hidden bg-navy/50 border border-cyan/10 hover:border-cyan/40 transition-all duration-500 rounded-xl"
    >
        <div className="aspect-[4/5] overflow-hidden relative">
            <img src={project.heroImage} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent opacity-90" />
            <div className="absolute inset-0 bg-cyan/5 group-hover:bg-cyan/10 transition-colors duration-500" />
        </div>
        <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full transform transition-all duration-500">
            <span className="text-cyan text-[10px] uppercase tracking-widest font-bold mb-3 block drop-shadow-[0_0_8px_rgba(0,242,234,0.5)]">{project.tag || project.category}</span>
            <h3 className="text-xl md:text-2xl font-display text-sand mb-4 drop-shadow-md">{project.title}</h3>
            <Link to={`/projects/${project.id}`} className="inline-flex items-center gap-2 text-cyan text-[10px] uppercase tracking-widest font-bold hover:text-white transition-colors group/link">
                View Project <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
            </Link>
        </div>
    </motion.div>
);

const Home = () => {
    const { openContactModal } = useUI();
    const featuredProjects = projects.slice(0, 3);

    return (
        <div className="bg-navy selection:bg-cyan/30 text-sand overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative h-[90vh] md:h-screen flex items-center pt-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/assets/images/luxury-building.png"
                        alt="Hero Background"
                        className="w-full h-full object-cover opacity-25 scale-110 blur-[1px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/50" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-[2px] w-12 bg-cyan shadow-[0_0_10px_#00F2EA]" />
                            <span className="text-cyan uppercase tracking-[0.4em] text-[10px] md:text-sm font-bold drop-shadow-[0_0_10px_rgba(0,242,234,0.4)]">Pune's Premier Property Advisory</span>
                        </div>
                        <h1 className="text-4xl md:text-8xl font-display text-white mb-8 leading-[1.1] md:leading-[1.1] drop-shadow-2xl">
                            BUILDING <span className="text-cyan">EXCELLENCE</span> <br className="hidden md:block" /> UNDER <span className="text-cyan italic">ONE ROOF.</span>
                        </h1>
                        <p className="text-muted text-base md:text-xl mb-12 leading-relaxed max-w-xl font-light">
                            From premium construction and interior design to high-yield investment advisory. We turn property visions into reality in Pune's growth corridors.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <button
                                onClick={openContactModal}
                                className="bg-cyan hover:bg-white text-navy px-10 py-5 font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-all shadow-[0_0_30px_rgba(0,242,234,0.3)] hover:shadow-[0_0_40px_rgba(0,242,234,0.5)] rounded-sm"
                            >
                                Start Your Journey <ArrowRight size={18} />
                            </button>
                            <Link to="/projects" className="group border border-cyan/20 hover:border-cyan px-10 py-5 text-sand font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-all backdrop-blur-md rounded-sm">
                                View Portfolio <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Decorative Grid Bubbles */}
                <div className="absolute bottom-20 right-10 hidden lg:block opacity-10 pointer-events-none">
                    <div className="grid grid-cols-6 gap-6">
                        {[...Array(36)].map((_, i) => (
                            <div key={i} className="w-1.5 h-1.5 bg-cyan rounded-full animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Rapid Access - Mobile Optimized */}
            <section className="bg-deep/40 py-16 md:py-24 border-y border-cyan/10 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                        {[
                            { label: 'Construction', icon: <HomeIcon size={24} /> },
                            { label: 'Asset Advisory', icon: <Star size={24} /> },
                            { label: 'Management', icon: <Shield size={24} /> },
                            { label: 'Design Labs', icon: <LayoutIcon size={24} /> }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center gap-5 group cursor-pointer text-center" onClick={openContactModal}>
                                <div className="p-5 md:p-6 bg-navy/60 border border-cyan/20 text-cyan group-hover:bg-cyan group-hover:text-navy group-hover:border-cyan group-hover:shadow-[0_0_30px_#00F2EA33] transition-all duration-500 rounded-2xl">
                                    {item.icon}
                                </div>
                                <span className="text-[9px] md:text-xs uppercase tracking-[0.3em] font-black text-sand/40 group-hover:text-cyan transition-colors">
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Projects - Fix for missing images */}
            <section className="py-24 md:py-40 bg-navy relative">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-cyan/5 blur-[150px] -z-10" />
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-10">
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-[1px] w-8 bg-cyan/50" />
                                <span className="text-cyan uppercase tracking-[0.4em] text-[10px] font-bold">Portfolio Highlights</span>
                            </div>
                            <h2 className="text-4xl md:text-7xl font-display text-white leading-[1.1]">SIGNATURE <br /> <span className="text-cyan italic">PROJECTS.</span></h2>
                        </div>
                        <Link to="/projects" className="group text-cyan text-[10px] uppercase tracking-[0.3em] font-black border-b border-cyan/30 pb-3 hover:border-cyan hover:text-white transition-all flex items-center gap-3">
                            VIEW ALL COLLECTIONS <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {featuredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Premium Why Us Section */}
            <section className="py-24 md:py-40 bg-deep/20 overflow-hidden relative border-t border-cyan/10">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-32 items-center">
                    <div className="relative group">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative z-10"
                        >
                            <div className="absolute -inset-6 border border-cyan/10 translate-x-3 translate-y-3 -z-10 rounded-sm group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-700" />
                            <img
                                src="/assets/images/godrej_ivara_hero.png"
                                alt="Why Housemate"
                                className="rounded-sm shadow-2xl w-full grayscale-[40%] group-hover:grayscale-0 transition-all duration-1000 scale-[1.01]"
                            />
                            <div className="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12 p-8 md:p-12 bg-cyan text-navy rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                                <p className="text-5xl md:text-7xl font-display font-black mb-1">10+</p>
                                <p className="uppercase tracking-[0.3em] text-[9px] md:text-[11px] font-black opacity-80">Years Excellence</p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="space-y-10 md:space-y-12">
                        <div className="inline-flex items-center gap-3 px-5 py-2 bg-cyan/5 border border-cyan/20 rounded-full">
                            <div className="w-1.5 h-1.5 bg-cyan rounded-full animate-ping" />
                            <span className="text-cyan uppercase tracking-[0.3em] text-[10px] font-black">The Hybrid Advantage</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-display text-white leading-[1.2]">Expertise across the <span className="text-cyan italic">entire lifecycle</span> of property.</h2>
                        <p className="text-muted text-base md:text-lg leading-relaxed font-light">
                            We bridge the gap between architectural precision and market intelligence. From evaluating land and managing industrial-scale construction to designing high-end interiors and securing elite asset deals.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pt-12 border-t border-cyan/10">
                            <div className="group space-y-4">
                                <div className="flex items-center gap-3 text-cyan">
                                    <Shield size={20} className="shadow-[0_0_15px_#00F2EA55]" />
                                    <h4 className="font-black text-xs tracking-widest uppercase text-white">RERA CERTIFIED</h4>
                                </div>
                                <p className="text-xs md:text-sm text-muted leading-relaxed group-hover:text-sand/80 transition-colors">Rigorous legal compliance and absolute transparency in every square foot.</p>
                            </div>
                            <div className="group space-y-4">
                                <div className="flex items-center gap-3 text-cyan">
                                    <MapPin size={20} className="shadow-[0_0_15px_#00F2EA55]" />
                                    <h4 className="font-black text-xs tracking-widest uppercase text-white">PUNE MASTERY</h4>
                                </div>
                                <p className="text-xs md:text-sm text-muted leading-relaxed group-hover:text-sand/80 transition-colors">Dominating key growth hubs like Kharadi, Baner, and upcoming corridors.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* High Conversion CTA - Brand Cyan */}
            <section className="py-32 md:py-48 relative overflow-hidden bg-navy text-center select-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-cyan/5 blur-[180px] -z-10" />
                <div className="max-w-5xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <h2 className="text-4xl md:text-8xl font-display text-white mb-6 uppercase tracking-tighter leading-none">
                            Ready to secure <br /> <span className="text-cyan">your asset?</span>
                        </h2>
                        <p className="font-black uppercase tracking-[0.5em] text-[10px] md:text-xs text-cyan opacity-60">Consult with info@housematerealtors.com</p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-16">
                            <button
                                onClick={openContactModal}
                                className="w-full md:w-auto bg-cyan hover:bg-white text-navy px-16 py-7 font-black uppercase tracking-[0.2em] text-xs transition-all shadow-[0_0_60px_#00F2EA44] hover:shadow-[0_0_80px_#00F2EA66] rounded-full"
                            >
                                REQUEST EXPERT CALLBACK
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
