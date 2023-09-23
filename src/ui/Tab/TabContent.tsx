import React from 'react';

interface TabContentProps extends React.HTMLAttributes<HTMLDivElement> {
  contentToShow: React.ReactNode;
}

export function TabContent({ contentToShow, ...rest }: TabContentProps) {
  return (
    <div id={rest.id} className='w-full'>
      {contentToShow}
    </div>
  );
}
