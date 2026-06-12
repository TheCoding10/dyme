import { useEffect, useState } from "react";

const navItems = [
  { id: "home", label: "Home" },
  {
    id: "products",
    label: "About Us",
    children: [
      { id: "directors", label: "Directors", href: "/directors" },
      { id: "staff", label: "Staff", href: "/staff" },
    ],
  },
  {
    id: "system",
    label: "Projects",
    children: [
      {
        id: "main-street-entrepreneur",
        label: "Main Street Entrepreneur",
        href: "/projects/main-street-entrepreneur",
      },
      { id: "re-entry", label: "Re-Entry", href: "/projects/re-entry" },
      { id: "global", label: "Global", href: "/projects/global" },
    ],
  },
  { id: "stories", label: "Research", href: "/research" },
];

const features = [
  {
    id: "01",
    title: "Pulse Forecasting",
    description:
      "See runway, exposure, and upside in one rolling model built for fast operating reviews.",
  },
  {
    id: "02",
    title: "Approval Studio",
    description:
      "Route spend requests with policy logic, owner context, and instant escalation when timing matters.",
  },
  {
    id: "03",
    title: "Campaign Ledger",
    description:
      "Connect growth spend directly to outcomes so finance and acquisition work from the same scoreboard.",
  },
];

const layers = [
  {
    name: "Layer A",
    title: "Visibility",
    description:
      "Unified balances, burn curves, and performance signals across every active channel.",
  },
  {
    name: "Layer B",
    title: "Decisioning",
    description:
      "Rules, alerts, and threshold triggers that tell teams when to pause, push, or protect cash.",
  },
  {
    name: "Layer C",
    title: "Execution",
    description:
      "Approvals, notes, owner handoffs, and timeline history so every move stays accountable.",
  },
];

const methodologyLabels = [
  { number: "09", text: "Effective Selling", className: "label-selling" },
  { number: "10", text: "Listening to People", className: "label-listening" },
  { number: "05", text: "So, what?", className: "label-sowhat" },
  { number: "04", text: "Using your Network", className: "label-network" },
  { number: "01", text: "Idea", className: "label-idea" },
  { number: "02", text: "Systemic Thinking", className: "label-thinking" },
  { number: "03", text: "KSA", className: "label-ksa" },
  { number: "06", text: "Initial Customers", className: "label-customers" },
  { number: "07", text: "Channel", className: "label-channel" },
  { number: "08", text: "Entrepreneurial Marketing", className: "label-marketing" },
];

const modalData = {
  "01": {
    title: "Idea",
    description: "Every entrepreneurial journey begins with identifying a meaningful problem. Strong ideas are usually rooted in real frustrations, inefficiencies, or unmet needs—not random inspiration. The best founders observe the world carefully and ask: \"What problem exists that people genuinely want solved?\"",
    whatDymeDoes: "DYME teaches students how to transform observations into validated opportunities. Through evidence-based exercises, learners analyze real-world problems, evaluate market demand, and develop ideas grounded in practical value rather than assumptions.",
    whyItMatters: "Most startups fail because they create products nobody truly needs. Focusing on problem discovery first dramatically increases the likelihood of building something valuable and sustainable.",
    keyQuestions: [
      "What problem exists?",
      "Who experiences this problem?",
      "How painful or expensive is the issue?",
      "Are current solutions ineffective?",
    ],
    example: "Students struggle to stay engaged in STEM education → create an interactive learning platform like MemoLearning.",
  },
  "02": {
    title: "Systemic Thinking",
    description: "Entrepreneurship is not isolated. Every business exists inside interconnected systems involving customers, markets, competitors, technology, regulations, economics, and culture. Systemic thinking helps entrepreneurs understand how all these parts influence each other.",
    whatDymeDoes: "DYME trains students to map relationships between industries, stakeholders, incentives, and changing market conditions. Students learn how one change in a system can create opportunities or risks elsewhere.",
    whyItMatters: "Entrepreneurs who understand systems can anticipate market shifts, identify leverage points, and make stronger strategic decisions.",
    keyQuestions: [
      "What larger systems affect this problem?",
      "What trends influence the market?",
      "Who benefits or loses from changes?",
      "What external forces shape demand?",
    ],
    example: "AI advancements affect education, hiring, productivity, and business operations simultaneously. A company teaching AI literacy benefits from these growing systemic shifts.",
  },
  "03": {
    title: "KSA",
    description: "KSA stands for Knowledge, Skills, and Abilities. Successful entrepreneurs must develop technical understanding, practical execution skills, and the ability to adapt under uncertainty.",
    whatDymeDoes: "DYME helps students assess their strengths and identify capability gaps. Students build entrepreneurial competencies through projects, collaboration, experimentation, and real-world application.",
    whyItMatters: "A strong idea alone is not enough. Execution requires leadership, communication, technical knowledge, resilience, and decision-making abilities.",
    keyQuestions: [
      "What do I know?",
      "What skills must I improve?",
      "What abilities are necessary to execute this idea?",
      "Who can complement my weaknesses?",
    ],
    example: "A founder building an educational platform may need programming skills, marketing knowledge, communication abilities, and leadership experience.",
  },
  "04": {
    title: "Using Your Network",
    description: "Entrepreneurship grows through relationships. Networks provide mentorship, partnerships, opportunities, feedback, resources, and access to customers.",
    whatDymeDoes: "DYME encourages students to actively build professional relationships through collaboration, workshops, events, and entrepreneurial communities.",
    whyItMatters: "Many opportunities come from who you know and how effectively you communicate your vision. Strong networks accelerate growth and reduce barriers.",
    keyQuestions: [
      "Who can mentor or advise me?",
      "What communities align with my goals?",
      "Who are potential collaborators or customers?",
      "How can I create mutual value?",
    ],
    example: "A student entrepreneur connects with a professor experienced in AI research, leading to a collaborative startup project and internship opportunities.",
  },
  "05": {
    title: "So, What?",
    description: "Entrepreneurs must clearly explain why their idea matters. This stage focuses on identifying impact, significance, differentiation, and value creation.",
    whatDymeDoes: "DYME teaches students to critically evaluate whether their ideas create meaningful outcomes and solve problems worth solving.",
    whyItMatters: "Investors, customers, and partners need to understand why your solution matters and why it should exist over alternatives.",
    keyQuestions: [
      "Why is this important?",
      "What impact does this create?",
      "Why would people care?",
      "What makes this different?",
    ],
    example: "MemoLearning matters because it makes difficult STEM education more engaging, accessible, and interactive for modern learners.",
  },
  "06": {
    title: "Initial Customers",
    description: "Entrepreneurs should test ideas with real people as early as possible. Initial customers provide feedback, validation, and insight into whether the solution truly solves the problem.",
    whatDymeDoes: "DYME teaches students how to conduct interviews, gather feedback, analyze user behavior, and iterate based on real-world responses.",
    whyItMatters: "Customer feedback prevents entrepreneurs from building products based solely on assumptions.",
    keyQuestions: [
      "Who are the first users?",
      "What feedback are they giving?",
      "What features matter most?",
      "Would they pay for this solution?",
    ],
    example: "A student releases an early version of an educational app to classmates and improves the platform based on user feedback and engagement metrics.",
  },
  "07": {
    title: "Channel",
    description: "Channels are the methods businesses use to reach customers. This includes social media, websites, partnerships, email marketing, events, communities, and distribution systems.",
    whatDymeDoes: "DYME helps students explore customer acquisition strategies and understand how distribution affects business growth.",
    whyItMatters: "Even excellent products fail if customers cannot easily discover or access them.",
    keyQuestions: [
      "Where are customers spending attention?",
      "How will users find the product?",
      "Which channels scale efficiently?",
      "What communication strategy works best?",
    ],
    example: "MemoLearning grows through TikTok educational videos, Instagram content, partnerships with schools, and community engagement.",
  },
  "08": {
    title: "Entrepreneurial Marketing",
    description: "Entrepreneurial marketing focuses on communicating value creatively and efficiently, especially with limited resources.",
    whatDymeDoes: "DYME teaches branding, storytelling, digital strategy, customer psychology, and growth-oriented communication techniques.",
    whyItMatters: "Marketing is how entrepreneurs capture attention, build trust, and differentiate themselves in competitive environments.",
    keyQuestions: [
      "What story are we telling?",
      "Why should customers trust us?",
      "How do we stand out?",
      "What emotional connection are we creating?",
    ],
    example: "An entrepreneur creates engaging STEM videos explaining difficult concepts visually, building trust and audience loyalty before launching a platform.",
  },
  "09": {
    title: "Effective Selling",
    description: "Selling is the process of communicating value and persuading others to take action. Entrepreneurs constantly sell ideas—to customers, investors, employees, and partners.",
    whatDymeDoes: "DYME teaches students persuasive communication, pitching strategies, negotiation, customer interaction, and confidence-building.",
    whyItMatters: "Without effective selling, even valuable products struggle to gain traction or financial sustainability.",
    keyQuestions: [
      "What problem does this solve?",
      "Why now?",
      "Why this solution over alternatives?",
      "How do we communicate value clearly?",
    ],
    example: "A founder pitches their educational platform to schools by demonstrating improved student engagement and measurable learning outcomes.",
  },
  "10": {
    title: "Listening to People",
    description: "The best entrepreneurs actively listen. Customer feedback, criticism, employee ideas, and market reactions provide essential information for growth and innovation.",
    whatDymeDoes: "DYME encourages reflective learning, active listening, empathy, and evidence-based adaptation.",
    whyItMatters: "Businesses evolve through feedback. Entrepreneurs who listen carefully improve faster and avoid costly mistakes.",
    keyQuestions: [
      "What are customers repeatedly saying?",
      "What frustrations are appearing?",
      "What insights are being overlooked?",
      "How should the business adapt?",
    ],
    example: "Users request shorter, more engaging lessons in an educational platform. The company adapts its content structure and improves retention rates.",
  },
};

const stepOrder = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"];


const partnerSchools = [
  { name: "Clark University", lat: 42.2523029, lng: -71.8326127 },
  { name: "Keiser University", lat: 26.186, lng: -80.1678 },
  { name: "Autonomous University of Baja California", lat: 32.6308, lng: -115.4523 },
  { name: "Universidad Autónoma del Estado de Morelos", lat: 18.9846, lng: -99.2359 },
  { name: "Entrepreneurs Institute IYEM Yucateco", lat: 21.023, lng: -89.6292 },
  { name: "Conamype", lat: 13.6886, lng: -89.2445 },
  { name: "Universidad Valle del Momboy", lat: 9.317, lng: -70.6043 },
  { name: "Jardín Botánico de Bogotá", lat: 4.66788, lng: -74.099779 },
  { name: "Deusto University", lat: 43.271, lng: -2.9382 },
  { name: "IAE Montpellier", lat: 43.63225, lng: 3.86667 },
  { name: "Stawa University", lat: 2.0469, lng: 45.3182 },
  { name: "University of Haripur", lat: 33.9979, lng: 72.9248 },
  { name: "Nepal Innovation Technology and Entrepreneurship Center", lat: 27.6194, lng: 84.0279 },
  { name: "University Malaysia Kelantan (UMK Kampus Kota)", lat: 6.1662, lng: 102.2933 },
  {
    name: "South Asian Entrepreneurship & Education Foundation (SAEJ)",
    lat: 28.6139,
    lng: 77.2090,
    description: "SAEJ supports entrepreneurship, education, innovation, and leadership development through collaborative programs and global engagement initiatives.",
  },
];

const heroSlides = [
  {
    src: "/assets/hero-speaker.png",
    alt: "Speaker presenting during a Dyme workshop",
  },
  {
    src: "/assets/hero-slide-group.jpg",
    alt: "Dyme team standing beside a Dobson Institute banner",
  },
  {
    src: "/assets/hero-slide-thinking.jpg",
    alt: "Facilitator listening during a Dyme classroom discussion",
  },
  {
    src: "/assets/hero-slide-presentation.jpg",
    alt: "Dyme workshop presentation in front of a classroom screen",
  },
  {
    src: "/assets/hero-slide-classroom.jpg",
    alt: "Entrepreneurship classroom session led by Dyme",
  },
];

const teamPages = {
  "/directors": {
    title: "Directors",
    eyebrow: "About Us",
    summary:
      "Meet the academic and program directors shaping the Dyme methodology across institutions and regions.",
    cards: [
      {
        name: "Dr. Lena Hart",
        role: "Academic Director",
        description:
          "Leads curriculum strategy and ensures Dyme programs stay rigorous, practical, and adaptable for faculty teams.",
      },
      {
        name: "Marcus Vale",
        role: "Program Director",
        description:
          "Oversees partner delivery frameworks and aligns each cohort with clear milestones, facilitation standards, and outcomes.",
      },
      {
        name: "Nadia Brooks",
        role: "Global Partnerships Director",
        description:
          "Builds institutional partnerships and translates the Dyme model for cross-border entrepreneurship ecosystems.",
      },
    ],
  },
  "/staff": {
    title: "Staff",
    eyebrow: "About Us",
    summary:
      "See the operators and facilitators who turn the Dyme model into live programming for every cohort.",
    cards: [
      {
        name: "Avery Quinn",
        role: "Facilitator Lead",
        description:
          "Supports facilitator readiness, workshop quality, and consistent classroom delivery across partner sites.",
      },
      {
        name: "Jordan Ellis",
        role: "Operations Manager",
        description:
          "Coordinates launch logistics, cohort scheduling, and reporting rhythms so institutions have a clean operating cadence.",
      },
      {
        name: "Priya Shah",
        role: "Partner Success Manager",
        description:
          "Works with universities and program teams on onboarding, execution support, and continuous improvement.",
      },
    ],
  },
};

const projectPages = {
  "/projects/main-street-entrepreneur": {
    title: "Main Street Entrepreneur",
    eyebrow: "Projects",
    summary:
      "A venture-building program for community-rooted founders creating practical businesses with local impact.",
    cards: [
      {
        name: "Neighborhood Launch",
        role: "Program Focus",
        description:
          "Supports founders developing service, retail, and place-based ventures through customer discovery and launch planning.",
      },
      {
        name: "Revenue Readiness",
        role: "Delivery Model",
        description:
          "Combines coaching, applied workshops, and simple operating tools to move participants toward early revenue.",
      },
      {
        name: "Community Partners",
        role: "Institutional Fit",
        description:
          "Works well with local colleges, chambers, and nonprofit partners focused on economic mobility and neighborhood growth.",
      },
    ],
  },
  "/projects/re-entry": {
    title: "Re-Entry",
    eyebrow: "Projects",
    summary:
      "An entrepreneurship pathway designed to support reintegration through structure, ownership, and economic opportunity.",
    cards: [
      {
        name: "Business Foundations",
        role: "Program Focus",
        description:
          "Introduces practical venture fundamentals for participants building stability, confidence, and long-term plans.",
      },
      {
        name: "Coaching Support",
        role: "Delivery Model",
        description:
          "Pairs structured learning with mentoring, accountability, and implementation support across the program cycle.",
      },
      {
        name: "Transition Pathways",
        role: "Institutional Fit",
        description:
          "Fits re-entry organizations, workforce partners, and education programs seeking stronger economic outcomes after release.",
      },
    ],
  },
  "/projects/global": {
    title: "Global",
    eyebrow: "Projects",
    summary:
      "A flexible entrepreneurship education model adapted for international institutions, ecosystems, and regional delivery partners.",
    cards: [
      {
        name: "Localized Delivery",
        role: "Program Focus",
        description:
          "Adapts the core methodology to local market conditions, learner needs, and partner contexts across countries.",
      },
      {
        name: "Partner Alignment",
        role: "Delivery Model",
        description:
          "Coordinates faculty, facilitators, and ecosystem partners around a shared framework for implementation and measurement.",
      },
      {
        name: "Cross-Border Scale",
        role: "Institutional Fit",
        description:
          "Designed for universities, accelerators, and NGOs that need a repeatable entrepreneurship model across multiple regions.",
      },
    ],
  },
};

const researchPages = {
  "/research": {
    title: "Research",
    eyebrow: "Research",
    summary:
      "Explore Dyme's work on entrepreneurship pedagogy, evidence-based program design, and learning outcomes across institutions.",
    cards: [
      {
        name: "Pedagogy Studies",
        role: "Research Focus",
        description:
          "We examine which teaching approaches most effectively develop entrepreneurial thinking, action, and long-term learner confidence.",
      },
      {
        name: "Program Evaluation",
        role: "Applied Measurement",
        description:
          "Dyme studies the impact of curricular and co-curricular interventions to help partners improve design, delivery, and outcomes.",
      },
      {
        name: "Institutional Insights",
        role: "Partner Learning",
        description:
          "We translate findings into practical guidance for faculty teams, administrators, and entrepreneurship educators building stronger programs.",
      },
    ],
  },
};

function getCurrentPath() {
  if (typeof window === "undefined") {
    return "/";
  }

  return window.location.pathname || "/";
}

function resolveActiveSection(pathname) {
  if (pathname !== "/") {
    return "";
  }

  if (typeof window === "undefined") {
    return "home";
  }

  const hash = window.location.hash.replace("#", "");
  return hash || "home";
}

function Header({ activeSection, onHomeNavigate, onDropdownNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const mediaQuery = window.matchMedia("(min-width: 981px)");
    const handleDesktop = (event) => {
      if (event.matches) {
        setMenuOpen(false);
        setOpenSubmenu("");
      }
    };

    handleDesktop(mediaQuery);
    mediaQuery.addEventListener("change", handleDesktop);

    return () => mediaQuery.removeEventListener("change", handleDesktop);
  }, []);

  const closeMenus = () => {
    setMenuOpen(false);
    setOpenSubmenu("");
  };

  const isMobileViewport =
    typeof window !== "undefined" && window.matchMedia("(max-width: 980px)").matches;

  return (
    <header className="topbar">
      <a className="brand" href="/" onClick={onHomeNavigate("home")}>
        <img className="brand-lockup" src="/assets/dyme-header-logo.png" alt="Dyme logo" />
      </a>
      <button
        className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
        type="button"
        aria-expanded={menuOpen}
        aria-controls="site-navigation"
        aria-label="Toggle navigation"
        onClick={() => setMenuOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
        </button>
        <nav id="site-navigation" className={`nav ${menuOpen ? "is-open" : ""}`}>
          <a
            className="button button-gold topbar-cta mobile-topbar-cta"
            href="/partner"
            onClick={(event) => {
              onDropdownNavigate({ href: "/partner" })(event);
              closeMenus();
            }}
          >
            Partner With Dyme
          </a>
          {navItems.map((item) => (
            <div
              key={item.id}
            className={`nav-item ${openSubmenu === item.id ? "is-open" : ""}`}
          >
            <div className="nav-row">
                <a
                  className={activeSection === item.id ? "is-active" : ""}
                  href={item.href || "#"}
                  onClick={(event) => {
                    if (item.href) {
                      onDropdownNavigate(item)(event);
                      closeMenus();
                      return;
                    }

                    event.preventDefault();
                  }}
                >
                <span>{item.label}</span>
              </a>
              {item.children?.length ? (
                <button
                  className={`nav-submenu-toggle ${
                    openSubmenu === item.id ? "is-open" : ""
                  }`}
                  type="button"
                  aria-expanded={openSubmenu === item.id}
                  aria-label={`Toggle ${item.label} submenu`}
                  onClick={() => {
                    if (!isMobileViewport) {
                      return;
                    }

                    setOpenSubmenu((current) => (current === item.id ? "" : item.id));
                  }}
                >
                  <span />
                </button>
              ) : null}
            </div>
            {item.children?.length ? (
              <div className="nav-dropdown">
                {item.children.map((child) => (
                  <a
                    key={child.id}
                    className="nav-dropdown-link"
                    href={child.href || `/#${child.id}`}
                    onClick={(event) => {
                      onDropdownNavigate(child)(event);
                      closeMenus();
                    }}
                  >
                    {child.label}
                  </a>
                ))}
              </div>
              ) : null}
            </div>
          ))}
        </nav>
      <a
        className="button button-gold topbar-cta"
        href="/partner"
        onClick={onDropdownNavigate({ href: "/partner" })}
      >
        Partner With Dyme
      </a>
    </header>
  );
}

function HeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="hero-photo hero-carousel">
      {heroSlides.map((slide, index) => (
        <img
          key={slide.src}
          className={`hero-slide ${index === activeSlide ? "is-active" : ""}`}
          src={slide.src}
          alt={slide.alt}
        />
      ))}
      <div className="hero-carousel-dots" aria-hidden="true">
        {heroSlides.map((slide, index) => (
          <span key={slide.src} className={index === activeSlide ? "is-active" : ""} />
        ))}
      </div>
    </div>
  );
}

const brochures = [
  {
    id: "ee",
    badge: "Courses",
    title: "Entrepreneurship Education",
    description: "Providing world-class entrepreneurship education to marginalized communities around the world. All courses use the 10-step DYME model and the Virtuous Cycle of Entrepreneurship to increase both the rate of venture start-ups and the success rate of new businesses.",
    highlights: ["Venture Start-Up", "Venture Growth", "Food Truck Practicum"],
    meta: "3 Courses · Spanish, English, Portuguese & Haitian Creole",
    pdf: "/assets/EE-courses-Brochure.pdf",
  },
  {
    id: "tt",
    badge: "Workshop",
    title: "Training Trainers",
    description: "Professional development that empowers mentors to become more effective educators. Built on an evidence-based approach to entrepreneurship education, focusing on the 10-step DYME Model and key principles of how entrepreneurs learn to become entrepreneurs.",
    highlights: ["Introduction to Entrepreneurship", "Entrepreneurial Learning", "Facilitating Entrepreneurial Learning", "Facilitating Practicum", "Follow-up Mentoring"],
    meta: "5 Sessions · 60–90 min each · On-site & Online",
    pdf: "/assets/Training-Trainers-Workshop-Proposal-DYME.pdf",
  },
  {
    id: "brochure",
    badge: "Overview",
    title: "DYME Program Brochure",
    description: "A complete overview of the DYME Institute — covering our mission, methodology, program highlights, research results, program timelines, and elective sessions. Everything you need to understand the DYME approach and its global impact.",
    highlights: ["About DYME & Program Highlights", "Research: Theory Behind the Practice", "Timelines, Elective Sessions & Reviews"],
    meta: "Full Program Overview · 8 Sections",
    pdf: "/assets/DYME-BROCHURE.pdf",
  },
];

function ProgramCatalogSection() {
  return (
    <section className="catalog-section" id="catalog" aria-labelledby="catalog-heading">
      <div className="catalog-shell">

        <div className="catalog-header">
          <div>
            <div className="catalog-eyebrow">Explore</div>
            <h2 id="catalog-heading" className="catalog-title">Program Catalog</h2>
          </div>
        </div>

        <div className="catalog-grid">
          {brochures.map((item) => (
            <article key={item.id} className="catalog-card">
              <span className="catalog-brochure-badge">{item.badge}</span>
              <h3 className="catalog-card-title">{item.title}</h3>
              <p className="catalog-card-desc">{item.description}</p>
              <ul className="catalog-brochure-highlights">
                {item.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <p className="catalog-card-meta">{item.meta}</p>
              <a
                className="catalog-card-download"
                href={item.pdf}
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download PDF
              </a>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

function GlobalProjectsPage() {
  return (
    <main className="global-page">

      {/* ── Hero ── */}
      <section className="global-hero">
        <div className="global-hero-bg" aria-hidden="true" />
        <div className="global-hero-card">
          <div className="global-hero-eyebrow">Projects · Global</div>
          <h1 className="global-hero-title">
            Global Projects by<br />DYME Institute
          </h1>
          <div className="global-hero-divider" aria-hidden="true" />
          <p className="global-hero-body">
            At DYME Institute, we are committed to providing access to world-class entrepreneurship
            education to marginalized communities around the world. This is accomplished through
            three main global programming: <strong>Entrepreneurship Education</strong>,{" "}
            <strong>Training Trainers</strong>, and <strong>Program Development</strong>. The three
            elements are intertwined into a comprehensive program, but can also be implemented as
            stand-alone initiatives.
          </p>
          <p className="global-hero-body">
            We have worked with almost 50 universities and entrepreneurship centers, training
            hundreds of technical staff, faculty, and trainers — impacting tens of thousands of
            entrepreneurs.
          </p>
          <div className="global-stats-row">
            <div className="global-stat">
              <span className="global-stat-number">50+</span>
              <span className="global-stat-label">Universities &amp; Centers</span>
            </div>
            <div className="global-stat-divider" aria-hidden="true" />
            <div className="global-stat">
              <span className="global-stat-number">100s</span>
              <span className="global-stat-label">Faculty &amp; Trainers</span>
            </div>
            <div className="global-stat-divider" aria-hidden="true" />
            <div className="global-stat">
              <span className="global-stat-number">10,000s</span>
              <span className="global-stat-label">Entrepreneurs Impacted</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Highlights ── */}
      <section className="global-highlights">
        <div className="global-highlights-inner">

          <div className="global-highlights-content">
            <div className="global-section-eyebrow">Key Highlights</div>
            <h2 className="global-highlights-title">
              Key Highlights of our<br />Global Projects
            </h2>

            <div className="global-program-card">
              <div className="global-program-icon" aria-hidden="true">🌎</div>
              <div>
                <h3 className="global-program-name">Entrepreneurship Education</h3>
                <p className="global-program-body">
                  Our community outreach spans the globe. We have provided workshops, short courses,
                  and seminars to students, businesses, and nascent entrepreneurs from marginalized
                  communities in developing countries. Our goal is to use the power of
                  entrepreneurship to lift up marginalized members of marginalized communities.
                  With partnerships, we have reached entrepreneurs in various countries, including
                  Colombia, Mexico, and Spain, among others. These workshops serve as platforms for
                  knowledge exchange, skill development, and networking opportunities.
                </p>
              </div>
            </div>

            <div className="global-program-card">
              <div className="global-program-icon" aria-hidden="true">🎓</div>
              <div>
                <h3 className="global-program-name">Training Trainers</h3>
                <p className="global-program-body">
                  We collaborate with educational institutions and organizations worldwide to develop
                  the skills of faculty and staff that are working with nascent entrepreneurs. The
                  training program uses the award-winning DYME methodology and the Virtuous Cycle of
                  Entrepreneurship to improve the effectiveness of existing programming. We focus on
                  giving trainers the fundamental tools required to help the entrepreneur become a
                  successful entrepreneur.
                </p>
              </div>
            </div>

            <div className="global-program-card">
              <div className="global-program-icon" aria-hidden="true">🏗️</div>
              <div>
                <h3 className="global-program-name">Program Development</h3>
                <p className="global-program-body">
                  The DYME Institute helps organizations that want to improve the impact of their
                  programming. We offer comprehensive eco-system development that includes curricular,
                  co-curricular, and non-curricular programming. We equip faculty and staff to create
                  an entrepreneurial climate so nascent entrepreneurs can thrive — providing programs
                  based on research on how entrepreneurs learn to become entrepreneurs. This structure
                  and system focuses on entrepreneurial agency and autonomy.
                </p>
              </div>
            </div>

            <a className="button button-gold global-cta-btn" href="/#launch">
              Partner With DYME
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>

          <div className="global-highlights-media">
            <div className="global-media-frame">
              <img
                className="global-media-photo"
                src="/assets/global-dobson.avif"
                alt="John Dobson presenting the DYME methodology"
              />
              <div className="global-media-caption">
                <span className="global-media-caption-name">John Dobson</span>
                <span className="global-media-caption-role">Founder, DYME Institute</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Our Global Programs photo grid ── */}
      <section className="global-programs-section" aria-labelledby="global-programs-heading">
        <div className="global-programs-header">
          <div className="global-programs-header-inner">
            <h2 id="global-programs-heading" className="global-programs-title">Our Global Programs</h2>
            <p className="global-programs-lead">
              Join us in our mission to transform the entrepreneurial landscape and uplift communities
              worldwide. Together, we can create a future where every entrepreneur has the opportunity
              to thrive and succeed.
            </p>
          </div>
        </div>

        <div className="global-programs-grid">
          {/* Left — tall feature photo */}
          <div className="gp-cell gp-cell--featured">
            <img
              className="gp-img"
              src="/assets/global-colombia.png"
              alt="DYME program participants in Colombia"
            />
            <div className="gp-label">
              <span className="gp-label-dot" aria-hidden="true" />
              Colombia
            </div>
          </div>

          {/* Right — 2×2 grid */}
          <div className="gp-right">
            <div className="gp-row">
              <div className="gp-cell">
                <img
                  className="gp-img"
                  src="/assets/global-dominican.png"
                  alt="DYME workshop in the Dominican Republic"
                />
                <div className="gp-label">
                  <span className="gp-label-dot" aria-hidden="true" />
                  Dominican Republic
                </div>
              </div>
              <div className="gp-cell">
                <img
                  className="gp-img"
                  src="/assets/global-peru.png"
                  alt="DYME cohort in Peru"
                />
                <div className="gp-label">
                  <span className="gp-label-dot" aria-hidden="true" />
                  Peru
                </div>
              </div>
            </div>
            <div className="gp-row">
              <div className="gp-cell">
                <img
                  className="gp-img"
                  src="/assets/global-yucatan.png"
                  alt="DYME Proceso workshop in Yucatán, Mexico"
                />
                <div className="gp-label">
                  <span className="gp-label-dot" aria-hidden="true" />
                  Mexico — Yucatán
                </div>
              </div>
              <div className="gp-cell">
                <img
                  className="gp-img"
                  src="/assets/global-spain.png"
                  alt="DYME session in Spain"
                />
                <div className="gp-label">
                  <span className="gp-label-dot" aria-hidden="true" />
                  Spain
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

function ReEntryPage() {
  return (
    <main className="reentry-page">

      {/* ── Hero ── */}
      <section className="reentry-hero">
        <div className="reentry-hero-bg" aria-hidden="true" />
        <div className="reentry-hero-inner">
          <div className="reentry-hero-eyebrow">Projects</div>
          <h1 className="reentry-hero-title">
            Re-Entry<br />Entrepreneurship
          </h1>
          <div className="reentry-hero-bar" aria-hidden="true" />
          <p className="reentry-hero-lead">
            Building pathways to economic independence through entrepreneurship education,
            inside and outside the prison system.
          </p>
        </div>
      </section>

      {/* ── Mission statement ── */}
      <section className="reentry-mission">
        <div className="reentry-mission-inner">
          <div className="reentry-mission-text">
            <p>
              People with felony convictions have <strong>limited formal employment
              opportunities</strong>. Entrepreneurship and self-employment are often the most
              effective tools to help them become productive members of society.
            </p>
            <p>
              The Re-Entry Entrepreneurship program works <strong>inside and outside the prison
              system</strong> to help formerly incarcerated individuals develop their
              entrepreneurial skills so that they have legitimate income-earning opportunities.
            </p>
            <p>
              Our programming, which focuses on <strong>entrepreneurial soft-skill
              development</strong>, has reduced the recidivism rate from{" "}
              <strong className="reentry-highlight">70% to 20%</strong> — effectively helping
              returning citizens become productive members of society.
            </p>
          </div>

          {/* Impact stat */}
          <div className="reentry-stat-block">
            <div className="reentry-stat-left">
              <span className="reentry-stat-number">70%</span>
              <span className="reentry-stat-arrow">→ 20%</span>
              <span className="reentry-stat-label">Recidivism Rate</span>
            </div>
            <div className="reentry-stat-right">
              <p>
                A transformative reduction achieved through entrepreneurial soft-skill
                development, helping returning citizens build legitimate livelihoods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Program pillars ── */}
      <section className="reentry-pillars">
        <div className="reentry-pillars-inner">
          <div className="reentry-pillars-header">
            <div className="reentry-eyebrow">How It Works</div>
            <h2 className="reentry-pillars-title">Three Pillars of the Program</h2>
          </div>

          <div className="reentry-pillars-grid">
            <div className="reentry-pillar-card">
              <div className="reentry-pillar-icon" aria-hidden="true">📚</div>
              <div className="reentry-pillar-num">01</div>
              <h3 className="reentry-pillar-name">Business Foundations</h3>
              <p className="reentry-pillar-body">
                Practical venture fundamentals for participants building stability, confidence,
                and long-term plans — designed to meet learners where they are.
              </p>
            </div>
            <div className="reentry-pillar-card">
              <div className="reentry-pillar-icon" aria-hidden="true">🤝</div>
              <div className="reentry-pillar-num">02</div>
              <h3 className="reentry-pillar-name">Coaching &amp; Support</h3>
              <p className="reentry-pillar-body">
                Structured learning paired with mentoring, accountability, and implementation
                support across the full program cycle.
              </p>
            </div>
            <div className="reentry-pillar-card">
              <div className="reentry-pillar-icon" aria-hidden="true">🚀</div>
              <div className="reentry-pillar-num">03</div>
              <h3 className="reentry-pillar-name">Transition Pathways</h3>
              <p className="reentry-pillar-body">
                Designed for re-entry organizations, workforce partners, and education programs
                seeking stronger economic outcomes after release.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA banner ── */}
      <section className="reentry-cta">
        <div className="reentry-cta-inner">
          <div className="reentry-cta-text">
            <h2 className="reentry-cta-title">Partner With DYME</h2>
            <p className="reentry-cta-body">
              Bring evidence-based entrepreneurship programming to your re-entry
              organization, correctional facility, or workforce program.
            </p>
          </div>
          <a className="button button-gold reentry-cta-btn" href="/#launch">
            Get in Touch
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </section>

    </main>
  );
}

function StaffPage() {
  return (
    <main className="dir-page">
      <section className="dir-banner">
        <img
          className="dir-banner-img"
          src="/assets/dyme-loop-background.avif"
          alt="DYME team"
        />
        <div className="dir-banner-overlay" aria-hidden="true" />
      </section>

      <div className="dir-panel staff-panel">
        <div className="dir-title-card">
          <div className="dir-title-logo">
            <img src="/assets/dobson-full-remake.avif" alt="" />
          </div>
          <div>
            <h1 className="dir-title">Staff</h1>
            <span className="dir-eyebrow">About Us</span>
          </div>
        </div>
        <div className="staff-nav-grid">
          <a href="#kate-dobson" className="staff-nav-btn">Kate Dobson</a>
          <a href="#johana-tame-chidan" className="staff-nav-btn">Johana Tame Chidan</a>
        </div>
      </div>

      <div className="dir-bios staff-bios">
        <div className="dir-bio dir-bio--photo-left staff-bio" id="kate-dobson">
          <div className="staff-photo-wrap">
            <img className="staff-photo" src="/assets/kate-dobson.avif" alt="Kate Dobson" />
          </div>
          <div className="dir-bio-content">
            <h2 className="staff-name">Kate Dobson</h2>
            <p className="staff-credentials">Bachelors of Arts Political Science, St. Francis Xavier University</p>
            <div className="dir-bio-rule" />
            <p>Kate works as a grant writer, quality assurance, and compliance for the DYME Institute.</p>
          </div>
        </div>

        <div className="dir-bio dir-bio--photo-right staff-bio" id="johana-tame-chidan">
          <div className="dir-bio-content dir-bio-content--right">
            <h2 className="staff-name">Johana Tame Chidan</h2>
            <p className="staff-credentials">Bachelors of Business with Marketing, Universidad Anahuac Mexico<br />Certified DYME Practitioner</p>
            <div className="dir-bio-rule" />
            <p>Johana is the country lead for DYME Institute work in Mexico. She develops programming and manages relationships with community based partners.</p>
          </div>
          <div className="staff-photo-wrap staff-photo-wrap--teal">
            <img className="staff-photo" src="/assets/johana-tame.avif" alt="Johana Tame Chidan" />
          </div>
        </div>

      </div>
    </main>
  );
}

function DirectorsPage({ onNavigate }) {
  return (
    <main className="dir-page">

      {/* Full-width banner with gold overlay */}
      <section className="dir-banner">
        <img
          className="dir-banner-img"
          src="/assets/dyme-loop-background.avif"
          alt="DYME workshop group"
        />
        <div className="dir-banner-overlay" aria-hidden="true" />
      </section>

      {/* White panel overlapping bottom of banner */}
      <div className="dir-panel">
        <div className="dir-title-card">
          <div className="dir-title-logo" aria-hidden="true">
            <img src="/assets/dobson-full-remake.avif" alt="" />
          </div>
          <div>
            <h1 className="dir-title">Directors</h1>
            <span className="dir-eyebrow">About Us</span>
          </div>
        </div>

        <div className="dir-grid">
          <a className="dir-cell dir-cell--navy" href="#john-dobson">
            <span className="dir-cell-name">John Alver Dobson</span>
            <span className="dir-cell-read">Read more <span aria-hidden="true">›</span></span>
          </a>
          <a className="dir-cell dir-cell--gold" href="#gilmer-castro">
            <span className="dir-cell-name">Gilmer Yovanni Castro Nieto</span>
            <span className="dir-cell-read">Read more <span aria-hidden="true">›</span></span>
          </a>
          <a className="dir-cell dir-cell--gold" href="#andreina-ochoa">
            <span className="dir-cell-name">Andreina Moros Ochoa</span>
            <span className="dir-cell-read">Read more <span aria-hidden="true">›</span></span>
          </a>
          <a className="dir-cell dir-cell--navy" href="#tim-kelley">
            <span className="dir-cell-name">Tim Kelley</span>
            <span className="dir-cell-read">Read more <span aria-hidden="true">›</span></span>
          </a>
          <a className="dir-cell dir-cell--navy" href="#mame-leslie">
            <span className="dir-cell-name">Mame Leslie</span>
            <span className="dir-cell-read">Read more <span aria-hidden="true">›</span></span>
          </a>
          <a className="dir-cell dir-cell--gold" href="#david-turner">
            <span className="dir-cell-memoriam">In memoriam</span>
            <span className="dir-cell-name">David Turner</span>
            <span className="dir-cell-read">Read more <span aria-hidden="true">›</span></span>
          </a>
        </div>
      </div>

      {/* Bio sections */}
      <div className="dir-bios">

        {/* John Alver Dobson */}
        <div className="dir-bio dir-bio--photo-left" id="john-dobson">
          <div className="dir-bio-photo-wrap">
            <img className="dir-bio-photo" src="/assets/dir-john.avif" alt="John Alver Dobson" />
          </div>
          <div className="dir-bio-content">
            <h2 className="dir-bio-name">John Alver Dobson Ph.D.</h2>
            <div className="dir-bio-rule" aria-hidden="true" />
            <p>As a college student, I started my own business, called South of the Border Imports. At 20, I hopped in my car, drove from Canada to Mexico, bought handicrafts, and drove back to Canada. On the way down, I slept in my car and on the way back I slept on top of my car. Reflecting on my experiences, I did not know what I did not know about becoming a successful entrepreneur, but I was curious, adaptable, and resilient. I learned by doing, from others, and by working together. Over time, I was able to figure it out and became a successful entrepreneur.</p>
            <p>I successfully ran my business for 21 years prior to selling it. My business was prosperous and well known within the community and across the country. As a result, I was invited to give guest lectures and eventually to teach a course on new venture development. I enjoyed teaching and after I sold my business I decided to pursue teaching entrepreneurship as a second career. I wanted to become an effective professor, so I returned to continue my studies at the London School of Economics in Development Management and completed my Doctorate from the University of Manchester in the UK.</p>
            <p className="dir-bio-highlight">My practice focuses on helping entrepreneurs in marginalized communities to improve their lives through market-based solutions.</p>
            <p>Currently, I am an associate professor at Clark University and I teach Creativity, Innovation, and Entrepreneurship courses at Harvard University.</p>
            <a className="dir-contact-btn" href="/#launch" onClick={onNavigate("/#launch", "launch")}>Contact Dr. Dobson</a>
          </div>
        </div>

        {/* Gilmer Yovanni Castro Nieto */}
        <div className="dir-bio dir-bio--photo-right" id="gilmer-castro">
          <div className="dir-bio-content dir-bio-content--right">
            <h2 className="dir-bio-name">Gilmer Yovanni Castro Nieto Ph.D.</h2>
            <div className="dir-bio-rule" aria-hidden="true" />
            <p>With a Doctorate Degree in Economics and Business Administration, specialized in administration, financial administration and information management, Dr. Yovanni Castro Nieto has a lot to offer as a Director with the DYME Institute. He has rich experience in management of business projects practicing implementing management models based on people.</p>
            <p>Much of his research focuses on CSR, values, leadership, marketing, organizational design, and quality of service. Together, with the research groups to which he belongs, he has published works such as: Corporate Social Responsibility: Competitiveness and cases of good practice in SMEs; The Current Context and the Foundations of Innovative Management: The emotionally intelligent company; Global Companies and Leadership in Sustainability; and so many more.</p>
            <p>Currently, he maintains a position of Associate Professor and Researcher at the Pontificia Universidad Javeriana. He is also Academic Coordinator of Process and Management Theory, as well as director of the Academic Program of Entrepreneurship and Innovation in Business Models. In addition, he is on the editorial board of the Javeriana Magazine and a member of the Consortium of Emotional Intelligence of the Basque Country.</p>
          </div>
          <div className="dir-bio-photo-wrap">
            <img className="dir-bio-photo" src="/assets/dir-gilmer.avif" alt="Gilmer Yovanni Castro Nieto" />
          </div>
        </div>

        {/* Andreina Moros Ochoa */}
        <div className="dir-bio dir-bio--photo-right" id="andreina-ochoa">
          <div className="dir-bio-content dir-bio-content--right">
            <h2 className="dir-bio-name">Andreina Moros Ochoa Ph.D.</h2>
            <p className="dir-bio-subtitle">Professor of Marketing</p>
            <p className="dir-bio-institution">CESA | Colegio de Estudios Superiores de Administración</p>
            <div className="dir-bio-rule" aria-hidden="true" />
            <p>I have my Doctorate in Economics and Business Management from Deusto Business School, San Sebastián, Spain 2011. My undergraduate degree is in Business Administration from the Universidad del País Vasco, Bilbao, Spain 2006. I have a Certificate of Regional Development from Deusto Business School&ndash;Harvard University, San Sebastián, Spain 2004. I have my masters in Finance from Universidad Católica del Táchira, Venezuela 2001 and my undergraduate degree in accounting from the Universidad Católica del Táchira, Venezuela 1999. Accounting. Undergraduate Degree. Universidad Católica del Táchira, Venezuela 1998.</p>
            <p>Most recently, I completed the DYME Institute Certificate (2019) in Problem-based Teaching and learning in Boston. I am excited about teaching this course at my home institution. It will be the first time that this course is taught in Colombia. I am teaching it to my undergraduate students at CESA University. The University has a mission of developing the next generation of leaders in Colombia.</p>
          </div>
          <div className="dir-bio-photo-wrap">
            <img className="dir-bio-photo" src="/assets/dir-andreina.avif" alt="Andreina Moros Ochoa" />
          </div>
        </div>

        {/* Tim Kelley */}
        <div className="dir-bio dir-bio--text-only" id="tim-kelley">
          <div className="dir-bio-content">
            <h2 className="dir-bio-name">Tim Kelley</h2>
            <div className="dir-bio-rule" aria-hidden="true" />
            <p>Tim Kelley is an entrepreneurship educator and faculty member whose work centers on developing entrepreneurial mindsets and practical business skills in learners across diverse communities. With a commitment to experiential, evidence-based teaching methods, Tim brings a hands-on approach that bridges theory and real-world application.</p>
            <p>His contributions to the DYME Institute reflect a deep belief in the power of entrepreneurship education to create lasting individual and community impact. Tim works alongside partners and faculty to implement rigorous, inclusive programming that equips emerging entrepreneurs with the knowledge and confidence to build sustainable ventures.</p>
          </div>
        </div>

        {/* Mame Leslie */}
        <div className="dir-bio dir-bio--text-only" id="mame-leslie">
          <div className="dir-bio-content">
            <h2 className="dir-bio-name">Mame Leslie</h2>
            <div className="dir-bio-rule" aria-hidden="true" />
            <p>Mame Leslie is an educator and entrepreneurship advocate with expertise in curriculum design, community-based learning, and entrepreneurial leadership development. Her work focuses on creating accessible, engaging learning environments that empower individuals from all backgrounds to explore and develop their entrepreneurial potential.</p>
            <p>As a faculty member with the DYME Institute, Mame brings both academic rigor and a genuine passion for human development to her teaching practice. She is committed to building programs that meet learners where they are and support them in developing the skills and confidence to pursue meaningful entrepreneurial ventures.</p>
          </div>
        </div>

        {/* David Turner — In memoriam */}
        <div className="dir-bio dir-bio--text-only dir-bio--memoriam" id="david-turner">
          <div className="dir-bio-content">
            <p className="dir-memoriam-label">In memoriam</p>
            <h2 className="dir-bio-name">David Turner</h2>
            <div className="dir-bio-rule" aria-hidden="true" />
            <p>David Turner was a dedicated educator, mentor, and entrepreneurship advocate whose influence within the DYME Institute and the broader entrepreneurship education community left a lasting impression on all who had the privilege of working alongside him.</p>
            <p>With warmth, intellectual curiosity, and an unwavering commitment to learners, David championed evidence-based approaches to entrepreneurship education that prioritized real-world relevance and human potential. His passion for empowering aspiring entrepreneurs—particularly those in underserved communities—continues to shape the values and mission of the DYME Institute.</p>
            <p className="dir-bio-highlight">His legacy lives on through the educators he inspired, the learners he supported, and the programs he helped build.</p>
          </div>
        </div>

      </div>
    </main>
  );
}

function MainStreetEntrepreneurPage({ onNavigate }) {
  return (
    <main className="mse-page">
      {/* Section 1 — Intro */}
      <section className="mse-intro">
        <div className="mse-intro-photo-wrap">
          <img
            className="mse-intro-photo"
            src="/assets/mse-hero.avif"
            alt="Main Street Entrepreneur workshop session"
          />
        </div>
        <div className="mse-intro-content">
          <h1 className="mse-intro-title">Main Street Entrepreneur</h1>
          <p>
            Welcome to the Main Street Entrepreneur program. There is a lot of hype around high tech
            start-ups, but this only accounts for about 0.02% of new business and job creation. We
            focus on the other 99.98% of business start-ups. If you have an idea, we help you
            develop that idea into a viable business opportunity. No experience necessary. You might
            be a recent immigrant or born and bred American. We help people that want to start a
            business and realize the American dream. Our mission is to help you start a successful
            business. Classes are taught in English, Spanish, Portuguese, and French Creole.
          </p>
          <p className="mse-intro-tagline">
            <em>Join us in unlocking your business potential and building your American dream.</em>
          </p>
        </div>
      </section>

      {/* Section 2 — Courses */}
      <section className="mse-courses">
        <div className="mse-courses-inner">
          <h2 className="mse-section-heading">Courses</h2>
          <p className="mse-courses-lead">
            The Main Street Entrepreneur program is comprised of three courses: venture start-up,
            venture growth, and the food truck practicum.
          </p>
          <p className="mse-courses-sublead">
            Each course comprises a comprehensive 7-week program. The course is built around
            research on how entrepreneurs learn to become entrepreneurs.
          </p>
          <div className="mse-courses-grid">
            <div className="mse-course-card">
              <div className="mse-course-circle-wrap">
                <img
                  className="mse-course-circle"
                  src="/assets/mse-course-startup.avif"
                  alt="Venture Start Up students"
                />
              </div>
              <h3 className="mse-course-title">Venture Start Up</h3>
              <p>
                Venture Startup, a transformative course designed to take the nascent entrepreneur
                from a vague idea into a viable business opportunity.
              </p>
              <p>
                The students use the DYME methodology to complete 7 entrepreneurial sprints to
                develop and test their hypothesis. With the goal of developing product/market fit.
              </p>
            </div>
            <div className="mse-course-card">
              <div className="mse-course-circle-wrap">
                <img
                  className="mse-course-circle"
                  src="/assets/mse-course-growth.avif"
                  alt="Venture Growth facilitator"
                />
              </div>
              <h3 className="mse-course-title">Venture Growth</h3>
              <p>
                Venture Growth is designed for existing business owners that want to grow their
                business. This is the same award-winning course that Dr. Dobson developed and
                taught at Harvard University for many years.
              </p>
              <p>
                Using the DYME methodology, Business owners will create an organizational climate
                of creativity and innovation that will help them solve &apos;sticky&apos; problems at work.
              </p>
            </div>
            <div className="mse-course-card">
              <div className="mse-course-circle-wrap">
                <img
                  className="mse-course-circle"
                  src="/assets/mse-course-foodtruck.avif"
                  alt="Food Truck Practicum participant"
                />
              </div>
              <h3 className="mse-course-title">Food Truck Practicum</h3>
              <p>
                The food truck class is designed for students that want to get into the food or
                hospitality business. The students get to start and run their own food truck
                business. They will take an idea and develop it into a real business. Navigating
                the regulatory requirements of launching a food truck business, including getting
                the required certifications to work in the food industry.
              </p>
              <p className="mse-course-highlight">
                The course can be visualized as a Venn Diagram of entrepreneurial soft-skills,
                business hard skills, and community engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Previous Workshops */}
      <section className="mse-workshops">
        <div className="mse-workshops-inner">
          <h2 className="mse-section-heading">Our Previous Workshops</h2>
          <div className="mse-gallery-grid">
            <img
              className="mse-gallery-photo"
              src="/assets/mse-workshop-1.avif"
              alt="Workshop participant taking notes"
            />
            <img
              className="mse-gallery-photo"
              src="/assets/mse-hero.avif"
              alt="Facilitators presenting at whiteboard"
            />
            <img
              className="mse-gallery-photo mse-gallery-photo--tall"
              src="/assets/mse-workshop-3.avif"
              alt="Workshop participants"
            />
            <img
              className="mse-gallery-photo"
              src="/assets/mse-workshop-2.avif"
              alt="Facilitator with diagram"
            />
            <img
              className="mse-gallery-photo"
              src="/assets/mse-course-startup.avif"
              alt="Classroom session"
            />
          </div>
          <a className="mse-back-link" href="/" onClick={onNavigate("/")}>
            ← Back to Home
          </a>
        </div>
      </section>
    </main>
  );
}

function AcademicDevelopmentModal({ onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="modal-overlay acad-modal-overlay" role="dialog" aria-modal="true" aria-label="Academic Development" onClick={onClose}>
      <div className="modal-card acad-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" type="button" aria-label="Close" onClick={onClose}>×</button>

        {/* Header */}
        <div className="acad-modal-header">
          <div className="acad-modal-icon" aria-hidden="true">🎓</div>
          <div>
            <p className="acad-modal-kicker">Our Services</p>
            <h2 className="acad-modal-title">Academic Development</h2>
            <p className="acad-modal-subtitle">Faculty Teaching &amp; Learning</p>
          </div>
        </div>

        <div className="acad-modal-body">
          {/* Overview */}
          <div className="acad-modal-section">
            <h3 className="acad-modal-section-title">Overview</h3>
            <p>DYME Institute partners with universities and educators to transform how entrepreneurship is taught. Through evidence-based, problem-driven methodologies, faculty are equipped to deliver experiential learning that emphasizes real-world application over traditional lecture-based instruction.</p>
          </div>

          {/* What We Offer */}
          <div className="acad-modal-section">
            <h3 className="acad-modal-section-title">What We Offer</h3>
            <div className="acad-modal-offers">
              <div className="acad-offer-item">
                <span className="acad-offer-icon" aria-hidden="true">🏛️</span>
                <div>
                  <strong>Faculty Workshops</strong>
                  <p>Interactive workshops hosted in Boston or at partner universities that introduce faculty to DYME's problem-based approach to entrepreneurship education. These sessions focus on engaging students through real-world challenges.</p>
                </div>
              </div>
              <div className="acad-offer-item">
                <span className="acad-offer-icon" aria-hidden="true">📚</span>
                <div>
                  <strong>Teaching Methodology Training</strong>
                  <p>Training designed to help educators implement experiential learning techniques, where students actively develop business ideas and solve practical problems rather than relying solely on theory.</p>
                </div>
              </div>
              <div className="acad-offer-item">
                <span className="acad-offer-icon" aria-hidden="true">🔗</span>
                <div>
                  <strong>Curriculum Integration</strong>
                  <p>Support for incorporating entrepreneurship into existing academic programs or developing new courses aligned with institutional goals and student needs.</p>
                </div>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="acad-modal-section">
            <h3 className="acad-modal-section-title">How It Works</h3>
            <div className="acad-modal-steps">
              <div className="acad-step">
                <div className="acad-step-num">1</div>
                <div>
                  <strong>Faculty Training</strong>
                  <p>Educators are introduced to DYME's evidence-based teaching model.</p>
                </div>
              </div>
              <div className="acad-step">
                <div className="acad-step-num">2</div>
                <div>
                  <strong>Course Implementation</strong>
                  <p>Faculty apply these methods within their own classrooms and programs.</p>
                </div>
              </div>
              <div className="acad-step">
                <div className="acad-step-num">3</div>
                <div>
                  <strong>Experiential Learning</strong>
                  <p>Students engage in hands-on activities, including venture creation and problem-solving.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Impact + Who It's For side by side */}
          <div className="acad-modal-two-col">
            <div className="acad-modal-section">
              <h3 className="acad-modal-section-title">Impact</h3>
              <ul className="acad-modal-list">
                <li>Increases student engagement and participation</li>
                <li>Connects academic theory with real-world application</li>
                <li>Builds entrepreneurial thinking across disciplines</li>
                <li>Scales across diverse educational environments</li>
              </ul>
            </div>
            <div className="acad-modal-section">
              <h3 className="acad-modal-section-title">Who It&apos;s For</h3>
              <ul className="acad-modal-list">
                <li>Universities and colleges</li>
                <li>Faculty and educators</li>
                <li>Academic program directors</li>
                <li>Institutions developing entrepreneurship programs</li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="acad-modal-cta">
            <a className="acad-cta-primary" href="/#launch" onClick={onClose}>Partner With Us →</a>
            <a className="acad-cta-secondary" href="/#launch" onClick={onClose}>Contact Us →</a>
          </div>
        </div>
      </div>
    </div>
  );
}

function CurricularModal({ onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="modal-overlay acad-modal-overlay" role="dialog" aria-modal="true" aria-label="Curricular & Co-curricular Programming" onClick={onClose}>
      <div className="modal-card acad-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" type="button" aria-label="Close" onClick={onClose}>×</button>

        <div className="acad-modal-header">
          <div className="acad-modal-icon" aria-hidden="true">📖</div>
          <div>
            <p className="acad-modal-kicker">Our Services</p>
            <h2 className="acad-modal-title">Curricular &amp; Co-curricular Programming</h2>
            <p className="acad-modal-subtitle">Course &amp; Program Design</p>
          </div>
        </div>

        <div className="acad-modal-body">
          <div className="acad-modal-section">
            <h3 className="acad-modal-section-title">Overview</h3>
            <p>DYME Institute collaborates with universities and institutions to design and implement entrepreneurship-focused courses and programs. These offerings integrate experiential learning into both academic (curricular) and extracurricular (co-curricular) environments, enabling students to engage in real-world problem solving and venture development.</p>
          </div>

          <div className="acad-modal-section">
            <h3 className="acad-modal-section-title">What We Offer</h3>
            <div className="acad-modal-offers">
              <div className="acad-offer-item">
                <span className="acad-offer-icon" aria-hidden="true">📝</span>
                <div>
                  <strong>Course Design</strong>
                  <p>We work with faculty to develop entrepreneurship courses that incorporate problem-based learning, ensuring students actively apply concepts through real-world challenges.</p>
                </div>
              </div>
              <div className="acad-offer-item">
                <span className="acad-offer-icon" aria-hidden="true">🏗️</span>
                <div>
                  <strong>Program Development</strong>
                  <p>Support for building structured entrepreneurship programs, including workshops, cohorts, and multi-course pathways aligned with institutional goals.</p>
                </div>
              </div>
              <div className="acad-offer-item">
                <span className="acad-offer-icon" aria-hidden="true">🔄</span>
                <div>
                  <strong>Co-curricular Integration</strong>
                  <p>Development of programs outside the classroom—such as innovation labs, student ventures, and workshops—that complement academic learning and enhance student engagement.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="acad-modal-section">
            <h3 className="acad-modal-section-title">How It Works</h3>
            <div className="acad-modal-steps">
              <div className="acad-step">
                <div className="acad-step-num">1</div>
                <div>
                  <strong>Needs Assessment</strong>
                  <p>We collaborate with institutions to understand their goals, student population, and existing programs.</p>
                </div>
              </div>
              <div className="acad-step">
                <div className="acad-step-num">2</div>
                <div>
                  <strong>Program Design</strong>
                  <p>Courses and programming are developed using DYME's experiential, evidence-based methodology.</p>
                </div>
              </div>
              <div className="acad-step">
                <div className="acad-step-num">3</div>
                <div>
                  <strong>Implementation &amp; Support</strong>
                  <p>We assist with rollout, ensuring faculty and staff can effectively deliver and sustain the program.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="acad-modal-two-col">
            <div className="acad-modal-section">
              <h3 className="acad-modal-section-title">Impact</h3>
              <ul className="acad-modal-list">
                <li>Strengthens entrepreneurship education across campus</li>
                <li>Encourages interdisciplinary collaboration</li>
                <li>Provides students with hands-on, practical experience</li>
                <li>Supports long-term program sustainability</li>
              </ul>
            </div>
            <div className="acad-modal-section">
              <h3 className="acad-modal-section-title">Who It&apos;s For</h3>
              <ul className="acad-modal-list">
                <li>Universities and colleges</li>
                <li>Academic departments and faculty</li>
                <li>Student program coordinators</li>
                <li>Institutions building innovation ecosystems</li>
              </ul>
            </div>
          </div>

          <div className="acad-modal-cta">
            <a className="acad-cta-primary" href="/#launch" onClick={onClose}>Partner With Us →</a>
            <a className="acad-cta-secondary" href="/#launch" onClick={onClose}>Contact Us →</a>
          </div>
        </div>
      </div>
    </div>
  );
}

function PedagogyModal({ onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="modal-overlay acad-modal-overlay" role="dialog" aria-modal="true" aria-label="Entrepreneurship Pedagogy & Research" onClick={onClose}>
      <div className="modal-card acad-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" type="button" aria-label="Close" onClick={onClose}>×</button>

        <div className="acad-modal-header">
          <div className="acad-modal-icon" aria-hidden="true">⚗️</div>
          <div>
            <p className="acad-modal-kicker">Our Services</p>
            <h2 className="acad-modal-title">Entrepreneurship Pedagogy &amp; Research</h2>
            <p className="acad-modal-subtitle">Evidence-Based Innovation</p>
          </div>
        </div>

        <div className="acad-modal-body">
          <div className="acad-modal-section">
            <h3 className="acad-modal-section-title">Overview</h3>
            <p>DYME Institute examines how entrepreneurship is taught and develops evidence-based approaches that improve learning outcomes. By studying the effectiveness of different teaching methods, DYME creates interventions that enhance student engagement, skill development, and venture creation.</p>
          </div>

          <div className="acad-modal-section">
            <h3 className="acad-modal-section-title">What We Do</h3>
            <div className="acad-modal-offers">
              <div className="acad-offer-item">
                <span className="acad-offer-icon" aria-hidden="true">🔬</span>
                <div>
                  <strong>Educational Research</strong>
                  <p>We analyze the impact of entrepreneurship education programs to understand which teaching methods most effectively develop entrepreneurial skills.</p>
                </div>
              </div>
              <div className="acad-offer-item">
                <span className="acad-offer-icon" aria-hidden="true">🧩</span>
                <div>
                  <strong>Methodology Development</strong>
                  <p>We design and refine evidence-based teaching approaches that emphasize experiential, problem-based learning.</p>
                </div>
              </div>
              <div className="acad-offer-item">
                <span className="acad-offer-icon" aria-hidden="true">📊</span>
                <div>
                  <strong>Program Evaluation</strong>
                  <p>We assess courses and programs to measure outcomes such as student engagement, skill acquisition, and venture success.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="acad-modal-section">
            <h3 className="acad-modal-section-title">How It Works</h3>
            <div className="acad-modal-steps">
              <div className="acad-step">
                <div className="acad-step-num">1</div>
                <div>
                  <strong>Data Collection</strong>
                  <p>We gather insights from classrooms, programs, and student outcomes.</p>
                </div>
              </div>
              <div className="acad-step">
                <div className="acad-step-num">2</div>
                <div>
                  <strong>Analysis &amp; Insight</strong>
                  <p>We evaluate the effectiveness of teaching strategies and identify areas for improvement.</p>
                </div>
              </div>
              <div className="acad-step">
                <div className="acad-step-num">3</div>
                <div>
                  <strong>Implementation</strong>
                  <p>We apply research findings to enhance courses, programs, and institutional approaches.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="acad-modal-two-col">
            <div className="acad-modal-section">
              <h3 className="acad-modal-section-title">Impact</h3>
              <ul className="acad-modal-list">
                <li>Improves the effectiveness of entrepreneurship education</li>
                <li>Increases student engagement and participation</li>
                <li>Supports data-driven decision making for institutions</li>
                <li>Enhances long-term program success and scalability</li>
              </ul>
            </div>
            <div className="acad-modal-section">
              <h3 className="acad-modal-section-title">Who It&apos;s For</h3>
              <ul className="acad-modal-list">
                <li>Universities and colleges</li>
                <li>Researchers and educators</li>
                <li>Academic program leaders</li>
                <li>Institutions focused on innovation and entrepreneurship</li>
              </ul>
            </div>
          </div>

          <div className="acad-modal-cta">
            <a className="acad-cta-primary" href="/#launch" onClick={onClose}>Partner With Us →</a>
            <a className="acad-cta-secondary" href="/#launch" onClick={onClose}>Contact Us →</a>
          </div>
        </div>
      </div>
    </div>
  );
}

function MethodologyModal({ stepKey, onClose, onNext }) {
  const data = modalData[stepKey];
  const currentIndex = stepOrder.indexOf(stepKey);
  const isLast = currentIndex === stepOrder.length - 1;
  const nextKey = isLast ? null : stepOrder[currentIndex + 1];

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={data.title}
      onClick={onClose}
    >
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" type="button" aria-label="Close" onClick={onClose}>
          ×
        </button>
        <div className="modal-step-badge">{stepKey}</div>
        <h3 className="modal-title">{data.title}</h3>

        <p className="modal-definition">{data.description}</p>

        <div className="modal-block">
          <div className="modal-block-label">What DYME Does</div>
          <p className="modal-block-body">{data.whatDymeDoes}</p>
        </div>

        <div className="modal-block modal-block--why">
          <div className="modal-block-label">Why It Matters</div>
          <p className="modal-block-body">{data.whyItMatters}</p>
        </div>

        <div className="modal-block modal-block--questions">
          <div className="modal-block-label">Key Questions</div>
          <ul className="modal-questions-list">
            {data.keyQuestions.map((q, i) => (
              <li key={i}>{q}</li>
            ))}
          </ul>
        </div>

        <div className="modal-block modal-block--example">
          <div className="modal-block-label">Example</div>
          <p className="modal-block-body">{data.example}</p>
        </div>

        {isLast ? (
          <button className="modal-next-btn modal-next-btn--back" type="button" onClick={onClose}>
            <span className="modal-next-arrow">←</span>
            Back to Model
          </button>
        ) : (
          <button className="modal-next-btn" type="button" onClick={() => onNext(nextKey)}>
            Next Step
            <span className="modal-next-arrow">→</span>
            <span className="modal-next-title">{modalData[nextKey].title}</span>
          </button>
        )}
      </div>
    </div>
  );
}

function HomePage() {
  const [activeModal, setActiveModal] = useState(null);
  const [showAcademicModal, setShowAcademicModal] = useState(false);
  const [showCurricularModal, setShowCurricularModal] = useState(false);
  const [showPedagogyModal, setShowPedagogyModal] = useState(false);

  return (
    <>
    <main>
      <section className="hero reveal is-visible" id="home">
        <div className="hero-copy">
          <div className="hero-kicker">Global entrepreneurship education</div>
          <h1>
            Transforming
            <br />
            Entrepreneurship
            <br />
            <span>Education Worldwide</span>
          </h1>
          <p className="hero-lead">
            Evidence-based methodologies for universities and global programs.
          </p>
          <div className="hero-actions">
            <a className="button button-gold" href="/#launch">
              Partner With Dyme
            </a>
            <a className="button button-outline-light" href="/#catalog">
              Explore Programs
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>

        <div className="hero-media" aria-label="Dyme program presentation panel">
          <div className="hero-frame">
            <HeroCarousel />
          </div>
        </div>
      </section>

      <section className="method-section reveal is-visible" id="products">
        <div className="method-intro">
          <h2>
            Develop Your Model
            <br />
            of Entrepreneurship
          </h2>
          <p>An Evidence-Based Methodology for Teaching Entrepreneurship</p>
        </div>

        {/* Desktop diagram */}
        <figure className="method-exhibit method-exhibit--desktop">
          <img
            className="method-exhibit-image"
            src="/assets/dyme-loop-background.avif"
            alt="Dyme methodology loop shown over a workshop audience background"
          />
          <div className="method-exhibit-scrim" aria-hidden="true" />
          <div className="method-labels" aria-label="Dyme methodology steps">
            {methodologyLabels.map((label) => (
              <button
                key={label.number}
                type="button"
                className={`method-label ${label.className}`}
                onClick={() => setActiveModal(label.number)}
              >
                <span className="method-label-number">{label.number}</span>
                <span className="method-label-text">{label.text}</span>
              </button>
            ))}
          </div>
        </figure>

        {/* Mobile step list */}
        <div className="method-steps-mobile" aria-label="Dyme methodology steps">
          {[...methodologyLabels]
            .sort((a, b) => a.number.localeCompare(b.number))
            .map((label) => (
              <button
                key={label.number}
                type="button"
                className="method-step-card"
                onClick={() => setActiveModal(label.number)}
              >
                <span className="method-step-num">{label.number}</span>
                <span className="method-step-title">{label.text}</span>
                <span className="method-step-arrow" aria-hidden="true">›</span>
              </button>
            ))}
        </div>
      </section>

      <section className="section system-section" id="system">
        <div className="institute-showcase reveal is-visible">
          <div className="institute-photo-frame">
            <img
              className="institute-photo"
              src="/assets/john-dobson.png"
              alt="John Dobson during an entrepreneurship session"
            />
          </div>
          <div className="institute-banner">
            <div className="institute-banner-top" />
            <div className="institute-brand">
              <span className="institute-dots">D.Y.M.E.</span>
              <img src="/assets/dobson-full-remake.avif" alt="Dyme logo mark" />
            </div>
            <h2>Developing Your Model of Entrepreneurship</h2>
            <p>
              Evidence-based entrepreneurship education built for universities,
              facilitators, and founders across global learning environments.
            </p>
            <p>
              Dyme combines proven teaching methods, practical venture frameworks, and
              applied training to help entrepreneurial communities build stronger models
              and better outcomes.
            </p>
            <div className="institute-banner-footer">
              <strong>The Dyme Institute</strong>
              <span>Entrepreneurship education, workshops, and partner programs</span>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section reveal is-visible" aria-labelledby="services-title">
        <div className="services-hero">
          <img
            className="services-background"
            src="/assets/hero-speaker.png"
            alt="Dyme workshop session"
          />
          <div className="services-overlay" />
          <div className="services-header">
            <p className="services-kicker">Our Services</p>
            <span className="services-underline" />
          </div>
        </div>

        <div className="services-grid">
          <article className="service-card">
            <div className="service-icon" aria-hidden="true">🎓</div>
            <h3 id="services-title">Academic Development</h3>
            <strong>Faculty Teaching & Learning</strong>
            <p>
              Workshops hosted in Boston or your university that introduce faculty to
              the essence of problem-based entrepreneurial education.
            </p>
            <button type="button" className="service-learn-more-btn" onClick={() => setShowAcademicModal(true)}>Learn More</button>
          </article>

          <article className="service-card">
            <div className="service-icon" aria-hidden="true">📖</div>
            <h3>Curricular &amp; Co-curricular Programming</h3>
            <strong>Course & Program Design</strong>
            <p>
              We work with faculty and staff to develop effective courses and
              programming for their schools.
            </p>
            <button type="button" className="service-learn-more-btn" onClick={() => setShowCurricularModal(true)}>Learn More</button>
          </article>

          <article className="service-card">
            <div className="service-icon" aria-hidden="true">⚗</div>
            <h3>Entrepreneurship Pedagogy &amp; Research</h3>
            <strong>Evidence-Based Innovation</strong>
            <p>
              We examine the effectiveness of teaching approaches in developing
              entrepreneurs and create interventions that improve learning outcomes.
            </p>
            <button type="button" className="service-learn-more-btn" onClick={() => setShowPedagogyModal(true)}>Learn More</button>
          </article>
        </div>
      </section>

      <PartnerMapSection />

      <ProgramCatalogSection />

    </main>
    {activeModal && (
      <MethodologyModal
        stepKey={activeModal}
        onClose={() => setActiveModal(null)}
        onNext={(key) => setActiveModal(key)}
      />
    )}
    {showAcademicModal && (
      <AcademicDevelopmentModal onClose={() => setShowAcademicModal(false)} />
    )}
    {showCurricularModal && (
      <CurricularModal onClose={() => setShowCurricularModal(false)} />
    )}
    {showPedagogyModal && (
      <PedagogyModal onClose={() => setShowPedagogyModal(false)} />
    )}
    </>
  );
}

function PartnerMapSection() {
  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const ensureStylesheet = (href) => {
      const existing = document.querySelector(`link[href="${href}"]`);
      if (existing) {
        return;
      }

      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
    };

    const loadScript = (src) =>
      new Promise((resolve, reject) => {
        const existing = document.querySelector(`script[src="${src}"]`);
        if (existing) {
          if (existing.dataset.loaded === "true") {
            resolve();
            return;
          }

          existing.addEventListener("load", () => resolve(), { once: true });
          existing.addEventListener("error", () => reject(new Error(`Failed to load ${src}`)), {
            once: true,
          });
          return;
        }

        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.addEventListener(
          "load",
          () => {
            script.dataset.loaded = "true";
            resolve();
          },
          { once: true },
        );
        script.addEventListener("error", () => reject(new Error(`Failed to load ${src}`)), {
          once: true,
        });
        document.body.appendChild(script);
      });

    ensureStylesheet("https://unpkg.com/leaflet@1.9.4/dist/leaflet.css");
    ensureStylesheet(
      "https://unpkg.com/leaflet.markercluster@1.5.3/dist/MarkerCluster.css",
    );
    ensureStylesheet(
      "https://unpkg.com/leaflet.markercluster@1.5.3/dist/MarkerCluster.Default.css",
    );

    let map;

    Promise.all([
      loadScript("https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"),
      loadScript("https://unpkg.com/leaflet.markercluster@1.5.3/dist/leaflet.markercluster.js"),
    ])
      .then(() => {
        const container = document.getElementById("partner-map");
        if (!container || !window.L || container.dataset.initialized === "true") {
          return;
        }

        container.dataset.initialized = "true";

        map = window.L.map(container, {
          worldCopyJump: true,
          zoomSnap: 0.25,
          zoomDelta: 0.5,
          zoomAnimation: true,
        });

        window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }).addTo(map);

        const clusterGroup = window.L.markerClusterGroup({
          showCoverageOnHover: false,
          maxClusterRadius: 42,
          spiderfyOnMaxZoom: true,
        });

        const icon = window.L.divIcon({
          className: "dyme-marker",
          html: `
            <div class="dyme-marker-shell">
              <img
                src="/assets/dobson-full-remake.avif"
                alt="DYME marker"
                onerror="this.onerror=null;this.src='/assets/dyme-logo.avif';"
              />
            </div>
          `,
          iconSize: [35, 35],
          iconAnchor: [17, 17],
          popupAnchor: [0, -18],
        });

        const bounds = [];

        partnerSchools.forEach((school) => {
          const marker = window.L.marker([school.lat, school.lng], { icon });
          const popupHtml = school.description
            ? `<div class="dyme-popup"><strong class="dyme-popup-name">${school.name}</strong><p class="dyme-popup-desc">${school.description}</p></div>`
            : `<strong>${school.name}</strong>`;
          marker.bindPopup(popupHtml, { maxWidth: 280 });
          clusterGroup.addLayer(marker);
          bounds.push([school.lat, school.lng]);
        });

        map.addLayer(clusterGroup);
        map.fitBounds(bounds, { padding: [44, 44] });
      })
      .catch((error) => {
        const fallback = document.getElementById("partner-map-fallback");
        if (fallback) {
          fallback.textContent = `Map failed to load: ${error.message}`;
        }
      });

    return () => {
      const container = document.getElementById("partner-map");
      if (container) {
        container.dataset.initialized = "false";
      }

      if (map) {
        map.remove();
      }
    };
  }, []);

  const partnerLogos = [
    { src: "/assets/logo-keiser.svg",   alt: "Keiser University" },
    { src: "/assets/logo-clark.svg",    alt: "Clark University" },
    { src: "/assets/logo-nic.png",      alt: "National Innovation Centre" },
    { src: "/assets/logo-stawa.png",    alt: "STAWA" },
    { src: "/assets/logo-haripur.jpg",  alt: "University of Haripur" },
    { src: "/assets/logo-iae.webp",     alt: "IAE Montpellier" },
    { src: "/assets/logo-deusto.gif",   alt: "Universidad de Deusto" },
    { src: "/assets/logo-momboy.jpg",   alt: "Universidad Valle del Momboy" },
    { src: "/assets/logo-conamype.jpeg",alt: "CONAMYPE" },
    { src: "/assets/logo-morelos.jpg",  alt: "Universidad Autónoma del Estado de Morelos" },
    { src: "/assets/logo-uabc.png",     alt: "Universidad Autónoma de Baja California" },
    { src: "/assets/logo-saej.svg",     alt: "South Asian Entrepreneurship & Education Foundation (SAEJ)" },
  ];

  return (
    <>
      <section className="partner-map-section reveal is-visible">
        <div className="partner-map-shell">
          <div className="partner-map-header">
            <h2>Partner Schools Implementing the DYME Teaching &amp; Learning Methodology</h2>
            <button
              className="map-theme-toggle"
              type="button"
              onClick={() => document.body.classList.toggle("map-dark-mode")}
            >
              Toggle dark mode
            </button>
          </div>
          <div className="partner-map-frame">
            <div id="partner-map" className="partner-map" />
            <p id="partner-map-fallback" className="partner-map-fallback" aria-live="polite" />
          </div>
        </div>
      </section>

      <section className="partner-logos-strip">
        <div className="partner-logos-track">
          {[...partnerLogos, ...partnerLogos].map((logo, i) => (
            <div key={i} className="partner-logo-item">
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function TeamPage({ page }) {
  return (
    <main className="team-page">
      <section className="team-hero reveal is-visible">
        <div className="team-hero-copy">
          <div className="hero-kicker">{page.eyebrow}</div>
          <h1>
            {page.title}
            <br />
            <span>At Dyme</span>
          </h1>
          <p className="hero-lead">{page.summary}</p>
        </div>
      </section>

      <section className="section">
        <div className="section-intro">
          <div className="eyebrow">Leadership and delivery</div>
          <h2>The people responsible for how the work gets built and delivered.</h2>
        </div>
        <div className="feature-grid">
          {page.cards.map((card) => (
            <article key={card.name} className="feature-card reveal is-visible">
              <div className="card-icon">{card.name.split(" ").map((part) => part[0]).join("")}</div>
              <h3>{card.name}</h3>
              <span className="mini-label">{card.role}</span>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

const RESEARCH_ARTICLES = [
  "Success Through Failure: The Construction of Entrepreneurial Skills",
  "Virtuous Cycle of Entrepreneurship: Developing a Student-Centric approach to Teaching and Learning Entrepreneurship",
  "Success Through Failure: Towards a Problem-Based Approach to Entrepreneurship Education (Columbia)",
  "Toward an Experiential Approach to Entrepreneurship Education",
  "DYME: A conceptual framework for understanding the entrepreneurial process",
  "Evaluating the Effectiveness of Entrepreneurship Education on Students' Entrepreneurial Intention: Case Study from Malaysia",
  "Flatline: Evaluating the Effectiveness of Entrepreneurship Education to Increase Students' Entrepreneurial Intention",
  "Virtuous Cycle of Entrepreneurship: Developing a Student-Centric approach to Teaching and Learning Entrepreneurship (Spanish)",
];

function LineChart({ title, lines, yMin, yMax }) {
  const W = 440, H = 260;
  const PL = 40, PR = 16, PT = 16, PB = 24;
  const cW = W - PL - PR;
  const cH = H - PT - PB;
  const yRange = yMax - yMin;
  const toX = (i, n) => PL + (i / (n - 1)) * cW;
  const toY = (v) => PT + cH - ((v - yMin) / yRange) * cH;
  const gridLines = [];
  for (let v = yMin; v <= yMax; v += 0.5) gridLines.push(v);
  const axisLabels = [];
  for (let v = yMin; v <= yMax; v += 1) axisLabels.push(v);
  return (
    <div className="chart-wrap">
      <p className="chart-title">{title}</p>
      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
        {gridLines.map(v => (
          <line key={v} x1={PL} y1={toY(v)} x2={W - PR} y2={toY(v)} stroke="#e0e0e0" strokeWidth="1" />
        ))}
        {axisLabels.map(v => (
          <text key={v} x={PL - 6} y={toY(v) + 4} textAnchor="end" fontSize="11" fill="#666">{v}</text>
        ))}
        {lines.map((line, i) => (
          <polyline
            key={i}
            points={line.data.map((v, j) => `${toX(j, line.data.length)},${toY(v)}`).join(" ")}
            stroke={line.color}
            strokeWidth="2.5"
            fill="none"
            strokeLinejoin="round"
          />
        ))}
      </svg>
    </div>
  );
}

function ResearchPage() {
  return (
    <main className="research-page">
      <section className="research-hero">
        <div className="research-hero-inner">
          <p className="research-hero-kicker">Research</p>
          <h1>An Evidence-based Approach</h1>
          <div className="research-gold-rule" />
          <p className="research-hero-sub">Grounded in data. Designed to transform how entrepreneurship is taught worldwide.</p>
        </div>
      </section>

      <section className="research-charts">
        <LineChart
          title="The Impact of Hypothetical-based courses on  students' Entrepreneurial Intention"
          yMin={3}
          yMax={7}
          lines={[
            { color: "#d46b3a", data: [5.5, 5.2, 4.9] },
            { color: "#8a8a8a", data: [4.6, 4.6, 4.5] },
            { color: "#c9b43a", data: [4.62, 4.56, 4.5] },
            { color: "#3a6bca", data: [3.8, 3.4, 3.0] },
          ]}
        />
        <LineChart
          title="Impact of Problem-based courses on  students' Entrepreneurial Intention"
          yMin={2}
          yMax={7}
          lines={[
            { color: "#3a6bca", data: [5.3, 5.9, 6.5] },
            { color: "#8a8a8a", data: [5.4, 5.8, 6.2] },
            { color: "#c9b43a", data: [4.9, 5.2, 5.5] },
            { color: "#d46b3a", data: [3.8, 4.5, 5.2] },
          ]}
        />
      </section>

      <section className="research-text-section">
        <h2>Investments in entrepreneurial education are<br />failing to develop entrepreneurs</h2>
        <div className="research-gold-rule" />
        <p>Our research was based on the hypothesis that, current entrepreneurship teaching methods are undermining entrepreneurial intention for students interested in becoming entrepreneurs. We explored the effectiveness of traditional teaching approaches, which tend to rely on developing business plans and models that focus on teaching students about entrepreneurship, against a Problem-Based learning approach that uses action-learning methodologies designed to teach students entrepreneurship.</p>
        <p>Using the Theory of Planned Behavior, which links one&apos;s beliefs with their behavior, we compared the changes in attitudes and intentions of students in two introductory entrepreneurship courses. We examined results within and between groups. Data was collected at the start, middle, and end of courses.</p>
        <p>Results support our hypothesis in that, current teaching approaches undermine students&apos; intention to become an entrepreneur. In contrast, exposing students to actual entrepreneurship results in statistically different outcomes. But the students must first learn the struggles and failures of entrepreneurship. Once they start figuring out product/market fit their attitudes and intentions about entrepreneurship go up. Students showed an increase in entrepreneurial activity at the end of the semester.</p>
      </section>

      <section className="research-articles">
        <h2>Explore Articles</h2>
        <div className="articles-grid">
          {RESEARCH_ARTICLES.map((articleTitle) => (
            <article key={articleTitle} className="article-card">
              <h3>{articleTitle}</h3>
              <button className="read-more-btn">Read More</button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function DetailPage({ page }) {
  return (
    <main className="team-page">
      <section className="team-hero reveal is-visible">
        <div className="team-hero-copy">
          <div className="hero-kicker">{page.eyebrow}</div>
          <h1>
            {page.title}
            <br />
            <span>By Dyme</span>
          </h1>
          <p className="hero-lead">{page.summary}</p>
        </div>
      </section>

      <section className="section">
        <div className="section-intro">
          <div className="eyebrow">Program structure</div>
          <h2>How this project is framed, delivered, and positioned for partners.</h2>
        </div>
        <div className="feature-grid">
          {page.cards.map((card) => (
            <article key={card.name} className="feature-card reveal is-visible">
              <div className="card-icon">{card.name.split(" ").map((part) => part[0]).join("")}</div>
              <h3>{card.name}</h3>
              <span className="mini-label">{card.role}</span>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function SiteFooter({ onNavigate }) {
  return (
    <footer className="site-footer">
        <div className="site-footer-inner">
          <div className="site-footer-brand">
            <img src="/assets/dyme-header-logo.png" alt="Dyme logo" />
          </div>

        <div className="site-footer-columns">
          <div className="footer-column">
            <h3>Quick Links</h3>
            <a href="/" onClick={onNavigate("/")}>Home</a>
            <a href="/#products" onClick={onNavigate("/#products", "products")}>About</a>
            <a href="/#system" onClick={onNavigate("/#system", "system")}>Projects</a>
            <a href="/research" onClick={onNavigate("/research")}>Research</a>
            <a href="/#launch" onClick={onNavigate("/#launch", "launch")}>Contact</a>
          </div>

          <div className="footer-column">
            <h3>Projects &amp; Resources</h3>
            <a
              href="/projects/main-street-entrepreneur"
              onClick={onNavigate("/projects/main-street-entrepreneur")}
            >
              Main Street Entrepreneur
            </a>
            <a href="/projects/re-entry" onClick={onNavigate("/projects/re-entry")}>Re-Entry</a>
            <a href="/projects/global" onClick={onNavigate("/projects/global")}>Global</a>
            <a href="/research" onClick={onNavigate("/research")}>Case Studies</a>
            <a href="/research" onClick={onNavigate("/research")}>Testimonials</a>
            <a href="/research" onClick={onNavigate("/research")}>Blog</a>
          </div>

          <div className="footer-column">
            <h3>Contact Us</h3>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Email: info@dymeinstitute.org</p>
            <p>123 Innovation Drive</p>
            <p>New York, NY 02134 USA</p>
          </div>

          <div className="footer-column">
            <h3>Follow Us</h3>
            <div className="footer-socials">
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
              <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X">x</a>
              <a href="https://www.youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">▶</a>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
            </div>
          </div>
        </div>

        <div className="site-footer-bottom">
          <p>© DYME Institute. All rights reserved.</p>
          <div className="site-footer-legal">
            <a href="/research" onClick={onNavigate("/research")}>Privacy Policy</a>
            <a href="/research" onClick={onNavigate("/research")}>Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function UpcomingEventsSection({ onNavigate }) {
  return (
    <section className="events-section">
      <div className="events-card">
        <div className="events-main">
          <h2>Upcoming Events</h2>
          <p>
            The DYME Institute offers a variety of training and development sessions.
            Check out and register for an upcoming event in your city.
          </p>
          <div className="events-actions">
            <a className="button button-gold" href="/#launch" onClick={onNavigate("/#launch", "launch")}>
              Sign Up
            </a>
            <a className="events-secondary" href="/research" onClick={onNavigate("/research")}>
              View All Events
            </a>
          </div>
        </div>
        <div className="events-side">
          <p>
            Not finding what you need?
            <br />
            <a href="/#launch" onClick={onNavigate("/#launch", "launch")}>Contact us</a> to
            customize a session.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── Partner With Us Page ─────────────────────────────────────────────────────

const partnerTypes = [
  {
    id: "school",
    icon: "🎓",
    title: "School Partner",
    tagline: "Bring entrepreneurship into the classroom",
    description:
      "License DYME's award-winning curriculum for your school or district. Our courses are culturally affirming, standards-aligned, and proven to accelerate student outcomes.",
    benefits: ["Full curriculum access", "Teacher training included", "Ongoing coaching support"],
    cta: "Explore School Partnerships",
  },
  {
    id: "community",
    icon: "🌱",
    title: "Community Partner",
    tagline: "Grow your community's entrepreneurial ecosystem",
    description:
      "Co-design programs that meet your community where they are — from youth entrepreneurship camps to adult re-entry cohorts. DYME provides the framework; you provide the roots.",
    benefits: ["Co-branded programming", "Shared impact reporting", "Bilingual facilitation"],
    cta: "Explore Community Partnerships",
  },
  {
    id: "funding",
    icon: "💡",
    title: "Funding Partner",
    tagline: "Invest in proven entrepreneurship education",
    description:
      "Support DYME's work with grants, sponsorships, or philanthropic investment. Every dollar funds direct programming for under-resourced communities across the globe.",
    benefits: ["Named program sponsorships", "Impact dashboards", "Annual donor recognition"],
    cta: "Become a Funding Partner",
  },
  {
    id: "research",
    icon: "🔬",
    title: "Research Partner",
    tagline: "Advance the science of entrepreneurial learning",
    description:
      "Collaborate with DYME's research team on studies, longitudinal data collection, or curriculum evaluation. We welcome university partnerships and think-tank collaborations.",
    benefits: ["Joint publications", "Data-sharing agreements", "IRB-compliant protocols"],
    cta: "Explore Research Partnerships",
  },
  {
    id: "government",
    icon: "🏛️",
    title: "Government Partner",
    tagline: "Scale workforce & economic development",
    description:
      "DYME works with municipal, state, and federal agencies to embed entrepreneurship in workforce development pipelines. We specialize in re-entry, immigrant services, and rural outreach.",
    benefits: ["Policy-aligned programming", "Multi-agency coordination", "Grant-ready documentation"],
    cta: "Connect With Us",
  },
  {
    id: "media",
    icon: "📡",
    title: "Media & Content Partner",
    tagline: "Amplify entrepreneurship stories",
    description:
      "Partner with DYME to tell powerful stories about the entrepreneurs we serve. From documentary features to podcast collaborations, your platform can help change the narrative.",
    benefits: ["Story access & interviews", "Co-produced content", "Impact-driven campaigns"],
    cta: "Pitch a Collaboration",
  },
];

const whyBenefits = [
  {
    stat: "15+",
    label: "Years of Impact",
    body: "Over a decade of refining what works — our methodology is grounded in real outcomes from real communities.",
  },
  {
    stat: "3,000+",
    label: "Entrepreneurs Trained",
    body: "From Miami to Mumbai, DYME graduates have launched ventures that create jobs and transform neighborhoods.",
  },
  {
    stat: "12",
    label: "Countries Reached",
    body: "A global network of partners proves DYME's model transcends borders, languages, and economic conditions.",
  },
  {
    stat: "95%",
    label: "Partner Retention Rate",
    body: "Partners don't leave — because results speak louder than promises. Our retention rate reflects genuine value.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Discovery Call",
    body: "A 30-minute conversation to understand your goals, community, and the type of partnership that fits best.",
  },
  {
    num: "02",
    title: "Custom Proposal",
    body: "We design a partnership structure tailored to your context — budget, timeline, and intended outcomes.",
  },
  {
    num: "03",
    title: "Agreement & Onboarding",
    body: "Sign a clear, transparent MOU. Then we orient your team, configure resources, and set shared milestones.",
  },
  {
    num: "04",
    title: "Program Launch",
    body: "DYME facilitators or your trained staff deliver the curriculum. We stay close, supporting every session.",
  },
  {
    num: "05",
    title: "Impact Review",
    body: "Regular check-ins and an end-of-cycle impact report keep both parties aligned on outcomes and next steps.",
  },
];

const partnerTestimonials = [
  {
    quote:
      "DYME's curriculum didn't just teach our students about business — it gave them a language for their own lived experience. The transformation was visible within weeks.",
    author: "School Principal",
    org: "Miami-Dade County Public Schools",
    initial: "M",
  },
  {
    quote:
      "We were skeptical of another 'entrepreneurship program,' but DYME proved different. Their model respects community wisdom and builds on it rather than replacing it.",
    author: "Executive Director",
    org: "Community Development Organization",
    initial: "E",
  },
  {
    quote:
      "The partnership process was refreshingly transparent. DYME set clear expectations, delivered on every promise, and the data they provided helped us make the case for renewed funding.",
    author: "Program Officer",
    org: "Regional Foundation",
    initial: "P",
  },
];

function PartnerPage({ onNavigate }) {
  const [formState, setFormState] = useState({
    name: "",
    org: "",
    email: "",
    partnerType: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showFloat, setShowFloat] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onScroll = () => setShowFloat(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;
    const els = document.querySelectorAll(".p-reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("p-visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <main className="pt-page">
      {/* ── Hero ── */}
      <section className="pt-hero">
        <div className="pt-hero-orb pt-hero-orb--1" />
        <div className="pt-hero-orb pt-hero-orb--2" />
        <div className="pt-hero-orb pt-hero-orb--3" />
        <div className="pt-hero-inner">
          <div className="pt-hero-text">
            <span className="pt-eyebrow">Partnership Opportunities</span>
            <h1 className="pt-hero-title">
              Build Something <br />
              <em>That Lasts</em>
            </h1>
            <p className="pt-hero-subtitle">
              DYME Institute partners with schools, communities, funders, and governments to bring
              world-class entrepreneurship education to those who need it most.
            </p>
            <div className="pt-hero-actions">
              <a className="pt-btn-primary" href="#pt-contact">
                Start a Partnership
              </a>
              <a className="pt-btn-outline" href="#pt-types">
                Explore Partner Types
              </a>
            </div>
          </div>
          <div className="pt-hero-visual">
            <div className="pt-hero-card pt-hero-card--back" />
            <div className="pt-hero-card pt-hero-card--mid" />
            <div className="pt-hero-card pt-hero-card--front">
              <div className="pt-hero-card-icon">🤝</div>
              <p className="pt-hero-card-label">Active Partners</p>
              <p className="pt-hero-card-num">30+</p>
              <p className="pt-hero-card-sub">across 12 countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="pt-stats">
        <div className="pt-stats-inner">
          {whyBenefits.map((b) => (
            <div key={b.stat} className="pt-stat-item">
              <span className="pt-stat-num">{b.stat}</span>
              <span className="pt-stat-label">{b.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Partnership Types ── */}
      <section className="pt-types" id="pt-types">
        <div className="pt-shell">
          <div className="pt-section-head p-reveal">
            <span className="pt-eyebrow">Who We Partner With</span>
            <h2 className="pt-section-title">Six Ways to Partner With DYME</h2>
            <p className="pt-section-sub">
              Every partnership is custom-designed — but these six models give you a starting point.
            </p>
          </div>
          <div className="pt-types-grid">
            {partnerTypes.map((pt, i) => (
              <article
                key={pt.id}
                className={`pt-type-card p-reveal p-reveal--d${(i % 3) + 1}`}
              >
                <span className="pt-type-icon">{pt.icon}</span>
                <h3 className="pt-type-title">{pt.title}</h3>
                <p className="pt-type-tagline">{pt.tagline}</p>
                <p className="pt-type-body">{pt.description}</p>
                <ul className="pt-type-benefits">
                  {pt.benefits.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <a className="pt-type-cta" href="#pt-contact">
                  {pt.cta} →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Partner split ── */}
      <section className="pt-why">
        <div className="pt-shell pt-why-inner">
          <div className="pt-why-left p-reveal">
            <span className="pt-eyebrow">Why DYME</span>
            <h2 className="pt-section-title pt-why-title">
              A Partner Built on <em>Proof</em>, Not Promise
            </h2>
            <p className="pt-why-body">
              DYME Institute has spent 15 years building a methodology that works in Miami and
              Mumbai, in classrooms and correctional facilities. Our partners don't have to take our
              word for it — they see it in their students, their communities, and their data.
            </p>
            <a className="pt-btn-primary" href="/research" onClick={onNavigate("/research")}>
              Read Our Research →
            </a>
          </div>
          <div className="pt-why-right">
            {whyBenefits.map((b, i) => (
              <div key={b.stat} className={`pt-why-card p-reveal p-reveal--d${i + 1}`}>
                <span className="pt-why-stat">{b.stat}</span>
                <div>
                  <p className="pt-why-card-label">{b.label}</p>
                  <p className="pt-why-card-body">{b.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process Timeline ── */}
      <section className="pt-process">
        <div className="pt-shell">
          <div className="pt-section-head p-reveal">
            <span className="pt-eyebrow">How It Works</span>
            <h2 className="pt-section-title">Five Steps to Partnership</h2>
            <p className="pt-section-sub">
              From first conversation to measurable impact — here is what you can expect.
            </p>
          </div>
          <div className="pt-process-track">
            <div className="pt-process-line" />
            {processSteps.map((step, i) => (
              <div
                key={step.num}
                className={`pt-process-step p-reveal p-reveal--d${(i % 3) + 1}`}
              >
                <div className="pt-process-node">
                  <span className="pt-process-num">{step.num}</span>
                </div>
                <div className="pt-process-body">
                  <h3 className="pt-process-title">{step.title}</h3>
                  <p className="pt-process-desc">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Programs ── */}
      <section className="pt-programs">
        <div className="pt-shell">
          <div className="pt-section-head p-reveal">
            <span className="pt-eyebrow">What Partners Access</span>
            <h2 className="pt-section-title">Featured Programs & Resources</h2>
            <p className="pt-section-sub">
              Download our program materials to see what DYME brings to every partnership.
            </p>
          </div>
          <div className="pt-programs-grid">
            {brochures.map((item, i) => (
              <article key={item.id} className={`pt-program-card p-reveal p-reveal--d${i + 1}`}>
                <span className="pt-program-badge">{item.badge}</span>
                <h3 className="pt-program-title">{item.title}</h3>
                {item.description && <p className="pt-program-desc">{item.description}</p>}
                <ul className="pt-program-list">
                  {item.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                {item.meta && <p className="pt-program-meta">{item.meta}</p>}
                <a
                  className="pt-program-download"
                  href={item.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  ↓ Download PDF
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="pt-testimonials">
        <div className="pt-shell">
          <div className="pt-section-head p-reveal">
            <span className="pt-eyebrow">Partner Voices</span>
            <h2 className="pt-section-title">What Our Partners Say</h2>
          </div>
          <div className="pt-testi-grid">
            {partnerTestimonials.map((t, i) => (
              <blockquote key={i} className={`pt-testi-card p-reveal p-reveal--d${i + 1}`}>
                <div className="pt-testi-quote-mark">"</div>
                <p className="pt-testi-body">{t.quote}</p>
                <footer className="pt-testi-footer">
                  <span className="pt-testi-avatar">{t.initial}</span>
                  <div>
                    <p className="pt-testi-author">{t.author}</p>
                    <p className="pt-testi-org">{t.org}</p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact Form ── */}
      <section className="pt-contact" id="pt-contact">
        <div className="pt-shell pt-contact-inner">
          <div className="pt-contact-left p-reveal">
            <span className="pt-eyebrow">Get in Touch</span>
            <h2 className="pt-section-title pt-contact-title">
              Ready to Start a <em>Conversation</em>?
            </h2>
            <p className="pt-contact-body">
              Fill out the form and a member of the DYME partnership team will reach out within two
              business days to schedule a discovery call.
            </p>
            <ul className="pt-contact-meta">
              <li>
                <span className="pt-contact-meta-icon">✉️</span>
                <a href="mailto:info@dymeinstitute.org">info@dymeinstitute.org</a>
              </li>
              <li>
                <span className="pt-contact-meta-icon">🌐</span>
                <span>dymeinstitute.org</span>
              </li>
              <li>
                <span className="pt-contact-meta-icon">📍</span>
                <span>Miami, FL · Operating Globally</span>
              </li>
            </ul>
          </div>
          <div className="pt-contact-right p-reveal p-reveal--d2">
            {formSubmitted ? (
              <div className="pt-form-success">
                <div className="pt-form-success-icon">✓</div>
                <h3 className="pt-form-success-title">Thank You!</h3>
                <p className="pt-form-success-body">
                  We received your message and will be in touch within two business days.
                </p>
              </div>
            ) : (
              <form className="pt-form" onSubmit={handleSubmit} noValidate>
                <div className="pt-form-row">
                  <div className="pt-form-group">
                    <label className="pt-form-label" htmlFor="pt-name">
                      Your Name *
                    </label>
                    <input
                      className="pt-form-input"
                      id="pt-name"
                      name="name"
                      type="text"
                      placeholder="Jane Smith"
                      value={formState.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="pt-form-group">
                    <label className="pt-form-label" htmlFor="pt-org">
                      Organization *
                    </label>
                    <input
                      className="pt-form-input"
                      id="pt-org"
                      name="org"
                      type="text"
                      placeholder="Your school / org"
                      value={formState.org}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="pt-form-group">
                  <label className="pt-form-label" htmlFor="pt-email">
                    Email Address *
                  </label>
                  <input
                    className="pt-form-input"
                    id="pt-email"
                    name="email"
                    type="email"
                    placeholder="jane@yourorg.org"
                    value={formState.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="pt-form-group">
                  <label className="pt-form-label" htmlFor="pt-type">
                    Partnership Type
                  </label>
                  <select
                    className="pt-form-input pt-form-select"
                    id="pt-type"
                    name="partnerType"
                    value={formState.partnerType}
                    onChange={handleChange}
                  >
                    <option value="">Select a type…</option>
                    {partnerTypes.map((pt) => (
                      <option key={pt.id} value={pt.id}>
                        {pt.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="pt-form-group">
                  <label className="pt-form-label" htmlFor="pt-message">
                    Tell Us About Your Goals
                  </label>
                  <textarea
                    className="pt-form-input pt-form-textarea"
                    id="pt-message"
                    name="message"
                    placeholder="What are you hoping to achieve? Who does your community serve?"
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                  />
                </div>
                <button className="pt-form-submit" type="submit">
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── Floating CTA ── */}
      <a
        className={`pt-float-cta ${showFloat ? "pt-float-cta--visible" : ""}`}
        href="#pt-contact"
      >
        Start a Partnership ↑
      </a>
    </main>
  );
}

export default function App() {
  const [pathname, setPathname] = useState(getCurrentPath);
  const [activeSection, setActiveSection] = useState(() => resolveActiveSection(getCurrentPath()));

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const handleLocationChange = () => {
      const nextPath = getCurrentPath();
      setPathname(nextPath);
      setActiveSection(resolveActiveSection(nextPath));
    };

    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("hashchange", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("hashchange", handleLocationChange);
    };
  }, []);

  useEffect(() => {
    if (pathname !== "/" || typeof window === "undefined" || !("IntersectionObserver" in window)) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.2, 0.45, 0.7],
      },
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [pathname]);

  const navigate = (href, section = "") => (event) => {
    if (typeof window === "undefined") {
      return;
    }

    event.preventDefault();
    window.history.pushState({}, "", href);
    setPathname(getCurrentPath());
    setActiveSection(section || resolveActiveSection(getCurrentPath()));

    window.requestAnimationFrame(() => {
      if (href.startsWith("/#")) {
        const target = document.getElementById(href.replace("/#", ""));
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  };

  const detailPage = teamPages[pathname] || projectPages[pathname] || researchPages[pathname];

  let pageContent;
  if (pathname === "/projects/global") {
    pageContent = <GlobalProjectsPage />;
  } else if (pathname === "/projects/re-entry") {
    pageContent = <ReEntryPage />;
  } else if (pathname === "/staff") {
    pageContent = <StaffPage />;
  } else if (pathname === "/directors") {
    pageContent = <DirectorsPage onNavigate={navigate} />;
  } else if (pathname === "/projects/main-street-entrepreneur") {
    pageContent = <MainStreetEntrepreneurPage onNavigate={navigate} />;
  } else if (pathname === "/research") {
    pageContent = <ResearchPage />;
  } else if (pathname === "/partner") {
    pageContent = <PartnerPage onNavigate={(href) => navigate(href)} />;
  } else if (detailPage) {
    pageContent = <DetailPage page={detailPage} />;
  } else {
    pageContent = <HomePage />;
  }

  return (
    <div className="site-shell">
      <Header
        activeSection={pathname === "/" ? activeSection : ""}
        onHomeNavigate={(section) => navigate(section === "home" ? "/" : `/#${section}`, section)}
        onDropdownNavigate={(child) => navigate(child.href || `/#${child.id}`, child.href ? "" : child.id)}
      />
      {pageContent}
      <UpcomingEventsSection onNavigate={(href, section = "") => navigate(href, section)} />
      <SiteFooter onNavigate={(href, section = "") => navigate(href, section)} />
    </div>
  );
}
