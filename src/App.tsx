import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Download,
  Menu,
  X,
} from "lucide-react";

const email = "ankushgarg7868@gmail.com";
const github = "https://github.com/ankushgarg44";
const linkedin = "https://linkedin.com/in/ankush-garg-22364227a";
const resume = "/Ankush_Garg_Resume.pdf";

const navigation = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

interface Project {
  number: string;
  kind: string;
  name: string;
  description: string;
  contribution: string;
  stack: string[];
  demo: string;
  source?: string;
  visual: "scout" | "resume" | "shortly";
}

const projects: Project[] = [
  {
    number: "01",
    kind: "Agentic AI",
    name: "Scout",
    description:
      "An admissions assistant that finds its way through 11 documents to answer multi-step questions.",
    contribution:
      "I designed tree-structured retrieval, built the LangGraph reasoning flow, and streamed responses from an async FastAPI backend.",
    stack: ["Python", "LangGraph", "FastAPI", "Next.js"],
    demo: "https://tietbot.netlify.app",
    visual: "scout",
  },
  {
    number: "02",
    kind: "AI product · Full stack",
    name: "ResumeAI",
    description:
      "A resume builder that turns structured experience into a resume tailored to a particular role.",
    contribution:
      "I built authenticated APIs, PostgreSQL-backed workflows, and a Groq-powered Smart Assembly feature, then containerized the app with Docker.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Groq", "Docker"],
    demo: "https://resume-ai-pi-ten.vercel.app",
    source: "https://github.com/ankushgarg44/ResumeAI",
    visual: "resume",
  },
  {
    number: "03",
    kind: "Cloud engineering",
    name: "Shortly",
    description:
      "A serverless URL shortener built for safe writes, consistent redirects, and straightforward operations.",
    contribution:
      "I provisioned the AWS stack with Terraform and added 22 unit tests, 4 live API tests, and GitHub Actions validation.",
    stack: ["Python", "AWS Lambda", "DynamoDB", "Terraform"],
    demo: "https://374znlei34.execute-api.us-east-1.amazonaws.com",
    source: "https://github.com/ankushgarg44/serverless-url-shortener",
    visual: "shortly",
  },
];

function ProjectVisual({ visual }: { visual: Project["visual"] }) {
  if (visual === "scout") {
    return (
      <div className="visual-content visual-scout" aria-hidden="true">
        <div className="scout-node scout-node-one">Admissions guide</div>
        <div className="scout-node scout-node-two">Programs</div>
        <div className="scout-node scout-node-three">Eligibility</div>
        <div className="scout-line scout-line-one" />
        <div className="scout-line scout-line-two" />
        <div className="scout-query">
          <span className="visual-dots">
            <i />
            <i />
            <i />
          </span>
          <span>How do I apply?</span>
        </div>
        <div className="scout-answer">
          <span className="answer-spark">✳</span>
          <div>
            <i />
            <i />
            <i />
          </div>
        </div>
        <span className="visual-caption">Retrieval → reasoning → answer</span>
      </div>
    );
  }

  if (visual === "resume") {
    return (
      <div className="visual-content visual-resume" aria-hidden="true">
        <div className="resume-sheet resume-sheet-back" />
        <div className="resume-sheet resume-sheet-front">
          <div className="sheet-name" />
          <div className="sheet-rule" />
          <div className="sheet-heading" />
          <div className="sheet-line sheet-line-long" />
          <div className="sheet-line" />
          <div className="sheet-line sheet-line-medium" />
          <div className="sheet-heading sheet-heading-second" />
          <div className="sheet-line sheet-line-long" />
          <div className="sheet-line sheet-line-medium" />
        </div>
        <div className="resume-ai-badge">
          <span>✳</span> Smart Assembly
        </div>
        <span className="visual-caption">From experience to opportunity</span>
      </div>
    );
  }

  return (
    <div className="visual-content visual-shortly" aria-hidden="true">
      <div className="url-long">https://example.com/a-very-long-link</div>
      <div className="url-connector">
        <span />
        <ArrowDown size={24} strokeWidth={1.5} />
        <span />
      </div>
      <div className="url-short">short.ly/8kP2x</div>
      <div className="cloud-orbit orbit-one" />
      <div className="cloud-orbit orbit-two" />
      <span className="cloud-label cloud-label-api">API Gateway</span>
      <span className="cloud-label cloud-label-data">DynamoDB</span>
      <span className="visual-caption">
        One link. A whole system behind it.
      </span>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`project-card project-card-${project.visual} reveal`}>
      <div className="project-art">
        <div className="project-art-top">
          <span>{project.number} / 03</span>
          <span>System sketch</span>
        </div>
        <ProjectVisual visual={project.visual} />
      </div>
      <div className="project-info">
        <span className="eyebrow">{project.kind}</span>
        <h3>{project.name}</h3>
        <p className="project-description">{project.description}</p>
        <p className="project-contribution">{project.contribution}</p>
        <div className="tag-list" aria-label={`${project.name} technologies`}>
          {project.stack.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            Live project <ArrowUpRight size={17} />
          </a>
          {project.source && (
            <a href={project.source} target="_blank" rel="noopener noreferrer">
              Source code <img className="link-icon" src="/github.svg" alt="" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px 40px 0px" }
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [menuOpen]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="site-shell">
        <header className="site-header">
          <a
            className="brand"
            href="#top"
            aria-label="Ankush Garg, back to top"
          >
            <span className="brand-mark">
              AG<span>.</span>
            </span>
            <span className="brand-name">Ankush Garg</span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <nav
            id="primary-navigation"
            className={menuOpen ? "nav-links is-open" : "nav-links"}
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              className="nav-resume"
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              Resume <ArrowUpRight size={15} />
            </a>
          </nav>
        </header>

        <main id="main">
          <section className="hero" id="top" aria-labelledby="hero-title">
            <div className="hero-copy">
              <div className="hero-kicker">
                <span className="kicker-line" /> SOFTWARE DEVELOPER · PATIALA,
                INDIA
              </div>
              <h1 id="hero-title">
                I build <em>useful</em>
                <br />
                software, end to end<span className="title-period">.</span>
              </h1>
              <p className="hero-intro">
                I&apos;m Ankush — I turn complex ideas into products people can
                use, from agentic assistants and full-stack applications to
                reliable cloud services.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">
                  Explore my work <ArrowUpRight size={19} />
                </a>
                <a className="button button-ghost" href={resume} download>
                  Download resume <Download size={18} />
                </a>
              </div>
              <div className="hero-rail">
                <span>AI systems</span>
                <span className="rail-plus">+</span>
                <span>Product engineering</span>
                <span className="rail-plus">+</span>
                <span>Cloud</span>
              </div>
            </div>
            <div
              className="hero-system"
              role="img"
              aria-label="Abstract illustration of Ankush's creative process: think, build, and ship software"
            >
              <div className="system-grid" />
              <div className="system-orbit system-orbit-outer" />
              <div className="system-orbit system-orbit-inner" />
              <div className="system-orbit-point system-orbit-point-one" />
              <div className="system-orbit-point system-orbit-point-two" />
              <div className="system-core">
                <span className="system-core-kicker">IN THE MAKING / 001</span>
                <strong className="system-monogram">
                  A<span>G</span>
                  <i>.</i>
                </strong>
                <span className="system-core-footer">
                  DESIGN / ENGINEER / SHIP
                </span>
              </div>
              <div className="system-step system-step-think">
                <span>01 / THINK</span>
                <strong>Find the problem</strong>
              </div>
              <div className="system-step system-step-build">
                <span>02 / BUILD</span>
                <strong>Make it real</strong>
              </div>
              <div className="system-step system-step-ship">
                <span>03 / SHIP</span>
                <strong>Put it in use</strong>
              </div>
              <div className="system-status">
                <span className="label-dot" /> Currently building{" "}
                <strong>The First Chapter</strong>
              </div>
              <span className="system-index">01 / BUILD MODE</span>
            </div>
            <a
              className="scroll-cue"
              href="#work"
              aria-label="Scroll to selected work"
            >
              <span>Scroll to explore</span>
              <ArrowDown size={16} />
            </a>
          </section>

          <section
            className="work-section section-frame"
            id="work"
            aria-labelledby="work-title"
          >
            <div className="section-heading reveal">
              <span className="section-index">01 / SELECTED WORK</span>
              <div className="section-heading-main">
                <h2 id="work-title">
                  Things I&apos;ve <em>built.</em>
                </h2>
                <p>
                  Three different problems. The same approach: understand the
                  details, build carefully, and ship something real.
                </p>
              </div>
            </div>
            <div className="projects-list">
              {projects.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </div>
          </section>

          <section
            className="experience-section section-frame"
            id="experience"
            aria-labelledby="experience-title"
          >
            <div className="section-heading reveal">
              <span className="section-index">02 / EXPERIENCE</span>
              <div className="section-heading-main">
                <h2 id="experience-title">
                  Work beyond <em>the demo.</em>
                </h2>
                <p>
                  Real requirements, real users, and responsibility beyond the
                  first commit.
                </p>
              </div>
            </div>
            <div className="experience-list">
              <article className="experience-item reveal">
                <div className="experience-date">
                  <span className="experience-dot" />
                  Current project
                </div>
                <div className="experience-detail">
                  <div className="experience-title-row">
                    <h3>The First Chapter</h3>
                    <span>School website project</span>
                  </div>
                  <p>
                    Building a responsive preschool website that helps families
                    explore programs, campuses, admissions, and parent
                    resources. Developing validated enquiry flows with Next.js,
                    TypeScript, Zod, and Supabase.
                  </p>
                  <div className="experience-tags">
                    <span>Next.js</span>
                    <span>TypeScript</span>
                    <span>Supabase</span>
                  </div>
                </div>
              </article>
              <article className="experience-item reveal">
                <div className="experience-date">
                  <span className="experience-dot" />
                  Jun – Jul 2026
                </div>
                <div className="experience-detail">
                  <div className="experience-title-row">
                    <h3>Infonza Innovations</h3>
                    <span>Software Development Intern</span>
                  </div>
                  <p>
                    Owned delivery of a product and billing management system
                    for GTA Industries, including a PostgreSQL-backed catalog,
                    persistent multi-customer drafts, transaction search, and
                    localized PDFs.
                  </p>
                  <div className="experience-tags">
                    <span>Client project</span>
                    <span>PostgreSQL</span>
                    <span>Product delivery</span>
                  </div>
                </div>
              </article>
            </div>
          </section>

          <section
            className="about-section section-frame"
            id="about"
            aria-labelledby="about-title"
          >
            <div className="section-heading reveal">
              <span className="section-index">03 / ABOUT ME</span>
              <div className="section-heading-main">
                <h2 id="about-title">
                  Curious by default. <em>Builder by choice.</em>
                </h2>
              </div>
            </div>
            <div className="about-grid">
              <div className="about-story reveal">
                <p>
                  I&apos;m an Electronics and Communication Engineering student
                  at Thapar Institute of Engineering and Technology. I enjoy the
                  whole path from figuring out a problem to designing an
                  interface, wiring up its backend, and making it dependable.
                </p>
                <p>
                  My recent work spans LangGraph agents, AI-assisted product
                  workflows, serverless AWS infrastructure, and websites built
                  around real user needs.
                </p>
                <a className="text-link" href={`mailto:${email}`}>
                  Let&apos;s talk about what you&apos;re building{" "}
                  <ArrowUpRight size={18} />
                </a>
              </div>
              <div className="about-facts reveal">
                <div className="fact-row">
                  <span>Education</span>
                  <strong>
                    B.E., Electronics & Communication
                    <br />
                    Thapar Institute · 2023–2027
                  </strong>
                </div>
                <div className="fact-row">
                  <span>Based in</span>
                  <strong>Patiala, Punjab, India</strong>
                </div>
                <div className="fact-row">
                  <span>What I use</span>
                  <strong>
                    Python · TypeScript · React · FastAPI
                    <br />
                    PostgreSQL · AWS · Docker
                  </strong>
                </div>
              </div>
            </div>
          </section>

          <section
            className="contact-section section-frame"
            id="contact"
            aria-labelledby="contact-title"
          >
            <div className="contact-inner reveal">
              <span className="section-index">04 / LET&apos;S CONNECT</span>
              <h2 id="contact-title">
                Have an idea worth <em>building?</em>
              </h2>
              <p>
                I&apos;m always happy to talk about software, interesting
                problems, and opportunities to build things that matter.
              </p>
              <a className="contact-email" href={`mailto:${email}`}>
                {email}
                <ArrowUpRight size={31} />
              </a>
              <div className="contact-links">
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <img className="link-icon" src="/github.svg" alt="" /> GitHub{" "}
                  <ArrowUpRight size={15} />
                </a>
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                  <img className="link-icon" src="/linkedin.svg" alt="" />{" "}
                  LinkedIn <ArrowUpRight size={15} />
                </a>
                <a href={resume} target="_blank" rel="noopener noreferrer">
                  <Download size={18} /> Resume <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer className="site-footer">
          <a className="footer-brand" href="#top">
            AG<span>.</span>
          </a>
          <span>
            © {new Date().getFullYear()} Ankush Garg. Built with intention.
          </span>
          <a href="#top">
            Back to top <ArrowRight size={16} />
          </a>
        </footer>
      </div>
    </>
  );
}

export default App;
