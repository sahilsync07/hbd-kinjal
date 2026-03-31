import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Gift } from 'lucide-react';
import './Preloader.css';

export default function Preloader({ onComplete }) {
    const [progress, setProgress] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    // Fun birthday emojis for the floating particles
    const emojis = ['🎈', '🎉', '🎁', '✨', '🎂', '⭐'];

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setIsComplete(true);
                        setTimeout(() => onComplete(), 800);
                    }, 500);
                    return 100;
                }
                return prev + Math.random() * 15;
            });
        }, 150);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {!isComplete && (
                <motion.div
                    className="preloader"
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        scale: 1.2,
                        filter: 'blur(20px)'
                    }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                >
                    {/* Animated gradient background */}
                    <div className="preloader-bg" />

                    {/* Bouncing Gift animation */}
                    <motion.div
                        className="party-container"
                        animate={{
                            scale: [1, 1.15, 1],
                            rotate: [0, -5, 5, 0]
                        }}
                        transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            ease: 'easeInOut'
                        }}
                    >
                        <div className="party-icon-wrapper">
                            <Gift size={80} color="#10b981" strokeWidth={1.5} className="party-icon" />
                        </div>

                        {/* Pulse rings */}
                        <motion.div
                            className="pulse-ring"
                            animate={{
                                scale: [1, 2.5],
                                opacity: [0.6, 0]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: 'easeOut'
                            }}
                        />
                        <motion.div
                            className="pulse-ring"
                            animate={{
                                scale: [1, 2.5],
                                opacity: [0.6, 0]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: 'easeOut',
                                delay: 0.5
                            }}
                        />
                    </motion.div>

                    {/* Loading text */}
                    <motion.div
                        className="loading-text"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <h2>Unboxing Memories...</h2>
                        <div className="progress-bar">
                            <motion.div
                                className="progress-fill"
                                style={{ width: `${Math.min(progress, 100)}%` }}
                            />
                        </div>
                        <p className="progress-percent">{Math.floor(Math.min(progress, 100))}%</p>
                    </motion.div>

                    {/* Floating particles */}
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="particle"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -40, 0],
                                opacity: [0, 1, 0],
                                scale: [0, 1.5, 0],
                                rotate: [0, 180, 360]
                            }}
                            transition={{
                                duration: 2 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                                ease: 'easeInOut'
                            }}
                        >
                            {emojis[i % emojis.length]}
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
