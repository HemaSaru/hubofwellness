export default function WhoWeAre() {
  return (
    <section className="w-full bg-[#f8f5fb] py-8 px-2 sm:px-4 lg:px-8 xl:px-12 ">
      <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-center mb-20">
        {/* Left: Copy */}
        <div className="space-y-8">
          <div className="space-y-3">
            <p className="text-s tracking-[0.2em] uppercase text-primary">
              Who We Are
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-[#1f1630]">
              Your Partner in Holistic Health &amp; Healing
            </h2>

            <p className="mt-6 para-font max-w-2xl">
              At the Hub of Wellness, we unite healers from every discipline
              — physical, mental, and spiritual — to create a vibrant
              community dedicated to holistic well‑being.
            </p>
          </div>

          <p className="para-font max-w-2xl">
            Our platform embraces all healing modalities, from energy work and
            spiritual guidance to body therapies and mental wellness, offering
            seekers comprehensive support on their journey to balance and
            vitality.
          </p>

          {/* Bottom feature row */}
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="flex flex-col gap-3 transition-all duration-200 hover:-translate-y-0.5">
              <div className="h-10 w-10 rounded-full bg-[#f4e3f2] flex items-center justify-center text-primary text-lg">
                ♥
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1f1630]">
                  Compassion
                </h3>
                <p className="mt-1 text text-[#8e829f]">
                  Healing with empathy and care.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 transition-all duration-200 hover:-translate-y-0.5">
              <div className="h-10 w-10 rounded-full bg-[#e6f1ec] flex items-center justify-center text-[#3f7b5c] text-lg">
                ☺
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1f1630]">
                  Community
                </h3>
                <p className="mt-1 text  text-[#8e829f]">
                  Together in every wellnesssm journey.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 transition-all duration-200 hover:-translate-y-0.5">
              <div className="h-10 w-10 rounded-full bg-[#f7eee6] flex items-center justify-center text-[#b07a4d] text-lg">
                ✿
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1f1630]">
                  Natural
                </h3>
                <p className="mt-1 text text-[#8e829f]">
                  Holistic and organic approaches.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Decorative cards */}
        <div className="grid grid-cols-2 gap-8 sm:gap-6 max-w-md mx-auto lg:mx-0">
          <div className="h-28 sm:h-32 md:h-40 rounded-3xl bg-[#9b89b559] cursor-pointer  transition-all duration-500 hover:scale-105" />
          <div className="h-68 sm:h-32 md:h-40 rounded-3xl bg-[#ffeef3] translate-y-4.5 cursor-pointer transition-all duration-300 hover:scale-105" />
          <div className="h-28 sm:h-32 md:h-40 rounded-3xl bg-[#edf7f1] translate-y-4.2 cursor-pointer  transition-all duration-300 hover:scale-105" />
          <div className="h-28 sm:h-32 md:h-40 rounded-3xl bg-[#fdf7ef] translate-y-3.5 cursor-pointer  transition-all duration-300 hover:scale-105" />
        </div>
      </div>
    </section>
  );
}