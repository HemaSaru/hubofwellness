import { Link, NavLink } from "react-router-dom";

export default function BorderedButton({ btnText, btnHref }) {
    return (
        <>
            <Link
                to={btnHref}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border-2 border-[#6e627f] bg-transparent rounded-full h-12 px-8 text-base text-[#6e627f] transition-colors duration-300 ease-in-out hover:bg-[#6e627f] hover:border-[#6e627f] hover:text-white shadow-sm"
            >
                {btnText}
            </Link>
        </>
    );
}