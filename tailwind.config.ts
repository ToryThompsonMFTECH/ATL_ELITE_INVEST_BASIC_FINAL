import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        display: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#047857', // Brightened version of #025327 (brighter green)
          700: '#036952',
          800: '#025a4d',
          900: '#014d3f',
        },
        navy: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#4169e1', // Royal Blue
          600: '#3b5fd9',
          700: '#2e4fc7',
          800: '#162d6b', // Darker for overlay contrast
          900: '#0f1e4d', // Darker for white text contrast
          DEFAULT: '#4169e1',
        },
        dark: {
          DEFAULT: '#0f172a', // Lightened dark color (was #000012, now slate-900)
          50: '#1e293b',
          100: '#0f172a',
        },
      },
    },
  },
  plugins: [],
}
export default config

