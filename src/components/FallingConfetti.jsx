import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PartyPopper } from 'lucide-react';
import './FallingConfetti.css';

const reasons = [
    { id: 1, text: "Always There For Me", icon: "💎" },
    { id: 2, text: "Incredible Sister", icon: "🌸" },
    { id: 3, text: "Funniest Person", icon: "✨" },
    { id: 4, text: "Best Advice Giver", icon: "🤝" },
    { id: 5, text: "Super Smart", icon: "🏆" },
    { id: 6, text: "My Partner in Crime", icon: "🧠" },
    { id: 7, text: "Beautiful Inside and Out", icon: "🦋" },
    { id: 8, text: "Cleanest Soul", icon: "☁️" },
    { id: 9, text: "Your Smile", icon: "💖" },
    { id: 10, text: "Your Laughter", icon: "🎵" }
];

const FallingConfetti = () => {
    const [activeReason, setActiveReason] = useState(null);
    const [hearts, setHearts] = useState([]);

    // Generate random hearts for the rain effect
    useEffect(() => {
        const generateHearts = () => {
            const newHearts = Array.from({ length: 15 }).map((_, i) => ({
                id: i,
                left: Math.random() * 100, // Random horizontal position
                delay: Math.random() * 5,  // Random delay
                duration: 5 + Math.random() * 5, // Random fall speed
                scale: 0.5 + Math.random() * 0.5, // Random size
                reason: reasons[i % reasons.length] // Assign a reason cyclically
            }));
            setHearts(newHearts);
        };

        generateHearts();
    }, []);

    return (
        <div className="falling-hearts-container">
            <h2 className="falling-title">Infinite Reasons You're Awesome</h2>
            <p className="falling-subtitle">Tap the falling confetti to catch a reason!</p>

            <div className="rain-area">
                {hearts.map((heart) => (
                    <motion.div
                        key={heart.id}
                        className="falling-heart"
                        style={{
                            left: `${heart.left}%`,
                            scale: heart.scale
                        }}
                        initial={{ y: -100, opacity: 0 }}
                        animate={{
                            y: '100vh',
                            opacity: [0, 1, 1, 0],
                            rotate: [0, 45, -45, 0]
                        }}
                        transition={{
                            duration: heart.duration,
                            repeat: Infinity,
                            delay: heart.delay,
                            ease: "linear"
                        }}
                        onPointerDown={(e) => {
                            e.stopPropagation();
                            e.preventDefault(); // Prevent standard touch actions
                            setActiveReason(heart.reason);
                        }}
                    >
                        <PartyPopper size={32} fill="#22c55e" color="#22c55e" />
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {activeReason && (
                    <motion.div
                        className="reason-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setActiveReason(null)}
                    >
                        <motion.div
                            className="reason-card"
                            initial={{ scale: 0.5, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.5, y: 50 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <span className="reason-emoji">{activeReason.icon}</span>
                            <p className="reason-text">{activeReason.text}</p>
                            <button className="close-reason" onClick={() => setActiveReason(null)}>
                                Catch Another 💖
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FallingConfetti;
