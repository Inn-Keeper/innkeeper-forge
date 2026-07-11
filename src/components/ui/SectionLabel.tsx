interface SectionLabelProps {
  children: React.ReactNode;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ember">
      {children}
    </p>
  );
}
