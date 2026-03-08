"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { useHaptic } from "@/hooks/useHaptic";

export const HeroActions = () => {
    const { trigger } = useHaptic();

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="flex flex-wrap gap-4 mt-2">
            <Button
                onClick={() => { trigger(); scrollToSection('calculator'); }}
                className="flex items-center justify-center gap-2 bg-primary-main hover:bg-primary-dark text-white text-base font-bold py-6 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 min-w-[180px]"
            >
                <span>Get Calculation</span>
                <ArrowRight className="w-5 h-5" />
            </Button>

            <Button
                variant="outline"
                onClick={() => { trigger(); scrollToSection('audit'); }}
                className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-navy border-2 border-gray-200 hover:border-navy/30 text-base font-bold py-6 px-8 rounded-lg transition-all min-w-[180px]"
            >
                <span>Free Audit</span>
            </Button>
        </div>
    );
};
