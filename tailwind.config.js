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
                display: ['Orbitron', 'sans-serif'],
                sans: ['Poppins', 'sans-serif'],
            },
            animation: {
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        },
    },
    plugins: [],
}
