import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				cyber: {
					blue: 'hsl(var(--cyber-blue))',
					glow: 'hsl(var(--cyber-glow))',
					dark: 'hsl(var(--cyber-dark))',
					accent: 'hsl(var(--cyber-accent))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				// Accordion Animations
				'accordion-down': {
					from: { height: '0', opacity: '0' },
					to: { height: 'var(--radix-accordion-content-height)', opacity: '1' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
					to: { height: '0', opacity: '0' }
				},
				// Fade Animations
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-out': {
					'0%': {
						opacity: '1',
						transform: 'translateY(0)'
					},
					'100%': {
						opacity: '0',
						transform: 'translateY(10px)'
					}
				},
				// Scale Animations
				'scale-in': {
					'0%': {
						transform: 'scale(0.95)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'scale-out': {
					from: { transform: 'scale(1)', opacity: '1' },
					to: { transform: 'scale(0.95)', opacity: '0' }
				},
				// Slide Animations
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'slide-out-right': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'slide-in-left': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'slide-in-up': {
					'0%': { transform: 'translateY(100%)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				// Stagger Animations
				'stagger-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				// Pulse Glow Animation
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 5px hsl(var(--cyber-blue) / 0.5)' },
					'50%': { boxShadow: '0 0 20px hsl(var(--cyber-blue) / 0.8), 0 0 30px hsl(var(--cyber-glow) / 0.6)' }
				},
				// Bounce Scale
				'bounce-scale': {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.05)' }
				},
				// Glow Expand
				'glow-expand': {
					'0%': { 
						transform: 'scale(1)',
						boxShadow: '0 0 0 0 hsl(var(--cyber-blue) / 0.7)' 
					},
					'70%': { 
						transform: 'scale(1.02)',
						boxShadow: '0 0 0 10px hsl(var(--cyber-blue) / 0)' 
					},
					'100%': { 
						transform: 'scale(1)',
						boxShadow: '0 0 0 0 hsl(var(--cyber-blue) / 0)' 
					}
				}
			},
			animation: {
				// Basic Animations
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'fade-out': 'fade-out 0.3s ease-out',
				'scale-in': 'scale-in 0.2s ease-out',
				'scale-out': 'scale-out 0.2s ease-out',
				'slide-in-right': 'slide-in-right 0.3s ease-out',
				'slide-out-right': 'slide-out-right 0.3s ease-out',
				'slide-in-left': 'slide-in-left 0.3s ease-out',
				'slide-in-up': 'slide-in-up 0.4s ease-out',
				// Combined Animations
				'enter': 'fade-in 0.3s ease-out, scale-in 0.2s ease-out',
				'exit': 'fade-out 0.3s ease-out, scale-out 0.2s ease-out',
				// Stagger Animations
				'stagger-1': 'stagger-in 0.4s ease-out 0.1s both',
				'stagger-2': 'stagger-in 0.4s ease-out 0.2s both',
				'stagger-3': 'stagger-in 0.4s ease-out 0.3s both',
				'stagger-4': 'stagger-in 0.4s ease-out 0.4s both',
				// Special Effects
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'bounce-scale': 'bounce-scale 0.6s ease-in-out',
				'glow-expand': 'glow-expand 2s infinite'
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		function({ addUtilities }) {
			addUtilities({
				// Interactive Elements
				'.story-link': {
					position: 'relative',
					display: 'inline-block',
					'&::after': {
						content: '""',
						position: 'absolute',
						width: '100%',
						height: '2px',
						bottom: '0',
						left: '0',
						backgroundColor: 'hsl(var(--primary))',
						transform: 'scaleX(0)',
						transformOrigin: 'bottom right',
						transition: 'transform 0.3s ease-out',
					},
					'&:hover::after': {
						transform: 'scaleX(1)',
						transformOrigin: 'bottom left',
					}
				},
				// Hover Scale Animation
				'.hover-scale': {
					transition: 'transform 0.2s ease-out',
					'&:hover': {
						transform: 'scale(1.05)',
					}
				},
				// Card Hover Effect
				'.card-hover': {
					transition: 'all 0.3s ease-out',
					'&:hover': {
						transform: 'translateY(-4px)',
						boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
					}
				},
				// Glow Effect with Pulse
				'.glow-on-hover': {
					transition: 'all 0.3s ease-out',
					'&:hover': {
						boxShadow: '0 0 20px hsl(var(--cyber-blue) / 0.5)',
						transform: 'translateY(-2px)'
					}
				},
				// Cyber Pulse Effect
				'.cyber-pulse': {
					animation: 'pulse-glow 2s infinite'
				},
        /* Floating animation */
        '.animate-float': {
          animation: 'bounce-scale 3s ease-in-out infinite'
        }
			})
		}
	],
} satisfies Config;
