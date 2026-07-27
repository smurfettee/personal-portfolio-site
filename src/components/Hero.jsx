import { motion } from "framer-motion";
import GlitchText from "./GlitchText";
import NeonButton from "./NeonButton";

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      <div className="hero-grid" />

      <GlitchText
        as="h1"
        text="EGE.DEV"
        className="text-5xl font-bold text-ink-primary sm:text-7xl md:text-8xl"
      />

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
        className="relative mt-6 font-heading text-base text-ink-muted sm:text-lg"
      >
        Software Engineer
        <span className="terminal-cursor" aria-hidden="true" />
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
        className="relative mt-12 flex flex-col gap-4 sm:flex-row"
      >
        <NeonButton onClick={() => scrollToId("projects")}>View Work</NeonButton>
        <NeonButton variant="magenta" onClick={() => scrollToId("contact")}>
          Contact
        </NeonButton>
      </motion.div>
    </section>
  );
}

export default Hero;
