import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { useUI } from '../../context/UIContext';

const Navbar = () => {
    const { openContactModal } = useUI();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => setIsOpen(false), [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/projects' },
        { name: 'About', path: '/about' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-[150] transition-all duration-700 ${scrolled ? 'bg-navy/95 backdrop-blur-3xl py-4 shadow-[0_10px_40px_rgba(0,0,0,0.6)] border-b border-gold/10' : 'bg-transparent py-10'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-6 group">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gold/20 blur-2xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-1000" />
                        <img src="/assets/images/logo.png" alt="Housemate" className="h-16 w-16 md:h-22 md:w-22 object-contain relative z-10 filter drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] group-hover:scale-105 transition-all duration-700" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-2xl md:text-3xl font-display font-black text-white leading-none uppercase tracking-tight drop-shadow-2xl">Housemate</span>
                        <span className="text-[10px] md:text-xs text-gold uppercase tracking-[0.6em] font-accent font-bold mt-2 opacity-80">Estate Authority</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-14">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-[10px] tracking-[0.4em] uppercase transition-all duration-500 font-bold relative group ${location.pathname === link.path ? 'text-gold' : 'text-white/60 hover:text-white'}`}
                        >
                            {link.name}
                            <span className={`absolute -bottom-3 left-0 h-[1px] bg-gold transition-all duration-700 ${location.pathname === link.path ? 'w-full shadow-[0_0_10px_#D4AF37]' : 'w-0 group-hover:w-full'}`} />
                        </Link>
                    ))}
                    <button
                        onClick={openContactModal}
                        className="bg-gold hover:bg-white text-navy px-10 py-4 rounded-sm text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-500 shadow-[0_10px_30px_rgba(212,175,55,0.2)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.4)] transform hover:-translate-y-1"
                    >
                        Private Counsel
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button className="lg:hidden text-gold p-3 relative group" onClick={() => setIsOpen(!isOpen)}>
                    <div className="absolute inset-0 bg-gold/10 blur-xl rounded-full scale-0 group-active:scale-150 transition-transform" />
                    {isOpen ? <X size={32} className="relative z-10" /> : <Menu size={32} className="relative z-10" />}
                </button>
            </div>

            {/* Mobile Menu - Luxury Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="fixed inset-0 w-full h-screen bg-navy/98 backdrop-blur-3xl px-10 flex flex-col justify-center gap-12 lg:hidden z-[200] border-l border-gold/10"
                    >
                        <button className="absolute top-10 right-10 text-gold" onClick={() => setIsOpen(false)}>
                            <X size={40} />
                        </button>
                        <div className="space-y-4">
                            <span className="text-gold font-accent text-xs uppercase tracking-[0.5em] opacity-40">Elite Navigation</span>
                            <div className="h-[1px] w-20 bg-gold/20" />
                        </div>
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-5xl font-display tracking-tight uppercase transition-all duration-700 flex items-center justify-between group ${location.pathname === link.path ? 'text-gold' : 'text-white/30 hover:text-white'}`}
                            >
                                {link.name}
                                <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={32} />
                            </Link>
                        ))}
                        <button
                            onClick={openContactModal}
                            className="bg-gold text-navy font-black py-8 rounded-sm text-center uppercase tracking-[0.4em] text-xs mt-16 shadow-[0_20px_60px_rgba(212,175,55,0.3)]"
                        >
                            Secure Consultation
                        </button>

                        <div className="mt-16 flex justify-between items-center border-t border-gold/10 pt-10 text-[9px] uppercase tracking-[0.4em] font-bold text-gold/40">
                            <span>Pune · Global Ops</span>
                            <span>+91 81493 88788</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
