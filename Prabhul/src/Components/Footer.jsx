import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-white/10
        bg-[#010609]
        px-4
        py-10
        text-white
        sm:px-6
        lg:px-8
      "
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 rounded-full bg-emerald-500/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Main Footer */}
        <div
          className="
            flex
            flex-col
            gap-8
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          {/* Brand */}
          <div className="text-center md:text-left">
            <a
              href="#"
              className="
                inline-block
                text-xl
                font-bold
                tracking-tight
              "
            >
              <span className="text-white">Prabhul</span>
              <span className="text-emerald-400">.</span>
            </a>

            <p className="mt-2 text-xs text-slate-500 sm:text-sm">
              Data Scientist · Python Full Stack Developer
            </p>
          </div>

          {/* Navigation */}
          <nav
            className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-x-5
              gap-y-3
              text-xs
              text-slate-500
              sm:gap-x-6
              sm:text-sm
            "
          >
            <a
              href="#about"
              className="transition hover:text-emerald-400"
            >
              About
            </a>

            <a
              href="#experience"
              className="transition hover:text-emerald-400"
            >
              Experience
            </a>

            <a
              href="#education"
              className="transition hover:text-emerald-400"
            >
              Education
            </a>

            <a
              href="#skills"
              className="transition hover:text-emerald-400"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="transition hover:text-emerald-400"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="transition hover:text-emerald-400"
            >
              Contact
            </a>
          </nav>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-3">
            <a
              href="https://www.linkedin.com/in/prabhulps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
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
                text-slate-400
                transition
                duration-300
                hover:border-emerald-400/30
                hover:bg-emerald-400/10
                hover:text-emerald-400
              "
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/mr-prabhul"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
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
                text-slate-400
                transition
                duration-300
                hover:border-emerald-400/30
                hover:bg-emerald-400/10
                hover:text-emerald-400
              "
            >
              <FaGithub />
            </a>

            <a
              href="mailto:ichayanprabhul2724@gmail.com"
              aria-label="Email"
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
                text-slate-400
                transition
                duration-300
                hover:border-emerald-400/30
                hover:bg-emerald-400/10
                hover:text-emerald-400
              "
            >
              <FaEnvelope />
            </a>

            {/* Back to Top */}
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border
                border-emerald-400/20
                bg-emerald-400/10
                text-emerald-400
                transition
                duration-300
                hover:-translate-y-1
                hover:bg-emerald-400/20
              "
            >
              <FaArrowUp />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom */}
        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-3
            text-center
            text-xs
            text-slate-600
            sm:flex-row
            sm:text-left
          "
        >
          <p>
            © {currentYear} Prabhul P S. All rights reserved.
          </p>

          <p>
            Built with{" "}
            <span className="text-emerald-400">
              React
            </span>{" "}
            &{" "}
            <span className="text-cyan-400">
              Tailwind CSS
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;