import HoverUpCard from "../../boxes/HoverUpBoxes";
import { Sparkles, Brain, Hand, Moon, Star, Zap } from "lucide-react";
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
  return (
    <>
      <section className="w-full bg-[#f8f5fb]  py-8 px-2 sm:px-4 lg:px-8 xl:px-12 ">
        <div className="mx-auto max-w-8xl  items-center mb-20">
          <div className="text-center">
            <p className="text-s tracking-[0.2em] uppercase text-primary">
              What We Offer
            </p>

            <h2 className=" text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-[#1f1630]">
              Complementary Wellness Practices
            </h2>

            <p className="mt-6 text-center para-font ">
              Discover our range of holistic therapies designed to nurture your
              body, mind, and spirit.
            </p>
          </div>

          {/* Therapies grid */}
          <div>
            {/* 3-column card grid */}
            <div className="mt-20 max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {THERAPIES.map((therapy) => (
                <HoverUpCard
                  key={therapy.title}
                  icon={therapy.icon}
                  title={therapy.title}
                  description={therapy.description}
                  href={therapy.href}
                />
              ))}
            </div>
            <div className="text-center mt-12">
              <BorderedButton btnText={" View All Therapies"} btnHref="/" />


            </div>
          </div>
        </div>
      </section>
    </>
  );
}
