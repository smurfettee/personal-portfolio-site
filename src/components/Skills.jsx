import { motion } from "framer-motion";
import CodeWindow from "./CodeWindow";

const CATEGORIES = [
  {
    label: "languages",
    items: [
      "JavaScript",
      "TypeScript",
      "Java",
      "Python",
      "SQL",
      "MySQL",
      "C/C++",
      "Solidity",
      "Bash",
    ],
  },
  {
    label: "frameworks",
    items: [
      "React",
      "Vue",
      "Tailwind",
      "Next.js",
      "Express",
      "Spring Boot",
      "Node.js",
      "Hardhat",
      "Ether.js",
    ],
  },
  {
    label: "tools",
    items: ["Docker", "Jenkins", "AWS", "Prometheus", "Grafana", "Ethereum"],
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="text-3xl font-bold text-ink-primary sm:text-4xl">
        Tech Stack
      </h2>

      <div className="mt-12 grid grid-cols-1 items-center gap-12 lg:grid-cols-[3fr_2fr]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
          className="flex flex-col gap-4"
        >
          {CATEGORIES.map(({ label, items }) => (
            <motion.p
              key={label}
              variants={fadeUp}
              className="font-heading text-sm sm:text-base"
            >
              <span className="text-accent-cyan">&gt; {label}:</span>{" "}
              {items.map((item, index) => (
                <span key={item}>
                  <span className="text-ink-primary transition-colors hover:text-glow-cyan">
                    {item}
                  </span>
                  {index < items.length - 1 && (
                    <span className="text-ink-muted">, </span>
                  )}
                </span>
              ))}
            </motion.p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="hidden lg:block"
        >
          <CodeWindow categories={CATEGORIES} />
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
