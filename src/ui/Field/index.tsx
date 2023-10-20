import { ErrorMessage } from '@hookform/error-message';
import { ChangeEventHandler, FocusEventHandler } from 'react';
import { FieldErrors, FieldValues, Path } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

type FieldProps<T extends FieldValues> = {
  label: string;
  dataName: Path<T>;
  errors?: FieldErrors;
  as?: 'input' | 'textarea';
  count?: number;
  value: string;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  placeholder?: string;
};

export function Field<T extends FieldValues>({
  label,
  dataName,
  errors,
  as: Element = 'input',
  count,
  value = '',
  onChange,
  onBlur,
  placeholder = '',
}: FieldProps<T>) {
  const hasErrors = errors?.[dataName];

  return (
    <div className='relative mb-2 mt-7 flex flex-col'>
      <Element
        id={label}
        onChange={onChange}
        onBlur={onBlur}
        rows={3}
        className={twMerge(
          'peer rounded-md border-2 px-3 py-1 placeholder-transparent outline-none transition-all  focus:placeholder-zinc-400 dark:bg-zinc-700 dark:focus:placeholder-zinc-500',
          hasErrors
            ? 'border-red-600 focus:border-red-600'
            : 'border-zinc-300 focus:border-zinc-400 dark:border-transparent dark:focus:border-zinc-500'
        )}
        placeholder={placeholder}
      />
      <label
        className='absolute -top-6 left-[1px] text-sm transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-600 peer-focus:-top-6 peer-focus:left-[1px] peer-focus:text-sm peer-focus:text-current dark:peer-placeholder-shown:text-zinc-300'
        htmlFor={label}
      >
        {label}
      </label>
      <div className='flex flex-row justify-between'>
        <span role='alert' className='mt-1 text-xs text-red-600'>
          <ErrorMessage errors={errors} name={dataName} />
        </span>
        <span
          className={twMerge(
            'mt-1 text-sm',
            hasErrors && 'text-red-600',
            !count && 'opacity-0'
          )}
        >
          {value.length}/{count}
        </span>
      </div>
    </div>
  );
}
