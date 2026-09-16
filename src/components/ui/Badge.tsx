interface BadgeProps {
  children: React.ReactNode;
  color?: string;
  highlight?: boolean;
}

export function Badge({ children, color, highlight }: BadgeProps) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-bg-elevated px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-text-muted"
      style={highlight && color ? { borderColor: `${color}66`, color } : undefined}
    >
      {color ? (
        <span
          className="h-2 w-2 rounded-full"
          style={{ backgroundColor: color }}
          aria-hidden
        />
      ) : null}
      {children}
    </span>
  );
}
