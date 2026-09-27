import {
  FaPython,
  FaReact,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaCode,
  FaBrain,
  FaChartLine,
  FaDatabase,
  FaServer,
  FaLaptopCode,
  FaCheckCircle,
  FaGraduationCap,
  FaRocket,
  FaCogs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaEye,
  FaLanguage,
} from "react-icons/fa";

import {
  FiBarChart2,
  FiTrendingUp,
  FiTerminal,
} from "react-icons/fi";

/* =========================================================
   CATEGORY DATA
========================================================= */

const categories = [
  {
    icon: FaBrain,
    title: "Data Science",
    description:
      "Transforming raw data into meaningful insights using statistical analysis and machine learning.",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Machine Learning",
      "Statistical Modeling",
    ],
  },
  {
    icon: FaLaptopCode,
    title: "Development",
    description:
      "Building responsive applications and scalable backend systems using modern technologies.",
    skills: [
      "Python",
      "Django",
      "FastAPI",
      "React.js",
      "JavaScript",
      "REST API",
    ],
  },
  {
    icon: FaChartLine,
    title: "Analytics",
    description:
      "Creating dashboards and reports that turn business data into actionable information.",
    skills: [
      "Power BI",
      "Tableau",
      "Excel",
      "SQL",
      "Data Visualization",
      "EDA",
    ],
  },
  {
    icon: FaCogs,
    title: "AI & Engineering",
    description:
      "Developing machine learning solutions with deployment, optimization and engineering practices.",
    skills: [
      "TensorFlow",
      "PyTorch",
      "NLP",
      "OpenCV",
      "Streamlit",
      "Docker",
    ],
  },
];

/* =========================================================
   TECHNICAL SKILLS
========================================================= */

const technicalSkills = [
  {
    name: "Python",
    icon: FaPython,
    level: "Advanced",
    width: "95%",
  },
  {
    name: "Machine Learning",
    icon: FaBrain,
    level: "Advanced",
    width: "90%",
  },
  {
    name: "SQL",
    icon: FaDatabase,
    level: "Advanced",
    width: "88%",
  },
  {
    name: "Pandas & NumPy",
    icon: FiBarChart2,
    level: "Advanced",
    width: "90%",
  },
  {
    name: "Scikit-learn",
    icon: FaBrain,
    level: "Advanced",
    width: "87%",
  },
  {
    name: "TensorFlow / Keras",
    icon: FaCogs,
    level: "Intermediate",
    width: "80%",
  },
  {
    name: "Django",
    icon: FaServer,
    level: "Advanced",
    width: "85%",
  },
  {
    name: "React.js",
    icon: FaReact,
    level: "Intermediate",
    width: "82%",
  },
  {
    name: "Power BI",
    icon: FiBarChart2,
    level: "Advanced",
    width: "84%",
  },
  {
    name: "Tableau",
    icon: FiTrendingUp,
    level: "Intermediate",
    width: "80%",
  },
];

/* =========================================================
   SKILL GRID
========================================================= */

const skillGrid = [
  {
    name: "Python",
    icon: FaPython,
    category: "Programming",
  },
  {
    name: "C++",
    icon: FaCode,
    category: "Programming",
  },
  {
    name: "JavaScript",
    icon: FaJs,
    category: "Programming",
  },
  {
    name: "HTML",
    icon: FaHtml5,
    category: "Frontend",
  },
  {
    name: "CSS",
    icon: FaCss3Alt,
    category: "Frontend",
  },
  {
    name: "React.js",
    icon: FaReact,
    category: "Frontend",
  },
  {
    name: "Django",
    icon: FaServer,
    category: "Backend",
  },
  {
    name: "FastAPI",
    icon: FaServer,
    category: "Backend",
  },
  {
    name: "SQL",
    icon: FaDatabase,
    category: "Database",
  },
  {
    name: "MySQL",
    icon: FaDatabase,
    category: "Database",
  },
  {
    name: "Pandas",
    icon: FiBarChart2,
    category: "Data Science",
  },
  {
    name: "NumPy",
    icon: FaChartLine,
    category: "Data Science",
  },
  {
    name: "Scikit-learn",
    icon: FaBrain,
    category: "Machine Learning",
  },
  {
    name: "TensorFlow",
    icon: FaCogs,
    category: "Deep Learning",
  },
  {
    name: "PyTorch",
    icon: FaCogs,
    category: "Deep Learning",
  },
  {
    name: "Power BI",
    icon: FiBarChart2,
    category: "Analytics",
  },
  {
    name: "Tableau",
    icon: FiTrendingUp,
    category: "Analytics",
  },
  {
    name: "Docker",
    icon: FaDocker,
    category: "DevOps",
  },
  {
    name: "AWS",
    icon: FaAws,
    category: "Cloud",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    category: "Tools",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    category: "Tools",
  },
  {
    name: "Jupyter",
    icon: FiTerminal,
    category: "Tools",
  },
  {
    name: "OpenCV",
    icon: FaEye,
    category: "Computer Vision",
  },
  {
    name: "NLP",
    icon: FaLanguage,
    category: "AI",
  },
];

/* =========================================================
   SOFT SKILLS
========================================================= */

const softSkills = [
  "Problem Solving",
  "Analytical Thinking",
  "Communication",
  "Team Collaboration",
  "Time Management",
  "Adaptability",
];

/* =========================================================
   CERTIFICATIONS
========================================================= */

const certifications = [
  {
    title: "Data Science & Machine Learning",
    institute: "Techolas Technologies Pvt Ltd",
    year: "2024 – 2025",
  },
  {
    title: "Certified Finance Technician",
    institute: "BYNCO Academy",
    year: "2022 – 2023",
  },
];

/* =========================================================
   DAILY TOOLS
========================================================= */

const dailyTools = [
  "VS Code",
  "Jupyter Notebook",
  "Git",
  "GitHub",
  "Docker",
  "AWS",
  "Streamlit",
  "FastAPI",
  "Power BI",
  "Tableau",
  "MySQL",
  "Excel",
];

/* =========================================================
   SKILLS COMPONENT
========================================================= */

const Skills = () => {
  return (
    <section
      id="skills"
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
      <SkillsBackground />

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
        <SkillsHeader />

        <CategorySection />

        <TechnicalSection />

        <SkillGridSection />

        <SoftSkillsAndCertifications />

        <DailyTools />
      </div>
    </section>
  );
};

/* =========================================================
   BACKGROUND
========================================================= */

const SkillsBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0">

      {/* Emerald glow */}

      <div
        className="
          absolute
          -left-32
          top-[8%]
          h-64
          w-64
          rounded-full
          bg-emerald-500/10
          blur-[100px]
          sm:-left-48
          sm:h-[450px]
          sm:w-[450px]
          sm:blur-[120px]
        "
      />

      {/* Cyan glow */}

      <div
        className="
          absolute
          -right-32
          top-[40%]
          h-72
          w-72
          rounded-full
          bg-cyan-500/10
          blur-[100px]
          sm:-right-48
          sm:h-[500px]
          sm:w-[500px]
          sm:blur-[140px]
        "
      />

      {/* Grid */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.025]
          sm:opacity-[0.04]
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
  );
};

/* =========================================================
   HEADER
========================================================= */

const SkillsHeader = () => {
  return (
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
        <span
          className="
            h-1.5
            w-1.5
            shrink-0
            animate-pulse
            rounded-full
            bg-emerald-400
            sm:h-2
            sm:w-2
          "
        />

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
          My Skills
        </span>
      </div>

      <h2
        className="
          text-[clamp(2rem,9vw,3.75rem)]
          font-black
          leading-[1]
          tracking-tight
        "
      >
        Tools That Turn{" "}

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
          Data Into Impact
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
        A combination of data science, machine learning, analytics
        and full-stack development skills used to build practical,
        data-driven solutions.
      </p>
    </div>
  );
};

/* =========================================================
   CATEGORY SECTION
========================================================= */

const CategorySection = () => {
  return (
    <div
      className="
        mt-10
        grid
        gap-3
        min-[400px]:gap-4
        sm:mt-14
        sm:gap-6
        md:grid-cols-2
        lg:grid-cols-4
      "
    >
      {categories.map((category) => {
        const Icon = category.icon;

        return (
          <div
            key={category.title}
            className="
              group
              relative
              min-w-0
              overflow-hidden
              rounded-xl
              border
              border-white/10
              bg-white/[0.025]
              p-4
              backdrop-blur-xl
              transition
              duration-300
              hover:-translate-y-1
              hover:border-emerald-400/30
              hover:bg-emerald-400/[0.04]
              min-[400px]:rounded-2xl
              min-[400px]:p-5
              sm:p-6
              sm:hover:-translate-y-2
            "
          >
            <div
              className="
                absolute
                -right-10
                -top-10
                h-24
                w-24
                rounded-full
                bg-emerald-400/10
                blur-3xl
                transition
                group-hover:bg-cyan-400/20
              "
            />

            <div className="relative">

              <div
                className="
                  mb-4
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-emerald-400/20
                  bg-emerald-400/10
                  text-lg
                  text-emerald-300
                  transition
                  group-hover:scale-105
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

              <h3
                className="
                  text-base
                  font-bold
                  text-white
                  sm:text-lg
                "
              >
                {category.title}
              </h3>

              <p
                className="
                  mt-2
                  min-h-0
                  text-[10px]
                  leading-5
                  text-slate-500
                  min-[400px]:text-[11px]
                  sm:mt-3
                  sm:min-h-[84px]
                  sm:text-sm
                  sm:leading-6
                "
              >
                {category.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      max-w-full
                      rounded-md
                      border
                      border-white/10
                      bg-black/20
                      px-2
                      py-1
                      text-[8px]
                      leading-3
                      text-slate-300
                      min-[400px]:text-[9px]
                      sm:px-2.5
                      sm:text-[11px]
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

/* =========================================================
   TECHNICAL SKILLS
========================================================= */

const TechnicalSection = () => {
  return (
    <div className="mt-16 sm:mt-24">

      <div
        className="
          mb-7
          flex
          flex-col
          gap-3
          sm:mb-10
          sm:flex-row
          sm:items-end
          sm:justify-between
          sm:gap-5
        "
      >
        <div>
          <p
            className="
              mb-1.5
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-emerald-400
              sm:mb-2
              sm:text-xs
              sm:tracking-[0.25em]
            "
          >
            Technical Expertise
          </p>

          <h3
            className="
              text-[clamp(1.7rem,7vw,2.5rem)]
              font-bold
              leading-tight
            "
          >
            Technical Skills
          </h3>
        </div>

        <p
          className="
            max-w-md
            text-[10px]
            leading-5
            text-slate-500
            min-[400px]:text-xs
            sm:text-sm
            sm:leading-6
          "
        >
          Technologies and tools I work with across data science,
          development and analytics.
        </p>
      </div>

      <div
        className="
          grid
          gap-x-6
          gap-y-5
          sm:gap-x-10
          sm:gap-y-7
          md:grid-cols-2
        "
      >
        {technicalSkills.map((skill) => {
          const Icon = skill.icon;

          return (
            <div
              key={skill.name}
              className="group min-w-0"
            >
              <div
                className="
                  mb-2
                  flex
                  min-w-0
                  items-center
                  justify-between
                  gap-2
                  sm:mb-3
                "
              >
                <div className="flex min-w-0 items-center gap-2 sm:gap-3">
                  <span
                    className="
                      shrink-0
                      text-base
                      text-emerald-300
                      transition
                      group-hover:scale-110
                      sm:text-lg
                    "
                  >
                    <Icon />
                  </span>

                  <span
                    className="
                      min-w-0
                      truncate
                      text-[10px]
                      font-semibold
                      text-slate-200
                      min-[360px]:text-xs
                      sm:text-sm
                    "
                  >
                    {skill.name}
                  </span>
                </div>

                <span
                  className="
                    shrink-0
                    text-[8px]
                    text-slate-500
                    min-[360px]:text-[9px]
                    sm:text-xs
                  "
                >
                  {skill.level}
                </span>
              </div>

              <div
                className="
                  h-1.5
                  overflow-hidden
                  rounded-full
                  bg-white/5
                  sm:h-2
                "
              >
                <div
                  className="
                    h-full
                    rounded-full
                    bg-gradient-to-r
                    from-emerald-400
                    via-emerald-300
                    to-cyan-300
                    shadow-[0_0_12px_rgba(52,211,153,.25)]
                    transition-all
                    duration-700
                    group-hover:shadow-[0_0_20px_rgba(34,211,238,.35)]
                  "
                  style={{
                    width: skill.width,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* =========================================================
   SKILLS GRID
========================================================= */

const SkillGridSection = () => {
  return (
    <div className="mt-16 sm:mt-24">

      <div className="mb-7 text-center sm:mb-10">

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
          Technology Stack
        </p>

        <h3
          className="
            text-[clamp(1.7rem,7vw,2.5rem)]
            font-bold
          "
        >
          Skills By Category
        </h3>
      </div>

      <div
        className="
          grid
          grid-cols-2
          gap-2
          min-[400px]:gap-3
          sm:grid-cols-3
          sm:gap-4
          md:grid-cols-4
          lg:grid-cols-6
        "
      >
        {skillGrid.map((skill) => {
          const Icon = skill.icon;

          return (
            <div
              key={skill.name}
              className="
                group
                relative
                min-w-0
                overflow-hidden
                rounded-xl
                border
                border-white/10
                bg-white/[0.025]
                p-3
                text-center
                transition
                duration-300
                hover:-translate-y-1
                hover:border-emerald-400/30
                hover:bg-emerald-400/[0.05]
                min-[400px]:p-4
                sm:rounded-2xl
              "
            >
              <div
                className="
                  mb-2
                  flex
                  justify-center
                  text-xl
                  text-emerald-300
                  transition
                  duration-300
                  group-hover:scale-110
                  group-hover:text-cyan-300
                  sm:mb-3
                  sm:text-2xl
                "
              >
                <Icon />
              </div>

              <h4
                className="
                  truncate
                  text-[9px]
                  font-semibold
                  text-slate-200
                  min-[360px]:text-[10px]
                  sm:text-sm
                "
              >
                {skill.name}
              </h4>

              <p
                className="
                  mt-1
                  truncate
                  text-[6px]
                  uppercase
                  tracking-wider
                  text-slate-600
                  min-[360px]:text-[7px]
                  sm:text-[10px]
                "
              >
                {skill.category}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* =========================================================
   SOFT SKILLS + CERTIFICATIONS
========================================================= */

const SoftSkillsAndCertifications = () => {
  return (
    <div
      className="
        mt-16
        grid
        gap-4
        sm:mt-24
        sm:gap-8
        lg:grid-cols-2
      "
    >

      {/* SOFT SKILLS */}

      <div
        className="
          rounded-2xl
          border
          border-white/10
          bg-white/[0.025]
          p-4
          sm:rounded-3xl
          sm:p-9
        "
      >
        <div
          className="
            mb-5
            flex
            items-center
            gap-3
            sm:mb-7
            sm:gap-4
          "
        >
          <div
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-lg
              bg-cyan-400/10
              text-lg
              text-cyan-300
              sm:h-12
              sm:w-12
              sm:rounded-xl
              sm:text-xl
            "
          >
            <FaRocket />
          </div>

          <div>
            <p
              className="
                text-[8px]
                uppercase
                tracking-[0.18em]
                text-cyan-400
                sm:text-xs
                sm:tracking-[0.2em]
              "
            >
              Beyond Technical
            </p>

            <h3
              className="
                mt-0.5
                text-xl
                font-bold
                sm:mt-1
                sm:text-2xl
              "
            >
              Soft Skills
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
          {softSkills.map((skill) => (
            <div
              key={skill}
              className="
                flex
                min-w-0
                items-center
                gap-2
                rounded-lg
                border
                border-white/5
                bg-black/20
                px-3
                py-2.5
                sm:rounded-xl
                sm:px-4
                sm:py-3
              "
            >
              <FaCheckCircle
                className="
                  shrink-0
                  text-xs
                  text-emerald-400
                  sm:text-sm
                "
              />

              <span
                className="
                  truncate
                  text-[10px]
                  text-slate-300
                  sm:text-sm
                "
              >
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CERTIFICATIONS */}

      <div
        className="
          rounded-2xl
          border
          border-white/10
          bg-white/[0.025]
          p-4
          sm:rounded-3xl
          sm:p-9
        "
      >
        <div
          className="
            mb-5
            flex
            items-center
            gap-3
            sm:mb-7
            sm:gap-4
          "
        >
          <div
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-lg
              bg-emerald-400/10
              text-lg
              text-emerald-300
              sm:h-12
              sm:w-12
              sm:rounded-xl
              sm:text-xl
            "
          >
            <FaGraduationCap />
          </div>

          <div>
            <p
              className="
                text-[8px]
                uppercase
                tracking-[0.18em]
                text-emerald-400
                sm:text-xs
                sm:tracking-[0.2em]
              "
            >
              Credentials
            </p>

            <h3
              className="
                mt-0.5
                text-xl
                font-bold
                sm:mt-1
                sm:text-2xl
              "
            >
              Certifications
            </h3>
          </div>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {certifications.map((certificate) => (
            <div
              key={certificate.title}
              className="
                rounded-lg
                border
                border-white/10
                bg-black/20
                p-3
                transition
                hover:border-emerald-400/20
                sm:rounded-xl
                sm:p-4
              "
            >
              <div
                className="
                  flex
                  min-w-0
                  items-start
                  justify-between
                  gap-2
                "
              >
                <div className="min-w-0">

                  <h4
                    className="
                      break-words
                      text-[11px]
                      font-semibold
                      text-white
                      sm:text-sm
                    "
                  >
                    {certificate.title}
                  </h4>

                  <p
                    className="
                      mt-1
                      break-words
                      text-[9px]
                      text-slate-500
                      sm:text-xs
                    "
                  >
                    {certificate.institute}
                  </p>
                </div>

                <span
                  className="
                    shrink-0
                    rounded-full
                    border
                    border-emerald-400/10
                    bg-emerald-400/5
                    px-2
                    py-1
                    text-[7px]
                    text-emerald-300
                    sm:px-3
                    sm:text-[10px]
                  "
                >
                  {certificate.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* =========================================================
   DAILY TOOLS
========================================================= */

const DailyTools = () => {
  return (
    <div className="mt-16 sm:mt-24">

      <div className="mb-7 text-center sm:mb-10">

        <p
          className="
            mb-1.5
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.2em]
            text-emerald-400
            sm:mb-2
            sm:text-xs
            sm:tracking-[0.25em]
          "
        >
          My Workflow
        </p>

        <h3
          className="
            text-[clamp(1.7rem,7vw,2.5rem)]
            font-bold
          "
        >
          Tools I Use Daily
        </h3>
      </div>

      <div
        className="
          flex
          flex-wrap
          justify-center
          gap-1.5
          sm:gap-3
        "
      >
        {dailyTools.map((tool) => (
          <div
            key={tool}
            className="
              group
              flex
              items-center
              gap-1.5
              rounded-full
              border
              border-white/10
              bg-white/[0.025]
              px-2.5
              py-2
              transition
              hover:border-emerald-400/30
              hover:bg-emerald-400/5
              min-[360px]:px-3
              sm:gap-2
              sm:px-5
              sm:py-3
            "
          >
            <span
              className="
                h-1
                w-1
                shrink-0
                rounded-full
                bg-emerald-400
                transition
                group-hover:scale-150
                sm:h-1.5
                sm:w-1.5
              "
            />

            <span
              className="
                text-[8px]
                font-medium
                text-slate-300
                min-[360px]:text-[9px]
                sm:text-xs
              "
            >
              {tool}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

/* =========================================================
   EXPORT
========================================================= */

export default Skills;