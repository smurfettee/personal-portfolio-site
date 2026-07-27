import { motion } from "framer-motion";
import { DefaultAvatarIcon } from "./icons";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function About() {
  return (
    <section
      id="about"
      className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 px-6 py-24 md:grid-cols-2 md:gap-16"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="mx-auto flex aspect-square w-full max-w-xs items-center justify-center rounded-md border border-accent-cyan/30 bg-base-surface"
      >
        <DefaultAvatarIcon className="h-28 w-28 text-ink-muted sm:h-32 sm:w-32" />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ delay: 0.1 }}
        className="flex flex-col gap-5"
      >
        <h2 className="text-3xl font-bold text-ink-primary sm:text-4xl">About</h2>

        <p className="text-ink-muted">
          I'm a full-stack developer who likes building things. I spend most
          of my time developing and chasing the small details that make
          software feel alive.
        </p>

        <p className="text-ink-muted">
          When I'm not shipping features, I'm probably tinkering with side
          projects or rebuilding something that already worked just to make
          it better.
        </p>

        <p className="font-heading text-sm text-accent-cyan">
          &gt; status: <span className="text-ink-primary">open to opportunities</span>
          <span className="terminal-cursor" aria-hidden="true" />
        </p>
      </motion.div>
    </section>
  );
}

export default About;
