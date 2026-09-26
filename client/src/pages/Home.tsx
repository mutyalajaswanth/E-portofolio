import { ArrowDown, ArrowUpRight, Braces, Cpu, ExternalLink, Github, Linkedin, Mail, MapPin, Sparkles, Terminal, Users, Wrench } from "lucide-react";

const projects = [
  {
    number: "01",
    type: "Assistive technology · Arduino",
    title: "Morse / Vibration Communicator",
    description: "A tactile communication prototype that converts keyboard input into Morse code and communicates it through a vibration motor — designed with deafblind users in mind.",
    tags: ["Arduino Uno", "C / C++", "Human-centered"],
    icon: Cpu,
    accent: "lime",
  },
  {
    number: "02",
    type: "Sustainability · Product concept",
    title: "Eco-Alternative Recommender",
    description: "A shopping companion that suggests a more sustainable alternative, gives each option an eco-score, and explains the environmental trade-offs behind the recommendation.",
    tags: ["Python", "Product thinking", "Data science"],
    icon: Sparkles,
    accent: "blue",
  },
];

const skills = [
  ["01", "Languages", "C · C++ · Python · Java"],
  ["02", "Build mindset", "Prototype · Iterate · Explain"],
  ["03", "Game direction", "Systems · Interactions · Worlds"],
  ["04", "Hardware", "Arduino · Inputs · Vibration"],
];

export default function Home({ onNavigate }: { onNavigate: (id: string) => void }) {
  return (
    <>
      <section className="hero" id="top">
        <div className="hero-grid" />
        <div className="hero-ambient hero-ambient--one" />
        <div className="hero-ambient hero-ambient--two" />
        <div className="hero-content page-wrap">
          <div className="eyebrow reveal"><span className="eyebrow-line" /> Available for opportunities <span className="status-dot" /></div>
          <h1 className="hero-title reveal reveal-delay-1">Building worlds<br /><em>with purpose.</em></h1>
          <p className="hero-copy reveal reveal-delay-2">I’m <strong>Jaswanth</strong> — a Computer Science & Data Science student exploring game development, interactive systems, and technology that makes a difference.</p>
          <div className="hero-actions reveal reveal-delay-3">
            <button className="button button--primary" onClick={() => onNavigate("work")}>Explore my work <ArrowDown size={16} /></button>
            <a className="button button--ghost" href="mailto:jaswanthmutyala8@gmail.com">Let’s connect <ArrowUpRight size={16} /></a>
          </div>
          <div className="hero-meta reveal reveal-delay-3">
            <span><MapPin size={14} /> Hyderabad, India</span>
            <span className="meta-divider" />
            <span>Game developer in progress</span>
          </div>
        </div>
        <div className="hero-index">01 <span>/</span> 04</div>
        <button className="scroll-cue" onClick={() => onNavigate("work")}><span>Scroll to explore</span><ArrowDown size={15} /></button>
      </section>

      <section className="intro-section section-pad" id="about">
        <div className="page-wrap intro-layout">
          <div className="section-kicker"><span>01</span> / About me</div>
          <div className="intro-body">
            <h2 className="section-title">Curious by default.<br /><span>Intentional by design.</span></h2>
            <p className="large-copy">I like taking ideas from a blank page to something you can touch, test, and remember. My projects sit at the intersection of <strong>code, people, and possibility</strong> — from tactile communication to greener ways of shopping.</p>
            <p className="muted-copy">I’m currently studying Computer Science & Engineering — Data Science at MLR Institute of Technology and looking for opportunities to grow as a game developer and technical creator.</p>
            <div className="link-row">
              <a href="https://www.linkedin.com/in/mutyala-naga-venkata-sai-jaswanth-7447b729" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={15} /></a>
              <a href="https://github.com/mutyalajaswanth" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} /></a>
            </div>
          </div>
          <div className="side-note"><span className="side-note-mark">✳</span><span>Making thoughtful things<br />for curious people.</span></div>
        </div>
      </section>

      <section className="work-section section-pad" id="work">
        <div className="page-wrap">
          <div className="section-heading-row">
            <div className="section-kicker"><span>02</span> / Selected work</div>
            <span className="section-count">02 projects / academic work</span>
          </div>
          <div className="projects-list">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <article className={`project-card project-card--${project.accent}`} key={project.number}>
                  <div className="project-topline"><span>{project.number}</span><span>{project.type}</span><Icon size={19} strokeWidth={1.5} /></div>
                  <div className="project-body">
                    <div className="project-visual" aria-hidden="true"><div className="visual-noise" /><Icon className="project-visual-icon" size={80} strokeWidth={0.7} /><span className="visual-label">J / {project.number}</span></div>
                    <div className="project-info"><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a className="text-link" href="mailto:jaswanthmutyala8@gmail.com?subject=Project%20conversation">Discuss this project <ArrowUpRight size={15} /></a></div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="skills-section section-pad">
        <div className="page-wrap skills-layout">
          <div className="section-kicker"><span>03</span> / Toolkit</div>
          <div className="skills-content"><h2 className="section-title">A toolkit built<br /><span>for the next level.</span></h2><div className="skills-grid">{skills.map(([num, title, detail]) => <div className="skill-item" key={num}><span className="skill-number">{num}</span><div><h4>{title}</h4><p>{detail}</p></div></div>)}</div></div>
        </div>
      </section>

      <section className="journey-section section-pad" id="journey">
        <div className="page-wrap">
          <div className="section-kicker"><span>04</span> / Journey so far</div>
          <div className="journey-grid">
            <div><h2 className="section-title">Still learning.<br /><span>Already building.</span></h2><p className="large-copy">The best work starts as a question. Mine usually sound like: “What if this were more human?” or “How could this be more fun?”</p></div>
            <div className="timeline">
              <div className="timeline-item"><span className="timeline-year">Now</span><div><h4>B.Tech · CSE — Data Science</h4><p>MLR Institute of Technology · Hyderabad</p></div></div>
              <div className="timeline-item"><span className="timeline-year">Club</span><div><h4>Squad Club · Technical Member</h4><p>Collaborating, learning, and contributing in the technical domain.</p></div></div>
              <div className="timeline-item"><span className="timeline-year">Next</span><div><h4>Game development</h4><p>Deepening skills in systems, gameplay, and interactive storytelling.</p></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-orbit contact-orbit--one" /><div className="contact-orbit contact-orbit--two" />
        <div className="page-wrap contact-inner"><div className="section-kicker section-kicker--light"><span>05</span> / Contact</div><h2>Have a world<br /><em>to build?</em></h2><p>Let’s turn a good idea into something people can feel.</p><a className="button button--light" href="mailto:jaswanthmutyala8@gmail.com">Start a conversation <ArrowUpRight size={17} /></a><div className="contact-details"><a href="mailto:jaswanthmutyala8@gmail.com"><Mail size={15} /> jaswanthmutyala8@gmail.com</a><a href="https://github.com/mutyalajaswanth" target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a><a href="https://www.linkedin.com/in/mutyala-naga-venkata-sai-jaswanth-7447b729" target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn</a></div></div>
      </section>
    </>
  );
}
