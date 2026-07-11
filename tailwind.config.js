aplicativos/web/tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        display: ['"Playfair Display"', "serif"],
        headline: ['"Bebas Neue"', '"Inter"', "sans-serif"],
      },
      letterSpacing: {
        widest: "0.25em",
        ultra: "0.32em",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        gold: {
          DEFAULT: "hsl(var(--gold))",
          bright: "hsl(var(--gold-bright))",
          muted: "hsl(var(--gold-muted))",
        },
        teal: {
          DEFAULT: "hsl(var(--teal))",
          bright: "hsl(var(--teal-bright))",
        },
        navy: {
          DEFAULT: "hsl(var(--navy))",
          deep: "hsl(var(--navy-deep))",
          surface: "hsl(var(--navy-surface))",
          elevated: "hsl(var(--navy-elevated))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        glow: "0 0 0 1px hsl(var(--gold) / 0.25), 0 20px 60px -20px hsl(var(--gold) / 0.45)",
        "glow-teal":
          "0 0 0 1px hsl(var(--teal) / 0.25), 0 20px 60px -20px hsl(var(--teal) / 0.45)",
        edition:
          "0 30px 80px -30px hsl(220 60% 2% / 0.85), inset 0 1px 0 0 hsl(0 0% 100% / 0.05)",
        "edition-hover":
          "0 50px 140px -30px hsl(var(--gold) / 0.4), inset 0 1px 0 0 hsl(0 0% 100% / 0.12)",
        "sticky-bar":
          "0 -20px 60px -20px hsl(220 80% 2% / 0.6), 0 -1px 0 0 hsl(var(--gold) / 0.3)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px)",
        "radial-gold":
          "radial-gradient(ellipse at top, hsl(var(--gold) / 0.18), transparent 60%)",
        "radial-teal":
          "radial-gradient(ellipse at bottom, hsl(var(--teal) / 0.15), transparent 60%)",
        "scrim-bottom":
          "linear-gradient(180deg, transparent 0%, hsl(var(--navy-deep) / 0.6) 60%, hsl(var(--navy-deep)) 100%)",
        "scrim-left":
          "linear-gradient(90deg, hsl(var(--navy-deep)) 0%, hsl(var(--navy-deep) / 0.85) 30%, transparent 70%)",
        "scrim-right":
          "linear-gradient(270deg, hsl(var(--navy-deep)) 0%, hsl(var(--navy-deep) / 0.85) 30%, transparent 70%)",
        "gold-sheen":
          "linear-gradient(135deg, hsl(var(--gold-bright)) 0%, hsl(var(--gold)) 50%, hsl(41 45% 40%) 100%)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up-bar": {
          "0%": { opacity: "0", transform: "translateY(100%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 0 0 hsl(var(--gold) / 0.5)" },
          "50%": { boxShadow: "0 0 0 12px hsl(var(--gold) / 0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "ken-burns": {
          "0%": { transform: "scale(1) translate(0, 0)" },
          "100%": { transform: "scale(1.1) translate(-1.5%, -1%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 1s ease-out both",
        "slide-up-bar":
          "slide-up-bar 0.6s cubic-bezier(0.22, 1, 0.36, 1) both",
        marquee: "marquee 40s linear infinite",
        shimmer: "shimmer 3s linear infinite",
        "pulse-glow": "pulse-glow 2.4s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "ken-burns": "ken-burns 18s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
