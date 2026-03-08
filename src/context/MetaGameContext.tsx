"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface MetaGameContextType {
    coins: number;
    addCoins: (amount: number) => void;
    spendCoins: (amount: number) => boolean;
}

const MetaGameContext = createContext<MetaGameContextType | undefined>(undefined);

export function MetaGameProvider({ children }: { children: ReactNode }) {
    const [coins, setCoins] = useState(0);

    // Initialize from localStorage if available
    useEffect(() => {
        const saved = localStorage.getItem('logist_coins');
        if (saved) {
            setCoins(parseInt(saved, 10));
        }
    }, []);

    // Save to localStorage when changed
    useEffect(() => {
        localStorage.setItem('logist_coins', coins.toString());
    }, [coins]);

    const addCoins = (amount: number) => {
        setCoins(prev => prev + amount);
    };

    const spendCoins = (amount: number) => {
        if (coins >= amount) {
            setCoins(prev => prev - amount);
            return true;
        }
        return false;
    };

    return (
        <MetaGameContext.Provider value={{ coins, addCoins, spendCoins }}>
            {children}
        </MetaGameContext.Provider>
    );
}

export function useMetaGame() {
    const context = useContext(MetaGameContext);
    if (context === undefined) {
        throw new Error('useMetaGame must be used within a MetaGameProvider');
    }
    return context;
}
