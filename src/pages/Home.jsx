import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../data/projects';
import { services } from '../data/services';
import { ArrowRight, Building2, Home as HomeIcon, Key, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        // Hero parallax
        gsap.to(".hero-bg", {
            yPercent: 30,
            ease: "none",
            scrollTrigger: {
                trigger: ".hero-section",
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });
    }, []);

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="hero-section relative h-[90vh] md:h-screen flex items-center bg-navy">
                <div className="hero-bg absolute inset-0 z-0">
                    <img
                        src="/assets/images/riverdale_grand_hero.png"
                        alt="Premium Real Estate"
                        className="w-full h-[130%] object-cover opacity-60 mix-blend-luminosity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-6 block">
                                Pune • Maharashtra • India
                            </span>
                            <h1 className="text-5xl md:text-8xl font-display text-sand leading-tight mb-8">
                                End-to-End Real <br />
                                <span className="text-gold italic">Estate & Build</span>
                            </h1>
                            <p className="text-lg md:text-xl text-sand/70 leading-relaxed mb-10 max-w-xl">
                                From ground-up construction and interiors to buying, selling and renting properties – Housemate Realtors handles every step with expertise.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link to="/projects" className="bg-gold hover:bg-yellow-600 text-navy font-bold px-10 py-5 transition-all flex items-center gap-3 group">
                                    View Projects <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                                </Link>
                                <Link to="/services" className="border border-sand/20 hover:border-gold text-sand px-10 py-5 transition-all">
                                    Explore Services
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Service Strip */}
            <section className="py-20 bg-slate">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, i) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="group p-8 bg-navy/50 border border-sand/5 hover:border-gold/30 transition-all hover:-translate-y-2"
                            >
                                <div className="text-gold mb-6 group-hover:scale-110 transition-transform origin-left">
                                    {i === 0 && <Building2 size={32} />}
                                    {i === 1 && <HomeIcon size={32} />}
                                    {i === 2 && <Key size={32} />}
                                    {i === 3 && <Palette size={32} />}
                                </div>
                                <h3 className="text-xl font-display text-sand mb-4">{service.title}</h3>
                                <p className="text-sm text-muted mb-6 leading-relaxed">{service.shortDesc}</p>
                                <Link to={`/services#${service.slug}`} className="text-xs uppercase tracking-widest text-gold flex items-center gap-2 group/link">
                                    Learn More <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="py-32 bg-navy">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-between items-end mb-16">
                        <div className="reveal">
                            <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-4 block">Our Work</span>
                            <h2 className="text-4xl md:text-6xl text-sand">Featured <span className="text-gold">Projects</span></h2>
                        </div>
                        <Link to="/projects" className="hidden md:flex items-center gap-3 text-sand/60 hover:text-gold transition-colors tracking-widest uppercase text-xs">
                            View All Work <ArrowRight size={16} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.slice(0, 3).map((project, i) => (
                            <ProjectCard key={project.id} project={project} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-32 bg-slate">
                <div className="max-w-7xl mx-auto px-6 text-center mb-20">
                    <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-4 block">The Advantage</span>
                    <h2 className="text-4xl md:text-6xl text-sand mb-6">Why Choose <span className="text-gold italic">Housemate?</span></h2>
                    <p className="text-muted max-w-2xl mx-auto">We provide a seamless property experience under one roof, combining local expertise with premium service.</p>
                </div>
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="flex flex-col items-center text-center gap-6 p-8 bg-navy/30 rounded-lg">
                        <div className="p-4 bg-gold/10 text-gold rounded-full"><Building2 size={30} /></div>
                        <h4 className="text-xl font-display text-sand">Single Partner</h4>
                        <p className="text-muted text-sm leading-relaxed">From design to build and sale, we manage the entire lifecycle of your property assets.</p>
                    </div>
                    <div className="flex flex-col items-center text-center gap-6 p-8 bg-navy/30 rounded-lg">
                        <div className="p-4 bg-gold/10 text-gold rounded-full"><HomeIcon size={30} /></div>
                        <h4 className="text-xl font-display text-sand">Pune Expertise</h4>
                        <p className="text-muted text-sm leading-relaxed">Deep roots in Pune real estate ensures you get the most accurate locations and ROI guides.</p>
                    </div>
                    <div className="flex flex-col items-center text-center gap-6 p-8 bg-navy/30 rounded-lg">
                        <div className="p-4 bg-gold/10 text-gold rounded-full"><Palette size={30} /></div>
                        <h4 className="text-xl font-display text-sand">Transparency</h4>
                        <p className="text-muted text-sm leading-relaxed">Clean documentation and clear communication are the pillars of every project we handle.</p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gold">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="max-w-2xl text-center md:text-left text-navy">
                        <h2 className="text-3xl md:text-5xl font-display mb-4">Planning to Build, Buy, Sell or Rent in Pune?</h2>
                        <p className="text-navy/70 uppercase tracking-widest text-xs font-bold">Let's make it happen together.</p>
                    </div>
                    <Link to="/contact" className="bg-navy text-sand px-12 py-5 font-bold uppercase tracking-widest hover:bg-blue-950 transition-colors shadow-2xl">
                        Request a Callback
                    </Link>
                </div>
            </section>

        </div>
    );
};

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden bg-slate-900 aspect-[4/5] rounded-lg"
        >
            <img
                src={project.heroImage}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-gold text-[10px] uppercase tracking-widest mb-3 block">{project.tag}</span>
                <h3 className="text-2xl font-display text-sand mb-2">{project.title}</h3>
                <p className="text-sand/60 text-xs mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{project.description}</p>
                <Link
                    to={`/projects/${project.id}`}
                    className="text-white text-xs uppercase tracking-[0.2em] flex items-center gap-2 group/btn"
                >
                    View Details <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                </Link>
            </div>
        </motion.div>
    );
};

export default Home;
