"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import {
    MessageSquare,
    X,
    Send,
    User,
    Bot,
    ArrowRight,
    Phone,
    Loader2,
    CheckCircle2
} from "lucide-react";
import { BOT_SCENARIO, FAQ_ANSWERS } from "@/data/chatbot";

interface Message {
    id: string;
    type: "bot" | "user";
    text: string;
    options?: { label: string; nextStep: string }[];
    isFinal?: boolean;
}

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [currentStep, setCurrentStep] = useState<string>("initial");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    const scrollRef = useRef<HTMLDivElement>(null);

    // Initial message & Reset logic
    useEffect(() => {
        if (isOpen) {
            if (messages.length === 0) {
                addBotMessage("initial");
            }
        } else {
            // Reset state when closed
            setMessages([]);
            setCurrentStep("initial");
            setIsSubmitted(false);
            setInputValue("");
        }
    }, [isOpen]);

    // Scroll to bottom
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    // Footer detection logic
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const isFooterVisible = entries.some(entry => entry.isIntersecting);
                setIsVisible(!isFooterVisible);
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px 50px 0px" // Start hiding slightly before the footer is fully in view
            }
        );

        // Regular check for footers in the DOM
        const observeFooters = () => {
            const footers = document.querySelectorAll('footer');
            footers.forEach(footer => observer.observe(footer));
        };

        observeFooters();

        // Also watch for DOM changes in case footers are rendered dynamically
        const mutationObserver = new MutationObserver(observeFooters);
        mutationObserver.observe(document.body, { childList: true, subtree: true });

        return () => {
            observer.disconnect();
            mutationObserver.disconnect();
        };
    }, []);

    const addBotMessage = (stepKey: string) => {
        setIsTyping(true);
        setTimeout(() => {
            const step = (BOT_SCENARIO as any)[stepKey];
            if (!step) return;

            const newMessage: Message = {
                id: Date.now().toString(),
                type: "bot",
                text: step.message,
                options: step.options,
                isFinal: step.showForm // Use showForm from data
            };
            setMessages(prev => [...prev, newMessage]);
            setIsTyping(false);
            setCurrentStep(stepKey);
        }, 800);
    };

    const handleOptionClick = (label: string, nextStep: string) => {
        const userMsg: Message = {
            id: Date.now().toString(),
            type: "user",
            text: label
        };
        setMessages(prev => [...prev, userMsg]);
        addBotMessage(nextStep);
    };

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const text = inputValue.trim();
        const userMsg: Message = {
            id: Date.now().toString(),
            type: "user",
            text
        };
        setMessages(prev => [...prev, userMsg]);
        setInputValue("");

        // FAQ Search Logic
        const lowerText = text.toLowerCase();
        const matchedKey = Object.keys(FAQ_ANSWERS).find(key =>
            lowerText.includes(key.toLowerCase())
        );

        setIsTyping(true);
        setTimeout(() => {
            if (matchedKey) {
                setMessages(prev => [...prev, {
                    id: Date.now().toString() + "-faq",
                    type: "bot",
                    text: (FAQ_ANSWERS as any)[matchedKey],
                    options: (BOT_SCENARIO as any)[currentStep]?.options || (BOT_SCENARIO as any).initial.options
                }]);
            } else {
                setMessages(prev => [...prev, {
                    id: Date.now().toString() + "-fallback",
                    type: "bot",
                    text: (FAQ_ANSWERS as any).default,
                    options: (BOT_SCENARIO as any)[currentStep]?.options || (BOT_SCENARIO as any).initial.options
                }]);
            }
            setIsTyping(false);
        }, 1000);
    };

    const handleFinalSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsTyping(true);
        setTimeout(() => {
            setIsSubmitted(true);
            setIsTyping(false);
            setMessages(prev => [...prev, {
                id: "thanks",
                type: "bot",
                text: "Спасибо! Ваш запрос принят. Менеджер свяжется с вами в ближайшее рабочее время."
            }]);
        }, 1500);
    };

    return (
        <LazyMotion features={domAnimation}>
            <motion.div
                initial={false}
                animate={{
                    opacity: isVisible ? 1 : 0,
                    y: isVisible ? 0 : 100,
                    scale: isVisible ? 1 : 0.8,
                    pointerEvents: isVisible ? "auto" : "none"
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="fixed bottom-6 right-6 z-[999]"
            >
                {/* FAB Button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className={`size-16 rounded-full flex items-center justify-center shadow-2xl transition-colors ${isOpen ? 'bg-white text-background-dark' : 'bg-primary text-white'
                        } relative`}
                >
                    {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
                    {!isOpen && (
                        <span className="absolute -top-1 -right-1 flex h-4 w-4">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-4 w-4 bg-orange-500"></span>
                        </span>
                    )}
                </motion.button>

                {/* Chat Window */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.9 }}
                            className="fixed bottom-0 right-0 md:bottom-20 md:right-0 w-full md:w-[400px] h-full md:h-[600px] max-h-[100dvh] md:max-h-[80vh] bg-background-dark/95 backdrop-blur-2xl rounded-t-[2.5rem] md:rounded-[2.5rem] border border-white/10 shadow-2xl flex flex-col overflow-hidden"
                        >
                            {/* Header */}
                            <div className="p-6 bg-gradient-to-r from-primary/20 to-transparent border-b border-white/5 flex items-center justify-between gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="size-12 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
                                        <Bot size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-black text-white uppercase tracking-tight text-sm">Digital Assistant</h3>
                                        <div className="flex items-center gap-1.5">
                                            <span className="size-2 rounded-full bg-green-500 animate-pulse" />
                                            <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Online</span>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 rounded-xl bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white transition-all"
                                    aria-label="Close Chat"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Messages Area */}
                            <div
                                ref={scrollRef}
                                className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide"
                            >
                                {messages.map((msg) => (
                                    <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                                        <div className={`max-w-[85%] space-y-3 ${msg.type === 'user' ? 'items-end' : 'items-start'}`}>
                                            <div className={`p-4 rounded-3xl text-sm leading-relaxed ${msg.type === 'user'
                                                ? 'bg-primary text-white rounded-tr-none shadow-lg shadow-primary/10'
                                                : 'bg-white/5 text-slate-200 border border-white/5 rounded-tl-none'
                                                }`}>
                                                {msg.text}
                                            </div>

                                            {msg.options && !isTyping && currentStep !== 'transfer_to_manager' && (
                                                <div className="flex flex-wrap gap-2 mt-4">
                                                    {msg.options.map((opt, idx) => (
                                                        <button
                                                            key={idx}
                                                            onClick={() => handleOptionClick(opt.label, opt.nextStep)}
                                                            className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-slate-300 hover:bg-primary/20 hover:border-primary hover:text-white transition-all uppercase tracking-wider"
                                                        >
                                                            {opt.label}
                                                        </button>
                                                    ))}
                                                </div>
                                            )}

                                            {msg.isFinal && !isSubmitted && (
                                                <form onSubmit={handleFinalSubmit} className="mt-4 space-y-3 bg-white/5 p-4 rounded-3xl border border-white/5">
                                                    <div className="relative">
                                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 size-4" />
                                                        <input
                                                            required
                                                            type="text"
                                                            placeholder="+7 (___) ___-__-__"
                                                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-11 pr-4 text-[16px] md:text-xs text-white focus:outline-none focus:border-primary transition-colors"
                                                        />
                                                    </div>
                                                    <button className="w-full bg-primary hover:bg-white text-background-dark py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">
                                                        Отправить заявку
                                                    </button>
                                                </form>
                                            )}
                                        </div>
                                    </div>
                                ))}
                                {isTyping && (
                                    <div className="flex justify-start">
                                        <div className="bg-white/5 p-4 rounded-3xl rounded-tl-none border border-white/5 flex gap-1">
                                            <span className="size-1.5 bg-slate-500 rounded-full animate-bounce" />
                                            <span className="size-1.5 bg-slate-500 rounded-full animate-bounce delay-100" />
                                            <span className="size-1.5 bg-slate-500 rounded-full animate-bounce delay-200" />
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Input Area */}
                            <div className="p-4 border-t border-white/5 bg-white/5">
                                <div className="relative flex items-center gap-2">
                                    <input
                                        type="text"
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                        placeholder="Задайте свой вопрос..."
                                        className="flex-1 bg-white/5 border border-white/10 rounded-2xl py-4 pl-6 pr-12 text-[16px] md:text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-primary/50 transition-all"
                                    />
                                    <button
                                        onClick={handleSend}
                                        disabled={!inputValue.trim()}
                                        className="absolute right-2 p-2.5 rounded-xl bg-primary text-white disabled:opacity-50 disabled:bg-slate-700 transition-all"
                                    >
                                        <Send size={16} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </LazyMotion>
    );
}
