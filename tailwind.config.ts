import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        dark: 'var(--color-dark)',
        muted: 'var(--color-muted)'
      },
      fontFamily: {
        sans: ['var(--font-sans)']
      }
    }
  },
  plugins: []
}

export default config
