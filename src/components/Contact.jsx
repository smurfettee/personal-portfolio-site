import { useState } from "react";
import { motion } from "framer-motion";
import { GitHubIcon, LinkedInIcon, CopyIcon, CheckIcon } from "./icons";

const EMAIL = "hello@ege.dev";

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/smurfettee", Icon: GitHubIcon },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ege-karacetin-255190262/",
    Icon: LinkedInIcon,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API unavailable; ignore silently.
    }
  };

  return (
    <section
      id="contact"
      className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 text-center"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        className="flex flex-col items-center gap-8"
      >
        <h2 className="text-4xl font-bold text-ink-primary sm:text-6xl">
          Get in touch
        </h2>

        <button
          type="button"
          onClick={handleCopy}
          className="group flex items-center gap-3 rounded-md border border-white/15 bg-base-surface px-5 py-3 font-heading text-lg text-ink-primary transition-all duration-300 hover:border-accent-cyan hover:shadow-glow-cyan sm:text-xl"
        >
          <span>{EMAIL}</span>
          <span className="relative h-5 w-5 shrink-0 text-ink-muted transition-colors group-hover:text-accent-cyan">
            <CopyIcon
              className={`absolute inset-0 h-5 w-5 transition-all duration-200 ${
                copied ? "scale-75 opacity-0" : "scale-100 opacity-100"
              }`}
            />
            <CheckIcon
              className={`absolute inset-0 h-5 w-5 text-accent-cyan transition-all duration-200 ${
                copied ? "scale-100 opacity-100" : "scale-75 opacity-0"
              }`}
            />
          </span>
        </button>

        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-ink-muted transition-all duration-300 hover:border-accent-cyan hover:text-accent-cyan hover:shadow-glow-cyan"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
