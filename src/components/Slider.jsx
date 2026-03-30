import { useState, useEffect } from "react";

const DEFAULT_SLIDES = [
  {
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/111167/img5.jpeg",
    tag: "Real Transformations, Real People, Real Stories",
    title: "Hear The Stories",
  },
  {
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/111167/img1.jpeg",
    tag: "Find Your Inner Peace",
    title: "Begin The Journey",
  },
  {
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/111167/img4.jpeg",
    tag: "Holistic Healing Awaits",
    title: "Restore & Renew",
  },
  {
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/111167/img2.jpeg",
    tag: "Expert Practitioners, Gentle Care",
    title: "Feel The Difference",
  },
];

// ─── Clip-path animation constants ───────────────────────────────────────────

const CLIP_VISIBLE = "inset(0 0 0 0)";
const CLIP_HIDDEN_RIGHT = "inset(0 100% 0 0)";
const CLIP_TEXT_HIDDEN = "inset(0 0 0 100%)";
const TRANSITION_SLIDE = "clip-path 0.55s cubic-bezier(0.65, 0.05, 0.36, 1)";
const TRANSITION_TAG = "clip-path 0.35s cubic-bezier(0.65, 0.05, 0.36, 1) 0.45s";
const TRANSITION_TITLE = "clip-path 0.4s cubic-bezier(0.65, 0.05, 0.36, 1) 0.55s";


// ─── Main Slider ──────────────────────────────────────────────────────────────

export default function Slider({ slides = DEFAULT_SLIDES }) {
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
    const id = setInterval(goNext, 5000);
    return () => clearInterval(id);
  }, [total, isHovered]);

  return (
    <div
      className=" w-full min-h-screen overflow-hidden bg-[#f8f5fb]"
      onMouseEnter={() => setIsHovered(false)}
      onMouseLeave={() => setIsHovered(false)}
    >

      {/* ── Slides ── */}
      {slides.map((slide, i) => {
        const isActive = i === activeIndex;
        const isFuture = i > activeIndex;
        const isPast = i < activeIndex;

        return (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              clipPath: isFuture ? CLIP_HIDDEN_RIGHT : CLIP_VISIBLE,
              transition: TRANSITION_SLIDE,
              zIndex: isActive ? 5 : isPast ? i + 1 : i + 1,
            }}
          >
            {/* Background image */}
            <img
              src={slide.img}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* ── OPTION 3: Purple gradient left → transparent ── */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(88, 28, 135, 0.55) 0%, rgba(107, 33, 168, 0.25) 40%, transparent 75%)",
              }}
            />

            {/* Subtle bottom darkening for readability */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 50%)",
              }}
            />

            {/* ── Caption — centered ── */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center px-6">

              {/* Tag line */}
              <div
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 300,
                  fontSize: "13px",
                  letterSpacing: "0.3em",
                  color: "rgba(255,255,255,0.7)",
                  textTransform: "uppercase",
                  marginBottom: "18px",
                  clipPath: isActive ? CLIP_VISIBLE : CLIP_TEXT_HIDDEN,
                  transition: TRANSITION_TAG,
                }}
              >
                {slide.tag}
              </div>

              {/* Main title */}
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontWeight: 400,
                  fontStyle: "italic",
                  fontSize: "clamp(2.8rem, 6vw, 5rem)",
                  lineHeight: 1.05,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#ffffff",
                  clipPath: isActive ? CLIP_VISIBLE : CLIP_TEXT_HIDDEN,
                  transition: TRANSITION_TITLE,
                }}
              >
                {slide.title}
              </div>

              {/* Caption text under title (from slide.caption / author) */}
              {(slide.caption || slide.author) && (
                <p
                  style={{
                    marginTop: "18px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    maxWidth: "34rem",
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 300,
                    fontSize: "15px",
                    lineHeight: 1.5,
                    letterSpacing: "0.05em",
                    color: "rgba(255,255,255,0.86)",
                    clipPath: isActive ? CLIP_VISIBLE : CLIP_TEXT_HIDDEN,
                    transition: TRANSITION_TAG,
                  }}

                  className=""
                >
                  {slide.caption || slide.author}
                </p>
              )}

              {/* Call-to-action button under caption */}
              {slide.buttonText && (
                <a
                  href={slide.buttonLink || "#"}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "26px",
                    padding: "0.9rem 2.4rem",
                    borderRadius: "999px",
                    background:
                      "linear-gradient(90deg, #b39cd1 0%, #8b6fa8 100%)",
                    color: "#ffffff",
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "13px",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    fontWeight: 400,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
                    clipPath: isActive ? CLIP_VISIBLE : CLIP_TEXT_HIDDEN,
                    transition: TRANSITION_TAG,
                  }}
                >
                  {slide.buttonText}
                </a>
              )}

            </div>
          </div>
        );
      })}

      {/* ── Navbar on top of everything ── */}
      {/* <Navbar /> */}

      {/* ── Prev arrow ── */}
      <button
        onClick={goPrev}
        aria-label="Previous slide"
        className="absolute cursor-pointer left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white text-xl transition-all duration-200"
      >
        ‹
      </button>

      {/* ── Next arrow ── */}
      <button
        onClick={goNext}
        aria-label="Next slide"
        className="absolute cursor-pointer right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white text-xl transition-all duration-200"
      >
        ›
      </button>

      {/* ── Dot indicators ── */}
      <div className="absolute  bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-[3px] rounded-full transition-all duration-300 ${i === activeIndex
              ? "w-8 bg-white"
              : "w-2 bg-white/40 hover:bg-white/60"
              }`}
          />
        ))}
      </div>

    </div>
  );
}

