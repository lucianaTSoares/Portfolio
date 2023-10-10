'use client';

import { Formik, Form, Field } from 'formik';
import { Section } from '../../ui/Section';

export function ContactSection() {
  const initialFieldsValue = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  return (
    <Section.Root id='contact' centralized className='flex flex-col'>
      <Section.Title title='Contato' />
      <Section.Content>
        <h3>Entre em contato através do formulário!</h3>
        <Formik
          initialValues={initialFieldsValue}
          onSubmit={() => console.log('aaa')}
        >
          <Form className='flex flex-col'>
            <label htmlFor='name' className='mt-5'>
              Nome completo
            </label>
            <Field id='name' name='name' />

            <label htmlFor='email' className='mt-5'>
              E-mail
            </label>
            <Field id='email' name='email' />

            <label htmlFor='subject' className='mt-5'>
              Assunto
            </label>
            <Field id='subject' name='subject' />

            <label htmlFor='message' className='mt-5'>
              Mensagem
            </label>
            <Field
              as='textarea'
              id='message'
              name='message'
              placeholder='Olá! Estou entrando em contato para...'
            />
          </Form>
        </Formik>
      </Section.Content>
    </Section.Root>
  );
}
