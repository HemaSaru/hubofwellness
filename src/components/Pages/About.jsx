import HeroSection from "../boxes/HeroSection";
import AboutImg from "../../assets/images/about/aboutHero2.jpg";
import { Leaf } from "lucide-react";
import BorderedButton from "../buttons/BorderedButton";

export default function About() {
  return (
    <section className="w-full min-h-screen overflow-hidden bg-[#fdfbfd]">

      <HeroSection title="About Us" subtitle="A Place Where Healing Connections Begin" bgImg={AboutImg} />

      {/* Welcome Section */}
      <div className="w-full py-16 md:py-24 px-4 sm:px-8 md:px-12 lg:px-24 flex flex-col items-center justify-center text-center">
        <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-primary">
          Welcome To
        </p>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-[#1f1630] mb-3 mt-2">
          Hub of Wellness
        </h2>

        <div className="w-12 sm:w-16 h-[2px] bg-[#d1c1eb] mb-8 sm:mb-12"></div>

        <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8 text-[#6e627f] text-base sm:text-lg md:text-[17px] para-font px-2 sm:px-4">
          <p>
            Welcome to the Hub of Wellness, it’s a place where Healing Meets Connection.

            We believe that every human deserves the right guidance and support for healing. Every healer carries the ability to guide, support, and transform lives—and every seeker deserves access to that healing.

          </p>
          <p>
            Hub of Wellness is a platform designed to bring seekers and holistic healers together in one trusted space. Whether someone is looking for physical healing, emotional support, mental clarity, or spiritual guidance, our platform helps them discover the right practitioner for their needs.

          </p>
          <p>
            Hub of Wellness was created to make that connection simple, accessible, and meaningful for you.
          </p>
        </div>

        {/* Bottom Divider with Leaf Icon */}
        <div className="mt-12 sm:mt-16 md:mt-20 w-full max-w-4xl flex items-center justify-center gap-4 sm:gap-6 px-4">
          <div className="h-px bg-[#e0d4f5] flex-grow"></div>
          <Leaf className="w-5 h-5 sm:w-6 sm:h-6 text-[#b8a2e5]" strokeWidth={1.5} />
          <div className="h-px bg-[#e0d4f5] flex-grow"></div>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="w-full py-16 md:py-24 px-4 sm:px-8 md:px-12 lg:px-24 bg-[#f8f5fb] overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">

          {/* Left Column: Image */}
          <div className="w-full lg:w-5/12 relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md lg:max-w-full">
              {/* Decorative Circle Ring */}
              <div className="absolute -bottom-6 -right-6 lg:-bottom-10 lg:-right-10 w-32 h-12 max-h-10 lg:w-48 lg:h-48 rounded-full border-[2px] border-[#d1c1eb] z-0"></div>

              <img
                src={AboutImg}
                alt="Healing therapy session"
                className="relative z-10 w-full rounded-2xl shadow-sm object-cover aspect-[4/3] lg:aspect-[3/4] max-h-[400px]"
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="w-full lg:w-7/12 flex flex-col text-left lg:pt-4">
            <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-[#b8a2e5] font-semibold mb-4">
              Our Mission
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-[#1f1630] mb-3 mt-2">
              Connecting Seekers with Trusted Healers
            </h2>

            <div className="w-12 sm:w-16 h-[2px] bg-[#d1c1eb] mb-8"></div>

            <p className="text-[#a48ad4] font-medium text-base sm:text-lg mb-6">
              Encourage natural healing and balanced living
            </p>

            <div className="space-y-6 text-[#6e627f] text-base md:text-[17px] para-font">
              <p>
                Our mission is simple: to make holistic healing accessible, authentic, and easy to find. Through Hub of Wellness, individuals can explore different healing modalities—from body therapies and energy healing to mental wellness and spiritual guidance.
              </p>
              <p>
                We provide a supportive environment where healers can share their gifts and seekers can find the guidance they need to restore balance in mind, body, and soul.
              </p>
            </div>

            <div className="mt-10">
              <BorderedButton btnText="Explore Modalities" btnHref="/" />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

