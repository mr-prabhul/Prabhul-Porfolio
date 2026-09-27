import {
  FiCpu,
  FiTrendingUp,
  FiDatabase,
} from "react-icons/fi";

/* =========================================================
   EDUCATION DATA
========================================================= */

const education = [
  {
    title: "Data Science & Machine Learning",
    institute: "Techolas Technologies Pvt Ltd",
    period: "2024 – 2025",
    icon: FiCpu,
  },

  {
    title: "Certified Finance Technician",
    institute: "BYNCO Academy",
    period: "2022 – 2023",
    icon: FiTrendingUp,
  },

  {
    title: "B.Com in Finance",
    institute: "Sahya Arts and Science College",
    period: "2019 – 2022",
    icon: FiDatabase,
  },
];

/* =========================================================
   EDUCATION
========================================================= */

const Education = () => {
  return (
    <section
      id="education"
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
              border-cyan-400/20
              bg-cyan-400/5
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
                bg-cyan-400
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
                text-cyan-300
                sm:text-xs
                sm:tracking-[0.25em]
              "
            >
              Academic Background
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
              Education
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
            My academic and professional learning journey across
            data science, finance and technology.
          </p>
        </div>

        {/* ===================================================
            EDUCATION CARDS
        =================================================== */}

        <div
          className="
            mx-auto
            mt-10
            grid
            max-w-5xl
            gap-3
            sm:mt-14
            sm:gap-5
            lg:mt-16
            lg:grid-cols-3
          "
        >

          {education.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  group
                  min-w-0
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.025]
                  p-4
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:border-cyan-400/25
                  sm:rounded-2xl
                  sm:p-6
                "
              >

                {/* =================================================
                    TOP ROW
                ================================================= */}

                <div className="flex items-start justify-between gap-2">

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
                      bg-cyan-400/10
                      text-base
                      text-cyan-300
                      transition
                      duration-300
                      group-hover:bg-cyan-400/20
                      sm:h-11
                      sm:w-11
                      sm:rounded-xl
                      sm:text-lg
                    "
                  >
                    <Icon />
                  </div>

                  {/* Period */}

                  <span
                    className="
                      shrink-0
                      rounded-full
                      border
                      border-white/10
                      bg-black/20
                      px-2
                      py-1
                      text-[7px]
                      text-slate-500
                      sm:px-3
                      sm:text-[10px]
                    "
                  >
                    {item.period}
                  </span>

                </div>

                {/* =================================================
                    TITLE
                ================================================= */}

                <h3
                  className="
                    mt-4
                    break-words
                    text-sm
                    font-bold
                    leading-5
                    text-white
                    sm:mt-6
                    sm:text-lg
                    sm:leading-6
                  "
                >
                  {item.title}
                </h3>

                {/* =================================================
                    INSTITUTE
                ================================================= */}

                <p
                  className="
                    mt-1.5
                    break-words
                    text-[10px]
                    leading-4
                    text-slate-500
                    sm:mt-2
                    sm:text-sm
                    sm:leading-6
                  "
                >
                  {item.institute}
                </p>

                {/* =================================================
                    BOTTOM LINE
                ================================================= */}

                <div
                  className="
                    mt-4
                    h-px
                    w-full
                    bg-gradient-to-r
                    from-cyan-400/30
                    via-emerald-400/10
                    to-transparent
                    sm:mt-6
                  "
                />

                <p
                  className="
                    mt-3
                    text-[8px]
                    uppercase
                    tracking-[0.15em]
                    text-slate-600
                    sm:text-[9px]
                  "
                >
                  Academic Achievement
                </p>

              </div>
            );
          })}

        </div>

        {/* ===================================================
            EDUCATION SUMMARY
        =================================================== */}

        <div
          className="
            mx-auto
            mt-10
            max-w-5xl
            rounded-2xl
            border
            border-cyan-400/15
            bg-cyan-400/[0.025]
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
                bg-cyan-400/10
                text-cyan-300
                sm:h-11
                sm:w-11
                sm:rounded-xl
              "
            >
              <FiCpu />
            </div>

            {/* Content */}

            <div className="min-w-0">

              <p
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-cyan-400
                  sm:text-xs
                "
              >
                Continuous Learning
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
                Continuously expanding my knowledge across data
                science, machine learning, software development
                and modern technologies.
              </p>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;