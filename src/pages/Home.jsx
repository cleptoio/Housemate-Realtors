import { useRef, useEffect } from 'react';
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
    Hammer
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

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const featuredProjects = projects.slice(0, 3);

    return (
        <div className="bg-navy overflow-hidden">
            {/* Hero Section */}
            <section ref={heroRef} className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
                <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-navy/30 via-navy/60 to-navy z-10" />
                    <img
                        src="/assets/images/hero_bg.png"
                        alt="Luxury Real Estate"
                        className="w-full h-full object-cover grayscale-[20%] scale-110"
                    />
                </motion.div>

                {/* Decorative Elements (Luxury Glows) */}
                <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] bg-gold/5 blur-[120px] rounded-full animate-pulse-slow" />
                <div className="absolute bottom-1/4 right-1/4 w-[25vw] h-[25vw] bg-gold/10 blur-[100px] rounded-full animate-pulse-slow delay-700" />

                <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-3 mb-8 px-6 py-2 border border-gold/30 rounded-full bg-navy/40 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.15)]">
                            <Sparkles className="text-gold" size={16} />
                            <span className="text-gold text-[10px] md:text-xs uppercase tracking-[0.4em] font-black">Strategic Asset Excellence</span>
                        </div>
                        <h1 className="text-5xl md:text-9xl font-display text-white mb-10 leading-tight tracking-tighter">
                            UNIFIED <br />
                            <span className="text-gold italic font-light">REAL ESTATE.</span>
                        </h1>
                        <p className="max-w-3xl mx-auto text-muted text-lg md:text-xl leading-relaxed mb-12 font-light">
                            From civil construction to luxury acquisitions and interior transformations. We build, manage, and scale property portfolios with industrial precision.
                        </p>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <button
                                onClick={openContactModal}
                                className="w-full md:w-auto bg-gold hover:bg-white text-navy px-12 py-6 rounded-sm text-[11px] font-black uppercase tracking-[0.3em] transition-all shadow-[0_20px_40px_rgba(212,175,55,0.2)] hover:shadow-[0_20px_60px_rgba(212,175,55,0.4)]"
                            >
                                Book Consultation
                            </button>
                            <Link
                                to="/projects"
                                className="w-full md:w-auto border border-gold/30 hover:border-gold px-12 py-6 rounded-sm text-[11px] font-black uppercase tracking-[0.3em] text-white hover:bg-gold/5 transition-all"
                            >
                                View Portfolio
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold/40"
                >
                    <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent mx-auto" />
                </motion.div>
            </section>

            {/* Strategic Verticals */}
            <section className="py-32 relative bg-deep">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { icon: <Hammer className="text-gold" size={32} />, title: "CONSTRUCTION", desc: "Industrial-grade civil engineering and redevelopment." },
                            { icon: <Building2 className="text-gold" size={32} />, title: "REAL ESTATE", desc: "Precision acquisition of high-yield luxury residential assets." },
                            { icon: <Layout className="text-gold" size={32} />, title: "INTERIORS", desc: "Bespoke architectural transformations for elite living." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-10 bg-navy/40 border border-gold/5 hover:border-gold/30 transition-all rounded-xl shadow-2xl relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -mr-16 -mt-16 group-hover:bg-gold/10 transition-colors" />
                                <div className="mb-8 p-4 bg-gold/5 w-fit rounded-lg">{item.icon}</div>
                                <h3 className="text-2xl font-display text-white mb-4 uppercase tracking-tighter">{item.title}</h3>
                                <p className="text-muted text-sm leading-relaxed font-light">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Developments */}
            <section className="py-32 bg-navy border-y border-gold/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
                        <div className="max-w-2xl">
                            <span className="text-gold uppercase tracking-[0.4em] text-xs font-black mb-4 block">Current Assets</span>
                            <h2 className="text-4xl md:text-7xl font-display text-white uppercase tracking-tighter">THE <span className="text-gold italic">ARCHIVE.</span></h2>
                        </div>
                        <Link to="/projects" className="group flex items-center gap-3 text-gold text-xs font-black uppercase tracking-[0.3em] border-b border-gold/20 pb-2 hover:border-gold transition-all">
                            View All Projects <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </div>

                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplay={{ delay: 5000 }}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="pb-20"
                    >
                        {featuredProjects.map((project) => (
                            <SwiperSlide key={project.id}>
                                <div className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-gold/10 bg-deep/50">
                                    <img src={project.heroImage} alt={project.title} className="absolute inset-0 w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />

                                    <div className="absolute bottom-0 left-0 p-8 w-full translate-y-6 group-hover:translate-y-0 transition-all duration-500">
                                        <div className="flex items-center gap-2 mb-3">
                                            <MapPin size={12} className="text-gold" />
                                            <span className="text-gold uppercase tracking-[0.3em] font-black text-[9px]">{project.location}</span>
                                        </div>
                                        <h3 className="text-2xl font-display text-white mb-6 uppercase tracking-tight">{project.title}</h3>
                                        <div className="flex gap-4">
                                            <Link to={`/projects/${project.id}`} className="flex-1 bg-white hover:bg-gold text-navy py-4 text-center text-[10px] font-black uppercase tracking-widest transition-all">Details</Link>
                                            <button onClick={openContactModal} className="flex-1 border border-white/20 hover:border-gold text-white hover:text-gold py-4 text-center text-[10px] font-black uppercase tracking-widest transition-all">Inquire</button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            {/* Why Housemate */}
            <section className="py-32 bg-deep relative">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <span className="text-gold uppercase tracking-[0.4em] text-xs font-black mb-6 block">Unified Authority</span>
                        <h2 className="text-4xl md:text-7xl font-display text-white mb-10 uppercase tracking-tighter leading-[0.9]">ONE GROUP. <br /><span className="text-gold italic">TOTAL CONTROL.</span></h2>
                        <div className="space-y-8">
                            {[
                                { icon: <ShieldCheck className="text-gold" />, title: "Risk Mitigation", text: "In-house end-to-end management reduces operational volatility." },
                                { icon: <TrendingUp className="text-gold" />, title: "Yield Optimization", text: "Strategic market insight and aggressive portfolio scaling." },
                                { icon: <Users className="text-gold" />, title: "Elite Network", text: "Direct access to Pune's primary developer pipelines." }
                            ].map((feature, i) => (
                                <div key={i} className="flex gap-6 items-start">
                                    <div className="p-3 bg-gold/5 rounded-lg border border-gold/10">{feature.icon}</div>
                                    <div>
                                        <h4 className="text-white font-black uppercase tracking-widest text-xs mb-2">{feature.title}</h4>
                                        <p className="text-muted text-sm font-light leading-relaxed">{feature.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gold/10 blur-3xl opacity-30 -z-10" />
                        <img src="/assets/images/about_vision.png" alt="Strategic Vision" className="rounded-2xl shadow-2xl grayscale-[20%] border border-gold/20" />
                        <div className="absolute -bottom-10 -right-10 bg-gold p-10 text-navy font-display text-4xl hidden md:block rounded-sm shadow-2xl">
                            15+ <br /><span className="text-xs uppercase tracking-[0.2em] font-black">Strategic Years</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
