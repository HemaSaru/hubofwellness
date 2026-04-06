import HeroSection from "../boxes/HeroSection";
import AboutImg from "../../assets/images/about/aboutHero2.jpg";
import { Leaf, Heart, Sparkles, Users, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section className="w-full min-h-screen bg-[#fdfbfd]">
      <HeroSection 
        title="About Us" 
        subtitle="A Place Where Healing Connections Begin" 
        bgImg={AboutImg} 
      />

      {/* Intro Section */}
      <div className="w-full py-20 px-4 sm:px-8 md:px-12 lg:px-24 flex flex-col items-center justify-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f0eaf7] text-[#805eaa] font-medium text-sm tracking-wider uppercase mb-6 shadow-sm">
          <Leaf className="w-4 h-4" />
          <span>Welcome To Hub of Wellness</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1f1630] mb-8 max-w-3xl leading-tight">
          Where Healing Meets Connection
        </h2>

        <div className="max-w-4xl mx-auto space-y-6 text-[#6e627f] text-lg leading-relaxed px-2 sm:px-4">
          <p>
            We believe that every human deserves the right guidance and support for healing. 
            Every healer carries the ability to guide, support, and transform lives—and every seeker 
            deserves access to that healing.
          </p>
          <p>
            Hub of Wellness is a platform designed to bring seekers and holistic healers together 
            in one trusted space. Whether someone is looking for physical healing, emotional support, 
            mental clarity, or spiritual guidance, our platform helps them discover the right 
            practitioner for their needs.
          </p>
          <p className="font-medium text-[#4a3a5f] text-xl pt-4">
            Hub of Wellness was created to make that connection simple, accessible, and meaningful for you.
          </p>
        </div>
      </div>

      {/* Mission & Vision Split Section */}
      <div className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          
          {/* Mission */}
          <div className="flex flex-col p-10 bg-[#fbf9fe] rounded-3xl shadow-sm border border-[#f0eaf7] relative overflow-hidden group hover:shadow-md transition-all duration-300">
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity transform group-hover:scale-110">
              <Heart className="w-40 h-40" />
            </div>
            <div className="w-14 h-14 bg-[#e8e0f5] rounded-2xl flex items-center justify-center mb-6 text-[#7552a4] shadow-sm">
              <Heart className="w-7 h-7" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#1f1630] mb-2">Our Mission</h3>
            <h4 className="text-lg font-medium text-[#7552a4] mb-6">Connecting Seekers with Trusted Healers</h4>
            <div className="space-y-4 text-[#6e627f] leading-relaxed relative z-10">
              <p>
                Our mission is simple: to make holistic healing accessible, authentic, and easy to find. 
                Through Hub of Wellness, individuals can explore different healing modalities—from body therapies and energy healing to mental wellness and spiritual guidance—and book appointments with experienced practitioners who align with their healing journey.
              </p>
              <p>
                We provide a supportive environment where healers can share their gifts and seekers 
                can find the guidance they need to restore balance in mind, body, and soul.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="flex flex-col p-10 bg-[#fbf9fe] rounded-3xl shadow-sm border border-[#f0eaf7] relative overflow-hidden group hover:shadow-md transition-all duration-300">
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity transform group-hover:scale-110">
              <Sparkles className="w-40 h-40" />
            </div>
            <div className="w-14 h-14 bg-[#e8e0f5] rounded-2xl flex items-center justify-center mb-6 text-[#7552a4] shadow-sm">
              <Sparkles className="w-7 h-7" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#1f1630] mb-2">Our Vision</h3>
            <h4 className="text-lg font-medium text-[#7552a4] mb-6">A World of Accessible Healing</h4>
            <div className="space-y-4 text-[#6e627f] leading-relaxed relative z-10">
              <p>
                We envision a world where holistic healing is accessible to everyone, and where people 
                can easily find the support they need to nurture their mind, body, and spirit.
              </p>
              <p>
                Join us in shaping a world where every healer’s gift is valued and every life 
                touched is renewed.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full py-24 bg-gradient-to-br from-[#2a1b42] to-[#4c3575] relative overflow-hidden">
        {/* Decorative elements bg */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[80%] rounded-full bg-white/5 blur-3xl"></div>
          <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[80%] rounded-full bg-[#9f85c7]/20 blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">
            Begin Your Healing Journey
          </h2>
          <p className="text-lg text-white/85 max-w-2xl mb-12 font-light">
            Whether you are a seeker looking for guidance or a healer ready to share your gifts,
            Hub of Wellness is your trusted space to connect and grow.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 w-full justify-center">
            {/* Find a Healer / CTA */}
            <a href="/healers" className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-white text-[#4c3575] rounded-full font-semibold text-lg hover:bg-[#f8f5fb] transition-all hover:-translate-y-1 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <Users className="w-5 h-5" />
              Find a Healer
            </a>
            
            <a href="/join" className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-transparent border-[1.5px] border-white/40 text-white rounded-full font-semibold text-lg hover:bg-white/10 hover:border-white transition-all hover:-translate-y-1">
              Join as a Healer
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

