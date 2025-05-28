import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#9333ea',
                dark: '#111827',
            },
        },
    },
    plugins: [],
};

export default config;
