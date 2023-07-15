/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        "header-height": "65px",
      },

      boxShadow: {
        "hero-grettings": "var(--hero-shadow) var(--shadow-green)",
      },

      keyframes: {
        techStak: {
          'from': {
            transform: 'translateX(0)',
          },
          'to': {
            transform: 'translateX(-100%)',
          },
        }
      },

      animation: {
        "tech-stack": 'techStak 5s 4s linear infinite',
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-background': 'radial-gradient(circle at 30% 10%, var(--shadow-green) 0%, transparent 7%), radial-gradient(circle at 70% 6%, var(--shadow-green) 0%, transparent 7%)',
        hero: "radial-gradient(circle at 50% 50%, #eeeeee 0%, transparent 100%), radial-gradient(circle at 0% 50%, #eeeeee 15%, transparent 40%), radial-gradient(circle at 100% 50%, #eeeeee 15%, transparent 40%), linear-gradient(360deg, #eeeeee 0%, transparent 20%), linear-gradient(180deg, #eeeeee 0%, transparent 20%), url('/hero-background.svg')",
        "hero-title": "radial-gradient(circle at 0% 100%, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.7) 20%, rgba(0,0,0,1) 40%)",
        "project-texture": "linear-gradient(180deg, #eeeeee 50%, transparent 100%), url(/project-texture.png)",
        "project": "radial-gradient(circle at 0% 0%, #eeeeee 0%, transparent 50%), radial-gradient(circle at 100% 100%, #eeeeee 0%, transparent 50%),  url('/noise.svg')",
        "project-background": "radial-gradient(circle closest-side, hsla(250,100%,76%, 0.1), #eeeeee)",
        "tech-stack": "radial-gradient(circle at 50% 50%, transparent 20%, #eeeeee 90%)",

      },
    },
  },
  plugins: [],
}