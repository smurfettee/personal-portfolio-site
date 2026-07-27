import ProjectCard from "./ProjectCard";

const PROJECTS = [
  {
    title: "Signal",
    description: "Real-time log aggregator with anomaly alerts for small teams.",
    tags: ["React", "Node", "WebSockets"],
    href: "#",
  },
  {
    title: "Driftwood",
    description: "A local-first notes app that syncs peer-to-peer, no server required.",
    tags: ["TypeScript", "CRDT", "IndexedDB"],
    href: "#",
  },
  {
    title: "Pixel Forge",
    description: "Browser-based sprite editor with onion-skin animation preview.",
    tags: ["Canvas", "React", "WASM"],
    href: "#",
  },
  {
    title: "Quarry",
    description: "CLI that mines a codebase for dead exports and unused routes.",
    tags: ["Rust", "CLI"],
    href: "#",
  },
  {
    title: "Loopback",
    description: "Self-hosted webhook inspector with replay and diffing.",
    tags: ["Go", "Docker", "SQLite"],
    href: "#",
  },
  {
    title: "Static Noise",
    description: "Generative audio-visual toy built on the Web Audio API.",
    tags: ["JavaScript", "Web Audio", "Canvas"],
    href: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="text-3xl font-bold text-ink-primary sm:text-4xl">Projects</h2>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
