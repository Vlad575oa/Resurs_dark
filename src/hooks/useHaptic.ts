"use client";

import { useCallback } from "react";

export const useHaptic = () => {
    const trigger = useCallback(() => {
        if (typeof navigator !== "undefined" && navigator.vibrate) {
            navigator.vibrate(10); // Short, crisp vibration
        }
    }, []);

    return { trigger };
};
