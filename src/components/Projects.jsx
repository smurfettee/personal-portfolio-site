import ProjectCard from "./ProjectCard";

const PROJECTS = [
  {
    title: "Limit Order Book",
    description: "A limit order book matching engine.",
    tags: ["C++"],
    href: "https://github.com/smurfettee/limit-order-book",
  },
  {
    title: "ERC20 Token",
    description: "ERC20 token smart contract with minting and burning capabilities.",
    tags: ["JavaScript", "Solidity", "Hardhat"],
    href: "https://github.com/smurfettee/erc20-my-token",
  },
  {
    title: "Coinsafe",
    description: "A website that lets users search for information about various cryptocurrencies in real-time.",
    tags: ["React", "Tailwind", "Node.js"],
    href: "https://github.com/smurfettee/Crypto-Site",
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
