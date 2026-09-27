import {
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiGlobe,
  FiCode,
  FiBarChart2,
  FiDatabase,
  FiCpu,
  FiTrendingUp,
  FiArrowRight,
  FiBriefcase,
  FiCheckCircle,
} from "react-icons/fi";

import profile from "../assets/IMG_20260518_184912.jpg.jpeg";

/* =========================================================
   DATA
========================================================= */

const approaches = [
  {
    title: "Learn",
    icon: FiTrendingUp,
    text: "Continuously learning new technologies and improving my technical skills.",
  },
  {
    title: "Build",
    icon: FiCode,
    text: "Turning ideas into practical applications using clean and reusable code.",
  },
  {
    title: "Analyze",
    icon: FiBarChart2,
    text: "Finding patterns and meaningful insights hidden inside data.",
  },
  {
    title: "Impact",
    icon: FiCheckCircle,
    text: "Creating solutions that solve real-world problems and provide value.",
  },
];

const stats = [
  ["1+", "Years Experience"],
  ["2+", "Credentials"],
  ["4+", "Projects"],
  ["91%", "Best ML Accuracy"],
];

/* =========================================================
   REUSABLE CLASSES
========================================================= */

const card =
  "rounded-2xl border border-white/10 bg-white/[0.025]";

const transition =
  "transition duration-300";

const hover =
  "hover:border-emerald-400/30";

/* =========================================================
   ABOUT
========================================================= */

const About = () => {
  return (
    <section
      id="about"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#02090d]
        py-12
        text-white
        min-[360px]:py-14
        sm:py-20
        lg:py-24
      "
    >
      {/* BACKGROUND */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            -left-32
            top-20
            h-64
            w-64
            rounded-full
            bg-emerald-500/10
            blur-[100px]
            sm:h-[450px]
            sm:w-[450px]
            sm:blur-[130px]
          "
        />

        <div
          className="
            absolute
            -right-32
            top-[35%]
            h-72
            w-72
            rounded-full
            bg-cyan-500/10
            blur-[100px]
            sm:h-[500px]
            sm:w-[500px]
            sm:blur-[140px]
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            sm:opacity-[0.035]
          "
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255,255,255,.5) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,.5) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* CONTAINER */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
          px-3
          min-[360px]:px-4
          sm:px-6
          lg:px-8
        "
      >
        <SectionHeading />

        {/* PROFILE + CONTENT */}

        <div
          className="
            mt-10
            grid
            w-full
            gap-8
            sm:mt-14
            sm:gap-10
            lg:mt-16
            lg:grid-cols-[.85fr_1.15fr]
            lg:items-center
            lg:gap-12
          "
        >
          <ProfileCard />

          <AboutText />
        </div>

        <Stats />

        <Approach />
      </div>
    </section>
  );
};

/* =========================================================
   SECTION HEADING
========================================================= */

const SectionHeading = () => (
  <div className="mx-auto w-full max-w-3xl text-center">

    <div
      className="
        mb-4
        inline-flex
        max-w-full
        items-center
        gap-2
        rounded-full
        border
        border-emerald-400/20
        bg-emerald-400/5
        px-3
        py-1.5
        sm:mb-5
        sm:px-4
        sm:py-2
      "
    >
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 sm:h-2 sm:w-2" />

      <span
        className="
          text-[9px]
          font-semibold
          uppercase
          tracking-[0.2em]
          text-emerald-300
          sm:text-xs
          sm:tracking-[0.25em]
        "
      >
        About Me
      </span>
    </div>

    <h2
      className="
        text-[clamp(2rem,9vw,3.75rem)]
        font-black
        leading-none
        tracking-tight
      "
    >
      More About{" "}

      <span
        className="
          bg-gradient-to-r
          from-emerald-300
          via-cyan-300
          to-emerald-400
          bg-clip-text
          text-transparent
        "
      >
        Me
      </span>
    </h2>

    <p
      className="
        mx-auto
        mt-4
        max-w-xl
        px-1
        text-[11px]
        leading-5
        text-slate-400
        min-[360px]:text-xs
        min-[400px]:text-sm
        sm:mt-6
        sm:text-base
        sm:leading-7
      "
    >
      I am a Data Scientist and Junior Python Full Stack Developer
      passionate about building data-driven applications and solving
      practical problems with technology.
    </p>
  </div>
);

/* =========================================================
   PROFILE
========================================================= */

const ProfileCard = () => (
  <div className="relative mx-auto w-full max-w-md">

    <div
      className="
        absolute
        -inset-3
        rounded-[28px]
        bg-gradient-to-br
        from-emerald-400/15
        to-cyan-400/10
        blur-xl
        sm:-inset-5
        sm:rounded-[35px]
        sm:blur-2xl
      "
    />

    <div
      className="
        relative
        overflow-hidden
        rounded-[22px]
        border
        border-white/10
        bg-white/[0.025]
        p-2
        backdrop-blur-xl
        min-[360px]:rounded-[26px]
        min-[360px]:p-3
        sm:rounded-[30px]
        sm:p-4
      "
    >
      <div
        className="
          relative
          overflow-hidden
          rounded-[17px]
          border
          border-white/10
          bg-[#061217]
          min-[360px]:rounded-[20px]
          sm:rounded-[24px]
        "
      >
        <img
          src={profile}
          alt="Prabhul P S"
          loading="lazy"
          decoding="async"
          className="
            h-[330px]
            w-full
            object-cover
            object-center
            min-[360px]:h-[370px]
            min-[400px]:h-[400px]
            sm:h-[460px]
          "
        />

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-32
            bg-gradient-to-t
            from-[#02090d]
            via-[#02090d]/60
            to-transparent
            sm:h-48
          "
        />

        <div
          className="
            absolute
            bottom-4
            left-4
            right-4
            sm:bottom-6
            sm:left-6
            sm:right-6
          "
        >
          <p
            className="
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-emerald-400
              sm:text-xs
              sm:tracking-[0.25em]
            "
          >
            Data Scientist
          </p>

          <h3
            className="
              mt-1
              text-lg
              font-bold
              sm:text-2xl
            "
          >
            PRABHUL P S
          </h3>
        </div>
      </div>

      {/* STATUS */}

      <div
        className="
          mt-2
          flex
          min-w-0
          items-center
          justify-between
          gap-2
          rounded-xl
          border
          border-emerald-400/10
          bg-emerald-400/5
          px-3
          py-2.5
          sm:mt-4
          sm:rounded-2xl
          sm:px-4
          sm:py-3
        "
      >
        <div className="flex min-w-0 items-center gap-2">

          <span
            className="
              h-2
              w-2
              shrink-0
              rounded-full
              bg-emerald-400
              shadow-[0_0_10px_rgba(52,211,153,.8)]
              sm:h-3
              sm:w-3
            "
          />

          <span
            className="
              truncate
              text-[9px]
              font-medium
              text-emerald-300
              min-[360px]:text-[10px]
              sm:text-xs
            "
          >
            Looking for opportunities
          </span>
        </div>

        <FiArrowRight className="shrink-0 text-emerald-400" />
      </div>
    </div>
  </div>
);

/* =========================================================
   ABOUT TEXT
========================================================= */

const AboutText = () => (
  <div className="min-w-0">

    <p
      className="
        text-[9px]
        font-semibold
        uppercase
        tracking-[0.22em]
        text-emerald-400
        sm:text-xs
        sm:tracking-[0.25em]
      "
    >
      Who I Am
    </p>

    <h3
      className="
        mt-2
        text-[clamp(1.65rem,7vw,2.5rem)]
        font-bold
        leading-[1.08]
        sm:mt-3
      "
    >
      Building With Data.
      <br />

      <span className="text-emerald-300">
        Solving With Code.
      </span>
    </h3>

    <div
      className="
        mt-4
        space-y-3
        text-[11px]
        leading-5
        text-slate-400
        min-[360px]:text-xs
        min-[400px]:text-sm
        sm:mt-6
        sm:space-y-5
        sm:text-base
        sm:leading-7
      "
    >
      <p>
        I am a Data Scientist with hands-on experience in data
        analysis, machine learning, statistical modeling and
        predictive analytics.
      </p>

      <p>
        My technical background combines Python, SQL, Pandas,
        NumPy, Scikit-learn, Power BI, Tableau and modern web
        technologies such as Django, FastAPI and React.js.
      </p>

      <p>
        Currently, I work as a Junior Python Full Stack Developer,
        where I work with Python applications, frontend interfaces,
        databases and REST APIs.
      </p>
    </div>

    <QuickDetails />

    <SocialLinks />
  </div>
);

/* =========================================================
   QUICK DETAILS
========================================================= */

const QuickDetails = () => {
  const details = [
    [FiUser, "Name", "Prabhul P S"],
    [FiMapPin, "Location", "Malappuram, Kerala"],
    [FiMail, "Email", "ichayanprabhul2724@gmail.com"],
    [FiPhone, "Phone", "6238820472"],
  ];

  return (
    <div
      className="
        mt-5
        grid
        grid-cols-1
        gap-2
        min-[400px]:grid-cols-2
        sm:mt-8
        sm:gap-3
      "
    >
      {details.map(([Icon, label, value]) => (
        <div
          key={label}
          className={`
            ${card}
            flex
            min-w-0
            items-center
            gap-2.5
            p-3
            sm:gap-3
            sm:p-4
          `}
        >
          <Icon
            className="
              shrink-0
              text-base
              text-emerald-400
              sm:text-lg
            "
          />

          <div className="min-w-0">
            <p
              className="
                text-[8px]
                uppercase
                tracking-wider
                text-slate-500
                sm:text-[10px]
              "
            >
              {label}
            </p>

            <p
              className="
                mt-0.5
                truncate
                text-[10px]
                font-medium
                text-slate-200
                min-[360px]:text-[11px]
                sm:mt-1
                sm:text-sm
              "
            >
              {value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

/* =========================================================
   SOCIAL
========================================================= */

const SocialLinks = () => {
  const links = [
    [
      FiLinkedin,
      "LinkedIn",
      "https://www.linkedin.com/in/prabhulps",
    ],
    [
      FiGithub,
      "GitHub",
      "https://github.com/mr-prabhul",
    ],
    [
      FiGlobe,
      "Portfolio",
      "https://prabhul-portfolio.vercel.app",
    ],
  ];

  return (
    <div className="mt-4 flex flex-wrap gap-2 sm:mt-7 sm:gap-3">

      {links.map(([Icon, name, href]) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noreferrer"
          className="
            inline-flex
            h-9
            items-center
            justify-center
            gap-1.5
            rounded-lg
            border
            border-white/10
            bg-white/[0.025]
            px-3
            text-[9px]
            font-semibold
            text-slate-300
            transition
            hover:border-emerald-400/30
            hover:bg-emerald-400/5
            hover:text-emerald-300
            min-[360px]:text-[10px]
            sm:h-auto
            sm:gap-2
            sm:rounded-xl
            sm:px-4
            sm:py-3
            sm:text-xs
          "
        >
          <Icon />
          {name}
        </a>
      ))}

    </div>
  );
};

/* =========================================================
   STATS
========================================================= */

const Stats = () => (
  <div
    className="
      mt-12
      grid
      grid-cols-2
      gap-2
      sm:mt-20
      sm:gap-4
      lg:grid-cols-4
    "
  >
    {stats.map(([value, label], index) => (
      <div
        key={label}
        className={`
          ${card}
          ${transition}
          p-3
          text-center
          hover:-translate-y-1
          ${hover}
          min-[360px]:p-4
          sm:p-6
        `}
      >
        <div
          className={`
            text-2xl
            font-black
            ${
              index % 2 === 0
                ? "text-emerald-300"
                : "text-cyan-300"
            }
            min-[360px]:text-3xl
          `}
        >
          {value}
        </div>

        <p
          className="
            mt-1.5
            text-[7px]
            uppercase
            leading-3
            tracking-wider
            text-slate-500
            min-[360px]:text-[8px]
            sm:mt-2
            sm:text-xs
          "
        >
          {label}
        </p>
      </div>
    ))}
  </div>
);

/* =========================================================
   APPROACH
========================================================= */

const Approach = () => (
  <div className="mt-16 sm:mt-24">

    <div className="mb-7 sm:mb-10">

      <p
        className="
          mb-1.5
          text-[9px]
          font-semibold
          uppercase
          tracking-[0.2em]
          text-cyan-400
          sm:mb-2
          sm:text-xs
          sm:tracking-[0.25em]
        "
      >
        My Approach
      </p>

      <h3
        className="
          text-[clamp(1.7rem,7vw,2.5rem)]
          font-bold
          leading-tight
        "
      >
        What Drives Me
      </h3>
    </div>

    <div className="grid grid-cols-2 gap-2.5 sm:gap-5 lg:grid-cols-4">

      {approaches.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className={`
              ${card}
              ${transition}
              group
              min-w-0
              p-3
              hover:-translate-y-1
              ${hover}
              min-[400px]:p-4
              sm:p-6
            `}
          >
            <div
              className="
                mb-3
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-lg
                bg-emerald-400/10
                text-base
                text-emerald-300
                transition
                group-hover:bg-emerald-400/20
                sm:mb-5
                sm:h-12
                sm:w-12
                sm:rounded-xl
                sm:text-xl
              "
            >
              <Icon />
            </div>

            <h4 className="text-xs font-bold sm:text-lg">
              {item.title}
            </h4>

            <p
              className="
                mt-1.5
                text-[9px]
                leading-4
                text-slate-500
                min-[400px]:text-[10px]
                sm:mt-3
                sm:text-sm
                sm:leading-6
              "
            >
              {item.text}
            </p>
          </div>
        );
      })}

    </div>
  </div>
);

export default About;