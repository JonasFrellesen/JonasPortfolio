import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const semesterOrder = [
  'First semester',
  'Second semester',
  'Third semester',
  'Fourth semester',
  'Fifth semester',
  'Sixth semester',
  'Seventh semester',
  'Eighth semester',
  'Ninth semester',
  '10. semester',
];

function semesterToId(semester: string) {
  return semester
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

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
  '#cffafe',
];

const projectsBySemester = semesterOrder
  .map((semester) => ({
    semester,
    projects: projects.filter((project) => project.semester === semester),
  }))
  .filter((group) => group.projects.length > 0);

function Projects() {
  let projectColorIndex = 0;

  return (
    <section id="projects" className="section-card">
      <div className="section-header">
        <span className="section-label">Projects</span>
        <h2>Selected Work</h2>
      </div>
      <div className="semester-list">
        {projectsBySemester.map((group) => (
          <section key={group.semester} id={semesterToId(group.semester)} className="semester-group">
            <h3 className="semester-title">{group.semester}</h3>
            <div className="projects-grid">
              {group.projects.map((project) => {
                const { semester, ...projectData } = project;
                const projectColor = projectColors[projectColorIndex % projectColors.length];
                projectColorIndex += 1;

                return (
                  <ProjectCard
                    key={project.title}
                    {...projectData}
                    color={projectColor}
                  />
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

export default Projects;
