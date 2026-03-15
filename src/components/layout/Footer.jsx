import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { useUI } from '../../context/UIContext';

const Footer = () => {
    const { openContactModal } = useUI();

    return (
        <footer className="bg-navy pt-24 pb-12 border-t border-gold/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-30" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
                    {/* Brand Col */}
                    <div className="flex flex-col gap-8">
                        <Link to="/" className="flex items-center gap-3 group">
                            <img src="/assets/images/logo.png" alt="Housemate" className="h-16 w-16 filter drop-shadow-[0_0_8px_rgba(212,175,55,0.3)] transition-transform group-hover:scale-105" />
                            <div className="flex flex-col">
                                <span className="text-2xl font-display font-black text-white uppercase tracking-wider leading-none">Housemate</span>
                                <span className="text-xs text-gold uppercase tracking-[0.4em] font-bold">Realtors</span>
                            </div>
                        </Link>
                        <p className="text-muted text-sm leading-relaxed max-w-xs font-light">
                            Strategically building and managing premium property portfolios in Pune's elite growth corridors. Under one professional roof.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: <Instagram size={18} />, href: "https://www.instagram.com/housemate_realtors" },
                                { icon: <Facebook size={18} />, href: "https://www.facebook.com/HouseMateRealtors" },
                                { icon: <Linkedin size={18} />, href: "#" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener"
                                    className="p-3 bg-deep/30 rounded-full text-gold/60 hover:text-gold hover:bg-gold/10 transition-all border border-gold/5 hover:border-gold/30"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div className="space-y-10">
                        <h4 className="text-white font-display text-lg uppercase tracking-[0.2em] relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-0.5 after:bg-gold shadow-[0_4px_10px_rgba(212,175,55,0.2)]">SITEMAP</h4>
                        <ul className="flex flex-col gap-5 text-[10px] font-black uppercase tracking-[0.2em] text-muted">
                            <li><Link to="/about" className="hover:text-gold transition-all flex items-center gap-2 group">ABOUT HOUSEMATE <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                            <li><Link to="/services" className="hover:text-gold transition-all flex items-center gap-2 group">SERVICE DESIGN <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                            <li><Link to="/projects" className="hover:text-gold transition-all flex items-center gap-2 group">PORTFOLIO <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                            <li><button onClick={openContactModal} className="hover:text-gold transition-all text-left flex items-center gap-2 group">PRIVATE INQUIRY <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /></button></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-10">
                        <h4 className="text-white font-display text-lg uppercase tracking-[0.2em]">CAPABILITIES</h4>
                        <ul className="flex flex-col gap-5 text-xs font-light text-muted">
                            <li><Link to="/services" className="hover:text-gold transition-colors">Civil Construction</Link></li>
                            <li><Link to="/services" className="hover:text-gold transition-colors">Residential Acquisition</Link></li>
                            <li><Link to="/services" className="hover:text-gold transition-colors">Interior Architecture</Link></li>
                            <li><Link to="/services" className="hover:text-gold transition-colors">Commercial Asset Mgmt</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-10">
                        <h4 className="text-white font-display text-lg uppercase tracking-[0.2em]">CENTRAL OFFICE</h4>
                        <ul className="flex flex-col gap-7 text-xs font-light text-muted">
                            <li className="flex gap-4">
                                <div className="p-2 bg-gold/5 rounded-full text-gold h-fit"><MapPin size={18} /></div>
                                <span className="leading-relaxed">Kharadi, Pune, Maharashtra,<br />India 411014</span>
                            </li>
                            <li className="flex gap-4">
                                <div className="p-2 bg-gold/5 rounded-full text-gold h-fit"><Phone size={18} /></div>
                                <div className="flex flex-col gap-1">
                                    <span>+91 81493 88788</span>
                                    <span>+91 78882 33045</span>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="p-2 bg-gold/5 rounded-full text-gold h-fit"><Mail size={18} /></div>
                                <span className="hover:text-gold cursor-pointer transition-colors">info@housematerealtors.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] uppercase tracking-[0.3em] font-bold text-muted">
                    <span>© 2026 HOUSEMATE REALTORS · STRATEGIC ASSET GROUP</span>
                    <div className="flex items-center gap-8">
                        <Link to="/privacy" className="hover:text-gold transition-colors">PRIVACY</Link>
                        <Link to="/terms" className="hover:text-gold transition-colors">TERMS</Link>
                        <span className="flex items-center gap-2">REDESIGNED BY <a href="https://clepto.io" target="_blank" className="text-gold text-[10px] font-black hover:text-white transition-colors">CLEPTO.IO</a></span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
