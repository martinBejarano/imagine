import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        container: {
            center: true,
            padding: '1.5rem'
        },
        extend: {
            colors: {
                'blue': '#4285f4',
                grey: {
                    300: '#E8E8E8',
                    500: '#F6F6F6',
                    700: '#6B6B6B',
                }
            },

            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [forms],
};
