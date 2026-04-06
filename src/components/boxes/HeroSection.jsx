export default function HeroSection({ title, subtitle, bgImg }) {
  return (
    <div className="relative w-full h-[40vh] min-h-[350px] max-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      {bgImg && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImg})` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        </>
      )}

      {/* Fallback solid background if no image */}
      {!bgImg && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#2a1b42] to-[#4c3575]"></div>
      )}

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 flex flex-col text-left py-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-4 tracking-tight drop-shadow-md">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl leading-relaxed drop-shadow-sm font-light">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}