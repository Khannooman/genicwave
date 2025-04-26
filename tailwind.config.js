/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{ts,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: '#1E40AF', // Blue for branding
          secondary: '#1F2937', // Dark gray
        },
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      },
    },
    plugins: [],
  };