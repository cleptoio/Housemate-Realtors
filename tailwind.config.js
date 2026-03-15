/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Gold Luxury Palette
                gold: {
                    DEFAULT: '#D4AF37', // Metallic Gold
                    light: '#F9E076',   // Bright Highlight
                    dark: '#B8860B',    // Deep Shadow
                    muted: '#AC8E12',   // Flat Gold
                },
                navy: '#000000',      // Pure Black for luxury backdrop
                deep: '#0a0a0a',      // Near Black for depth
                slate: '#141414',     // Tertiary surface
                sand: '#FFFFFF',      // Pure White contrast
                muted: '#9ca3af',     // Silver/Gray for secondary text
                error: '#FF3B30',     // Classic Ferrari Red for errors
            },
            fontFamily: {
                display: ['Playfair Display', 'serif'], // Switched to Playfair for luxury
                accent: ['Cinzel', 'serif'],          // Cinzel for subtle gold accents
                sans: ['Inter', 'sans-serif'],        // Inter for clean body text
            },
            animation: {
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
                'fade-in-up': 'fadeInUp 1s ease-out forwards',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
}
