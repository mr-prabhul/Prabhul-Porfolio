import {
  FiCode,
  FiBarChart2,
  FiGlobe,
  FiDatabase,
  FiMapPin,
  FiBriefcase,
} from "react-icons/fi";

/* =========================================================
   EXPERIENCE DATA
========================================================= */

const experiences = [
  {
    year: "05/2026 – Present",
    role: "Junior Python Full Stack Developer",
    company: "Druv360°",
    location: "Ernakulam, Kerala",
    description:
      "Working on scalable Python applications, frontend interfaces, database integration, REST APIs, debugging and reusable software components.",
    icon: FiCode,
  },

  {
    year: "2024 – 2025",
    role: "Data Analyst / Data Science Associate",
    company: "Techolas Technologies Pvt Ltd",
    location: "Calicut, Kerala",
    description:
      "Worked on data analysis, machine learning, exploratory data analysis, feature engineering, model evaluation, Streamlit deployment and Power BI dashboards.",
    icon: FiBarChart2,
  },

  {
    year: "2024",
    role: "Web Designer & Developer Intern",
    company: "Zonemac Solutions",
    location: "Calicut, Kerala",
    description:
      "Worked with HTML, CSS, JavaScript, PHP, XAMPP and MySQL while developing web interfaces and improving UI/UX.",
    icon: FiGlobe,
  },

  {
    year: "2023 – 2024",
    role: "Junior Accountant",
    company: "Team Thai Aghin Road Ways",
    location: "Maharashtra",
    description:
      "Worked in accounting operations and financial data management.",
    icon: FiDatabase,
  },
];

/* =========================================================
   EXPERIENCE
========================================================= */

const Experience = () => {
  return (
    <section
      id="experience"
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
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Green Glow */}
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

        {/* Cyan Glow */}
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

      {/* =====================================================
          CONTAINER
      ===================================================== */}

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

        {/* ===================================================
            SECTION HEADING
        =================================================== */}

        <div className="mx-auto w-full max-w-3xl text-center">

          {/* Label */}

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
              Career Journey
            </span>
          </div>

          {/* Heading */}

          <h2
            className="
              text-[clamp(2rem,9vw,3.75rem)]
              font-black
              leading-none
              tracking-tight
            "
          >
            My{" "}

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
              Experience
            </span>
          </h2>

          {/* Description */}

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
            My professional journey across Python development,
            data science, web development and business operations.
          </p>
        </div>

        {/* ===================================================
            EXPERIENCE TIMELINE
        =================================================== */}

        <div
          className="
            relative
            mx-auto
            mt-10
            max-w-5xl
            sm:mt-14
            lg:mt-16
          "
        >

          {/* Timeline Line */}

          <div
            className="
              absolute
              left-[15px]
              top-2
              hidden
              h-[calc(100%-20px)]
              w-px
              bg-gradient-to-b
              from-emerald-400/60
              via-cyan-400/30
              to-transparent
              sm:left-[19px]
              md:block
            "
          />

          {/* Experience Items */}

          <div className="space-y-4 sm:space-y-8">

            {experiences.map((experience) => {
              const Icon = experience.icon;

              return (
                <div
                  key={`${experience.company}-${experience.year}`}
                  className="
                    relative
                    grid
                    gap-3
                    md:grid-cols-[40px_1fr]
                    md:gap-6
                  "
                >

                  {/* =================================================
                      TIMELINE ICON
                  ================================================= */}

                  <div
                    className="
                      relative
                      z-10
                      hidden
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-emerald-400/30
                      bg-[#061217]
                      text-emerald-300
                      md:flex
                    "
                  >
                    <Icon />
                  </div>

                  {/* =================================================
                      EXPERIENCE CARD
                  ================================================= */}

                  <div
                    className="
                      min-w-0
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.025]
                      p-4
                      transition
                      duration-300
                      hover:border-emerald-400/25
                      sm:rounded-2xl
                      sm:p-6
                    "
                  >

                    {/* TOP CONTENT */}

                    <div
                      className="
                        flex
                        min-w-0
                        flex-col
                        gap-3
                        sm:flex-row
                        sm:justify-between
                      "
                    >

                      {/* ROLE + COMPANY */}

                      <div className="min-w-0">

                        <p
                          className="
                            text-[9px]
                            font-semibold
                            uppercase
                            tracking-wider
                            text-emerald-400
                            sm:text-xs
                          "
                        >
                          {experience.year}
                        </p>

                        <h3
                          className="
                            mt-1.5
                            break-words
                            text-sm
                            font-bold
                            text-white
                            sm:mt-2
                            sm:text-xl
                          "
                        >
                          {experience.role}
                        </h3>

                        <p
                          className="
                            mt-1
                            text-[10px]
                            font-medium
                            text-cyan-300
                            sm:text-sm
                          "
                        >
                          {experience.company}
                        </p>

                      </div>

                      {/* LOCATION */}

                     <div
                        className="
                            flex
                            h-fit
                            w-fit
                            shrink-0
                            self-start
                            items-center
                            gap-1.5
                            rounded-lg
                            border
                            border-white/10
                            bg-black/20
                            px-2.5
                            py-2
                            text-[8px]
                            text-slate-400
                            sm:px-3
                            sm:py-2.5
                            sm:text-xs
                        "
                        >
                        <FiMapPin className="shrink-0 text-emerald-400" />

                        <span className="whitespace-nowrap">
                            {experience.location}
                        </span>
                        </div>

                    </div>

                    {/* DESCRIPTION */}

                    <p
                      className="
                        mt-3
                        text-[10px]
                        leading-5
                        text-slate-500
                        sm:mt-5
                        sm:text-sm
                        sm:leading-7
                      "
                    >
                      {experience.description}
                    </p>

                  </div>
                </div>
              );
            })}

          </div>
        </div>

        {/* ===================================================
            PROFESSIONAL JOURNEY SUMMARY
        =================================================== */}

        <div
          className="
            mx-auto
            mt-10
            max-w-5xl
            rounded-2xl
            border
            border-emerald-400/15
            bg-emerald-400/[0.025]
            p-4
            sm:mt-14
            sm:p-6
          "
        >

          <div className="flex items-start gap-3">

            {/* Icon */}

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
                text-emerald-300
                sm:h-11
                sm:w-11
                sm:rounded-xl
              "
            >
              <FiBriefcase />
            </div>

            {/* Content */}

            <div className="min-w-0">

              <p
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-emerald-400
                  sm:text-xs
                "
              >
                Professional Journey
              </p>

              <p
                className="
                  mt-1.5
                  text-[10px]
                  leading-5
                  text-slate-500
                  sm:text-sm
                  sm:leading-6
                "
              >
                Combining experience in data science, Python
                development, web technologies and business operations
                to build practical and data-driven solutions.
              </p>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;