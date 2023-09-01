interface SectionContentProps {
  children: React.ReactNode;
}

export function SectionContent({ children }: SectionContentProps) {
  return <div>{children}</div>;
}
