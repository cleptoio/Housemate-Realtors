/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                navy: '#0F172A',
                royal: '#1D4ED8',
                gold: '#D4AF37',
                sand: '#F3F4F6',
                slate: '#111827',
                muted: '#6B7280',
                error: '#DC2626'
            },
            fontFamily: {
                sans: ['Inter', 'DM Sans', 'sans-serif'],
                display: ['"DM Serif Display"', 'serif'],
                mono: ['"Space Grotesk"', 'monospace']
            }
        },
    },
    plugins: [],
}
