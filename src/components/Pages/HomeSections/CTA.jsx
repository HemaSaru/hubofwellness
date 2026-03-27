import React, { useState } from 'react';
import { Check } from 'lucide-react';

export default function CTASection() {
    const [activeTab, setActiveTab] = useState('Healers');

    const healersPoints = [
        "Why Join",
        "Collaboration Opportunities",
        "Visibility",
        "Community Support"
    ];

    const seekersPoints = [
        "Access to Multiple Healing Modalities",
        "Safe & Curated Practitioners",
        "Introduction to Practitioners",
        "Personalized Healing Journeys"
    ];

    const currentPoints = activeTab === 'Healers' ? healersPoints : seekersPoints;

    return (
        <section className="py-20 px-4 w-full flex justify-center items-center font-sans">
            <div className="bg-[#f2eff5] w-full max-w-[980px] rounded-[36px] flex flex-col pt-10 pb-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-[#e8e4ec]">

                {/* Top content (padded) */}
                <div className="px-8 flex flex-col">
                    <div className="text-center mb-7">
                        <h2 className="text-[24px] font-[800] text-gray-900 mb-3 tracking-tight">
                            Whether You Guide Healing or Seek It, You Belong Here
                        </h2>
                        <p className="text-[15px] font-medium text-[#6e627f] leading-relaxed">
                            Join our vibrant wellness ecosystem. Connect with a community structured to support your unique journey and holistic growth.
                        </p>
                    </div>

                    <div className="bg-[#e4dfea] p-[6px] rounded-full flex justify-between items-center mb-8 relative">
                        <button
                            onClick={() => setActiveTab('Healers')}
                            className={`flex-1 py-2 text-[15px] font-bold rounded-full transition-all duration-200 ${activeTab === 'Healers' ? 'bg-white shadow-[0_2px_8px_rgba(0,0,0,0.05)] text-gray-900' : 'text-[#6e627f] hover:text-gray-900'}`}>
                            Healers
                        </button>
                        <button
                            onClick={() => setActiveTab('Seekers')}
                            className={`flex-1 py-2 text-[15px] font-bold rounded-full transition-all duration-200 ${activeTab === 'Seekers' ? 'bg-white shadow-[0_2px_8px_rgba(0,0,0,0.05)] text-gray-900' : 'text-[#6e627f] hover:text-gray-900'}`}>
                            Seekers
                        </button>
                    </div>

                    <div className="mb-8 pl-1">
                        <h3 className="text-[17px] font-[800] text-gray-900 mb-5">
                            What you'll find
                        </h3>
                        <div className="space-y-4 min-h-[150px]">
                            {currentPoints.map((point, index) => (
                                <div key={`${activeTab}-${index}`} className="flex items-start gap-4">
                                    <div className="mt-0.5 bg-black rounded-full p-0.5 shrink-0 flex items-center justify-center h-[20px] w-[20px]">
                                        <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                                    </div>
                                    <span className="text-[15px] text-gray-700 font-[600] leading-snug">{point}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Edge-to-edge Separator */}
                <div className="w-full h-[1px] bg-[#e4dfea]"></div>

                {/* Bottom content (padded) */}
                <div className="px-8 pt-7 flex items-center justify-center">
                    <button className="bg-[#8b6fa8] hover:bg-[#6e627f] transition-colors text-white font-[800] py-4 w-full rounded-[14px] text-[15px] shadow-[0_4px_12px_rgba(139,111,168,0.25)]">
                        {activeTab === 'Healers' ? 'Join as a Healer' : 'Start Your Healing Journey'}
                    </button>
                </div>
            </div>
        </section>
    );
}