const VARIANTS = {
  cyan: "border-accent-cyan text-accent-cyan hover:text-base hover:shadow-glow-cyan",
  magenta: "border-accent-magenta text-accent-magenta hover:text-base hover:shadow-glow-magenta",
};

const FILL_VARIANTS = {
  cyan: "bg-accent-cyan",
  magenta: "bg-accent-magenta",
};

function NeonButton({ children, onClick, variant = "cyan", className = "" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative overflow-hidden rounded-sm border px-8 py-3 font-heading text-sm uppercase tracking-widest transition-colors duration-300 ${VARIANTS[variant]} ${className}`}
    >
      <span
        className={`absolute inset-0 -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0 ${FILL_VARIANTS[variant]}`}
        aria-hidden="true"
      />
      <span className="relative">{children}</span>
    </button>
  );
}

export default NeonButton;
