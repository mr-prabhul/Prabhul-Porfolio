import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Contact = () => {
  const contactItems = [
    {
      icon: FaEnvelope,
      label: "EMAIL",
      value: "ichayanprabhul2724@gmail.com",
      href: "mailto:ichayanprabhul2724@gmail.com",
    },
    {
      icon: FaPhone,
      label: "PHONE",
      value: "6238820472",
      href: "tel:+916238820472",
    },
    {
      icon: FaMapMarkerAlt,
      label: "LOCATION",
      value: "Malappuram, Kerala, India",
      href: null,
    },
  ];

  return (
    <section
      id="contact"
      className="
        relative
        min-h-[620px]
        overflow-hidden
        bg-[#02090d]
        px-4
        py-20
        text-white
        sm:min-h-[680px]
        sm:px-6
        sm:py-24
        lg:px-8
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Main radial glow */}

        <div
          className="
            absolute
            left-1/2
            top-[38%]
            h-[420px]
            w-[700px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-cyan-500/[0.035]
            blur-[120px]
            sm:h-[500px]
            sm:w-[900px]
          "
        />

        {/* Green glow */}

        <div
          className="
            absolute
            -left-32
            bottom-10
            h-72
            w-72
            rounded-full
            bg-emerald-500/[0.045]
            blur-[120px]
          "
        />

        {/* Cyan glow */}

        <div
          className="
            absolute
            -right-32
            top-10
            h-72
            w-72
            rounded-full
            bg-cyan-500/[0.045]
            blur-[120px]
          "
        />

        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
            [background-size:55px_55px]
          "
        />

        {/* =====================================================
            DATA WAVE LINES
        ====================================================== */}

        <svg
          className="
            absolute
            bottom-0
            left-0
            h-[280px]
            w-full
            opacity-60
          "
          viewBox="0 0 1440 300"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="
              M-50 220
              C100 160 170 160 280 215
              C390 270 500 270 620 205
              C740 140 830 145 930 215
              C1030 285 1130 280 1240 205
              C1340 135 1400 135 1490 185
            "
            stroke="url(#wave1)"
            strokeWidth="1.2"
          />

          <path
            d="
              M-50 235
              C100 175 175 175 285 225
              C395 275 510 280 625 215
              C740 150 835 155 940 225
              C1045 295 1140 290 1250 215
              C1350 150 1410 145 1490 195
            "
            stroke="url(#wave2)"
            strokeWidth="0.8"
            opacity="0.55"
          />

          <path
            d="
              M-50 250
              C110 190 185 195 295 240
              C405 285 515 290 635 230
              C750 170 845 170 950 235
              C1055 300 1150 300 1260 230
              C1360 165 1420 160 1490 210
            "
            stroke="url(#wave3)"
            strokeWidth="0.6"
            opacity="0.4"
          />

          <path
            d="
              M-50 270
              C100 215 190 210 305 255
              C420 300 530 305 645 250
              C760 195 850 195 960 255
              C1070 315 1160 310 1275 250
              C1370 200 1430 185 1490 225
            "
            stroke="url(#wave4)"
            strokeWidth="0.5"
            opacity="0.3"
          />

          <defs>
            <linearGradient
              id="wave1"
              x1="0"
              y1="0"
              x2="1440"
              y2="0"
            >
              <stop offset="0%" stopColor="#00e5ff" stopOpacity="0" />
              <stop offset="25%" stopColor="#00e5ff" />
              <stop offset="50%" stopColor="#00ffc8" />
              <stop offset="75%" stopColor="#00e5ff" />
              <stop offset="100%" stopColor="#00e5ff" stopOpacity="0" />
            </linearGradient>

            <linearGradient
              id="wave2"
              x1="0"
              y1="0"
              x2="1440"
              y2="0"
            >
              <stop offset="0%" stopColor="#00ffc8" stopOpacity="0" />
              <stop offset="50%" stopColor="#00d9ff" />
              <stop offset="100%" stopColor="#00ffc8" stopOpacity="0" />
            </linearGradient>

            <linearGradient
              id="wave3"
              x1="0"
              y1="0"
              x2="1440"
              y2="0"
            >
              <stop offset="0%" stopColor="#00d9ff" stopOpacity="0" />
              <stop offset="50%" stopColor="#00ffc8" />
              <stop offset="100%" stopColor="#00d9ff" stopOpacity="0" />
            </linearGradient>

            <linearGradient
              id="wave4"
              x1="0"
              y1="0"
              x2="1440"
              y2="0"
            >
              <stop offset="0%" stopColor="#00ffc8" stopOpacity="0" />
              <stop offset="50%" stopColor="#00d9ff" />
              <stop offset="100%" stopColor="#00ffc8" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Small particles */}

        <span className="absolute left-[12%] top-[27%] h-1 w-1 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />

        <span className="absolute left-[25%] top-[19%] h-1 w-1 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />

        <span className="absolute right-[18%] top-[25%] h-1 w-1 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />

        <span className="absolute right-[30%] bottom-[25%] h-1 w-1 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />

        <span className="absolute left-[42%] bottom-[16%] h-1 w-1 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-6xl
          flex-col
          items-center
        "
      >
        {/* Section Label */}

        <div className="flex items-center gap-3">
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
              tracking-[0.35em]
              text-emerald-400
              sm:text-xs
            "
          >
            Contact
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
            text-center
            text-[2.5rem]
            font-bold
            leading-none
            tracking-[-0.04em]
            sm:mt-6
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
          "
        >
          <span className="text-white">
            Let’s{" "}
          </span>

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
            Connect
          </span>
        </h2>

        {/* Description */}

        <p
          className="
            mt-5
            max-w-2xl
            text-center
            text-sm
            leading-6
            text-slate-400
            sm:mt-6
            sm:text-base
            sm:leading-7
          "
        >
          Have a project, opportunity, or professional
          collaboration in mind? I’d be happy to hear from you.
        </p>

        {/* =====================================================
            CONTACT STRIP
        ====================================================== */}

        <div
          className="
            mt-12
            w-full
            max-w-5xl
            rounded-2xl
            border
            border-emerald-400/20
            bg-white/[0.025]
            p-3
            shadow-[0_0_50px_rgba(16,185,129,0.04)]
            backdrop-blur-sm
            sm:mt-14
            sm:p-4
            lg:rounded-full
          "
        >
          <div
            className="
              grid
              grid-cols-1
              divide-y
              divide-white/[0.08]
              lg:grid-cols-3
              lg:divide-x
              lg:divide-y-0
            "
          >
            {contactItems.map((item) => {
              const Icon = item.icon;

              const content = (
                <div
                  className="
                    group
                    flex
                    min-w-0
                    items-center
                    gap-3
                    px-3
                    py-4
                    transition-all
                    duration-300
                    sm:px-5
                    lg:py-3
                  "
                >
                  {/* Icon */}

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-cyan-400/20
                      bg-cyan-400/[0.04]
                      text-cyan-400
                      transition-all
                      duration-300
                      group-hover:border-cyan-400/40
                      group-hover:bg-cyan-400/10
                      group-hover:shadow-[0_0_20px_rgba(34,211,238,0.12)]
                      lg:h-9
                      lg:w-9
                    "
                  >
                    <Icon size={15} />
                  </div>

                  {/* Text */}

                  <div className="min-w-0 text-left">
                    <p
                      className="
                        text-[9px]
                        font-semibold
                        tracking-[0.2em]
                        text-emerald-400
                      "
                    >
                      {item.label}
                    </p>

                    <p
                      className="
                        mt-1
                        truncate
                        text-xs
                        font-medium
                        text-slate-200
                        sm:text-sm
                      "
                    >
                      {item.value}
                    </p>
                  </div>
                </div>
              );

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="block min-w-0"
                >
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            SOCIAL
        ====================================================== */}

        <div className="mt-10 flex flex-col items-center sm:mt-12">
          <div className="flex items-center gap-3">
            <span
              className="
                h-px
                w-8
                bg-gradient-to-r
                from-transparent
                to-emerald-400/70
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
              Find Me Online
            </span>

            <span
              className="
                h-px
                w-8
                bg-gradient-to-l
                from-transparent
                to-emerald-400/70
                sm:w-12
              "
            />
          </div>

          <div className="mt-5 flex items-center gap-3">
            {/* LinkedIn */}

            <a
              href="https://www.linkedin.com/in/prabhulps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="
                group
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                border
                border-cyan-400/25
                bg-cyan-400/[0.03]
                text-cyan-400
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-cyan-400/60
                hover:bg-cyan-400/10
                hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]
                sm:h-12
                sm:w-12
              "
            >
              <FaLinkedin
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              />
            </a>

            {/* GitHub */}

            <a
              href="https://github.com/mr-prabhul"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="
                group
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                border
                border-emerald-400/25
                bg-emerald-400/[0.03]
                text-emerald-400
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-emerald-400/60
                hover:bg-emerald-400/10
                hover:shadow-[0_0_25px_rgba(52,211,153,0.15)]
                sm:h-12
                sm:w-12
              "
            >
              <FaGithub
                size={19}
                className="
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;