import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { useUI } from '../context/UIContext';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';
import {
    ArrowRight,
    Building2,
    Users,
    ShieldCheck,
    MapPin,
    Sparkles,
    TrendingUp,
    Layout,
    Hammer,
    ChevronDown
} from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Home = () => {
    const { openContactModal } = useUI();
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

    const featuredProjects = projects.slice(0, 4);

    return (
        <div className="bg-navy overflow-hidden font-sans">
            {/* Hero Section */}
            <section ref={heroRef} className="relative h-screen min-h-[750px] flex items-center justify-center overflow-hidden">
                <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/20 to-navy z-10" />
                    <img
                        src="/assets/images/hero_luxury.png"
                        alt="Executive Luxury Real Estate"
                        className="w-full h-full object-cover grayscale-[10%] transition-transform duration-[10s] hover:scale-105"
                    />
                </motion.div>

                {/* Subtle Luxury Overlays */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)] z-[5]" />

                <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-4 mb-10 px-8 py-3 border border-gold/20 rounded-full bg-navy/40 backdrop-blur-md shadow-[0_0_30px_rgba(212,175,55,0.1)]">
                            <span className="w-2 h-2 bg-gold rounded-full animate-pulse shadow-[0_0_10px_#D4AF37]" />
                            <span className="text-gold text-[10px] md:text-xs uppercase tracking-[0.5em] font-accent font-bold">The Gold Standard of Pune</span>
                        </div>

                        <h1 className="text-6xl md:text-[10rem] font-display text-white mb-12 leading-[0.8] tracking-tight drop-shadow-2xl">
                            DOMI<span className="text-gold italic font-light">NANCE.</span>
                        </h1>

                        <p className="max-w-3xl mx-auto text-white/80 text-lg md:text-2xl leading-relaxed mb-16 font-light font-sans tracking-wide">
                            Where industrial precision meets architectural elegance. We source, build, and scale elite property portfolios for the distinguished.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                            <button
                                onClick={openContactModal}
                                className="w-full md:w-auto bg-gold hover:bg-white text-navy px-14 py-7 rounded-sm text-xs font-black uppercase tracking-[0.4em] transition-all duration-500 shadow-[0_20px_50px_rgba(212,175,55,0.3)] hover:shadow-[0_20px_70px_rgba(212,175,55,0.5)] transform hover:-translate-y-1"
                            >
                                Executive Brief
                            </button>
                            <Link
                                to="/projects"
                                className="w-full md:w-auto border border-white/20 hover:border-gold px-14 py-7 rounded-sm text-xs font-black uppercase tracking-[0.4em] text-white hover:bg-gold/5 transition-all duration-500 backdrop-blur-sm"
                            >
                                Portfolio Archive
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Refined Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 15, 0] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
                >
                    <span className="text-gold/40 text-[9px] uppercase tracking-[0.5em] font-bold">Discover</span>
                    <ChevronDown className="text-gold/40" size={20} />
                </motion.div>
            </section>

            {/* Strategic Verticals - High Impact */}
            <section className="py-40 relative bg-black border-y border-gold/10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-24">
                        <span className="text-gold font-accent text-sm uppercase tracking-[0.5em] mb-4 block">Unified Group Expertise</span>
                        <h2 className="text-4xl md:text-6xl font-display text-white uppercase tracking-tighter">THE <span className="text-gold italic">SYNERGY.</span></h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                        {[
                            { icon: <Hammer className="text-gold" size={36} />, title: "ENGINEERING", desc: "Civil construction delivered with industrial excellence and structural authority." },
                            { icon: <Building2 className="text-gold" size={36} />, title: "ACQUISITION", desc: "Direct pipelines to Pune's primary developer inventories and off-market gems." },
                            { icon: <Layout className="text-gold" size={36} />, title: "DESIGN", desc: "Bespoke architectural transformations for interiors that define elite contemporary living." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-12 bg-deep/50 border border-gold/5 hover:border-gold/30 transition-all duration-700 rounded-2xl relative overflow-hidden text-center"
                            >
                                <div className="mb-10 p-6 bg-gold/5 w-fit mx-auto rounded-full group-hover:bg-gold group-hover:text-navy transition-all duration-500 shadow-[0_0_20px_rgba(212,175,55,0.05)]">{item.icon}</div>
                                <h3 className="text-2xl font-display text-white mb-6 uppercase tracking-widest">{item.title}</h3>
                                <p className="text-muted text-sm leading-relaxed font-light">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Portfolio - Swiper Luxury */}
            <section className="py-40 bg-navy relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-28">
                        <div className="max-w-3xl">
                            <span className="text-gold font-accent uppercase tracking-[0.3em] text-[10px] font-black mb-6 block border-l-4 border-gold pl-6">Elite Portfolio</span>
                            <h2 className="text-5xl md:text-8xl font-display text-white uppercase tracking-tighter leading-none mb-8">SIGNATURE <br /><span className="text-gold italic">DEVELOPMENTS.</span></h2>
                            <p className="text-muted text-lg font-light leading-relaxed">A strategic selection of Pune's most significant architectural landmarks.</p>
                        </div>
                        <Link to="/projects" className="group flex items-center gap-4 text-gold text-xs font-black uppercase tracking-[0.4em] border-b border-gold/20 pb-4 hover:border-gold transition-all duration-500 mb-4">
                            Explore Archive <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform duration-500" />
                        </Link>
                    </div>

                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={40}
                        slidesPerView={1}
                        autoplay={{ delay: 6000 }}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1200: { slidesPerView: 3 },
                        }}
                        className="pb-24 luxury-swiper"
                    >
                        {featuredProjects.map((project) => (
                            <SwiperSlide key={project.id}>
                                <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/5 bg-deep">
                                    <img src={project.heroImage} alt={project.title} className="absolute inset-0 w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-[1.5s] scale-105 group-hover:scale-100" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700" />

                                    <div className="absolute inset-0 border-[20px] border-white/0 group-hover:border-white/5 transition-all duration-700 pointer-events-none" />

                                    <div className="absolute bottom-0 left-0 p-10 w-full transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                                        <div className="flex items-center gap-3 mb-4">
                                            <MapPin size={14} className="text-gold" />
                                            <span className="text-gold uppercase tracking-[0.4em] font-bold text-[9px]">{project.location}</span>
                                        </div>
                                        <h3 className="text-3xl font-display text-white mb-8 tracking-tight uppercase leading-tight">{project.title}</h3>
                                        <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                                            <Link to={`/projects/${project.id}`} className="flex-1 bg-white hover:bg-gold text-navy py-5 text-center text-[10px] font-black uppercase tracking-widest transition-all duration-500 shadow-xl">Analysis</Link>
                                            <button onClick={openContactModal} className="flex-1 border border-white/30 hover:border-gold text-white hover:text-gold py-5 text-center text-[10px] font-black uppercase tracking-widest transition-all duration-500 backdrop-blur-md">Secure</button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            {/* Why Housemate - Authority & Heritage */}
            <section className="py-40 bg-black relative">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-gold font-accent uppercase tracking-[0.6em] text-xs font-bold mb-8 block">Private Asset Group</span>
                        <h2 className="text-5xl md:text-8xl font-display text-white mb-12 uppercase tracking-tighter leading-[0.85]">TOTAL <br /><span className="text-gold italic font-light">CONVICTION.</span></h2>
                        <div className="space-y-12">
                            {[
                                { icon: <ShieldCheck className="text-gold" />, title: "RISK DISCIPLINE", text: "In-house command over the entire property lifecycle eliminates third-party toxicity." },
                                { icon: <TrendingUp className="text-gold" />, title: "STRATEGIC SCALE", text: "We leverage macroeconomic data to identify and secure high-appreciation corridors." },
                                { icon: <Sparkles className="text-gold" />, title: "ELITE DISCRETION", text: "Operating as a private consulting board for distinguished property owners." }
                            ].map((feature, i) => (
                                <div key={i} className="flex gap-10 items-start group">
                                    <div className="p-5 bg-gold/5 rounded-2xl border border-gold/10 group-hover:bg-gold group-hover:text-navy transition-all duration-500 shadow-xl">{feature.icon}</div>
                                    <div>
                                        <h4 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-3 group-hover:text-gold transition-colors">{feature.title}</h4>
                                        <p className="text-muted text-sm font-light leading-relaxed max-w-md">{feature.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="relative group">
                        <div className="absolute -inset-8 bg-gold/5 blur-[120px] opacity-30 -z-10 group-hover:bg-gold/10 transition-colors duration-[2s]" />
                        <img src="/assets/images/about_vision.png" alt="Strategic Authority" className="rounded-3xl shadow-[0_50px_100px_rgba(0,0,0,0.8)] grayscale-[20%] border border-white/5 transition-transform duration-[2s] group-hover:scale-[1.02]" />

                        <div className="absolute -bottom-16 -right-16 bg-gold p-16 text-navy shadow-3xl hidden xl:block rounded-sm transform rotate-3 group-hover:rotate-0 transition-transform duration-700">
                            <span className="font-display text-7xl leading-none">15</span>
                            <div className="text-[10px] uppercase tracking-[0.5em] font-black mt-4 border-t border-navy/20 pt-4">Years of Mastery</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global CTA Strip */}
            <section className="py-32 bg-deep border-t border-gold/5 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <button
                        onClick={openContactModal}
                        className="group relative inline-flex items-center gap-12 text-white border-b border-white/10 pb-10 hover:border-gold transition-all duration-700"
                    >
                        <h2 className="text-3xl md:text-6xl font-display uppercase tracking-tight group-hover:text-gold transition-colors">Start Strategic Consultation</h2>
                        <ArrowRight size={48} className="text-gold transform group-hover:translate-x-10 transition-transform duration-700" />
                    </button>
                    <p className="mt-12 text-[10px] text-gold/40 uppercase tracking-[0.6em] font-black">Direct Access: info@housematerealtors.com</p>
                </div>
            </section>
        </div>
    );
};

export default Home;
