import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { ArrowLeft, Download, CheckCircle2, MapPin, Building, Calendar, Wallet } from 'lucide-react';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === id);

    if (!project) return (
        <div className="py-40 text-center">
            <h2 className="text-sand font-display text-4xl mb-6">Project Not Found</h2>
            <Link to="/projects" className="text-gold uppercase tracking-widest text-xs">Back to Portfolio</Link>
        </div>
    );

    return (
        <div className="bg-navy min-h-screen">
            {/* Hero */}
            <section className="relative h-[60vh] flex items-end pb-20">
                <div className="absolute inset-0 z-0">
                    <img src={project.heroImage} alt={project.title} className="w-full h-full object-cover opacity-50" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
                </div>
                <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                    <Link to="/projects" className="flex items-center gap-2 text-sand/60 hover:text-gold mb-8 transition-colors text-xs uppercase tracking-widest">
                        <ArrowLeft size={16} /> Back to Projects
                    </Link>
                    <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-4 block">{project.tag}</span>
                    <h1 className="text-5xl md:text-7xl font-display text-sand uppercase">{project.title}</h1>
                </div>
            </section>

            {/* Info Grid */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
                    {/* Left: Content */}
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-display text-sand mb-8">Property <span className="text-gold italic">Overview</span></h2>
                        <div className="w-20 h-1 bg-gold mb-10" />
                        <p className="text-muted text-lg leading-relaxed mb-12">
                            {project.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                            {project.highlights.map((h, i) => (
                                <div key={i} className="flex items-start gap-4 p-6 bg-slate rounded-lg border border-sand/5">
                                    <div className="p-3 bg-gold/10 text-gold rounded-sm italic font-display">
                                        {h.title[0]}
                                    </div>
                                    <div>
                                        <h4 className="text-sand font-bold text-sm mb-1">{h.title}</h4>
                                        <p className="text-muted text-xs">{h.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {project.brochure && (
                            <div className="p-10 bg-gold rounded-lg flex flex-col md:flex-row justify-between items-center gap-8">
                                <div className="text-navy">
                                    <h3 className="text-2xl font-display mb-2">Project Brochure</h3>
                                    <p className="text-navy/70 text-sm">Download the comprehensive PDF with floor plans and details.</p>
                                </div>
                                <a href={project.brochure} target="_blank" rel="noopener" download className="bg-navy text-sand px-8 py-4 flex items-center gap-3 uppercase tracking-widest text-xs font-bold hover:bg-blue-950 transition-colors">
                                    <Download size={18} /> Download PDF
                                </a>
                            </div>
                        )}
                    </div>

                    {/* Right: Stats & Sidebar */}
                    <div className="space-y-12">
                        <div className="p-8 bg-slate rounded-lg border border-sand/5 sticky top-32">
                            <h3 className="text-sand font-display text-xl mb-8 border-b border-sand/5 pb-4">Key Specifications</h3>
                            <ul className="space-y-6">
                                <li className="flex justify-between items-center">
                                    <span className="flex items-center gap-3 text-muted text-xs uppercase tracking-widest"><Building size={16} className="text-gold" /> Developer</span>
                                    <span className="text-sand font-bold text-sm">{project.developer}</span>
                                </li>
                                <li className="flex justify-between items-center">
                                    <span className="flex items-center gap-3 text-muted text-xs uppercase tracking-widest"><MapPin size={16} className="text-gold" /> Location</span>
                                    <span className="text-sand font-bold text-sm">{project.location}</span>
                                </li>
                                <li className="flex justify-between items-center">
                                    <span className="flex items-center gap-3 text-muted text-xs uppercase tracking-widest"><Calendar size={16} className="text-gold" /> Status</span>
                                    <span className="text-sand font-bold text-sm">{project.status}</span>
                                </li>
                                <li className="flex justify-between items-center">
                                    <span className="flex items-center gap-3 text-muted text-xs uppercase tracking-widest"><Wallet size={16} className="text-gold" /> Pricing</span>
                                    <span className="text-sand font-bold text-sm text-gold">{project.price}</span>
                                </li>
                            </ul>
                            <Link to="/contact" className="w-full bg-royal text-sand py-4 text-center block mt-12 uppercase tracking-[0.2em] text-[10px] font-bold hover:shadow-[0_0_20px_rgba(29,78,216,0.3)] transition-all">
                                Enquire Now
                            </Link>
                        </div>

                        <div className="p-8 border border-sand/10 rounded-lg">
                            <h4 className="text-gold text-xs uppercase tracking-widest font-bold mb-6">Expert Assistance</h4>
                            <p className="text-muted text-xs leading-relaxed mb-6">Our dedicated Pune consultants will guide you through site visits, legal checks, and RERA verification for this project.</p>
                            <a href="https://wa.me/918149388788" className="text-sand hover:text-gold transition-colors text-xs font-bold border-b border-gold/30 pb-1">Chat on WhatsApp →</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetail;
