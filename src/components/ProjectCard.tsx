type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  url?: string;
  color?: string;
};

function getYouTubeEmbedUrl(url: string) {
  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname.includes('youtu.be')) {
      return `https://www.youtube.com/embed/${parsedUrl.pathname.replace('/', '')}`;
    }

    if (parsedUrl.hostname.includes('youtube.com')) {
      const videoId = parsedUrl.searchParams.get('v');

      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }
    }
  } catch {
    return null;
  }

  return null;
}

function ProjectCard({ title, description, tech, url, color }: ProjectCardProps) {
  const embedUrl = url ? getYouTubeEmbedUrl(url) : null;

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
      {embedUrl ? (
        <div className="project-video">
          <iframe
            src={embedUrl}
            title={`${title} video`}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      ) : null}
      <div className="project-meta">
        <span>{tech.join(' · ')}</span>
        {url ? (
          <a className="project-link" href={url} target="_blank" rel="noreferrer">
            {embedUrl ? 'Open video' : 'Open article'}
          </a>
        ) : null}
      </div>
    </article>
  );
}

export default ProjectCard;
