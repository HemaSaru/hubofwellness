
import { useState, useEffect } from "react";


const CLIP_VISIBLE      = "inset(0 0 0 0)";
const CLIP_HIDDEN_RIGHT = "inset(0 100% 0 0)";   // slide waiting off-screen right
const CLIP_TEXT_HIDDEN  = "inset(0 0 0 100%)";   // text hidden off-screen right
const TRANSITION_SLIDE  = "clip-path 0.45s cubic-bezier(0.65, 0.05, 0.36, 1)";
const TRANSITION_TITLE  = "clip-path 0.3s cubic-bezier(0.65, 0.05, 0.36, 1) 0.45s";
const TRANSITION_AUTHOR = "clip-path 0.3s cubic-bezier(0.65, 0.05, 0.36, 1) 0.60s";

// ─── Component ────────────────────────────────────────────────────────────────

export default function Slider({ slides }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const total = slides.length;

  const goNext = () => {
    if (!total) return;
    setActiveIndex((i) => (i + 1) % total);
  };

  const goPrev = () => {
    if (!total) return;
    setActiveIndex((i) => (i - 1 + total) % total);
  };

  useEffect(() => {
    if (total <= 1 || isHovered) return;
    const id = setInterval(goNext, 3000);
    return () => clearInterval(id);
  }, [total, isHovered]);

  return (
    /* Wrapper — fixed size, white border, rounded, clipped, shadow */
    <div
      className="relative   overflow-hidden"
      style={{
        width: "100%",
        height: "100vh",
        boxShadow: "0 10px 15px 3px rgba(0, 0, 0, 0.02), 0 5px 20px 3px rgba(0,0,0,.1)",
      }}
      onMouseEnter={() => setIsHovered(false)}
      onMouseLeave={() => setIsHovered(false)}
    >

      {/* Bottom-fade gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[9]"
        style={{
          background: "linear-gradient(to bottom, transparent 70%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      {/* ── Slides ── */}
      {slides.map((slide, i) => {
        const isActive = i === activeIndex;
        const isFuture = i > activeIndex;
        const isPast   = i < activeIndex;

        return (
          <figure
            key={i}
            className="absolute inset-0 m-0 p-0"
            style={{
              clipPath:  isFuture ? CLIP_HIDDEN_RIGHT : CLIP_VISIBLE,
              transition: TRANSITION_SLIDE,
              zIndex: isActive ? 5 : isPast ? i + 1 : i + 1,
            }}
          >
            {/* Dim overlay */}
            <div className="absolute inset-0 bg-black/[0.125] z-[1]" />

            {/* Photo */}
            <img
              src={slide.img}
              alt={slide.title}
              className="block w-full h-full object-cover"
            />

            {/* Caption */}
            <figcaption className="absolute top-[30px] left-[30px] z-10">

              {/* Title */}
              <div
                className="text-white uppercase mb-[2px]"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "50px",
                  fontWeight: 400,
                  letterSpacing: "10px",
                  clipPath: isActive ? CLIP_VISIBLE : CLIP_TEXT_HIDDEN,
                  transition: TRANSITION_TITLE,
                }}
              >
                {slide.title}
              </div>

              {/* Author */}
              <div
                className="text-white/80"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "16px",
                  fontWeight: 300,
                  letterSpacing: "3px",
                  clipPath: isActive ? CLIP_VISIBLE : CLIP_TEXT_HIDDEN,
                  transition: TRANSITION_AUTHOR,
                }}
              >
                {slide.author}
              </div>

            </figcaption>
          </figure>
        );
      })}

      {/* ── Controls — centered left/right ── */}
      <button
        onClick={goPrev}
        aria-label="Previous slide"
        className="absolute left-[20px] top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-xl border-none outline-none p-0 rounded-full bg-white/80 text-[#333] cursor-pointer hover:bg-white shadow-md z-[10]"
      >
        ‹
      </button>

      <button
        onClick={goNext}
        aria-label="Next slide"
        className="absolute right-[20px] top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-xl border-none outline-none p-0 rounded-full bg-white/80 text-[#333] cursor-pointer hover:bg-white shadow-md z-[10]"
      >
        ›
      </button>

    </div>
  );
}
