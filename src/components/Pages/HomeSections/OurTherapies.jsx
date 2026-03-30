import { useState, useEffect } from "react";
import HoverUpCard from "../../boxes/HoverUpBoxes";
import { Sparkles, Brain, Hand, Moon, Star, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import BorderedButton from "../../buttons/BorderedButton";

const THERAPIES = [
  {
    icon: Sparkles,
    title: "Bowen Therapy",
    description:
      "Gentle bodywork that activates your body's natural healing response for lasting relief.",
    href: "#",
  },
  {
    icon: Brain,
    title: "B&C Miracle Method",
    description:
      "A transformative technique combining body and consciousness for deep healing.",
    href: "#",
  },
  {
    icon: Hand,
    title: "Craniosacral Therapy",
    description:
      "Subtle touch therapy to release tension and enhance the central nervous system.",
    href: "#",
  },
  {
    icon: Moon,
    title: "Marma Therapy",
    description:
      "Ancient Ayurvedic practice activating vital energy points for holistic wellness.",
    href: "#",
  },
  {
    icon: Star,
    title: "Vedic Astrology",
    description:
      "Cosmic guidance for life decisions through ancient astrological wisdom.",
    href: "#",
  },
  {
    icon: Zap,
    title: "Energy Healing",
    description:
      "Channeling universal energy to restore balance and promote self-healing.",
    href: "#",
  },
];

export default function OurTherapies() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setCardsToShow(1);
      else if (window.innerWidth < 1024) setCardsToShow(2);
      else setCardsToShow(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalCards = THERAPIES.length;

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + 1 > totalCards - cardsToShow ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? totalCards - cardsToShow : prev - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) =>
        prev + 1 > totalCards - cardsToShow ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [totalCards, cardsToShow]);

  return (
    <>
      <section className="w-full bg-[#f8f5fb] py-20 px-2 sm:px-4 lg:px-8 xl:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">

          <div className="relative mb-16 flex flex-col items-center lg:block lg:text-left text-center">
            <p className="text-s tracking-[0.2em] uppercase text-primary text-center">
              What We Offer
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-[#1f1630] text-center mb-4 mt-2">
              Complementary Wellness Practices
            </h2>

            <p className="text-gray-500 text-lg text-center">
              Discover our range of holistic therapies designed to nurture your
              body, mind, and spirit.
            </p>

            {/* Navigation Buttons (Desktop mostly) */}
            <div className="hidden lg:flex absolute right-0 bottom-0 space-x-3">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full cursor-pointer border-2 border-[#b8a2e5] text-[#b8a2e5] flex items-center justify-center hover:bg-[#b8a2e5] hover:text-white transition-all shadow-sm"
              >
                <ChevronLeft size={24} strokeWidth={2.5} />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 cursor-pointer rounded-full border-2 border-[#b8a2e5] text-[#b8a2e5] flex items-center justify-center hover:bg-[#b8a2e5] hover:text-white transition-all shadow-sm"
              >
                <ChevronRight size={24} strokeWidth={2.5} />
              </button>
            </div>
          </div>

          {/* Therapies Carousel */}
          <div className="relative overflow-hidden pt-8 pb-4">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                width: `${(totalCards / cardsToShow) * 100}%`,
                transform: `translateX(-${(currentIndex / totalCards) * 100}%)`
              }}
            >
              {THERAPIES.map((therapy) => (
                <div
                  key={therapy.title}
                  className="px-4"
                  style={{ width: `${100 / totalCards}%` }}
                >
                  <HoverUpCard
                    icon={therapy.icon}
                    title={therapy.title}
                    description={therapy.description}
                    href={therapy.href}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile / Tablet Navigation */}
          <div className="flex lg:hidden justify-center mt-8 space-x-4">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border-2 border-[#b8a2e5] text-[#b8a2e5] flex items-center justify-center hover:bg-[#b8a2e5] hover:text-white transition-all shadow-sm"
            >
              <ChevronLeft size={24} strokeWidth={2.5} />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border-2 border-[#b8a2e5] text-[#b8a2e5] flex items-center justify-center hover:bg-[#b8a2e5] hover:text-white transition-all shadow-sm"
            >
              <ChevronRight size={24} strokeWidth={2.5} />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {[...Array(totalCards - cardsToShow + 1)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${currentIndex === idx ? "w-8 bg-[#b8a2e5]" : "w-2.5 bg-[#e0d4f5]"
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="text-center mt-12 relative z-10 hidden lg:block">
            <BorderedButton btnText={" View All Therapies"} btnHref="/" />
          </div>

        </div>
      </section>
    </>
  );
}
