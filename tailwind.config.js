/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      fontSize: {
        "xl": ["1.25rem", "1.65"],
        "6xl": ["3.75rem", "1.09"]
      },

      colors: {
        background: "var(--background)",
      },

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
        },

        "tech-carousel": {
            "from": {
              transform: 'translateX(0)',
            },
            "to": {
              transform: 'translateX(-100%)',
            }
        },

        heroText: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },

        blob: {
          "0%": {
            transform: "translate(-50px, 5px) scale(1.5)"
          },

          "33%": {
            transform: "translate(-25px, 50px) scale(1.8)"
          },

          "66%": {
            transform: "translate(62px, -50px) scale(2)"
          },

          "100%": {
            transform: "translate(0px, 0px) scale(1.5)"

          }
        },

        "shootin-star": {
          "0%": {
            transform: "translate(0px, 0px)",
            opacity: 0
          },

          "10%": {
            transform: "translate(0px, 0px)",
            opacity: 0
          },

          "80%": {
            transform: "translate(0px, 0px)",
            opacity: 0
          },

          "95%": {
            transform: "translate(0px, -240px)",
            opacity: 1
          },

          "100%": {
            transform: "translate(0px, -250px)",
            opacity: 0
          }
        }
      },

      backgroundSize: {
        '300%': '300%',
      },

      animation: {
        "tech-stack": 'techStak 5s 4s linear infinite',
        "hero-text": 'heroText 4s ease infinite alternate',
        "tech-carousel": 'tech-carousel 48s linear infinite',
        "blob": "blob 5s infinite alternate",
        "shootin-star": "shootin-star 10s linear infinite"
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-background': 'radial-gradient(circle at 30% 10%, var(--shadow-green) 0%, transparent 7%), radial-gradient(circle at 70% 6%, var(--shadow-green) 0%, transparent 7%)',
        hero: "radial-gradient(circle at 50% 50%, var(--background) 0%, transparent 100%), radial-gradient(circle at 0% 50%, var(--background) 15%, transparent 40%), radial-gradient(circle at 100% 50%, var(--background) 15%, transparent 40%), linear-gradient(360deg, var(--background) 0%, transparent 20%), linear-gradient(180deg, var(--background) 0%, transparent 20%), url('/hero-background.svg')",
        "hero-title": "radial-gradient(circle at 0% 100%, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.7) 20%, rgba(0,0,0,1) 40%)",
        "project-texture": "linear-gradient(180deg, var(--background) 50%, transparent 100%), url(/project-texture.png)",
        "project": "radial-gradient(circle at 0% 0%, var(--background) 0%, transparent 50%), radial-gradient(circle at 100% 100%, var(--background) 0%, transparent 50%),  url('/noise.svg')",
        "project-background": "radial-gradient(circle closest-side, hsla(250,100%,76%, 0.1), var(--background))",
        "experience-background": "radial-gradient(circle at 0% 100%, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.7) 20%, rgba(0,0,0,1) 40%)",
        "tech-stack": "radial-gradient(circle at 50% 50%, transparent 20%, var(--background) 90%)",
        "app-store-gradient": "linear-gradient(90deg, #1b74f2 0%, #19c7fd 100%)",

      },
    },
  },
  plugins: [],
}