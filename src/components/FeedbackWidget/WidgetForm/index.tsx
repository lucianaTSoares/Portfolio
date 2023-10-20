'use client';

import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { TContactForm } from '@/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from '@/schemas/formSchema';
import { SendEmailHandler } from '@/components/Sections/Contact/sendEmailHandler';
import { Card } from '@/ui/Card';
import { Field } from '@/ui/Field';

export function WidgetForm() {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<TContactForm>({
    resolver: yupResolver(formSchema),
    mode: 'all',
    reValidateMode: 'onChange',
  });

  const onSubmit: SubmitHandler<TContactForm> = async (data) => {
    await SendEmailHandler(data);
  };

  return (
    <Card.Root className='dark:bg-[#151414]'>
      <Card.Content>
        <h3 className='text-center'>Deixe seu feedback 😊</h3>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
          <Controller
            control={control}
            name='name'
            render={({ field: { value, onChange, onBlur, name } }) => (
              <Field<TContactForm>
                label='Nome completo'
                dataName={name}
                errors={errors}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                count={50}
              />
            )}
          />

          <Controller
            control={control}
            name='message'
            render={({ field: { value, onChange, onBlur, name } }) => (
              <Field<TContactForm>
                as='textarea'
                label='Mensagem'
                dataName={name}
                errors={errors}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                count={500}
                placeholder='Olá, gostei muito do seu portfólio!'
              />
            )}
          />

          <button type='submit'>aaaaaaaa</button>
        </form>
      </Card.Content>
    </Card.Root>
  );
}
