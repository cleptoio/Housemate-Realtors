import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion, useScroll, useSpring } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const Layout = ({ children }) => {
    const scrollRef = useRef();

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        padding: 30,
        restDelta: 0.001
    });

    return (
        <div className="flex flex-col min-h-screen bg-navy overflow-x-hidden selection:bg-gold selection:text-navy">
            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gold z-[100] origin-left"
                style={{ scaleX }}
            />

            {/* Grain Overlay */}
            <div className="fixed inset-0 pointer-events-none z-[90] opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <Navbar />
            <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="flex-grow pt-24"
            >
                {children}
            </motion.main>

            {/* WhatsApp Float */}
            <a
                href="https://wa.me/918149388788?text=Hello%20Housemate%20Realtors!"
                target="_blank"
                rel="noopener"
                className="fixed bottom-10 right-10 z-[80] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
            >
                <MessageCircle size={32} />
                <span className="absolute right-full mr-4 bg-navy text-sand text-[10px] uppercase tracking-widest px-4 py-2 rounded-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    Contact Concierge
                </span>
            </a>

            <Footer />
        </div>
    );
};

export default Layout;
