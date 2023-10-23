import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { TContactForm } from '@/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from '@/schemas/formSchema';
import { SendEmailHandler } from '@/components/FeedbackWidget/WidgetForm/sendEmailHandler';
import { Card } from '@/ui/Card';
import { Field } from '@/ui/Field';
import { Button } from '@/ui/Button';

export function WidgetForm() {
  const {
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting },
    control,
    reset,
  } = useForm<TContactForm>({
    resolver: yupResolver(formSchema),
    mode: 'all',
    reValidateMode: 'onChange',
  });

  const onSubmit: SubmitHandler<TContactForm> = async (data) => {
    await SendEmailHandler(data);
    if (isSubmitSuccessful) {
      reset({
        message: '',
      });
    }
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
                label='Nome completo (opcional)'
                dataName={name}
                errors={errors}
                value={value || ''}
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
                label='E-mail (opcional)'
                dataName={name}
                errors={errors}
                value={value || ''}
                onChange={onChange}
                onBlur={onBlur}
                count={50}
                placeholder='email@example.com'
              />
            )}
          />
          <Controller
            control={control}
            name='message'
            render={({ field: { value, onChange, onBlur, name } }) => (
              <Field<TContactForm>
                as='textarea'
                label='Seu feedback'
                dataName={name}
                errors={errors}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                count={100}
                placeholder='Olá, gostei muito do seu portfólio!'
              />
            )}
          />

          <Button
            className='mt-3'
            type='submit'
            loading={isSubmitting}
            disabled={isSubmitting}
            animateOnHover
          >
            Enviar
          </Button>
        </form>
      </Card.Content>
    </Card.Root>
  );
}
