// PageLoader.jsx
// Install dependency: npm install framer-motion
//
// FONTS — add to index.html <head>:
// <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=DM+Mono&family=Playfair+Display:ital,wght@1,700&display=swap" rel="stylesheet">
//
// USAGE in App.jsx:
// import { useState } from 'react'
// import PageLoader from './components/PageLoader'
//
// export default function App() {
//   const [loading, setLoading] = useState(true)
//   return (
//     <>
//       <PageLoader isLoading={loading} onComplete={() => setLoading(false)} />
//       <main>Your app here</main>
//     </>
//   )
// }

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Copy text that changes at different progress milestones ─────────────────

const LINES = [
    { label: "INITIALIZING", sub: "System boot" },
    { label: "LOADING ASSETS", sub: "Fetching resources" },
    { label: "ALMOST THERE", sub: "Final touches" },
    { label: "WELCOME", sub: "Everything is ready" },
];

function getLineIndex(p) {
    if (p < 30) return 0;
    if (p < 60) return 1;
    if (p < 90) return 2;
    return 3;
}

// ─── Grain texture overlay ───────────────────────────────────────────────────

function Grain() {
    return (
        <svg
            style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                opacity: 0.045,
                pointerEvents: "none",
                zIndex: 1,
            }}
        >
            <filter id="grain-filter">
                <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.72"
                    numOctaves="4"
                    stitchTiles="stitch"
                />
                <feColorMatrix type="saturate" values="0" />
            </filter>
            <rect width="100%" height="100%" filter="url(#grain-filter)" />
        </svg>
    );
}

// ─── Progress bar — fills from right to left ─────────────────────────────────

function ProgressBar({ progress }) {
    return (
        <div style={{ width: "100%" }}>
            {/* Thin track */}
            <div
                style={{
                    position: "relative",
                    height: "1px",
                    background: "rgba(255,255,255,0.07)",
                    overflow: "visible",
                }}
            >
                {/* Fill — transform-origin RIGHT so it grows leftward */}
                <motion.div
                    style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        background:
                            "linear-gradient(90deg, rgba(255,255,255,0.15) 0%, #ffffff 100%)",
                        transformOrigin: "right center",
                        scaleX: progress / 100,
                    }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                />
                {/* Glowing dot at the leading edge */}
                <motion.div
                    style={{
                        position: "absolute",
                        top: "50%",
                        right: `${100 - progress}%`,
                        transform: "translate(50%, -50%)",
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        background: "#fff",
                        boxShadow: "0 0 8px 2px rgba(255,255,255,0.6)",
                        opacity: progress > 2 && progress < 99 ? 1 : 0,
                    }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                />
            </div>

            {/* Labels row */}
            <div
                style={{
                    marginTop: "16px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontFamily: "'DM Mono', 'Courier New', monospace",
                    fontSize: "10px",
                    letterSpacing: "0.22em",
                    color: "rgba(255,255,255,0.28)",
                }}
            >
                <span>LOADING</span>
                <motion.span
                    style={{
                        color: "rgba(255,255,255,0.65)",
                        fontVariantNumeric: "tabular-nums",
                    }}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                >
                    {String(Math.floor(progress)).padStart(3, "0")}%
                </motion.span>
            </div>
        </div>
    );
}

// ─── Right-side animated text reveal ─────────────────────────────────────────

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1];
const EASE_IN_EXPO = [0.55, 0, 1, 0.45];

function TextReveal({ line }) {
    return (
        <AnimatePresence mode="wait">
            <motion.div key={line.label} style={{ textAlign: "right" }}>

                {/* Subtitle — appears first, slides up */}
                <div style={{ overflow: "hidden", marginBottom: "10px" }}>
                    <motion.p
                        initial={{ y: "110%", opacity: 0 }}
                        animate={{
                            y: "0%",
                            opacity: 1,
                            transition: { duration: 0.55, ease: EASE_OUT_EXPO },
                        }}
                        exit={{
                            y: "-110%",
                            opacity: 0,
                            transition: { duration: 0.35, ease: EASE_IN_EXPO },
                        }}
                        style={{
                            fontFamily: "'DM Mono', 'Courier New', monospace",
                            fontSize: "10px",
                            letterSpacing: "0.25em",
                            textTransform: "uppercase",
                            color: "rgba(255,255,255,0.3)",
                            margin: 0,
                        }}
                    >
                        — {line.sub}
                    </motion.p>
                </div>

                {/* Main heading — big italic serif, clips up */}
                <div style={{ overflow: "hidden" }}>
                    <motion.h1
                        initial={{ y: "105%", opacity: 0 }}
                        animate={{
                            y: "0%",
                            opacity: 1,
                            transition: {
                                duration: 0.75,
                                ease: EASE_OUT_EXPO,
                                delay: 0.07,
                            },
                        }}
                        exit={{
                            y: "-105%",
                            opacity: 0,
                            transition: { duration: 0.4, ease: EASE_IN_EXPO },
                        }}
                        style={{
                            fontFamily: "'Playfair Display', 'Georgia', serif",
                            fontWeight: 700,
                            fontStyle: "italic",
                            fontSize: "clamp(2rem, 4.5vw, 4.2rem)",
                            lineHeight: 1.0,
                            color: "#ffffff",
                            margin: 0,
                            letterSpacing: "-0.015em",
                        }}
                    >
                        {line.label}
                    </motion.h1>
                </div>

            </motion.div>
        </AnimatePresence>
    );
}

// ─── Corner decoration ───────────────────────────────────────────────────────

function CornerAccent() {
    const pos = { top: "clamp(28px, 5vw, 72px)", left: "clamp(28px, 5vw, 72px)" };
    return (
        <>
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.1, ease: EASE_OUT_EXPO, delay: 0.15 }}
                style={{
                    position: "absolute",
                    ...pos,
                    width: "52px",
                    height: "1px",
                    background: "rgba(255,255,255,0.2)",
                    transformOrigin: "left center",
                }}
            />
            <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.75, ease: EASE_OUT_EXPO, delay: 0.35 }}
                style={{
                    position: "absolute",
                    ...pos,
                    width: "1px",
                    height: "52px",
                    background: "rgba(255,255,255,0.2)",
                    transformOrigin: "top center",
                }}
            />
        </>
    );
}

// ─── Main PageLoader ──────────────────────────────────────────────────────────

export default function PageLoader({ isLoading = false, onComplete }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (!isLoading) return;

        // Realistic eased progress: quick start → slow middle → quick end
        const segments = [
            { target: 35, duration: 700 },
            { target: 65, duration: 1000 },
            { target: 88, duration: 750 },
            { target: 100, duration: 450 },
        ];

        let current = 0;
        let tid;

        function runSegment(i) {
            if (i >= segments.length) return;
            const { target, duration } = segments[i];
            const STEPS = 30;
            const stepMs = duration / STEPS;
            const stepSize = (target - current) / STEPS;
            let s = 0;

            const iv = setInterval(() => {
                s++;
                current = Math.min(target, current + stepSize);
                setProgress(current);

                if (s >= STEPS) {
                    clearInterval(iv);
                    if (i < segments.length - 1) {
                        tid = setTimeout(() => runSegment(i + 1), 60);
                    } else {
                        tid = setTimeout(() => onComplete?.(), 700);
                    }
                }
            }, stepMs);
        }

        runSegment(0);
        return () => clearTimeout(tid);
    }, [isLoading]);

    const currentLine = LINES[getLineIndex(progress)];

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
                    style={{
                        position: "fixed",
                        inset: 0,
                        zIndex: 9999,
                        // background: "#0a0a0a",
                        background: "linear-gradient(135deg, rgb(179, 148, 209) 0%, rgb(209, 159, 209) 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxSizing: "border-box",
                    }}
                >
                    {/* Grain texture */}
                    <Grain />

                    {/* Corner decoration */}
                    <CornerAccent />

                    {/* Subtle radial glow at bottom-right */}
                    <div
                        style={{
                            position: "absolute",
                            bottom: "-10%",
                            right: "-5%",
                            width: "55vw",
                            height: "55vw",
                            borderRadius: "50%",
                            background:
                                "radial-gradient(circle, rgba(255,255,255,0.025) 0%, transparent 65%)",
                            pointerEvents: "none",
                            zIndex: 0,
                        }}
                    />

                    {/* Centered content wrapper */}
                    <div
                        style={{
                            zIndex: 2,
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            alignItems: "center",
                            gap: "clamp(20px, 4vw, 60px)",
                            width: "min(900px, 90vw)",
                        }}
                    >
                        {/* LEFT — progress bar */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.25, ease: EASE_OUT_EXPO }}
                        >
                            <ProgressBar progress={progress} />
                        </motion.div>

                        {/* RIGHT — animated text */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.4, ease: EASE_OUT_EXPO }}
                        >
                            <TextReveal line={currentLine} />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}