function chunk(items, size) {
  const chunks = [];
  for (let i = 0; i < items.length; i += size) {
    chunks.push(items.slice(i, i + size));
  }
  return chunks;
}

function CodeWindow({ categories }) {
  return (
    <div className="overflow-hidden rounded-md border border-white/15 bg-base-surface">
      <div className="flex items-center gap-4 border-b border-white/15 bg-black/20 px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-ink-muted/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink-muted/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink-muted/40" />
        </div>
        <span className="font-heading text-xs text-ink-muted">stack.ts</span>
      </div>

      <pre className="overflow-x-auto p-5 font-heading text-sm leading-relaxed">
        <code>
          <span className="text-accent-magenta">const</span>{" "}
          <span className="text-ink-primary">stack</span>{" "}
          <span className="text-ink-muted">{"= {"}</span>
          {"\n"}
          {categories.map(({ label, items }) => (
            <span key={label}>
              {"  "}
              <span className="text-ink-primary">{label}</span>
              <span className="text-ink-muted">: [</span>
              {"\n"}
              {chunk(items, 3).map((line, lineIndex) => (
                <span key={lineIndex}>
                  {"    "}
                  {line.map((item, itemIndex) => (
                    <span key={item}>
                      <span className="text-accent-cyan">"{item}"</span>
                      <span className="text-ink-muted">
                        {itemIndex < line.length - 1 ? ", " : ","}
                      </span>
                    </span>
                  ))}
                  {"\n"}
                </span>
              ))}
              {"  "}
              <span className="text-ink-muted">],</span>
              {"\n"}
            </span>
          ))}
          <span className="text-ink-muted">{"};"}</span>
        </code>
      </pre>
    </div>
  );
}

export default CodeWindow;
