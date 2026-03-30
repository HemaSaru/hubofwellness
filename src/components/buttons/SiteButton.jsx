import { Link, NavLink } from "react-router-dom";

export default function SiteButton({ btnText, btnHref }) {
    return (
        <>
            <Link
                to={btnHref}
                className="inline-block px-5 py-2.5 text-sm font-bold text-white no-underline rounded-full bg-gradient-to-r from-[#b39cd1] to-[#8b6fa8] border-none cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"

            >
                {btnText}
            </Link>
        </>
    );
}