import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import siteLogo from "../../assets/images/sitelogo.png";
import "./Header.css";
import SiteButton from "../buttons/SiteButton";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Therapies", to: "/therapies" },
  { label: "Healers", to: "/practitioners" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "header py-[0px]  ",
        isScrolled
          // ? "fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-lg border-b border-white/10"
          ? "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg "
          : "",
      ].join(" ")}
    >
      <div className="header__inner">
        <Link className="header__brand" to="/" onClick={() => setMobileMenuOpen(false)}>
          {/* <span className="header__logo-circle">H</span> */}
          <span className="header__brand-text">
            <img src={siteLogo} alt="Hub of Wellness" className="h-[80px] w-auto" />
            {/* <span className="header__title">Hub of Wellness</span>
            <span className="header__tagline">The Centre for Holistic Harmony</span> */}
          </span>
        </Link>

        <nav className="header__nav" aria-label="Main navigation">
          <ul className="header__nav-list">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `header__nav-link ${isActive ? "header__nav-link--active" : ""}`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <SiteButton btnText={"Book a Session"} btnHref={"/book"} />
        </div>

        <button
          type="button"
          className="header__menu-btn"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          <span
            className={`header__hamburger ${mobileMenuOpen ? "header__hamburger--open" : ""
              }`}
          >
            <span className="header__hamburger-line" />
            <span className="header__hamburger-line" />
            <span className="header__hamburger-line" />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            className="header__mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <ul className="header__mobile-list">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.25,
                    delay: 0.05 * i,
                    ease: "easeOut",
                  }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) =>
                      `header__mobile-link ${isActive ? "header__mobile-link--active" : ""
                      }`
                    }
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
            <div className="header__mobile-cta-wrap">
              <Link
                to="/book"
                className="header__cta header__cta--mobile"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a Session
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

