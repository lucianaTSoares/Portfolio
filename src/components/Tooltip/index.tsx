interface ToolTipProps {
  children: React.ReactNode;
  tooltip: string;
}

export function ToolTip({ children, tooltip }: ToolTipProps) {
  return (
    <div className='group relative flex justify-center'>
      {children}
      <span className='absolute top-[125%] z-10 mt-2 whitespace-nowrap rounded bg-zinc-700 px-2.5 py-1 text-sm font-semibold text-white opacity-0 transition group-hover:visible group-hover:opacity-100'>
        <div className='tooltip-arrow'></div>
        {tooltip}
      </span>
    </div>
  );
}
