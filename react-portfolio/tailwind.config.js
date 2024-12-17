/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E293B',
        secondary: '#64748B',
        accent: '#3B82F6',
      },
    },
  },
  plugins: [],
}
