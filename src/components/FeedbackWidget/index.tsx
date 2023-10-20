import { PiChatTeardropText } from 'react-icons/pi';
import { WidgetForm } from './WidgetForm';

export function FeedbackWidget() {
  return (
    <div className='fixed bottom-8 left-8 z-10 w-full md:max-w-[50%] lg:max-w-[30%]'>
      <div className='pr-16'>
        <WidgetForm />
      </div>
      <button
        className='group mt-8 flex items-center justify-center rounded-full
      bg-red-300 px-3 py-3 text-white'
      >
        <PiChatTeardropText size={30} />
        <span
          className='max-w-0 overflow-hidden transition-all 
        duration-500 group-hover:max-w-xs'
        >
          <span className='ml-2 font-bold'>Feedback</span>
        </span>
      </button>
    </div>
  );
}
