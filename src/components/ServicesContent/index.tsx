import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

interface ServiceContentProps extends React.HTMLAttributes<HTMLDivElement> {
  imageClassName?: string;
  svgImage: string;
  imageHeight: number;
  imageWidth: number;
  data: {
    title: string;
    content: string;
  };
}

export function ServiceContent({
  imageClassName,
  svgImage,
  imageHeight,
  imageWidth,
  data,
  ...rest
}: ServiceContentProps) {
  return (
    <div id={rest.id} className='flex flex-row items-center gap-7'>
      <div className='to-secondary hidden justify-center rounded-lg bg-gradient-to-tr from-primary p-3 lg:flex'>
        <Image
          src={svgImage}
          width={imageWidth}
          height={imageHeight}
          alt={`${data.title} icon`}
          className={twMerge('m-0 invert', imageClassName)}
        />
      </div>
      <div>
        <h3 className='bold !mb-2 !mt-6 text-base'>{data.title}</h3>
        <p>{data.content}</p>
      </div>
    </div>
  );
}
