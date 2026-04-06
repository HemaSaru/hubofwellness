import HeroSection from "../boxes/HeroSection";
import heroImg from "../../assets/images/about/aboutHero1.jpg";
export default function Practitioners() {
  return (
    <section className="w-full min-h-screen bg-[#fdfbfd]">
      <HeroSection
        title="Trusted Hands, Caring Hearts"
        subtitle="-Know Our Healers"
        bgImg={heroImg}
      />
    </section>
  );
}

