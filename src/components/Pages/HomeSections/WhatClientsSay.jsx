import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
    {
        id: 1,
        text: "Bowen Therapy was the best that could happen to me. I have recommended happily to all my friends who need some help. It's a different kind of therapy and certainly helps in getting back to a normal life.",
        name: "Chitra",
        location: "New Delhi",
        initial: "C",
    },
    {
        id: 2,
        text: "I have been so blessed to have got 90% relief at the Bowen Therapy Delhi. I was unable to walk but now I feel comfortable going for long walks. Will recommend anyone with any pain to visit.",
        name: "Moira Arklie",
        location: "Delhi",
        initial: "M",
    },
    {
        id: 3,
        text: "The holistic approach at Hub of Wellness transformed my life. The practitioners are truly compassionate and skilled. I've found balance I never knew was possible.",
        name: "Priya S.",
        location: "Mumbai",
        initial: "P",
    },
    {
        id: 4,
        text: "I am amazed by the B&C Miracle Method. The results have been beyond my wildest dreams, completely transforming how my body feels and moves.",
        name: "Rahul M.",
        location: "Pune",
        initial: "R",
    },
    {
        id: 5,
        text: "The Craniosacral therapy sessions were deeply relaxing. I finally found relief from chronic migraines that I had struggled with for years.",
        name: "Sarah T.",
        location: "Bangalore",
        initial: "S",
    }
];

const WhatClientsSay = () => {
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

    const totalCards = testimonials.length;

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
        <section className="py-20 bg-gradient-to-br from-[#fdfbfd] to-[#f4f0f7] font-sans overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                {/* Header Section */}
                <div className="relative mb-16 flex flex-col items-center lg:block lg:text-left text-center">
                    <p className="text-s tracking-[0.2em] text-center uppercase text-primary ">
                        TESTIMONIALS
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-[#1f1630] text-center">
                        What Our Clients Say
                    </h2>
                    <p className="text-gray-500 text-lg text-center">
                        Authentic voices sharing genuine experiences with our therapies.
                    </p>

                    {/* Navigation Buttons (Desktop mostly) */}
                    <div className="hidden lg:flex absolute right-0 bottom-0 space-x-3">
                        <button
                            onClick={handlePrev}
                            className="w-8 h-8 rounded-full cursor-pointer border-2 border-[#b8a2e5] text-[#b8a2e5] flex items-center justify-center hover:bg-[#b8a2e5] hover:text-white transition-all shadow-sm"
                        >
                            <ChevronLeft size={24} strokeWidth={2.5} />
                        </button>
                        <button
                            onClick={handleNext}
                            className="w-8 h-8 cursor-pointer rounded-full border-2 border-[#b8a2e5] text-[#b8a2e5] flex items-center justify-center hover:bg-[#b8a2e5] hover:text-white transition-all shadow-sm"
                        >
                            <ChevronRight size={24} strokeWidth={2.5} />
                        </button>
                    </div>
                </div>

                {/* Carousel Section */}
                <div className="relative overflow-hidden pt-8 pb-4">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            width: `${(totalCards / cardsToShow) * 100}%`,
                            transform: `translateX(-${(currentIndex / totalCards) * 100}%)`
                        }}
                    >
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="px-4"
                                style={{ width: `${100 / totalCards}%` }}
                            >
                                <div className="bg-white rounded-[1.5rem] p-8 relative shadow-[0_8px_30px_rgb(0,0,0,0.06)] h-full flex flex-col border border-gray-50/50">
                                    {/* Quote Icon Badge */}
                                    <div className="absolute -top-6 left-8 w-12 h-12 bg-[#b8a2e5] rounded-full flex items-center justify-center text-white shadow-md border-4 border-white">
                                        <Quote size={20} fill="currentColor" className="text-white" />
                                    </div>

                                    {/* Text Content */}
                                    <div className="mt-4 flex-grow">
                                        <p className="text-gray-600 leading-relaxed text-[15px]">
                                            "{testimonial.text}"
                                        </p>
                                    </div>

                                    {/* Divider */}
                                    <div className="h-px w-full bg-gray-100 my-6"></div>

                                    {/* Author Info */}
                                    <div className="flex items-center space-x-4">
                                        <div className="w-10 h-10 rounded-full bg-[#f4effa] flex items-center justify-center text-[#b8a2e5] font-serif font-bold text-lg">
                                            {testimonial.initial}
                                        </div>
                                        <div>
                                            <h4 className="text-[#322c39] font-bold font-serif text-[16px] leading-tight">
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-gray-400 text-[13px] mt-0.5">
                                                {testimonial.location}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile / Tablet Navigation */}
                <div className="flex lg:hidden justify-center mt-8 space-x-4">
                    <button
                        onClick={handlePrev}
                        className="w-12 h-12 rounded-full border-2 border-[#b8a2e5] text-[#b8a2e5] flex items-center justify-center hover:bg-[#b8a2e5] hover:text-white transition-all shadow-sm"
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
            </div>
        </section>
    );
};

export default WhatClientsSay;
