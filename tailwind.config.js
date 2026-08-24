/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#fbfaf7', // var(--paper)
          secondary: '#f4f2ec', // var(--cream)
        },
        cream: '#f4f2ec',
        line: '#e6e3da',
        accent: '#e94e2b',
        ink: {
          DEFAULT: '#111111', // var(--ink)
          muted: '#6b6a63',   // var(--muted)
        },
        editorial: {
          blue: '#2f6fed',   // var(--blue)
          red: '#e94e2b',    // var(--accent)
          green: '#3fae6a',  // var(--green)
          gray: '#6b6a63',   // var(--muted)
        }
      },
      fontFamily: {
        serif: ['"Georgia"', '"Iowan Old Style"', 'serif'],
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"Inter"', '-apple-system', 'sans-serif'],
        brand: ['"Inter"', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        'editorial': '3px',
      }
    },
  },
  plugins: [],
}
