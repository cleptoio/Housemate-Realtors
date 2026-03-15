import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate py-20 border-t border-sand/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Col */}
                    <div className="flex flex-col gap-6">
                        <Link to="/" className="flex items-center gap-3">
                            <img src="/assets/images/logo.png" alt="Housemate" className="h-12 w-12" />
                            <div className="flex flex-col">
                                <span className="text-2xl font-display font-bold text-sand uppercase tracking-wider">Housemate</span>
                                <span className="text-xs text-gold uppercase tracking-[0.2em]">Realtors</span>
                            </div>
                        </Link>
                        <p className="text-muted text-sm leading-relaxed">
                            Pune's trusted real estate partner delivering premium property solutions — buying, selling, renting, interior design, and construction developments.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/housemate_realtors" target="_blank" rel="noopener" className="p-2 bg-navy rounded-full text-sand/60 hover:text-gold transition-colors">
                                <Instagram size={18} />
                            </a>
                            <a href="https://www.facebook.com/HouseMateRealtors" target="_blank" rel="noopener" className="p-2 bg-navy rounded-full text-sand/60 hover:text-gold transition-colors">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="p-2 bg-navy rounded-full text-sand/60 hover:text-gold transition-colors">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-sand font-display text-lg mb-8">Quick Links</h4>
                        <ul className="flex flex-col gap-4 text-sm text-muted">
                            <li><Link to="/about" className="hover:text-gold transition-colors">About Housemate</Link></li>
                            <li><Link to="/services" className="hover:text-gold transition-colors">Our Services</Link></li>
                            <li><Link to="/projects" className="hover:text-gold transition-colors">Recent Projects</Link></li>
                            <li><Link to="/contact" className="hover:text-gold transition-colors">Enquire Now</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-sand font-display text-lg mb-8">Services</h4>
                        <ul className="flex flex-col gap-4 text-sm text-muted">
                            <li><Link to="/services/construction" className="hover:text-gold transition-colors">Property Construction</Link></li>
                            <li><Link to="/services/sales" className="hover:text-gold transition-colors">Buying & Selling</Link></li>
                            <li><Link to="/services/interiors" className="hover:text-gold transition-colors">Interior Design</Link></li>
                            <li><Link to="/services/rentals" className="hover:text-gold transition-colors">Rentals & Management</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sand font-display text-lg mb-8">Contact Us</h4>
                        <ul className="flex flex-col gap-6 text-sm text-muted">
                            <li className="flex gap-4">
                                <MapPin className="text-gold shrink-0" size={20} />
                                <span>Kharadi, Pune, Maharashtra, India 411014</span>
                            </li>
                            <li className="flex gap-4">
                                <Phone className="text-gold shrink-0" size={20} />
                                <span>+91 81493 88788<br />+91 78882 33045</span>
                            </li>
                            <li className="flex gap-4">
                                <Mail className="text-gold shrink-0" size={20} />
                                <span>info@housematerealtors.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-sand/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-muted">
                    <span>© 2026 Housemate Realtors · Pune, India</span>
                    <div className="flex gap-8">
                        <Link to="/privacy" className="hover:text-sand">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-sand">Terms of Service</Link>
                        <span>Designed by <a href="https://clepto.io" target="_blank" className="text-sand/80 hover:text-gold">Clepto.io</a></span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
