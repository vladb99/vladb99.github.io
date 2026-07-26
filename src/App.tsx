const projects = [
  {
    number: "01",
    eyebrow: "Master's thesis · TUM",
    title: "Anatomy-Aware 3D Shape Completion",
    description:
      "Adapting a generative diffusion model to reconstruct complete lumbar spines from sparse, partial point clouds while preserving meaningful anatomical structure.",
    tags: ["PyTorch", "Diffusion", "Sparse octrees", "3D geometry"],
    className: "project-card--spine",
  },
  {
    number: "02",
    eyebrow: "Practical course · TUM",
    title: "Dynamic Human Avatar Reconstruction",
    description:
      "Reconstructing dynamic 3D human avatars from multi-view RGB video by combining Gaussian Splatting with deformation modeling.",
    tags: ["Gaussian Splatting", "Multi-view video", "Deformation models"],
    className: "project-card--avatar",
  },
  {
    number: "03",
    eyebrow: "Visual navigation · TUM",
    title: "Visual SLAM from the Ground Up",
    description:
      "Implementing core components of a visual navigation pipeline in C++ to understand camera geometry, localization, mapping, and optimization beyond high-level library calls.",
    tags: ["C++", "SLAM", "Camera geometry", "Optimization"],
    className: "project-card--slam",
    href: "https://github.com/vladb99/Visual-based-Navigation",
  },
];

const experience = [
  {
    company: "Rohde & Schwarz",
    role: "Working Student — Software Engineering",
    period: "2024 — Present",
    description:
      "Integration testing for production radio-monitoring software and development of a containerized geospatial radio-analysis platform.",
  },
  {
    company: "IAV",
    role: "Working Student — Machine Learning Engineering",
    period: "2022 — 2024",
    description:
      "Development of an AWS-based platform for running computer-vision models on user-uploaded images.",
  },
  {
    company: "couchbits",
    role: "Working Student — Mobile Software Engineering",
    period: "2020 — 2021",
    description:
      "Mobile application development and CI/CD pipelines for automated builds and deployment.",
  },
];

const skills = [
  "Python",
  "PyTorch",
  "C++",
  "3D computer vision",
  "Diffusion models",
  "Gaussian Splatting",
  "Point clouds",
  "Docker",
  "AWS",
  "Linux",
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Vlad Bratulescu, home">
          <span className="brand-mark">VB</span>
          <span>Vlad Bratulescu</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
        </nav>
        <a
          className="header-link"
          href="https://github.com/vladb99"
          target="_blank"
          rel="noreferrer"
        >
          GitHub <Arrow />
        </a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" aria-hidden="true" />
              Munich · Machine learning & software
            </p>
            <h1 id="hero-title">
              Building intelligent systems for{" "}
              <span>complex 3D worlds.</span>
            </h1>
            <p className="hero-intro">
              I am an M.Sc. candidate in Robotics, Cognition, Intelligence at
              TUM, working across 3D machine learning, computer vision, and
              production software engineering.
            </p>
            <div className="hero-actions">
              <a className="button button--primary" href="#work">
                Explore selected work
              </a>
              <a
                className="button button--secondary"
                href="https://www.linkedin.com/in/vlad-bratulescu-186a55215/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <Arrow />
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Abstract 3D system graphic">
            <div className="visual-grid" />
            <div className="orbit orbit--outer">
              <span className="orbit-node orbit-node--one" />
              <span className="orbit-node orbit-node--two" />
            </div>
            <div className="orbit orbit--inner">
              <span className="orbit-node orbit-node--three" />
            </div>
            <div className="visual-core">
              <span className="visual-core-label">3D</span>
              <span>ML systems</span>
            </div>
            <div className="visual-caption visual-caption--top">
              Geometry
              <span>01</span>
            </div>
            <div className="visual-caption visual-caption--bottom">
              Intelligence
              <span>02</span>
            </div>
          </div>
        </section>

        <section className="signal-strip" aria-label="Areas of focus">
          <span>Generative 3D models</span>
          <span>Computer vision</span>
          <span>Reliable ML workflows</span>
          <span>Software systems</span>
        </section>

        <section className="section" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 id="work-title">Research that becomes a system.</h2>
            </div>
            <p>
              Projects spanning geometry, generative modeling, visual
              navigation, and the engineering needed to evaluate them
              systematically.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => {
              const content = (
                <>
                  <div className="project-topline">
                    <span>{project.number}</span>
                    <span>{project.eyebrow}</span>
                  </div>
                  <div
                    className={`project-graphic ${project.className}`}
                    aria-hidden="true"
                  >
                    <span className="graphic-line graphic-line--one" />
                    <span className="graphic-line graphic-line--two" />
                    <span className="graphic-node graphic-node--one" />
                    <span className="graphic-node graphic-node--two" />
                    <span className="graphic-label">{project.number}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul className="tag-list" aria-label="Technologies">
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  {project.href && (
                    <span className="project-link">
                      View project <Arrow />
                    </span>
                  )}
                </>
              );

              return project.href ? (
                <a
                  className="project-card project-card--linked"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  key={project.number}
                >
                  {content}
                </a>
              ) : (
                <article className="project-card" key={project.number}>
                  {content}
                </article>
              );
            })}
          </div>
        </section>

        <section
          className="section experience-section"
          id="experience"
          aria-labelledby="experience-title"
        >
          <div className="section-heading section-heading--compact">
            <div>
              <p className="eyebrow">Experience</p>
              <h2 id="experience-title">From research code to real software.</h2>
            </div>
          </div>

          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-row" key={item.company}>
                <p className="timeline-period">{item.period}</p>
                <div>
                  <h3>{item.company}</h3>
                  <p className="timeline-role">{item.role}</p>
                </div>
                <p className="timeline-description">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="about-copy">
            <p className="eyebrow">About</p>
            <h2>Curious about the model—and everything around it.</h2>
            <p>
              My work sits between machine learning research and software
              engineering. I enjoy understanding methods from first principles,
              turning them into working systems, and building the tools needed
              to compare, debug, and communicate results.
            </p>
            <p>
              I am currently completing my master&apos;s degree at the Technical
              University of Munich.
            </p>
          </div>
          <ul className="skill-cloud" aria-label="Selected skills">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section className="contact-section" aria-labelledby="contact-title">
          <p className="eyebrow">Let&apos;s connect</p>
          <h2 id="contact-title">
            Interested in 3D intelligence and robust ML systems.
          </h2>
          <div className="contact-links">
            <a
              href="https://github.com/vladb99"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <Arrow />
            </a>
            <a
              href="https://www.linkedin.com/in/vlad-bratulescu-186a55215/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <Arrow />
            </a>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Vlad Bratulescu</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}
