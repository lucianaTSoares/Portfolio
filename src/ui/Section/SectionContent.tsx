interface SectionContentProps {
  children: React.ReactNode;
}

export function SectionContent({ children }: SectionContentProps) {
  return <div className='w-full'>{children}</div>;
}
