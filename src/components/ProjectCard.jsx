function ProjectCard({ title, description, tags, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col rounded-md border border-white/15 bg-base-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-cyan hover:shadow-glow-cyan"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-heading text-lg font-semibold text-ink-primary">
          {title}
        </h3>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="mt-1 h-4 w-4 shrink-0 -translate-x-2 text-accent-cyan opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M7 7h10v10" />
        </svg>
      </div>

      <p className="mt-2 text-sm text-ink-muted">{description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-accent-cyan/30 bg-accent-cyan/5 px-2.5 py-1 font-heading text-xs text-accent-cyan"
          >
            {tag}
          </span>
        ))}
      </div>

      <span className="mt-5 inline-flex -translate-x-2 items-center gap-1 font-heading text-xs uppercase tracking-widest text-accent-cyan opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        View Project
      </span>
    </a>
  );
}

export default ProjectCard;
