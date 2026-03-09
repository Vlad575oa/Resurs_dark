"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";

export function Globe({ className }: { className?: string }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        let phi = 0;

        if (!canvasRef.current) return;

        // Use a consistent size to prevent squashing
        const size = 1000;

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: size * 2,
            height: size * 2,
            phi: 0,
            theta: 0,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 12,
            baseColor: [0.5, 0.5, 0.5],
            markerColor: [0.1, 0.8, 1],
            glowColor: [1, 1, 1],
            markers: [
                { location: [55.7558, 37.6173], size: 0.04 },    // Moscow
                { location: [59.9311, 30.3609], size: 0.04 },    // St. Petersburg
                { location: [48.4725, 135.0577], size: 0.04 },   // Khabarovsk
                { location: [52.287, 104.305], size: 0.04 },     // Irkutsk
                { location: [55.0084, 82.9357], size: 0.04 },    // Novosibirsk
                { location: [52.0333, 113.5], size: 0.04 },      // Chita
                { location: [55.154, 61.4291], size: 0.04 },     // Chelyabinsk
                { location: [56.8333, 60.5833], size: 0.04 },    // Ekaterinburg
                { location: [53.2023, 50.1408], size: 0.04 },    // Samara
                { location: [51.5333, 46.0333], size: 0.04 },    // Saratov
                { location: [56.3269, 44.0059], size: 0.04 },    // Nizhny Novgorod
                { location: [52.02, 47.79], size: 0.04 },        // Balakovo
                { location: [56.1288, 40.4066], size: 0.04 },    // Vladimir
                { location: [54.7104, 20.4522], size: 0.04 }     // Kaliningrad
            ],
            onRender: (state) => {
                state.phi = phi;
                phi += 0.005; // Slightly slower rotation for background
            },
        });

        return () => {
            globe.destroy();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className={className}
            style={{
                width: '100%',
                height: '100%',
                maxWidth: '100%',
                aspectRatio: '1 / 1'
            }}
        />
    );
}
