import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
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
        <nav className={`fixed top-0 w-full z-[150] transition-all duration-500 ${scrolled ? 'bg-navy/95 backdrop-blur-xl py-3 shadow-[0_4px_30px_rgba(0,0,0,0.3)] border-b border-cyan/10' : 'bg-transparent py-8'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-4 group">
                    <div className="relative">
                        <div className="absolute inset-0 bg-cyan/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-700" />
                        <img src="/assets/images/logo.png" alt="Housemate" className="h-16 w-16 md:h-20 md:w-20 object-contain relative z-10 filter drop-shadow-[0_0_8px_rgba(0,242,234,0.3)] group-hover:drop-shadow-[0_0_12px_rgba(0,242,234,0.6)] transition-all duration-500" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl md:text-2xl font-display font-black text-white leading-none uppercase tracking-[0.15em] drop-shadow-lg">Housemate</span>
                        <span className="text-[10px] md:text-xs text-cyan uppercase tracking-[0.5em] drop-shadow-[0_0_5px_rgba(0,242,234,0.4)] font-bold mt-1">Realtors</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-[10px] tracking-[0.3em] uppercase transition-all duration-300 font-black relative group ${location.pathname === link.path ? 'text-cyan' : 'text-sand/70 hover:text-white'}`}
                        >
                            {link.name}
                            <span className={`absolute -bottom-2 left-0 h-[2px] bg-cyan transition-all duration-500 ${location.pathname === link.path ? 'w-full shadow-[0_0_8px_#00F2EA]' : 'w-0 group-hover:w-full'}`} />
                        </Link>
                    ))}
                    <button
                        onClick={openContactModal}
                        className="bg-cyan hover:bg-white text-navy px-8 py-3 rounded-sm text-[10px] font-black uppercase tracking-[0.2em] transition-all shadow-[0_0_20px_rgba(0,242,234,0.2)] hover:shadow-[0_0_30px_rgba(0,242,234,0.4)]"
                    >
                        Contact Expert
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-cyan p-2 relative group" onClick={() => setIsOpen(!isOpen)}>
                    <div className="absolute inset-0 bg-cyan/10 blur-md rounded-full scale-0 group-active:scale-150 transition-transform" />
                    {isOpen ? <X size={28} className="relative z-10" /> : <Menu size={28} className="relative z-10" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 w-full h-screen bg-navy/98 backdrop-blur-2xl px-8 flex flex-col justify-center gap-10 md:hidden z-[200] border-l border-cyan/10"
                    >
                        <button className="absolute top-8 right-8 text-cyan" onClick={() => setIsOpen(false)}>
                            <X size={32} />
                        </button>
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-3xl font-display tracking-[0.2em] uppercase transition-all duration-500 flex items-center gap-4 ${location.pathname === link.path ? 'text-cyan pl-4' : 'text-sand/40 hover:text-cyan'}`}
                            >
                                {location.pathname === link.path && <div className="w-2 h-2 bg-cyan rounded-full shadow-[0_0_10px_#00F2EA]" />}
                                {link.name}
                            </Link>
                        ))}
                        <button
                            onClick={openContactModal}
                            className="bg-cyan text-navy font-black py-6 rounded-sm text-center uppercase tracking-[0.3em] text-xs mt-12 shadow-[0_0_30px_rgba(0,242,234,0.3)]"
                        >
                            Book Consultation
                        </button>

                        <div className="mt-20 flex flex-col gap-6 items-center border-t border-cyan/10 pt-10 opacity-60">
                            <p className="text-[10px] tracking-[0.4em] text-cyan font-bold uppercase">Pune, India</p>
                            <p className="text-xs font-black text-sand">+91 81493 88788</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
