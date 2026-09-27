import {
  FaReact,
  FaChartLine,
  FaLanguage,
  FaCar,
  FaBrain,
  FaDatabase,
  FaCode,
} from "react-icons/fa6";

import {
  FiExternalLink,
  FiGithub,
} from "react-icons/fi";

/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [
  {
    id: 1,
    number: "01",
    title: "Two-Wheeler Brand Prediction System",
    category: "Machine Learning",
    description:
      "A machine learning prediction system that analyzes two-wheeler related data and predicts the brand using preprocessing, encoding and feature engineering techniques.",
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Streamlit",
    ],
    methods: [
      "Random Forest",
      "Logistic Regression",
    ],
    result: "91% Accuracy",
    icon: FaCar,
    github: "#",
    demo: "#",
  },

  {
    id: 2,
    number: "02",
    title: "Speaking Dictionary",
    category: "NLP & AI",
    description:
      "An interactive dictionary application with word meaning, translation and text-to-speech capabilities designed to make language learning more accessible.",
    technologies: [
      "Python",
      "NLTK",
      "WordNet",
      "GoogleTrans",
      "gTTS",
      "Streamlit",
    ],
    methods: [
      "Natural Language Processing",
      "Text Processing",
    ],
    result: "Translation + TTS",
    icon: FaLanguage,
    github: "#",
    demo: "#",
  },

  {
    id: 3,
    number: "03",
    title: "Sales & Profit Dashboard",
    category: "Data Analytics",
    description:
      "An interactive business dashboard focused on analyzing sales and profit data through KPIs, pivot tables and business-oriented visual reporting.",
    technologies: [
      "Microsoft Excel",
      "Pivot Tables",
      "KPI Analysis",
      "Data Visualization",
    ],
    methods: [
      "Data Analysis",
      "Business Intelligence",
    ],
    result: "Interactive Dashboard",
    icon: FaChartLine,
    github: "#",
    demo: "#",
  },

  {
    id: 4,
    number: "04",
    title: "React + Vite Portfolio",
    category: "Full Stack / Frontend",
    description:
      "A modern responsive portfolio website built with React and Vite to present professional experience, education, technical skills and projects.",
    technologies: [
      "React.js",
      "Vite",
      "JavaScript",
      "Tailwind CSS",
    ],
    methods: [
      "Component Architecture",
      "Responsive UI",
    ],
    result: "Responsive Portfolio",
    icon: FaReact,
    github: "#",
    demo: "#",
  },
];

/* =========================================================
   PROJECTS
========================================================= */

const Projects = () => {
  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        bg-[#02090d]
        px-4
        py-20
        text-white
        sm:px-6
        sm:py-24
        lg:px-8
        lg:py-28
      "
    >
      {/* Background */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* Main glow */}

        <div
          className="
            absolute
            left-1/2
            top-[25%]
            h-[450px]
            w-[700px]
            -translate-x-1/2
            rounded-full
            bg-emerald-500/[0.035]
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            -left-40
            top-[35%]
            h-72
            w-72
            rounded-full
            bg-cyan-500/[0.045]
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            -right-40
            bottom-[10%]
            h-80
            w-80
            rounded-full
            bg-emerald-500/[0.04]
            blur-[130px]
          "
        />

        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
          "
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255,255,255,0.8) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,0.8) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "55px 55px",
          }}
        />

        {/* Decorative lines */}

        <div
          className="
            absolute
            left-[5%]
            top-[18%]
            h-20
            w-px
            bg-gradient-to-b
            from-transparent
            via-cyan-400/50
            to-transparent
          "
        />

        <div
          className="
            absolute
            right-[7%]
            bottom-[18%]
            h-24
            w-px
            bg-gradient-to-b
            from-transparent
            via-emerald-400/50
            to-transparent
          "
        />

        {/* Particles */}

        <span className="absolute left-[14%] top-[30%] h-1 w-1 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />

        <span className="absolute right-[18%] top-[22%] h-1 w-1 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />

        <span className="absolute left-[25%] bottom-[20%] h-1 w-1 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />
      </div>

      {/* Content */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-6xl
        "
      >
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mx-auto max-w-3xl text-center">
          {/* Label */}

          <div className="flex items-center justify-center gap-3">
            <span
              className="
                h-px
                w-8
                bg-gradient-to-r
                from-transparent
                to-emerald-400
                sm:w-12
              "
            />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-emerald-400
                sm:text-xs
              "
            >
              My Projects
            </span>

            <span
              className="
                h-px
                w-8
                bg-gradient-to-l
                from-transparent
                to-emerald-400
                sm:w-12
              "
            />
          </div>

          {/* Heading */}

          <h2
            className="
              mt-5
              text-[2.2rem]
              font-black
              leading-none
              tracking-[-0.04em]
              sm:text-5xl
              md:text-6xl
            "
          >
            Things I've{" "}
            <span
              className="
                bg-gradient-to-r
                from-emerald-400
                via-cyan-400
                to-sky-400
                bg-clip-text
                text-transparent
              "
            >
              Built
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-5
              max-w-xl
              text-sm
              leading-6
              text-slate-400
              sm:text-base
              sm:leading-7
            "
          >
            A collection of data science, machine learning, analytics
            and development projects built to solve practical problems.
          </p>
        </div>

        {/* =====================================================
            PROJECT GRID
        ====================================================== */}

        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-5
            sm:mt-16
            sm:gap-6
            lg:grid-cols-2
          "
        >
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                key={project.id}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/[0.08]
                  bg-white/[0.02]
                  p-5
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-emerald-400/30
                  hover:bg-emerald-400/[0.025]
                  sm:rounded-3xl
                  sm:p-7
                  sm:hover:-translate-y-2
                "
              >
                {/* Card glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-24
                    -top-24
                    h-52
                    w-52
                    rounded-full
                    bg-emerald-400/[0.04]
                    blur-3xl
                    transition-all
                    duration-500
                    group-hover:bg-cyan-400/[0.08]
                  "
                />

                {/* Top */}

                <div
                  className="
                    relative
                    flex
                    items-center
                    justify-between
                    gap-3
                  "
                >
                  <span
                    className="
                      text-[10px]
                      font-bold
                      tracking-[0.25em]
                      text-emerald-400/60
                      sm:text-xs
                    "
                  >
                    {project.number}
                  </span>

                  <span
                    className="
                      max-w-[65%]
                      truncate
                      rounded-full
                      border
                      border-emerald-400/15
                      bg-emerald-400/[0.04]
                      px-2.5
                      py-1
                      text-[8px]
                      font-medium
                      uppercase
                      tracking-wider
                      text-emerald-300
                      sm:px-3
                      sm:py-1.5
                      sm:text-[9px]
                    "
                  >
                    {project.category}
                  </span>
                </div>

                {/* Icon */}

                <div
                  className="
                    relative
                    mt-6
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-emerald-400/20
                    bg-emerald-400/[0.06]
                    text-lg
                    text-emerald-300
                    transition-all
                    duration-300
                    group-hover:scale-105
                    group-hover:border-cyan-400/30
                    group-hover:bg-cyan-400/[0.08]
                    group-hover:text-cyan-300
                    sm:h-14
                    sm:w-14
                    sm:rounded-2xl
                    sm:text-xl
                  "
                >
                  <Icon />
                </div>

                {/* Title */}

                <h3
                  className="
                    relative
                    mt-5
                    text-xl
                    font-bold
                    leading-tight
                    text-white
                    sm:text-2xl
                  "
                >
                  {project.title}
                </h3>

                {/* Description */}

                <p
                  className="
                    relative
                    mt-3
                    text-xs
                    leading-6
                    text-slate-400
                    sm:text-sm
                  "
                >
                  {project.description}
                </p>

                {/* Technologies */}

                <div className="relative mt-6">
                  <p
                    className="
                      mb-2
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-slate-600
                    "
                  >
                    Technologies
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="
                          rounded-md
                          border
                          border-white/[0.08]
                          bg-black/20
                          px-2
                          py-1
                          text-[9px]
                          text-slate-300
                          sm:px-2.5
                          sm:py-1.5
                          sm:text-[10px]
                        "
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Methods */}

                <div className="relative mt-5">
                  <p
                    className="
                      mb-2
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-slate-600
                    "
                  >
                    Methods
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.methods.map((method) => (
                      <span
                        key={method}
                        className="
                          rounded-md
                          border
                          border-cyan-400/10
                          bg-cyan-400/[0.03]
                          px-2
                          py-1
                          text-[9px]
                          text-cyan-300/80
                          sm:px-2.5
                          sm:py-1.5
                          sm:text-[10px]
                        "
                      >
                        {method}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom */}

                <div
                  className="
                    relative
                    mt-6
                    flex
                    flex-col
                    gap-4
                    border-t
                    border-white/[0.06]
                    pt-5
                    min-[400px]:flex-row
                    min-[400px]:items-center
                    min-[400px]:justify-between
                  "
                >
                  {/* Result */}

                  <div>
                    <p
                      className="
                        text-[8px]
                        uppercase
                        tracking-[0.2em]
                        text-slate-600
                      "
                    >
                      Result
                    </p>

                    <p
                      className="
                        mt-1
                        text-sm
                        font-semibold
                        text-emerald-300
                      "
                    >
                      {project.result}
                    </p>
                  </div>

                  {/* Links */}

                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      className="
                        inline-flex
                        h-9
                        items-center
                        justify-center
                        gap-1.5
                        rounded-lg
                        border
                        border-white/10
                        bg-white/[0.02]
                        px-3
                        text-[9px]
                        font-medium
                        text-slate-300
                        transition-all
                        duration-300
                        hover:border-emerald-400/30
                        hover:bg-emerald-400/10
                        hover:text-emerald-300
                        sm:h-10
                        sm:px-4
                        sm:text-[10px]
                      "
                    >
                      <FiGithub size={13} />
                      GitHub
                    </a>

                    <a
                      href={project.demo}
                      className="
                        inline-flex
                        h-9
                        items-center
                        justify-center
                        gap-1.5
                        rounded-lg
                        bg-emerald-400
                        px-3
                        text-[9px]
                        font-bold
                        text-[#02100c]
                        transition-all
                        duration-300
                        hover:bg-emerald-300
                        hover:shadow-[0_0_20px_rgba(52,211,153,.2)]
                        sm:h-10
                        sm:px-4
                        sm:text-[10px]
                      "
                    >
                      Live Demo
                      <FiExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM SPECIALTIES
        ====================================================== */}

        <div
          className="
            mt-8
            grid
            grid-cols-1
            gap-3
            sm:mt-10
            sm:grid-cols-3
            sm:gap-5
          "
        >
          {/* Machine Learning */}

          <div
            className="
              rounded-2xl
              border
              border-white/[0.07]
              bg-white/[0.015]
              px-4
              py-5
              text-center
              transition-all
              duration-300
              hover:border-emerald-400/20
              hover:bg-emerald-400/[0.02]
            "
          >
            <FaBrain
              className="
                mx-auto
                text-xl
                text-emerald-300
              "
            />

            <p
              className="
                mt-2
                text-xs
                font-semibold
                text-slate-200
              "
            >
              Machine Learning
            </p>

            <p
              className="
                mt-1
                text-[10px]
                text-slate-600
              "
            >
              Predictive & analytical solutions
            </p>
          </div>

          {/* Data Analytics */}

          <div
            className="
              rounded-2xl
              border
              border-white/[0.07]
              bg-white/[0.015]
              px-4
              py-5
              text-center
              transition-all
              duration-300
              hover:border-cyan-400/20
              hover:bg-cyan-400/[0.02]
            "
          >
            <FaDatabase
              className="
                mx-auto
                text-xl
                text-cyan-300
              "
            />

            <p
              className="
                mt-2
                text-xs
                font-semibold
                text-slate-200
              "
            >
              Data Analytics
            </p>

            <p
              className="
                mt-1
                text-[10px]
                text-slate-600
              "
            >
              Insights through visualization
            </p>
          </div>

          {/* Full Stack */}

          <div
            className="
              rounded-2xl
              border
              border-white/[0.07]
              bg-white/[0.015]
              px-4
              py-5
              text-center
              transition-all
              duration-300
              hover:border-emerald-400/20
              hover:bg-emerald-400/[0.02]
            "
          >
            <FaCode
              className="
                mx-auto
                text-xl
                text-emerald-300
              "
            />

            <p
              className="
                mt-2
                text-xs
                font-semibold
                text-slate-200
              "
            >
              Full Stack
            </p>

            <p
              className="
                mt-1
                text-[10px]
                text-slate-600
              "
            >
              Modern application development
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;