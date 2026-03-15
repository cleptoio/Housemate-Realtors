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
        <nav className={`fixed top-0 w-full z-[150] transition-all duration-300 ${scrolled ? 'bg-navy/95 backdrop-blur-md py-4 shadow-xl border-b border-sand/10' : 'bg-transparent py-8'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-4 group">
                    <img src="/assets/images/logo.png" alt="Housemate" className="h-14 w-14 md:h-16 md:w-16 object-contain group-hover:rotate-6 transition-transform duration-500" />
                    <div className="flex flex-col">
                        <span className="text-2xl md:text-3xl font-display font-medium text-sand leading-none uppercase tracking-widest drop-shadow-lg">Housemate</span>
                        <span className="text-xs md:text-sm text-gold uppercase tracking-[0.4em] drop-shadow-md font-bold mt-1">Realtors</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-sm tracking-widest uppercase hover:text-gold transition-colors font-medium mt-1 ${location.pathname === link.path ? 'text-gold' : 'text-sand/80'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button
                        onClick={openContactModal}
                        className="bg-royal hover:bg-blue-700 text-sand px-6 py-2.5 rounded-sm text-[10px] font-bold uppercase tracking-widest transition-all hover:shadow-[0_0_20px_rgba(29,78,216,0.3)]"
                    >
                        Get Started
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-sand p-2" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-navy border-t border-sand/10 py-12 px-6 flex flex-col gap-8 md:hidden shadow-2xl h-screen bg-navy/95 backdrop-blur-xl"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-2xl font-display tracking-widest uppercase transition-colors ${location.pathname === link.path ? 'text-gold' : 'text-sand/80'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button
                            onClick={openContactModal}
                            className="bg-gold text-navy font-bold py-5 rounded-sm text-center uppercase tracking-widest text-xs mt-4 shadow-xl"
                        >
                            Connect with Expert
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
