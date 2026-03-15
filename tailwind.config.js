/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                navy: '#1a1a2e',
                deep: '#0f3460',
                cyan: '#00F2EA',
                sand: '#eaeaea',
                slate: '#16213e',
                muted: '#94a3b8',
                error: '#e94560'
            },
            fontFamily: {
                sans: ['Poppins', 'Inter', 'sans-serif'],
                display: ['Orbitron', 'sans-serif'],
                mono: ['"Space Grotesk"', 'monospace']
            }
        },
    },
    plugins: [],
}
