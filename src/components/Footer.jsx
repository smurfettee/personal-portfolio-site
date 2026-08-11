function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto flex max-w-6xl items-center justify-center border-t border-white/15 px-6 py-8 font-heading text-xs text-ink-muted">
      <p>&copy; {year} Ege Karaçetin. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
