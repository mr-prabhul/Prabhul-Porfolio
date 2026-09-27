import { useEffect, useState } from "react";
import {
  FaBars,
  FaTimes,
  FaArrowRight,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Skills", id: "skills" },
    { name: "Education", id: "education" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  /* =====================================================
     SCROLL EFFECT
  ===================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      const scrollPosition = window.scrollY + 150;

      let currentSection = "home";

      sections.forEach((section) => {
        if (scrollPosition >= section.offsetTop) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =====================================================
     NAVIGATION
  ===================================================== */

  const handleNavigation = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setIsOpen(false);
  };

  /* =====================================================
     JSX
  ===================================================== */

  return (
    <header
      className={`
        fixed
        left-0
        right-0
        top-0
        z-50
        transition-all
        duration-300
        ${
          scrolled
            ? "border-b border-white/10 bg-[#02090d]/85 shadow-lg shadow-black/20 backdrop-blur-xl"
            : "bg-transparent"
        }
      `}
    >
      <nav className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* =================================================
            LOGO
        ================================================= */}

        <button
          type="button"
          onClick={() => handleNavigation("home")}
          className="
            group
            shrink-0
            text-left
            outline-none
          "
        >
          <span className="text-xl font-bold tracking-tight text-white sm:text-2xl">
            PRABHUL
          </span>

          <span className="text-xl font-bold text-emerald-400 sm:text-2xl">
            .
          </span>

          <span
            className="
              ml-2
              hidden
              text-[9px]
              font-medium
              tracking-[0.18em]
              text-slate-500
              transition
              group-hover:text-emerald-400
              sm:inline-block
            "
          >
            DATA SCIENTIST
          </span>
        </button>

        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavigation(item.id)}
                className={`
                  relative
                  rounded-lg
                  px-3
                  py-2
                  text-xs
                  font-medium
                  transition-all
                  duration-300
                  xl:px-3.5
                  xl:text-sm
                  ${
                    isActive
                      ? "text-emerald-400"
                      : "text-slate-400 hover:text-white"
                  }
                `}
              >
                {item.name}

                {/* Active indicator */}
                <span
                  className={`
                    absolute
                    bottom-0.5
                    left-1/2
                    h-0.5
                    -translate-x-1/2
                    rounded-full
                    bg-emerald-400
                    shadow-[0_0_8px_rgba(52,211,153,0.7)]
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "w-5 opacity-100"
                        : "w-0 opacity-0"
                    }
                  `}
                />
              </button>
            );
          })}
        </div>

        {/* =================================================
            DESKTOP CONTACT BUTTON
        ================================================= */}

        <button
          type="button"
          onClick={() => handleNavigation("contact")}
          className="
            group
            hidden
            items-center
            gap-2
            rounded-xl
            border
            border-emerald-400/20
            bg-emerald-400/10
            px-4
            py-2.5
            text-xs
            font-semibold
            text-emerald-400
            transition-all
            duration-300
            hover:border-emerald-400/40
            hover:bg-emerald-400/15
            hover:shadow-lg
            hover:shadow-emerald-500/10
            lg:flex
          "
        >
          Let's Talk

          <FaArrowRight
            className="
              text-[10px]
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </button>

        {/* =================================================
            MOBILE MENU BUTTON
        ================================================= */}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={
            isOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isOpen}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            border
            border-white/10
            bg-white/[0.03]
            text-slate-300
            transition
            duration-300
            hover:border-emerald-400/30
            hover:bg-emerald-400/10
            hover:text-emerald-400
            lg:hidden
          "
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* ===================================================
          MOBILE MENU
      =================================================== */}

      <div
        className={`
          overflow-hidden
          border-t
          border-white/10
          bg-[#02090d]/95
          backdrop-blur-xl
          transition-all
          duration-300
          lg:hidden
          ${
            isOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 border-t-0 opacity-0"
          }
        `}
      >
        <div className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6">
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavigation(item.id)}
                  className={`
                    flex
                    w-full
                    items-center
                    justify-between
                    rounded-xl
                    px-4
                    py-3
                    text-left
                    text-sm
                    font-medium
                    transition
                    duration-300
                    ${
                      isActive
                        ? "bg-emerald-400/10 text-emerald-400"
                        : "text-slate-400 hover:bg-white/[0.03] hover:text-white"
                    }
                  `}
                >
                  <span>{item.name}</span>

                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile Contact */}
          <button
            type="button"
            onClick={() => handleNavigation("contact")}
            className="
              mt-3
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-gradient-to-r
              from-emerald-500
              to-cyan-500
              px-4
              py-3
              text-sm
              font-semibold
              text-black
              transition
              duration-300
              hover:shadow-lg
              hover:shadow-emerald-500/20
            "
          >
            Let's Talk
            <FaArrowRight className="text-xs" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;