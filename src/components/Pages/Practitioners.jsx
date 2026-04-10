import HeroSection from "../boxes/HeroSection";
import heroImg from "../../assets/images/healers/healers-hero.jpg";
import FilterFormForHealers from "../filterhealers/FilterFormForHealers";

export default function Practitioners() {
  return (
    <section className="w-full min-h-screen bg-[#fdfbfd]">
      <HeroSection
        title="Trusted Hands, Caring Hearts"
        subtitle="-Know Our Healers"
        bgImg={heroImg}
      />

      <div className="w-full py-20 px-4 sm:px-8 md:px-12 lg:px-24 flex flex-col items-center justify-center text-center">

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f0eaf7] text-[#805eaa] font-medium text-sm tracking-wider uppercase mb-6 shadow-sm">
          {/* <Leaf className="w-4 h-4" /> */}
          <span>Find an expert who understands you </span>
        </div>
        <FilterFormForHealers />
      </div>

    </section>
  );
}

