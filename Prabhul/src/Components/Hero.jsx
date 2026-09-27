import { useEffect, useState } from "react";

import Profile from "../assets/IMG_20260518_184912.jpg-removebg-preview.png";
import Resume from "../assets/Prabhul Data Science .pdf";

import {
  FiArrowUpRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiBriefcase,
  FiBookOpen,
  FiDatabase,
  FiBarChart2,
  FiCpu,
} from "react-icons/fi";

/* =========================================================
   DATA
========================================================= */

const roles = [
  "Data Scientist",
  "Machine Learning Engineer",
  "Python Developer",
  "Full Stack Developer",
];

const skills = [
  "Python",
  "Machine Learning",
  "SQL",
  "Pandas",
  "Scikit-learn",
  "Power BI",
  "Tableau",
  "Django",
  "React",
  "TensorFlow",
];

const stats = [
  {
    value: "2024+",
    label: "Professional Experience",
    icon: FiBriefcase,
  },
  {
    value: "4+",
    label: "Projects",
    icon: FiDatabase,
  },
  {
    value: "91%",
    label: "Best ML Accuracy",
    icon: FiBarChart2,
  },
];

/* =========================================================
   HERO
========================================================= */

function Hero() {
  const [role, setRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  /* =======================================================
     TYPING ANIMATION
  ======================================================= */

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const delay = deleting
      ? 45
      : charIndex === currentRole.length
      ? 1700
      : 80;

    const timer = setTimeout(() => {
      if (!deleting) {
        if (charIndex < currentRole.length) {
          setRole(currentRole.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        } else {
          setDeleting(true);
        }
      } else {
        if (charIndex > 0) {
          setRole(currentRole.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        } else {
          setDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-[#02090d]
        text-white
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <HeroBackground />

      {/* =====================================================
          MAIN HERO CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-[1450px]
          items-center
          px-4
          py-16
          sm:px-8
          sm:py-20
          lg:px-12
          xl:px-16
        "
      >
        <div
          className="
            grid
            w-full
            items-center
            gap-8
            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-4
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <HeroContent role={role} />

          {/* =================================================
              RIGHT VISUAL
          ================================================= */}

          <HeroVisual />
        </div>
      </div>

      {/* =====================================================
          BOTTOM LINE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-3
          left-1/2
          h-px
          w-[75%]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-emerald-400/20
          to-transparent
        "
      />
    </section>
  );
}

/* =========================================================
   BACKGROUND
========================================================= */

function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0">

      {/* Grid */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.055]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(52,211,153,0.18) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(52,211,153,0.18) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "58px 58px",
        }}
      />

      {/* Main glow */}

      <div
        className="
          absolute
          left-[68%]
          top-1/2
          h-[280px]
          w-[280px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-emerald-400/[0.055]
          blur-[100px]
          sm:h-[430px]
          sm:w-[430px]
          lg:h-[580px]
          lg:w-[580px]
        "
      />

      {/* Left glow */}

      <div
        className="
          absolute
          -left-[180px]
          top-[20%]
          h-[360px]
          w-[360px]
          rounded-full
          bg-cyan-400/[0.025]
          blur-[110px]
        "
      />

      {/* Particles */}

      <span
        className="
          absolute
          left-[8%]
          top-[30%]
          h-1
          w-1
          rounded-full
          bg-emerald-300
        "
      />

      <span
        className="
          absolute
          left-[43%]
          top-[16%]
          h-1.5
          w-1.5
          animate-pulse
          rounded-full
          bg-cyan-300
        "
      />

      <span
        className="
          absolute
          right-[12%]
          top-[32%]
          h-1
          w-1
          animate-pulse
          rounded-full
          bg-emerald-300
        "
      />

      <span
        className="
          absolute
          bottom-[20%]
          left-[18%]
          h-1
          w-1
          rounded-full
          bg-cyan-300
        "
      />

      <span
        className="
          absolute
          right-[25%]
          bottom-[18%]
          h-1
          w-1
          rounded-full
          bg-emerald-300
        "
      />
    </div>
  );
}

/* =========================================================
   LEFT CONTENT
========================================================= */

function HeroContent({ role }) {
  return (
    <div
      className="
        relative
        z-30
        mx-auto
        w-full
        max-w-[590px]
        lg:mx-0
      "
    >
      {/* Intro */}

      <p
        className="
          mb-2
          text-[9px]
          font-medium
          tracking-[0.35em]
          text-gray-500
          min-[400px]:text-[10px]
          sm:text-xs
        "
      >
        HELLO, I'M
      </p>

      {/* =====================================================
          NAME
      ===================================================== */}

      <h1
        className="
          font-black
          leading-[0.88]
          tracking-[-0.045em]
        "
      >
        <span
          className="
            block
            text-[clamp(2.6rem,7vw,4rem)]
            text-white
          "
        >
          PRABHUL
        </span>

        <span
          className="
            mt-1
            block
            text-[clamp(2.6rem,7vw,4rem)]
            text-emerald-400
          "
        >
          P.S.
        </span>
      </h1>

      {/* =====================================================
          ROLE
      ===================================================== */}

      <div
        className="
          mt-4
          flex
          min-h-[35px]
          items-center
        "
      >
        <span
          className="
            max-w-full
            truncate
            text-lg
            font-semibold
            text-emerald-300
            sm:text-xl
            lg:text-2xl
          "
        >
          {role}
        </span>

        <span
          className="
            ml-1
            h-6
            w-[2px]
            shrink-0
            animate-pulse
            bg-emerald-400
          "
        />
      </div>

      {/* =====================================================
          DESCRIPTION
      ===================================================== */}

      <p
        className="
          mt-3
          max-w-[570px]
          text-[12px]
          leading-6
          text-gray-400
          sm:text-sm
          sm:leading-7
          lg:text-[14px]
        "
      >
        Data Scientist with hands-on experience in{" "}
        <span className="text-gray-200">
          data analysis, machine learning,
        </span>{" "}
        statistical modeling, predictive analytics, and
        business intelligence. I transform raw data into
        actionable insights and data-driven solutions using
        Python, SQL, and modern technologies.
      </p>

      {/* =====================================================
          SKILLS
      ===================================================== */}

      <div
        className="
          mt-4
          flex
          max-w-[580px]
          flex-wrap
          gap-1.5
          sm:gap-2
        "
      >
        {skills.map((skill) => (
          <span
            key={skill}
            className="
              rounded-full
              border
              border-white/15
              bg-white/[0.02]
              px-2.5
              py-1.5
              text-[8px]
              text-gray-300
              transition
              duration-300
              hover:border-emerald-400/60
              hover:bg-emerald-400/[0.05]
              hover:text-emerald-300
              min-[400px]:px-3
              min-[400px]:text-[9px]
              sm:px-4
              sm:py-2
              sm:text-[10px]
            "
          >
            {skill}
          </span>
        ))}
      </div>

      {/* =====================================================
          BUTTONS
      ===================================================== */}

      <div
        className="
          mt-6
          flex
          flex-col
          gap-3
          min-[430px]:flex-row
        "
      >
        <a
          href="#projects"
          className="
            group
            inline-flex
            h-11
            items-center
            justify-center
            gap-2
            rounded-full
            bg-emerald-400
            px-6
            text-xs
            font-bold
            text-[#02100c]
            transition
            duration-300
            hover:-translate-y-1
            hover:bg-emerald-300
            hover:shadow-[0_12px_35px_rgba(52,211,153,0.25)]
          "
        >
          View My Work

          <FiArrowUpRight
            size={16}
            className="
              transition
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
          />
        </a>

        <a
          href={Resume}
          target="_blank"
          rel="noreferrer"
          className="
            inline-flex
            h-11
            items-center
            justify-center
            gap-2
            rounded-full
            border
            border-white/20
            px-6
            text-xs
            font-semibold
            text-white
            transition
            duration-300
            hover:-translate-y-1
            hover:border-emerald-400
            hover:text-emerald-300
          "
        >
          <FiDownload size={16} />

          Download Resume
        </a>
      </div>

      {/* =====================================================
          SOCIAL LINKS
      ===================================================== */}

      <div className="mt-6 flex items-center gap-3">

        <a
          href="https://github.com/mr-prabhul"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-white/15
            text-gray-400
            transition
            hover:border-emerald-400
            hover:bg-emerald-400/10
            hover:text-emerald-300
            sm:h-10
            sm:w-10
          "
        >
          <FiGithub size={16} />
        </a>

        <a
          href="https://linkedin.com/in/prabhulps"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-white/15
            text-gray-400
            transition
            hover:border-emerald-400
            hover:bg-emerald-400/10
            hover:text-emerald-300
            sm:h-10
            sm:w-10
          "
        >
          <FiLinkedin size={16} />
        </a>

        <a
          href="mailto:ichayanprabhul2724@gmail.com"
          aria-label="Email"
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-white/15
            text-gray-400
            transition
            hover:border-emerald-400
            hover:bg-emerald-400/10
            hover:text-emerald-300
            sm:h-10
            sm:w-10
          "
        >
          <FiMail size={16} />
        </a>

        <span
          className="
            ml-1
            hidden
            text-[8px]
            tracking-[0.35em]
            text-gray-600
            min-[420px]:block
          "
        >
          LET'S CONNECT
        </span>
      </div>

      {/* =====================================================
          STATS
      ===================================================== */}

      <div
        className="
          mt-7
          grid
          max-w-[520px]
          grid-cols-3
          gap-2
          border-t
          border-white/[0.08]
          pt-5
          sm:gap-6
        "
      >
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className="min-w-0"
            >
              <div
                className="
                  mb-2
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-emerald-400/20
                  bg-emerald-400/[0.04]
                  text-emerald-400
                  sm:h-9
                  sm:w-9
                "
              >
                <Icon size={14} />
              </div>

              <p className="text-sm font-bold sm:text-base">
                {stat.value}
              </p>

              <p
                className="
                  mt-1
                  max-w-[100px]
                  text-[7px]
                  leading-3
                  text-gray-600
                  sm:text-[9px]
                "
              >
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* =========================================================
   RIGHT VISUAL
========================================================= */

function HeroVisual() {
  return (
    <div
      className="
        relative
        mx-auto
        mt-8
        h-[370px]
        w-full
        max-w-[600px]
        translate-x-0
        sm:h-[500px]
        lg:mt-0
        lg:h-[620px]
        lg:translate-x-[70px]
        xl:translate-x-[100px]
      "
    >
      {/* ===================================================
          OUTER ORBIT
      =================================================== */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[250px]
          w-[250px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-emerald-400/20
          sm:h-[360px]
          sm:w-[360px]
          lg:h-[490px]
          lg:w-[490px]
        "
      />

      {/* ===================================================
          SECOND ORBIT
      =================================================== */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[215px]
          w-[215px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-cyan-400/15
          sm:h-[310px]
          sm:w-[310px]
          lg:h-[405px]
          lg:w-[405px]
        "
      />

      {/* ===================================================
          INNER GLOW RING
      =================================================== */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[190px]
          w-[190px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border-2
          border-emerald-300/50
          shadow-[0_0_40px_rgba(52,211,153,0.25)]
          sm:h-[280px]
          sm:w-[280px]
          lg:h-[365px]
          lg:w-[365px]
        "
      />

      {/* ===================================================
          DASHED ORBIT
      =================================================== */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[275px]
          w-[275px]
          -translate-x-1/2
          -translate-y-1/2
          rotate-12
          rounded-full
          border
          border-dashed
          border-emerald-400/20
          sm:h-[400px]
          sm:w-[400px]
          lg:h-[530px]
          lg:w-[530px]
        "
      />

      {/* ===================================================
          ORBIT DOTS
      =================================================== */}

      <span
        className="
          absolute
          left-[16%]
          top-[30%]
          h-2
          w-2
          rounded-full
          bg-emerald-300
          shadow-[0_0_16px_rgba(52,211,153,0.9)]
          sm:h-3
          sm:w-3
        "
      />

      <span
        className="
          absolute
          right-[17%]
          top-[26%]
          h-2
          w-2
          rounded-full
          bg-cyan-300
          shadow-[0_0_16px_rgba(34,211,238,0.9)]
          sm:h-3
          sm:w-3
        "
      />

      <span
        className="
          absolute
          bottom-[22%]
          left-[19%]
          h-2
          w-2
          rounded-full
          bg-emerald-300
          shadow-[0_0_16px_rgba(52,211,153,0.9)]
          sm:h-3
          sm:w-3
        "
      />

      {/* ===================================================
          PORTRAIT
      =================================================== */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          z-30
          h-[220px]
          w-[220px]
          -translate-x-1/2
          -translate-y-1/2
          sm:h-[315px]
          sm:w-[315px]
          lg:h-[395px]
          lg:w-[395px]
        "
      >
        {/* Glow */}

        <div
          className="
            absolute
            inset-5
            rounded-full
            bg-emerald-400/20
            blur-[45px]
            sm:inset-8
            sm:blur-[60px]
          "
        />

        {/* Frame */}

        <div
          className="
            absolute
            inset-0
            rounded-full
            border
            border-emerald-300/50
            bg-gradient-to-br
            from-emerald-300/20
            via-transparent
            to-cyan-400/10
            p-[3px]
            shadow-[0_0_80px_rgba(52,211,153,0.20)]
          "
        >
          <div
            className="
              relative
              h-full
              w-full
              overflow-hidden
              rounded-full
              bg-[#061117]
            "
          >
            <img
              src={Profile}
              alt="Prabhul P S"
              className="
                relative
                z-10
                h-full
                w-full
                object-cover
                object-center
              "
            />

            {/* Bottom shadow */}

            <div
              className="
                absolute
                inset-x-0
                bottom-0
                z-20
                h-[30%]
                bg-gradient-to-t
                from-[#02090d]
                via-[#02090d]/30
                to-transparent
              "
            />

            {/* Glass highlight */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                z-20
                rounded-full
                bg-gradient-to-br
                from-white/[0.07]
                via-transparent
                to-emerald-400/[0.04]
              "
            />
          </div>
        </div>
      </div>

      {/* ===================================================
          CARD 1 — EDUCATION
      =================================================== */}

      <div
        className="
          absolute
          right-[-14%]
          top-[-5%]
          z-50
          hidden
          w-[185px]
          rounded-2xl
          border
          border-emerald-400/20
          bg-[#071218]/95
          p-4
          shadow-[0_15px_50px_rgba(0,0,0,0.45)]
          backdrop-blur-xl
          lg:block
        "
      >
        <div className="flex items-start gap-3">

          <div
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-lg
              bg-emerald-400/10
              text-emerald-400
            "
          >
            <FiBookOpen size={17} />
          </div>

          <div className="min-w-0">

            <p className="text-[8px] uppercase tracking-[0.2em] text-gray-600">
              Education
            </p>

            <p className="mt-2 text-xs font-semibold text-white">
              Data Science &
            </p>

            <p className="text-xs text-emerald-300">
              Machine Learning
            </p>

            <p className="mt-2 text-[9px] text-gray-500">
              Techolas Technologies
            </p>

            <p className="mt-1 text-[9px] text-gray-600">
              2024 – 2025
            </p>

          </div>
        </div>
      </div>

      {/* ===================================================
          CARD 2 — CURRENT ROLE
      =================================================== */}

      <div
        className="
          absolute
          left-[-16%]
          top-[60%]
          z-50
          hidden
          w-[190px]
          rounded-2xl
          border
          border-emerald-400/20
          bg-[#071218]/95
          p-4
          shadow-[0_15px_50px_rgba(0,0,0,0.45)]
          backdrop-blur-xl
          lg:block
        "
      >
        <div className="flex items-start gap-3">

          <div
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-lg
              bg-emerald-400/10
              text-emerald-400
            "
          >
            <FiBriefcase size={17} />
          </div>

          <div className="min-w-0">

            <p className="text-[8px] uppercase tracking-[0.2em] text-gray-600">
              Current Role
            </p>

            <p className="mt-2 text-xs font-semibold text-white">
              Junior Python
            </p>

            <p className="text-xs text-emerald-300">
              Full Stack Developer
            </p>

            <p className="mt-1 text-[9px] text-gray-500">
              Druv360°
            </p>

          </div>
        </div>

        <div className="mt-3 space-y-2 border-t border-white/10 pt-3">

          <div className="flex items-center gap-2">

            <FiMapPin
              size={11}
              className="text-emerald-400"
            />

            <span className="text-[9px] text-gray-500">
              Ernakulam
            </span>

          </div>

          <div className="flex items-center gap-2">

            <FiBriefcase
              size={11}
              className="text-emerald-400"
            />

            <span className="text-[9px] text-gray-500">
              05/2026 – Present
            </span>

          </div>

        </div>
      </div>

      {/* ===================================================
          CARD 3 — DATA & ML
      =================================================== */}

      <div
        className="
          absolute
          bottom-[-10%]
          right-[-16%]
          z-50
          hidden
          w-[195px]
          rounded-2xl
          border
          border-emerald-400/20
          bg-[#071218]/95
          p-4
          shadow-[0_15px_50px_rgba(0,0,0,0.45)]
          backdrop-blur-xl
          lg:block
        "
      >
        <div className="flex items-start gap-3">

          <div
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-lg
              bg-emerald-400/10
              text-emerald-400
            "
          >
            <FiCpu size={17} />
          </div>

          <div className="min-w-0">

            <p className="text-[8px] uppercase tracking-[0.2em] text-gray-600">
              Data & ML
            </p>

            <p className="mt-2 text-xs font-semibold text-white">
              Machine Learning
            </p>

            <p className="text-xs text-emerald-300">
              Model Development
            </p>

          </div>

        </div>

        <div className="mt-3 border-t border-white/10 pt-3">

          <div className="flex items-center justify-between">

            <span className="text-[9px] text-gray-500">
              Best Accuracy
            </span>

            <span className="text-sm font-bold text-emerald-300">
              91%
            </span>

          </div>

          <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">

            <div className="h-full w-[91%] rounded-full bg-emerald-400" />

          </div>

          <div className="mt-3 flex flex-wrap gap-1.5">

            <span className="rounded-full bg-white/5 px-2 py-1 text-[7px] text-gray-400">
              Python
            </span>

            <span className="rounded-full bg-white/5 px-2 py-1 text-[7px] text-gray-400">
              Scikit-learn
            </span>

            <span className="rounded-full bg-white/5 px-2 py-1 text-[7px] text-gray-400">
              XGBoost
            </span>

          </div>

        </div>
      </div>

      {/* ===================================================
          MOBILE LABEL
      =================================================== */}

      <div
        className="
          absolute
          bottom-[-2px]
          left-1/2
          z-50
          -translate-x-1/2
          lg:hidden
        "
      >
        <span
          className="
            whitespace-nowrap
            text-[7px]
            tracking-[0.3em]
            text-gray-600
          "
        >
          DATA • AI • DEVELOPMENT
        </span>
      </div>
    </div>
  );
}

export default Hero;