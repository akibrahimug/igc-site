/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			green: {
  				'100': '#e8f5e9',
  				'200': '#c8e6c9',
  				'300': '#a5d6a7',
  				'400': '#81c784',
  				'500': '#66bb6a',
  				'600': '#4caf50',
  				'700': '#43a047',
  				'800': '#388e3c',
  				'900': '#2e7d32',
  				'950': '#044517'
  			},
  			brown: {
  				'100': '#f0ebe6',
  				'200': '#e0d1c2',
  				'300': '#d1b79e',
  				'400': '#c19d7a',
  				'500': '#b28356',
  				'600': '#8e6944',
  				'700': '#6b4f33',
  				'800': '#483522',
  				'900': '#241a11'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		textShadow: {
  			default: '2px 2px 4px rgba(0, 0, 0, 0.5)'
  		},
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
  		},
  		fontFamily: {
  			igc: ["IgcFont", "sans-serif"]
  		},
  		keyframes: {
  			slideIn: {
  				'0%': {
  					transform: 'translateX(100%)'
  				},
  				'80%': {
  					transform: 'translateX(-10%)'
  				},
  				'100%': {
  					transform: 'translateX(0)'
  				}
  			},
  			slideInTop: {
  				'0%': {
  					transform: 'translateY(-100%)'
  				},
  				'70%': {
  					transform: 'translateY(-45%)'
  				},
  				'80%': {
  					transform: 'translateY(10)'
  				}
  			}
  		},
  		animation: {
  			'slide-in': 'slideIn 0.5s ease-out',
  			'slide-in-top': 'slideInTop 2s ease-out'
  		},
  		scrollSnapType: {
  			y: 'y mandatory'
  		},
  		scrollSnapAlign: {
  			start: 'start'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".shadow-text": {
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        },
      });
    },
      require("tailwindcss-animate")
],
  variants: {
    extend: {
      scroll: ["responsive"],
      scrollSnap: ["responsive"],
    },
  },
};
