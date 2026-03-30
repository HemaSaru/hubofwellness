export default function HeroSection({ title, subtitle, bgImg }) {
    return (
        <>
            <div
                className="w-full min-h-[450px] bg-[#f8f5fb] flex flex-col items-center justify-center bg-cover p-18bg-center"
                style={{ backgroundImage: bgImg ? `linear-gradient(to right, rgba(34, 33, 35, 0.4) 0%, rgba(65, 60, 69, 0.25) 40%, transparent 75%), url(${bgImg})` : undefined }}
            >
                <div className="w-[800px] h-full flex flex-col items-center justify-center bg-black/40 p-18">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-[#ffff]">{title}</h1>

                    <p className="text-lg mt-5  max-w-2xl text-[#ffff]">{subtitle}</p>
                </div>
            </div>
        </>
    );
}