type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  url?: string;
  color?: string;
};

function ProjectCard({ title, description, tech, url, color }: ProjectCardProps) {
  return (
    <article
      className="project-card"
      style={{
        backgroundColor: color ?? '#ffffff',
        borderColor: color ?? '#e2e8f0',
      }}
    >
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="project-meta">
        <span>{tech.join(' · ')}</span>
        {url ? (
          <a className="project-link" href={url} target="_blank" rel="noreferrer">
            Link
          </a>
        ) : null}
      </div>
    </article>
  );
}

export default ProjectCard;
