import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
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
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-navy/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-3 group">
                    <img src="/assets/images/logo.png" alt="Housemate" className="h-10 w-10 object-contain group-hover:scale-110 transition-transform" />
                    <div className="flex flex-col">
                        <span className="text-xl font-display font-bold text-sand leading-none uppercase tracking-wider">Housemate</span>
                        <span className="text-[10px] text-gold uppercase tracking-[0.2em]">Realtors</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-sm tracking-widest uppercase hover:text-gold transition-colors ${location.pathname === link.path ? 'text-gold font-bold' : 'text-sand/80'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/contact" className="bg-royal hover:bg-blue-700 text-sand px-6 py-2.5 rounded-sm text-xs uppercase tracking-widest transition-all hover:shadow-[0_0_20px_rgba(29,78,216,0.3)]">
                        Get Started
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-sand" onClick={() => setIsOpen(!isOpen)}>
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
                        className="absolute top-full left-0 w-full bg-navy border-t border-sand/10 py-8 px-6 flex flex-col gap-6 md:hidden shadow-2xl"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-lg tracking-widest uppercase text-sand/80 hover:text-gold"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/contact" className="bg-royal text-sand py-4 rounded-sm text-center uppercase tracking-widest">
                            Request a Callback
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
