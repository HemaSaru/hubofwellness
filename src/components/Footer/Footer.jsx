import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import sitelogo from "../../assets/images/sitelogo.png"

const Footer = () => {
    return (
        <footer className="bg-[#322c39] text-gray-300 py-12 px-6 md:px-12 lg:px-24 font-sans mt-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                {/* Column 1 */}
                <div className="flex flex-col space-y-6 lg:col-span-2 pr-4">
                    <div className="flex items-center space-x-3">
                        <Link to="/">
                            <div className="w-10 h-10 rounded-full bg-[#b8a2e5] flex items-center justify-center font-serif text-white text-xl font-bold">
                                H
                            </div>
                            <span className="text-white text-xl font-serif font-medium tracking-wide">
                                Hub of Wellness
                            </span>
                        </Link>

                        {/* <Link className="header__brand" to="/">
                            <span className="header__brand-text">
                                <img src={sitelogo} alt="Hub of Wellness" className="h-[80px] w-auto" />
                            </span>
                        </Link> */}
                    </div>
                    <p className="text-sm leading-relaxed text-gray-300 max-w-sm">
                        Your partner in holistic health and healing. We unite healers from every discipline to create a vibrant community dedicated to well-being.
                    </p>
                    <div className="flex space-x-4 pt-2">
                        <a href="#" className="w-10 h-10 rounded-full bg-[#4c4556] flex items-center justify-center hover:bg-[#b8a2e5] transition-colors">
                            <FaFacebookF size={16} className="text-white" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-[#4c4556] flex items-center justify-center hover:bg-[#b8a2e5] transition-colors">
                            <FaInstagram size={18} className="text-white" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-[#4c4556] flex items-center justify-center hover:bg-[#b8a2e5] transition-colors">
                            <FaLinkedinIn size={18} className="text-white" />
                        </a>
                    </div>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col space-y-4">
                    <Link to="/about" className="text-sm text-gray-300 hover:text-white transition-colors">About Us</Link>
                    <Link to="/therapies" className="text-sm text-gray-300 hover:text-white transition-colors">Therapies</Link>
                    <Link to="/practitioners" className="text-sm text-gray-300 hover:text-white transition-colors">Practitioners</Link>
                    <Link to="/testimonials" className="text-sm text-gray-300 hover:text-white transition-colors">Testimonials</Link>
                    <Link to="/blog" className="text-sm text-gray-300 hover:text-white transition-colors">Blog</Link>
                    <Link to="/packages" className="text-sm text-gray-300 hover:text-white transition-colors">Packages</Link>
                </div>

                {/* Column 3 */}
                <div className="flex flex-col space-y-4">
                    <Link to="/therapies/bowen-therapy" className="text-sm text-gray-300 hover:text-white transition-colors">Bowen Therapy</Link>
                    <Link to="/therapies/bc-miracle-method" className="text-sm text-gray-300 hover:text-white transition-colors">B&C Miracle Method</Link>
                    <Link to="/therapies/craniosacral-therapy" className="text-sm text-gray-300 hover:text-white transition-colors">Craniosacral Therapy</Link>
                    <Link to="/therapies/marma-therapy" className="text-sm text-gray-300 hover:text-white transition-colors">Marma Therapy</Link>
                    <Link to="/therapies/vedic-astrology" className="text-sm text-gray-300 hover:text-white transition-colors">Vedic Astrology</Link>
                </div>

                {/* Column 4 */}
                <div className="flex flex-col space-y-5">
                    <div className="flex items-start space-x-3">
                        <MapPin size={20} className="text-[#b8a2e5] mt-0.5" />
                        <span className="text-sm text-gray-300">New Delhi, India</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Phone size={20} className="text-[#b8a2e5]" />
                        <span className="text-sm text-gray-300">+91 9312 600 205</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Mail size={20} className="text-[#b8a2e5]" />
                        <span className="text-sm text-gray-300">info@hubofwellness.in</span>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-8 border-t border-[#4c4556] flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 space-y-4 md:space-y-0">
                <p>© 2026 Hub of Wellness. All rights reserved.</p>
                <div className="flex space-x-8">
                    <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
                    <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
