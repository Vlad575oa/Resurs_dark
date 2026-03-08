"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Package, Drum, Zap, AlertTriangle, ArrowLeft, ArrowRight, ArrowDown, RotateCw, Play, Trophy } from "lucide-react";
import { useMetaGame } from "@/context/MetaGameContext";

// Tetris Constants
const COLS = 10;
const ROWS = 16;
const INITIAL_SPEED = 800;

const TETROMINOES: Record<string, { shape: number[][], color: string, icon: any }> = {
    I: { shape: [[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]], color: "from-cyan-400 to-cyan-600", icon: Box },
    J: { shape: [[1, 0, 0], [1, 1, 1], [0, 0, 0]], color: "from-blue-500 to-blue-700", icon: Package },
    L: { shape: [[0, 0, 1], [1, 1, 1], [0, 0, 0]], color: "from-orange-400 to-orange-600", icon: Zap },
    O: { shape: [[1, 1], [1, 1]], color: "from-yellow-400 to-yellow-600", icon: Drum },
    S: { shape: [[0, 1, 1], [1, 1, 0], [0, 0, 0]], color: "from-emerald-400 to-emerald-600", icon: AlertTriangle },
    T: { shape: [[0, 1, 0], [1, 1, 1], [0, 0, 0]], color: "from-purple-400 to-purple-600", icon: Box },
    Z: { shape: [[1, 1, 0], [0, 1, 1], [0, 0, 0]], color: "from-red-400 to-red-600", icon: Package },
};

export default function SteroidTetris() {
    const [grid, setGrid] = useState<(string | null)[][]>(Array(ROWS).fill(null).map(() => Array(COLS).fill(null)));
    const [activePiece, setActivePiece] = useState<{ x: number, y: number, type: string, shape: number[][] } | null>(null);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [level, setLevel] = useState(1);
    const [linesCleared, setLinesCleared] = useState(0);
    const [density, setDensity] = useState(0);
    const [isGold, setIsGold] = useState(false);
    const [superDensity, setSuperDensity] = useState<{ show: boolean, mult: number, id: number }>({ show: false, mult: 1, id: 0 });

    const { addCoins } = useMetaGame();
    const gameLoopRef = useRef<NodeJS.Timeout | null>(null);

    const spawnPiece = useCallback(() => {
        const types = Object.keys(TETROMINOES);
        const type = types[Math.floor(Math.random() * types.length)];
        const piece = {
            x: Math.floor(COLS / 2) - 1,
            y: 0,
            type,
            shape: TETROMINOES[type].shape
        };

        // Check collision immediately
        if (checkCollision(piece.x, piece.y, piece.shape, grid)) {
            setGameOver(true);
            setIsPaused(true);
        } else {
            setActivePiece(piece);
        }
    }, [grid]);

    const checkCollision = (x: number, y: number, shape: number[][], currentGrid: (string | null)[][]) => {
        for (let r = 0; r < shape.length; r++) {
            for (let c = 0; c < shape[r].length; c++) {
                if (shape[r][c] !== 0) {
                    const newX = x + c;
                    const newY = y + r;
                    if (newX < 0 || newX >= COLS || newY >= ROWS || (newY >= 0 && currentGrid[newY][newX])) {
                        return true;
                    }
                }
            }
        }
        return false;
    };

    const rotate = (shape: number[][]) => {
        const newShape = shape[0].map((_, i) => shape.map(row => row[i]).reverse());
        return newShape;
    };

    const handleRotate = () => {
        if (!activePiece || isPaused) return;
        const newShape = rotate(activePiece.shape);
        if (!checkCollision(activePiece.x, activePiece.y, newShape, grid)) {
            setActivePiece({ ...activePiece, shape: newShape });
        }
    };

    const move = useCallback((dx: number, dy: number) => {
        if (!activePiece || isPaused) return false;
        if (!checkCollision(activePiece.x + dx, activePiece.y + dy, activePiece.shape, grid)) {
            setActivePiece(prev => prev ? { ...prev, x: prev.x + dx, y: prev.y + dy } : null);
            return true;
        }
        if (dy > 0) {
            lockPiece();
        }
        return false;
    }, [activePiece, grid, isPaused]);

    const lockPiece = () => {
        if (!activePiece) return;
        const newGrid = grid.map(row => [...row]);
        activePiece.shape.forEach((row, r) => {
            row.forEach((cell, c) => {
                if (cell !== 0) {
                    const y = activePiece.y + r;
                    const x = activePiece.x + c;
                    if (y >= 0) newGrid[y][x] = activePiece.type;
                }
            });
        });

        let cleared = 0;
        const finalGrid = newGrid.filter(row => {
            const isFull = row.every(cell => cell !== null);
            if (isFull) cleared++;
            return !isFull;
        });

        while (finalGrid.length < ROWS) {
            finalGrid.unshift(Array(COLS).fill(null));
        }

        const filledCells = finalGrid.flat().filter(c => c !== null).length;
        setDensity(Math.round((filledCells / (ROWS * COLS)) * 100));

        if (cleared > 0) {
            const newScore = score + [0, 100, 300, 500, 800][cleared] * level;
            setScore(newScore);
            setLinesCleared(prev => prev + cleared);
            if (linesCleared + cleared >= level * 10) setLevel(l => l + 1);

            if (cleared >= 2) {
                setSuperDensity({ show: true, mult: cleared, id: Date.now() });
                setTimeout(() => setSuperDensity(prev => ({ ...prev, show: false })), 2000);
            }

            if (!isGold && newScore >= 1000) {
                setIsGold(true);
                addCoins(200); // Meta-game reward
            }
        }

        setGrid(finalGrid);
        spawnPiece();
    };

    useEffect(() => {
        if (!isPaused && !gameOver) {
            gameLoopRef.current = setInterval(() => move(0, 1), INITIAL_SPEED / level);
        } else {
            if (gameLoopRef.current) clearInterval(gameLoopRef.current);
        }
        return () => { if (gameLoopRef.current) clearInterval(gameLoopRef.current); };
    }, [isPaused, gameOver, move, level]);

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (isPaused) return;
            switch (e.key) {
                case 'ArrowLeft': move(-1, 0); break;
                case 'ArrowRight': move(1, 0); break;
                case 'ArrowDown': move(0, 1); break;
                case 'ArrowUp': handleRotate(); break;
                case ' ': e.preventDefault(); while (move(0, 1)); break;
            }
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [isPaused, move]);

    const startNewGame = () => {
        setGrid(Array(ROWS).fill(null).map(() => Array(COLS).fill(null)));
        setScore(0);
        setLevel(1);
        setLinesCleared(0);
        setDensity(0);
        setIsGold(false);
        setGameOver(false);
        setIsPaused(false);
        spawnPiece();
    };

    return (
        <div className="relative w-full min-h-[600px] bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 rounded-3xl border border-white/10 p-8 overflow-hidden group">
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

            <div className="grid lg:grid-cols-2 gap-12 relative z-10 h-full">
                <div className="flex flex-col justify-between">
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Zap className="w-5 h-5 text-indigo-400 animate-pulse" />
                                <span className="text-[10px] uppercase font-black tracking-[0.4em] text-indigo-400">Advanced Stacking Engine v4.0</span>
                            </div>
                            <h3 className="text-4xl font-black text-white uppercase tracking-tighter italic">Тетрис на стероидах</h3>
                            <p className="text-slate-400 text-sm max-w-sm">Классическая укладка в экстремальных условиях. Управляйте логистическим потоком.</p>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="p-4 bg-white/5 rounded-3xl border border-white/10 space-y-1">
                                <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Efficiency</span>
                                <div className="text-2xl font-black text-white font-mono">{score.toLocaleString()}</div>
                            </div>
                            <div className="p-4 bg-white/5 rounded-3xl border border-white/10 space-y-1">
                                <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Level</span>
                                <div className="text-2xl font-black text-indigo-400 font-mono">0{level}</div>
                            </div>
                            <div className="p-4 bg-white/5 rounded-3xl border border-white/10 space-y-1 col-span-2 lg:col-span-1">
                                <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Плотность</span>
                                <div className={`text-2xl font-black font-mono transition-colors ${density > 60 ? 'text-emerald-400' : density > 30 ? 'text-amber-400' : 'text-red-400'}`}>{density}%</div>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-2">
                            <button onClick={() => move(-1, 0)} className="p-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 flex items-center justify-center"><ArrowLeft className="text-white" /></button>
                            <button onClick={handleRotate} className="p-4 bg-indigo-500/20 hover:bg-indigo-500/30 rounded-2xl border border-indigo-500/20 flex items-center justify-center"><RotateCw className="text-indigo-400" /></button>
                            <button onClick={() => move(1, 0)} className="p-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 flex items-center justify-center"><ArrowRight className="text-white" /></button>
                            <div />
                            <button onClick={() => move(0, 1)} className="p-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 flex items-center justify-center"><ArrowDown className="text-white" /></button>
                            <div />
                        </div>
                    </div>

                    <div className="space-y-4 mt-8">
                        {gameOver ? (
                            <button onClick={startNewGame} className="w-full py-5 bg-red-600 hover:bg-red-500 text-white rounded-2xl font-black text-sm uppercase tracking-[0.3em] transition-all border border-red-400/20 shadow-2xl">
                                ПОПРОБОВАТЬ СНОВА
                            </button>
                        ) : (
                            <button
                                onClick={() => { if (isPaused && !activePiece) startNewGame(); else setIsPaused(!isPaused); }}
                                className={`w-full py-5 rounded-2xl font-black text-sm uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-3 border shadow-2xl ${isPaused ? 'bg-indigo-600 hover:bg-indigo-500 text-white border-indigo-400/20 shadow-indigo-500/20' : 'bg-slate-800 text-slate-400 border-white/5 shadow-none'
                                    }`}
                            >
                                {isPaused ? <Play className="w-5 h-5 fill-current" /> : <Zap className="w-5 h-5" />}
                                {isPaused ? (activePiece ? 'ПРОДОЛЖИТЬ ВЫГРУЗКУ' : 'ЗАПУСТИТЬ ЛИНИЮ') : 'ПАУЗА'}
                            </button>
                        )}
                    </div>
                </div>

                <div className={`relative aspect-[10/16] bg-black/60 rounded-3xl border-8 overflow-hidden p-1 shadow-2xl transition-all duration-1000 ${isGold ? 'border-yellow-400 shadow-[0_0_50px_rgba(250,204,21,0.4)]' : gameOver && density < 60 ? 'border-red-600 animate-shake shadow-[0_0_40px_rgba(220,38,38,0.5)]' : 'border-slate-800'}`}>
                    {isGold && (
                        <div className="absolute top-4 right-4 z-40 bg-yellow-500/20 backdrop-blur-md p-2 rounded-xl border border-yellow-400 flex flex-col items-center">
                            <Trophy className="w-6 h-6 text-yellow-500 mb-1" />
                            <span className="text-[8px] font-black text-yellow-400 uppercase">Golden Optimal</span>
                        </div>
                    )}
                    <div className="grid grid-cols-10 grid-rows-16 h-full w-full gap-0.5 relative">
                        {grid.map((row, r) => row.map((type, c) => (
                            <div key={`${r}-${c}`} className={`rounded-sm border border-white/5 flex items-center justify-center ${type ? `bg-gradient-to-br ${TETROMINOES[type].color}` : 'bg-white/5'}`}>
                                {type && <Package className="w-4 h-4 text-white/40" />}
                            </div>
                        )))}

                        {/* Shadow Piece */}
                        {activePiece && (
                            activePiece.shape.map((row, r) => row.map((cell, c) => (
                                cell !== 0 && (
                                    <div
                                        key={`piece-${r}-${c}`}
                                        className={`absolute rounded-sm border-2 border-white/50 bg-gradient-to-br ${TETROMINOES[activePiece.type].color} flex items-center justify-center z-10`}
                                        style={{
                                            width: `${100 / COLS}%`,
                                            height: `${100 / ROWS}%`,
                                            left: `${(activePiece.x + c) * (100 / COLS)}%`,
                                            top: `${(activePiece.y + r) * (100 / ROWS)}%`
                                        }}
                                    >
                                        <Package className="w-4 h-4 text-white" />
                                    </div>
                                )
                            )))
                        )}
                    </div>

                    {isPaused && !gameOver && (
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-30">
                            <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.5em] animate-pulse">System Paused</span>
                        </div>
                    )}

                    <AnimatePresence>
                        {superDensity.show && (
                            <motion.div
                                key={superDensity.id}
                                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 1.5, y: -50 }}
                                className="absolute inset-0 flex items-center justify-center z-40 pointer-events-none"
                            >
                                <div className="text-center bg-indigo-900/80 px-8 py-4 rounded-3xl border-2 border-indigo-400 shadow-[0_0_50px_rgba(99,102,241,0.8)] backdrop-blur-sm">
                                    <div className="text-4xl font-black text-indigo-300 uppercase italic tracking-widest drop-shadow-[0_0_10px_rgba(165,180,252,0.8)]">
                                        СУПЕР<br />ПЛОТНОСТЬ!
                                    </div>
                                    <div className="text-xl font-bold text-emerald-400 mt-2">
                                        {superDensity.mult}x Линии (+{(superDensity.mult * 50)} LC)
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {gameOver && (
                        <div className={`absolute inset-0 backdrop-blur-md flex flex-col items-center justify-center z-30 p-8 text-center gap-4 ${density < 60 ? 'bg-red-950/80 animate-shake' : 'bg-slate-900/80'}`}>
                            <AlertTriangle className={`w-16 h-16 ${density < 60 ? 'text-red-500 animate-bounce' : 'text-amber-500'}`} />
                            <h4 className="text-4xl font-black text-white uppercase italic tracking-tighter">OVERFLOW</h4>
                            <p className={`text-[10px] font-black uppercase tracking-widest ${density < 60 ? 'text-red-400' : 'text-emerald-400'}`}>
                                {density < 60 ? 'Вы возите воздух! Штраф за низкую плотность укладки.' : 'Контейнер заполнен. Отличная логистика.'}
                            </p>
                            <p className="text-white font-bold bg-black/40 px-4 py-2 rounded-xl">Итоговая плотность: {density}%</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
