import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}', 
    './components/**/*.{js,jsx,ts,tsx}',
    "./app/**/*.{js,jsx,ts,tsx}",
    ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;