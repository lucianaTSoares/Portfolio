'use client';

import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Section } from '@/ui/Section';
import { Field } from '@/ui/Field';
import { formSchema } from '@/schemas/formSchema';
import { TContactForm } from '@/types';
import { SendEmailHandler } from './sendEmailHandler';

export function ContactSection() {
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
    <Section.Root id='contact' className='flex scroll-mt-32 flex-col'>
      <Section.Title title='Contato' />
      <Section.Content className='md:w-1/2'>
        <h3 className='text-center'>Entre em contato através do formulário!</h3>
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
            name='email'
            render={({ field: { value, onChange, onBlur, name } }) => (
              <Field<TContactForm>
                label='E-mail'
                dataName={name}
                errors={errors}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder='email@example.com'
              />
            )}
          />

          <Controller
            control={control}
            name='subject'
            render={({ field: { value, onChange, onBlur, name } }) => (
              <Field<TContactForm>
                label='Assunto'
                dataName={name}
                errors={errors}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                count={20}
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
                placeholder='Olá, Luciana! Entro em contato para...'
              />
            )}
          />

          <button type='submit'>aaaaaaaa</button>
        </form>
      </Section.Content>
    </Section.Root>
  );
}
