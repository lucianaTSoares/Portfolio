import { IoIosArrowDown } from 'react-icons/io';

export function ArrowDown() {
  return (
    <div className='absolute inset-x-1/2 bottom-8 w-fit'>
      <IoIosArrowDown
        className='animate-arrow animation-direction-alternate animation-delay-100'
        size={25}
      />
      <IoIosArrowDown
        className='-mt-2.5 animate-arrow animation-direction-alternate animation-delay-200'
        size={25}
      />
      <IoIosArrowDown
        className='-mt-2.5 animate-arrow animation-direction-alternate animation-delay-300'
        size={25}
      />
    </div>
  );
}
