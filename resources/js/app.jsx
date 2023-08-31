import 'swiper/css';
import 'swiper/css/pagination'
import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ModalProvider, ModalContainer } from './Components/ModalTest';

const appName = import.meta.env.VITE_APP_NAME || 'Imagine';

createInertiaApp({
    // title: (title) => `${title}`,
    title: (title) => 'Imagine',
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <ModalProvider>
                <App {...props} />
            </ModalProvider>
        );
    },
    progress: {
        color: '#4B5563',
    },
});
