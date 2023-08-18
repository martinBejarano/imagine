import { createContext, useState, useEffect } from 'react';
export const DeviceContext = createContext();

export function useDevice() {

    const updateDevice = () => {
        let width = window.innerWidth;
        if (width >= 1536) return '2xl';
        if (width >= 1280) return 'xl';
        if (width >= 1024) return 'lg';
        if (width >= 768) return 'md';
        if (width >= 640) return 'sm';
        if (width < 640) return 'mb';
    };

    const [device, setDevice] = useState(updateDevice());

    useEffect(() => {
        window.addEventListener('resize', () => { setDevice(updateDevice()) });
    }, []);

    return device;
}
