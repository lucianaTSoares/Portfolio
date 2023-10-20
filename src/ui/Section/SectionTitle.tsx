interface SectionTitleProps {
  title: string;
}

export function SectionTitle({ title }: SectionTitleProps) {
  return <h2 className='gradient-underline w-fit'>{title}</h2>;
}
