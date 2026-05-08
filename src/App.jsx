import ProjectCard from './components/ProjectCard';
import './App.scss';
import { projects } from './data/projects';
import profilePic from './images/me.jpeg';

const skills = [
  { cat: 'Lenguajes', items: [['JavaScript', true], ['Python', true], ['SQL', false], ['PHP', false], ['Java', false]] },
  { cat: 'Frontend',  items: [['React.js', true], ['Vue.js', true], ['Tailwind', false], ['HTML5/CSS3', false], ['Bootstrap', false]] },
  { cat: 'Backend',   items: [['Django / DRF', true], ['Node.js', false], ['PHP nativo', false], ['PostgreSQL', false]] },
  { cat: 'Tools',     items: [['Git / GitHub', false], ['SCRUM', false], ['Postman', false], ['PowerShell', false], ['WordPress', false]] },
];

function App() {
  return (
    <div className="port">

      <header className="hdr">
        <div className="hdr-top">
          <span className="tag">Portfolio — 2026</span>
          <span className="status"><span className="dot" />disponible</span>
        </div>
        <h1>Gerard<br /><em>Sánchez</em></h1>
        <p className="subtitle">FULLSTACK DEVELOPER &nbsp;/&nbsp; REACT + DJANGO &nbsp;/&nbsp; IA INTEGRATION</p>
        <div className="hdr-meta">
          
          <div className="meta-item">ubicación <span>Sant Joan Despí, BCN</span></div>
          <div className="meta-item">contacto <span>gerysnz@gmail.com</span></div>
          <div className="meta-item">idiomas <span>CA / ES / EN B2</span></div>
        </div>
        <div className="hero-photo-wrap">
          <img src={profilePic} alt="Gerard Sánchez" className="hero-photo" />
        </div>
        <div className="nav-links">
          <a href="https://www.linkedin.com/in/gerard-sanchez-618aa0377/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="https://github.com/Gerysnz" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </header>

      <section className="about">
        <span className="section-label">Perfil</span>
        <p className="about-text">
          Desarrollador recién graduado con mentalidad de <strong>"problem solver"</strong>.
          Me especializo en construir SPAs con React y Django, integrar modelos de IA
          y orquestar APIs complejas. Acostumbrado a entornos SCRUM y
          a aprender rápido lo que haga falta.
        </p>
      </section>

      <section className="skills">
        <span className="section-label">Stack</span>
        <div className="skills-grid">
          {skills.map(({ cat, items }) => (
            <div className="skill-row" key={cat}>
              <span className="skill-cat">{cat}</span>
              <div className="skill-tags">
                {items.map(([name, hot]) => (
                  <span className={`stag${hot ? ' hot' : ''}`} key={name}>{name}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="projects">
        <div className="proj-header">
          <span className="section-label">Proyectos</span>
        </div>
        <div className="proj-list">
          {projects.map((p) => (
            <ProjectCard key={p.num} {...p} />
          ))}
        </div>
      </section>

      <section className="exp">
        <span className="section-label">Experiencia</span>
        <div className="exp-list">
          <div className="exp-item">
            <div className="exp-meta">OCT 2025 — ABR 2026 · 515h FCT</div>
            <div className="exp-title">Desarrollador Web & Sistemas</div>
            <div className="exp-company">Plural Informática</div>
            <p className="exp-desc">Desarrollo de herramientas ERP internas, apps a medida, gestión de servidores y Google Workspace. Despliegue de sitios corporativos con WordPress/Elementor.</p>
          </div>
          
        </div>
      </section>

      <footer className="main-footer">
        <span className="section-label">Contacto</span>
        <div>
          <p className="footer-cta">¿Tienes un proyecto? Hablamos.</p>
          <div className="footer-links">
            <a href="mailto:gerysnz@gmail.com">gerysnz@gmail.com</a>
            <a href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/Gerysnz" target="_blank" rel="noreferrer">GitHub</a>
          </div>
          <p className="footer-note">Sant Joan Despí · Barcelona · 2026</p>
        </div>
      </footer>

    </div>
  );
}

export default App;