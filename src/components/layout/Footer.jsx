import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { useUI } from '../../context/UIContext';

const Footer = () => {
    const { openContactModal } = useUI();

    return (
        <footer className="bg-black pt-24 pb-12 border-t border-gold/10 relative overflow-hidden font-sans text-sand">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
                    {/* Brand Col */}
                    <div className="flex flex-col gap-10">
                        <Link to="/" className="flex items-center gap-5 group">
                            <img src="/assets/images/logo.png" alt="Housemate" className="h-20 w-20 filter drop-shadow-[0_0_12px_rgba(212,175,55,0.4)] transition-transform duration-700 group-hover:scale-110" />
                            <div className="flex flex-col">
                                <span className="text-3xl font-display font-black text-white uppercase tracking-tighter leading-none">Housemate</span>
                                <span className="text-[10px] text-gold uppercase tracking-[0.5em] font-accent font-bold mt-2">Realtors</span>
                            </div>
                        </Link>
                        <p className="text-muted text-sm leading-relaxed max-w-xs font-light tracking-wide italic">
                            Strategically building and managing premium property portfolios in Pune's elite growth corridors. Under one professional authority.
                        </p>
                        <div className="flex gap-6">
                            {[
                                { icon: <Instagram size={20} />, href: "https://www.instagram.com/housemate_realtors" },
                                { icon: <Facebook size={20} />, href: "https://www.facebook.com/HouseMateRealtors" },
                                { icon: <Linkedin size={20} />, href: "#" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener"
                                    className="p-4 bg-deep/50 rounded-full text-gold/60 hover:text-gold hover:bg-gold/10 transition-all duration-500 border border-gold/10 hover:border-gold scale-90 hover:scale-100 shadow-xl"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div className="space-y-12">
                        <h4 className="text-white font-display text-xl uppercase tracking-widest relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-0.5 after:bg-gold">DIREC<span className="text-gold">TORY</span></h4>
                        <ul className="flex flex-col gap-6 text-[10px] font-black uppercase tracking-[0.3em] text-muted">
                            <li><Link to="/about" className="hover:text-gold transition-all duration-500 flex items-center gap-3 group">THE AUTHORITY <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" /></Link></li>
                            <li><Link to="/services" className="hover:text-gold transition-all duration-500 flex items-center gap-3 group">CAPABILITIES <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" /></Link></li>
                            <li><Link to="/projects" className="hover:text-gold transition-all duration-500 flex items-center gap-3 group">PORTFOLIO <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" /></Link></li>
                            <li><button onClick={openContactModal} className="hover:text-gold transition-all duration-500 text-left flex items-center gap-3 group">EXECUTIVE INQUIRY <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" /></button></li>
                        </ul>
                    </div>

                    {/* Verticals */}
                    <div className="space-y-12">
                        <h4 className="text-white font-display text-xl uppercase tracking-widest">VERTI<span className="text-gold">CALS</span></h4>
                        <ul className="flex flex-col gap-6 text-sm font-light text-muted tracking-wide">
                            <li><Link to="/services" className="hover:text-gold transition-colors duration-500">Civil Engineering</Link></li>
                            <li><Link to="/services" className="hover:text-gold transition-colors duration-500">Asset Acquisition</Link></li>
                            <li><Link to="/services" className="hover:text-gold transition-colors duration-500">Interior Architecture</Link></li>
                            <li><Link to="/services" className="hover:text-gold transition-colors duration-500">Commercial Portfolio Mgmt</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-12">
                        <h4 className="text-white font-display text-xl uppercase tracking-widest">OFF<span className="text-gold">ICE</span></h4>
                        <ul className="flex flex-col gap-8 text-xs font-light text-muted tracking-wide">
                            <li className="flex gap-5">
                                <div className="p-3 bg-gold/5 rounded-full text-gold h-fit border border-gold/10 shadow-lg"><MapPin size={22} /></div>
                                <span className="leading-relaxed">Kharadi, Pune, Maharashtra,<br />India 411014</span>
                            </li>
                            <li className="flex gap-5">
                                <div className="p-3 bg-gold/5 rounded-full text-gold h-fit border border-gold/10 shadow-lg"><Phone size={22} /></div>
                                <div className="flex flex-col gap-1">
                                    <span className="font-bold">+91 81493 88788</span>
                                    <span className="font-bold">+91 78882 33045</span>
                                </div>
                            </li>
                            <li className="flex gap-5">
                                <div className="p-3 bg-gold/5 rounded-full text-gold h-fit border border-gold/10 shadow-lg"><Mail size={22} /></div>
                                <span className="hover:text-gold cursor-pointer transition-colors duration-500 font-bold">info@housematerealtors.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-16 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center gap-10 text-[10px] uppercase tracking-[0.4em] font-bold text-muted/60">
                    <span>© 2026 HOUSEMATE REALTORS · EXECUTIVE ASSET GROUP</span>
                    <div className="flex items-center gap-12">
                        <Link to="/privacy" className="hover:text-gold transition-colors duration-500">REPORTS</Link>
                        <Link to="/terms" className="hover:text-gold transition-colors duration-500">COMPLIANCE</Link>
                        <span className="flex items-center gap-4 text-gold shadow-sm">ENGINEERED BY <a href="https://clepto.io" target="_blank" className="text-white hover:text-gold bg-gold/20 px-4 py-2 rounded-sm transition-all duration-500 font-black">CLEPTO.IO</a></span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
