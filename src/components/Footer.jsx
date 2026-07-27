import { useEffect, useState } from "react";

function Footer() {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const formattedTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <footer className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 border-t border-white/15 px-6 py-8 font-heading text-xs text-ink-muted sm:flex-row">
      <p>Made with React, Tailwind &amp; Framer Motion</p>
      <p>{formattedTime} local</p>
    </footer>
  );
}

export default Footer;
