import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import "./CurtainReveal.css";

export default function CurtainReveal({
  active,
  onDone,
  color = "linear-gradient(135deg, #b39cd1 0%, #d19fd1 100%)",
  delayMs = 1200,
  durationMs = 600,
}) {
  const reduceMotion = useReducedMotion();
  const calledRef = useRef(false);

  useEffect(() => {
    if (!active) calledRef.current = false;
  }, [active]);

  useEffect(() => {
    if (!active || !reduceMotion) return;
    const t = setTimeout(() => onDone?.(), 0);
    return () => clearTimeout(t);
  }, [active, reduceMotion, onDone]);

  if (!active) return null;

  const delay = delayMs / 1000;
  const duration = durationMs / 1000;
  const ease = [0.4, 0.01, 0.1, 1];

  const maybeDone = () => {
    if (calledRef.current) return;
    calledRef.current = true;
    onDone?.();
  };

  return (
    <div className="curtain" aria-hidden="true">
      <motion.div
        className="curtain__panel curtain__panel--top"
        style={{ background: color }}
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ delay, duration, ease }}
      />
      <motion.div
        className="curtain__panel curtain__panel--bottom"
        style={{ background: color }}
        initial={{ y: 0 }}
        animate={{ y: "100%" }}
        transition={{ delay, duration, ease }}
        onAnimationComplete={maybeDone}
      />
    </div>
  );
}

