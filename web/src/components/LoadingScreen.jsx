import React, { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LoadingScreen = () => {
    const [msgIdx, setMsgIdx] = useState(0)
    const [phase, setPhase] = useState('loading')
    const [dots, setDots] = useState(0)
    const [progress, setProgress] = useState(0)
    const canvasRef = useRef(null)
    const animRef = useRef(null)

    const messages = [
        'Initializing neural core',
        'Mounting memory engine',
        'Connecting to Groq LLM',
        'Loading ChromaDB vectors',
        'Syncing RAG pipeline',
        'Verath is ready',
    ]

    const totalSteps = messages.length

    // ── same wave canvas from original ──────────────────────────────
    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        let t = 0
        const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
        resize()
        window.addEventListener('resize', resize)
        const draw = () => {
            const { width, height } = canvas
            ctx.clearRect(0, 0, width, height)
            const waves = [
                { amp: 20, freq: 0.015, speed: 0.012, color: 'rgba(124,58,237,0.08)', offset: 0 },
                { amp: 15, freq: 0.020, speed: 0.018, color: 'rgba(99,102,241,0.06)', offset: 1.5 },
                { amp: 25, freq: 0.010, speed: 0.008, color: 'rgba(139,92,246,0.05)', offset: 3.0 },
            ]
            waves.forEach(w => {
                ctx.beginPath()
                for (let x = 0; x <= width; x += 2) {
                    const y = height / 2
                        + Math.sin(x * w.freq + t * w.speed + w.offset) * w.amp
                        + Math.sin(x * w.freq * 0.5 + t * w.speed * 0.7 + w.offset) * (w.amp * 0.4)
                    if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y)
                }
                ctx.strokeStyle = w.color; ctx.lineWidth = 1.5; ctx.stroke()
            })
            const scanX = (t * 1.2) % width
            const grad = ctx.createLinearGradient(scanX - 30, 0, scanX + 30, 0)
            grad.addColorStop(0, 'transparent')
            grad.addColorStop(0.5, 'rgba(124,58,237,0.08)')
            grad.addColorStop(1, 'transparent')
            ctx.fillStyle = grad; ctx.fillRect(scanX - 30, 0, 60, height)
            t += 1
            animRef.current = requestAnimationFrame(draw)
        }
        draw()
        return () => { cancelAnimationFrame(animRef.current); window.removeEventListener('resize', resize) }
    }, [])

    // ── message cycling ──────────────────────────────────────────────
    useEffect(() => {
        const timer = setInterval(() => {
            setMsgIdx(prev => {
                if (prev >= messages.length - 1) {
                    clearInterval(timer)
                    setTimeout(() => setPhase('done'), 300)
                    return prev
                }
                return prev + 1
            })
            setProgress(prev => Math.min(prev + 1, totalSteps))
        }, 520)
        return () => clearInterval(timer)
    }, [])

    // ── animated ellipsis ────────────────────────────────────────────
    useEffect(() => {
        const t = setInterval(() => setDots(d => (d + 1) % 4), 400)
        return () => clearInterval(t)
    }, [])

    const isLast = msgIdx === messages.length - 1

    return (
        <div style={{
            background: '#ffffff',
            minHeight: '100dvh',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            position: 'fixed',
            inset: 0,
        }}>
            <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Syne:wght@400;500;600;700;800&display=swap');
                @keyframes subtleGlow {
                    0%,100% { opacity: 0.4; }
                    50% { opacity: 0.8; }
                }
                @keyframes verticalPulse {
                    0%,100% { 
                        box-shadow: 0 0 30px 10px rgba(139,92,246,0.08);
                        opacity: 0.6;
                    }
                    50% { 
                        box-shadow: 0 0 50px 20px rgba(139,92,246,0.12);
                        opacity: 0.8;
                    }
                }
                @keyframes waveMove {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }`}</style>

            {/* Subtle grid background */}
            <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
            }} />

            {/* Subtle purple vertical glow */}
            <div style={{
                position: 'absolute',
                left: '50%',
                top: '20%',
                bottom: '20%',
                width: '2px',
                transform: 'translateX(-50%)',
                background: 'linear-gradient(to bottom, transparent, rgba(139,92,246,0.15), transparent)',
                animation: 'verticalPulse 4s ease-in-out infinite',
                pointerEvents: 'none',
            }} />

            {/* Horizontal wavy lines */}
            <div style={{
                position: 'absolute',
                inset: 0,
                pointerEvents: 'none',
                overflow: 'hidden',
            }}>
                {[0, 1, 2].map((i) => (
                    <div
                        key={i}
                        style={{
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            height: '1px',
                            top: `${30 + i * 15}%`,
                            background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.08), transparent)',
                            animation: `waveMove ${8 + i * 2}s linear infinite`,
                            animationDelay: `${i * 0.5}s`,
                        }}
                    />
                ))}
            </div>

            {/* Canvas waves */}
            <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />

            {/* Vignette effect */}
            <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                background: 'radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, rgba(0,0,0,0.03) 100%)',
            }} />

            {/* ── main content ── */}
            <div style={{
                position: 'relative', zIndex: 10,
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                width: '100%', padding: '0 28px', boxSizing: 'border-box', gap: 0,
            }}>

                {/* Logo - V in rounded square */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    style={{ 
                        width: 72, 
                        height: 72, 
                        borderRadius: 18,
                        background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        marginBottom: '1.5rem',
                        boxShadow: '0 8px 32px rgba(124,58,237,0.15), 0 0 0 1px rgba(139,92,246,0.1)',
                    }}
                >
                    <span style={{
                        fontFamily: "Syne, sans-serif",
                        fontWeight: 800, 
                        fontSize: 36, 
                        color: '#fff', 
                        letterSpacing: '-2px',
                    }}>V</span>
                </motion.div>

                {/* Wordmark */}
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    style={{ textAlign: 'center', marginBottom: '3rem' }}
                >
                    <div style={{
                        fontFamily: "Syne, sans-serif",
                        fontWeight: 700,
                        fontSize: 'clamp(36px, 10vw, 56px)',
                        color: '#1a1a1a',
                        letterSpacing: '-2px',
                        lineHeight: 1.1,
                    }}>Verath</div>
                    <div style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: 'clamp(10px, 2.5vw, 12px)',
                        color: 'rgba(0,0,0,0.5)',
                        letterSpacing: '4px',
                        textTransform: 'uppercase',
                        marginTop: 12,
                        fontWeight: 400,
                    }}>AI - Memory - Platform</div>
                </motion.div>

                {/* Loading status */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.25 }}
                    style={{
                        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16,
                        width: '100%', maxWidth: 320,
                    }}
                >
                    {/* Message */}
                    <div style={{
                        height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center',
                        overflow: 'hidden',
                    }}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={msgIdx}
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -6 }}
                                transition={{ duration: 0.2 }}
                                style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: 'clamp(11px, 3vw, 13px)',
                                    color: isLast ? 'rgba(22,163,74,0.9)' : 'rgba(0,0,0,0.6)',
                                    letterSpacing: '0.5px',
                                    display: 'flex', alignItems: 'center', gap: 6,
                                    whiteSpace: 'nowrap',
                                    fontWeight: 400,
                                }}
                            >
                                <span style={{ 
                                    color: isLast ? 'rgba(22,163,74,0.8)' : 'rgba(139,92,246,0.8)',
                                    fontSize: 'clamp(10px, 2.5vw, 12px)',
                                }}>
                                    {isLast ? '✓' : '⟳'}
                                </span>
                                {messages[msgIdx]}
                                {!isLast && (
                                    <span style={{ 
                                        color: 'rgba(139,92,246,0.6)', 
                                        minWidth: 16, 
                                        display: 'inline-block',
                                        animation: 'subtleGlow 1.5s ease-in-out infinite',
                                    }}>
                                        {'.'.repeat(dots)}
                                    </span>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Progress bar */}
                    <div style={{ 
                        width: '100%', 
                        height: 2, 
                        background: 'rgba(0,0,0,0.1)', 
                        borderRadius: 1,
                        overflow: 'hidden',
                    }}>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${(progress / totalSteps) * 100}%` }}
                            transition={{ duration: 0.3 }}
                            style={{
                                height: '100%',
                                background: 'linear-gradient(90deg, #7c3aed, #a78bfa)',
                                borderRadius: 1,
                            }}
                        />
                    </div>

                    {/* Progress counter */}
                    <div style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: 'clamp(10px, 2.5vw, 11px)',
                        color: 'rgba(0,0,0,0.4)',
                        letterSpacing: '1px',
                        fontWeight: 500,
                    }}>
                        {String(progress).padStart(2, '0')} / {String(totalSteps).padStart(2, '0')}
                    </div>
                </motion.div>

            </div>
        </div>
    )
}

export default LoadingScreen