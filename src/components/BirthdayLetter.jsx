import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Lock, Fingerprint, Heart, Unlock } from 'lucide-react';
import './BirthdayLetter.css';

export default function BirthdayLetter({ sisterName = "Kinjal" }) {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.3 });
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [scanProgress, setScanProgress] = useState(0);
    const [showContent, setShowContent] = useState(false);

    // Biometric Scan Logic
    const handleScanStart = () => {
        if (isUnlocked) return;
        let progress = 0;
        const interval = setInterval(() => {
            progress += 2;
            setScanProgress(progress);
            if (progress >= 100) {
                clearInterval(interval);
                setIsUnlocked(true);
                setTimeout(() => setShowContent(true), 800);
            }
        }, 30);
        window.scanInterval = interval;
    };

    const handleScanEnd = () => {
        if (isUnlocked) return;
        if (window.scanInterval) clearInterval(window.scanInterval);
        setScanProgress(0);
    };

    return (
        <section ref={containerRef} className="love-letter-section">
            <AnimatePresence mode="wait">
                {!showContent ? (
                    /* --- LOCKED STATE: Biometric Scanner --- */
                    <motion.div
                        key="locked"
                        className="vault-container"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : {}}
                        exit={{ scale: 1.5, opacity: 0, filter: 'blur(20px)' }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="vault-glass-panel">
                            <div className="vault-header">
                                <Lock className="vault-icon" size={24} />
                                <h3>SECURE ARCHIVE DETECTED</h3>
                                <p>Biometric Authentication Required</p>
                            </div>

                            <div
                                className="scanner-area"
                                onMouseDown={handleScanStart}
                                onMouseUp={handleScanEnd}
                                onMouseLeave={handleScanEnd}
                                onTouchStart={handleScanStart}
                                onTouchEnd={handleScanEnd}
                            >
                                <div className="fingerprint-ring">
                                    <svg viewBox="0 0 100 100" className="progress-ring">
                                        <circle cx="50" cy="50" r="45" pathLength="100" className="bg" />
                                        <motion.circle
                                            cx="50" cy="50" r="45"
                                            pathLength="100"
                                            className="fg"
                                            style={{ pathLength: scanProgress }}
                                        />
                                    </svg>
                                    <Fingerprint
                                        size={60}
                                        className={`fingerprint-icon ${scanProgress > 0 ? 'scanning' : ''}`}
                                        color={isUnlocked ? '#10b981' : '#f43f5e'}
                                    />
                                </div>
                                <p className="scanner-instruction">
                                    {isUnlocked ? "ACCESS GRANTED" : "HOLD TO SCAN"}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    /* --- UNLOCKED STATE: Holographic Message --- */
                    <motion.div
                        key="unlocked"
                        className="hologram-container"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="hologram-projection">
                            <div className="hologram-header">
                                <Unlock size={20} color="#10b981" />
                                <span>FILE: BIRTHDAY_V2026.enc</span>
                                <div className="hologram-line"></div>
                            </div>

                            <div className="scrolling-message-content">
                                <h2>Happy Birthday {sisterName}!</h2>
                                <p>
                                    As we grow up, my world has always had one constant: you.
                                    Looking back at all our stories—from our endless bickering as kids to the long conversations we have now—I realize one thing:
                                </p>
                                <p className="highlight-text">
                                    You are the best sister anyone could ask for.
                                </p>
                                <p>
                                    Whether we are fighting over the TV remote, covering for each other in front of mom and dad, or just sharing a pizza,
                                    every moment is a core memory because you are there.
                                    You are my partner in crime, my annoying sibling, and my best friend.
                                </p>
                                <p>
                                    Here's to a lifetime of late-night talks, endless laughter, and wishing you all the success and happiness in the world.
                                </p>
                                <div className="signature-block">
                                    <p>Forever Yours,</p>
                                    <h3>Sahil</h3>
                                </div>
                            </div>

                            <div className="hologram-footer">
                                <Heart size={16} fill="#10b981" />
                                <span>END OF MESSAGE</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
