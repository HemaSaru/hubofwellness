import React from 'react';
import { Check } from 'lucide-react';
import SiteButton from '../../buttons/SiteButton';

export default function CTASection2() {
    const healersPoints = [
        "Why Join",
        "Join us and share your unique healing services or products with a global audience. Whether you’re a physical therapist, mental health expert, or spiritual guide, this is your space to connect, inspire, and elevate lives worldwide. ",
        "Visibility",
        "Community Support"
    ];

    const seekersPoints = [
        "Access to Multiple Healing Modalities",
        "Safe & Curated Practitioners",
        "Introduction to Practitioners",
        "Personalized Healing Journeys"
    ];

    return (
        <>
            <div className="py-10 px-4 w-full flex justify-center items-center font-sans">
                <div className="text-center mb-7">
                    <p className="text-s tracking-[0.2em] uppercase text-primary">
                        Join our vibrant wellness ecosystem.
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-[#1f1630] tracking-tight">
                        For Healers & Seekers Alike
                    </h2>
                    {/* <p className="text-[15px] font-weight-500 text-[#6e627f] leading-relaxed">
                        Connect with a community structured to support your unique journey and holistic growth.
                    </p> */}
                </div>
            </div>
            <section className="py-2 px-4 w-full flex justify-center items-center font-sans">

                <div className="flex flex-col lg:flex-row w-full max-w-[990px] min-h-[500px] h-auto lg:h-[500px] gap-4 lg:gap-2 p-3 lg:p-2 rounded-[36px] bg-[#f2eff5] shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-[#e8e4ec]">

                    {/* Healers Section */}
                    <div className="group relative flex w-full lg:w-auto lg:h-full lg:flex-1 cursor-pointer overflow-hidden rounded-[28px] border border-[#e8e4ec] bg-white transition-all duration-500 lg:hover:flex-[4] shadow-sm lg:shadow-none">

                        {/* Unhovered State (Desktop Only): Background Image and Rotated Text */}
                        <div
                            className="hidden lg:flex absolute inset-0 bg-cover bg-center items-center justify-center transition-all duration-500 opacity-100 group-hover:opacity-0 group-hover:scale-50"
                            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800')" }}
                        >
                            <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:opacity-0"></div>
                            <span className="relative z-10 -rotate-90 whitespace-nowrap text-3xl font-bold tracking-[0.2em] text-white uppercase transition-all duration-500">
                                Healers
                            </span>
                        </div>

                        {/* Details State: Visible on mobile, hidden -> shown on hover on desktop */}
                        <div className="relative w-full lg:absolute lg:inset-y-0 lg:left-0 lg:right-0 flex flex-col justify-center p-8 lg:p-10 xl:p-14 lg:opacity-0 lg:transition-opacity lg:duration-500 lg:delay-100 lg:group-hover:opacity-100 bg-white z-20">
                            <div className="w-full lg:min-w-[300px] xl:min-w-[400px] transform lg:translate-y-8 lg:transition-transform lg:duration-500 lg:group-hover:translate-y-0">
                                <h3 className="text-3xl lg:text-4xl font-[800] text-[#8b6fa8] mb-4 md:mb-6 uppercase tracking-wider">
                                    Healers
                                </h3>
                                <h4 className="text-[17px] font-[800] text-gray-900 mb-4 md:mb-5">
                                    What you'll find
                                </h4>
                                <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                                    {/* {healersPoints.map((point, index) => (
                                        <div key={`healer-${index}`} className="flex items-center gap-4">
                                            <div className="bg-[#8b6fa8] rounded-full p-0.5 shrink-0 flex items-center justify-center h-[20px] w-[20px]">
                                                <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                                            </div>
                                            <span className="text-[15px] text-gray-700 font-[600] leading-snug lg:whitespace-nowrap">{point}</span>
                                        </div>
                                    ))} */}
                                    <span className="text-[15px] text-gray-700 font-[600] leading-snug ">Join us and share your unique healing services or products with a global audience. Whether you’re a physical therapist, mental health expert, or spiritual guide, this is your space to connect, inspire, and elevate lives worldwide.</span>
                                </div>

                                <SiteButton btnText={"Join as a Healer"} btnHref={"/"} />
                            </div>
                        </div>
                    </div>

                    {/* Seekers Section */}
                    <div className="group relative flex w-full lg:w-auto lg:h-full lg:flex-1 cursor-pointer overflow-hidden rounded-[28px] border border-[#e8e4ec] bg-white transition-all duration-500 lg:hover:flex-[4] shadow-sm lg:shadow-none">

                        {/* Unhovered State (Desktop Only): Background Image and Rotated Text */}
                        <div
                            className="hidden lg:flex absolute inset-0 bg-cover bg-center items-center justify-center transition-all duration-500 opacity-100 group-hover:opacity-0 group-hover:scale-50"
                            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=800')" }}
                        >
                            <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:opacity-0"></div>
                            <span className="relative z-10 -rotate-90 whitespace-nowrap text-3xl font-bold tracking-[0.2em] text-white uppercase transition-all duration-500">
                                Seekers
                            </span>
                        </div>

                        {/* Details State: Visible on mobile, hidden -> shown on hover on desktop */}
                        <div className="relative w-full lg:absolute lg:inset-y-0 lg:left-0 lg:right-0 flex flex-col justify-center p-8 lg:p-10 xl:p-14 lg:opacity-0 lg:transition-opacity lg:duration-500 lg:delay-100 lg:group-hover:opacity-100 bg-white z-20">
                            <div className="w-full lg:min-w-[300px] xl:min-w-[400px] transform lg:translate-y-8 lg:transition-transform lg:duration-500 lg:group-hover:translate-y-0">
                                <h3 className="text-3xl lg:text-4xl font-[800] text-[#8b6fa8] mb-4 md:mb-6 uppercase tracking-wider">
                                    Seekers
                                </h3>
                                <h4 className="text-[17px] font-[800] text-gray-900 mb-4 md:mb-5">
                                    What you'll find
                                </h4>
                                <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                                    {seekersPoints.map((point, index) => (
                                        <div key={`seeker-${index}`} className="flex items-center gap-4">
                                            <div className="bg-[#8b6fa8] rounded-full p-0.5 shrink-0 flex items-center justify-center h-[20px] w-[20px]">
                                                <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                                            </div>
                                            <span className="text-[15px] text-gray-700 font-[600] leading-snug lg:whitespace-nowrap">{point}</span>
                                        </div>
                                    ))}
                                </div>

                                <SiteButton btnText={"Start Your Healing Journey"} btnHref={"/"} />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
