import { useEffect, useState } from "react";

const projects = [
  {
    context: "Master's thesis · TUM",
    title: "Anatomy-Aware 3D Shape Completion",
    description:
      "Adapting a generative diffusion model to reconstruct complete lumbar spines from sparse, partial point clouds while preserving meaningful anatomical structure.",
    tags: ["PyTorch", "Diffusion models", "Sparse octrees", "3D geometry"],
  },
  {
    context: "Practical course · TUM",
    title: "Dynamic Human Avatar Reconstruction",
    description:
      "Reconstructing dynamic 3D human avatars from multi-view RGB video by combining Gaussian Splatting with deformation modeling.",
    tags: ["Gaussian Splatting", "Multi-view video", "Deformation models"],
  },
  {
    context: "Visual navigation · TUM",
    title: "Visual SLAM from the Ground Up",
    description:
      "Implementing core components of a visual navigation pipeline in C++ to better understand camera geometry, localization, mapping, and optimization.",
    tags: ["C++", "SLAM", "Camera geometry", "Optimization"],
    href: "https://github.com/vladb99/Visual-based-Navigation",
  },
];

const experience = [
  {
    company: "Rohde & Schwarz",
    role: "Working Student — Software Engineering",
    period: "Mar 2024 — Present",
    description:
      "Integration testing for production radio-monitoring software and development of a containerized geospatial radio-analysis platform.",
  },
  {
    company: "IAV",
    role: "Working Student — Machine Learning Engineering",
    period: "Nov 2022 — Jan 2024",
    description:
      "Development of an AWS-based platform for running computer-vision models on user-uploaded images.",
  },
  {
    company: "couchbits",
    role: "Working Student — Mobile Software Engineering",
    period: "Sep 2020 — Aug 2021",
    description:
      "Mobile application development and CI/CD pipelines for automated builds and deployment.",
  },
];

const education = [
  {
    school: "Technical University of Munich",
    degree: "M.Sc. Robotics, Cognition, Intelligence",
    period: "2023 — Expected 2026",
    details:
      "Selected coursework: Machine Learning for 3D Geometry, Multiple View Geometry, and Visual-Based Navigation.",
  },
  {
    school: "HTWG Konstanz",
    degree: "B.Sc. Applied Computer Science",
    period: "2019 — 2023",
    details:
      "Graduated with grade 1.3. Bachelor's thesis on deep-learning-based gender recognition of vehicle occupants.",
  },
];

const skills = [
  "Python",
  "PyTorch",
  "C++",
  "3D computer vision",
  "Diffusion models",
  "Gaussian Splatting",
  "Docker",
  "AWS",
  "Linux",
];

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("portfolio-theme");
    if (storedTheme === "dark") {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#about">
            Vlad Bratulescu
          </a>
          <nav aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
          </nav>
          <button
            className="theme-toggle"
            type="button"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            <span aria-hidden="true">◐</span>
            {theme === "light" ? "Dark" : "Light"}
          </button>
        </div>
      </header>

      <main>
        <section className="hero container" id="about">
          <div className="hero-copy">
            <p className="kicker">Machine learning & software engineering</p>
            <h1>Hi, I&apos;m Vlad Bratulescu.</h1>
            <p className="hero-lead">
              I am an M.Sc. candidate in Robotics, Cognition, Intelligence at
              TUM, with professional software engineering experience and a
              focus on 3D machine learning and computer vision.
            </p>
            <p className="hero-about">
              My work sits between machine learning research and software
              engineering. I enjoy understanding methods from first principles,
              turning them into working systems, and building the tools needed
              to compare and debug results.
            </p>
            <ul className="skill-list" aria-label="Selected skills">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
            <div className="link-row">
              <a
                className="primary-link"
                href="https://github.com/vladb99"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/vlad-bratulescu-186a55215/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </section>

        <section className="section container" id="education">
          <div className="section-heading">
            <p className="section-label">Education</p>
            <h2>Academic background</h2>
          </div>
          <div className="row-list">
            {education.map((item) => (
              <article className="detail-row" key={item.school}>
                <p className="period">{item.period}</p>
                <div>
                  <h3>{item.school}</h3>
                  <p className="subtitle">{item.degree}</p>
                </div>
                <p className="description">{item.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section container" id="projects">
          <div className="section-heading">
            <p className="section-label">Projects</p>
            <h2>Selected work</h2>
            <p>
              A selection of research and course projects in 3D reconstruction,
              generative modeling, and visual navigation.
            </p>
          </div>
          <div className="project-list">
            {projects.map((project) => {
              const projectContent = (
                <>
                  <p className="project-context">{project.context}</p>
                  <h3>{project.title}</h3>
                  <p className="description">{project.description}</p>
                  <ul className="tag-list" aria-label="Technologies">
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  {project.href && (
                    <span className="card-link">View project ↗</span>
                  )}
                </>
              );

              return project.href ? (
                <a
                  className="project-row linked-card"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  key={project.title}
                >
                  <div className="project-copy">{projectContent}</div>
                  <div
                    className="project-media"
                    role="img"
                    aria-label={`${project.title} image placeholder`}
                  >
                    <span>Project image</span>
                  </div>
                </a>
              ) : (
                <article className="project-row" key={project.title}>
                  <div className="project-copy">{projectContent}</div>
                  <div
                    className="project-media"
                    role="img"
                    aria-label={`${project.title} image placeholder`}
                  >
                    <span>Project image</span>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section container" id="experience">
          <div className="section-heading">
            <p className="section-label">Experience</p>
            <h2>Professional experience</h2>
          </div>
          <div className="row-list">
            {experience.map((item) => (
              <article className="detail-row" key={item.company}>
                <p className="period">{item.period}</p>
                <div>
                  <h3>{item.company}</h3>
                  <p className="subtitle">{item.role}</p>
                </div>
                <p className="description">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact container">
          <p className="section-label">Contact</p>
          <h2>Let&apos;s connect.</h2>
          <p>
            The easiest way to reach me is through LinkedIn or GitHub.
          </p>
          <div className="link-row">
            <a
              className="primary-link"
              href="https://www.linkedin.com/in/vlad-bratulescu-186a55215/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/vladb99"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </section>
      </main>

      <footer className="container">
        <span>© {new Date().getFullYear()} Vlad Bratulescu</span>
        <a href="#about">Back to top ↑</a>
      </footer>
    </>
  );
}
