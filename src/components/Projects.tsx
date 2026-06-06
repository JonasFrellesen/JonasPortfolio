import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const projectColors = [
  '#e0f2fe',
  '#d1fae5',
  '#fce7f3',
  '#fef9c3',
  '#ede9fe',
  '#f0fdfa',
  '#fef2f2',
  '#fef3c7',
  '#e9d5ff',
];

function Projects() {
  return (
    <section id="projects" className="section-card">
      <div className="section-header">
        <span className="section-label">Projects</span>
        <h2>Selected Work</h2>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            {...project}
            color={projectColors[index % projectColors.length]}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
