import * as yup from 'yup';

const requiredErrorMessage = 'Este campo deve ser preenchido.';
const emailErrorMessage = 'Email inválido.';
const invalidStringErrorMessage = `Não são aceitos caracteres como aspas duplas ("), aspas simples ('), menor que (<), maior que (>).`

const testText = (value?: string) => {
  if (value) {
    const sanitizedMessage = value.replace(/["'\\<>]/g, '');
    return sanitizedMessage === value;
  }
  return true;
}

const minLengthErrorMessage = (length: number) => `Mínimo de ${length} caracteres.`;
const maxLengthErrorMessage = (length: number) => `Máximo de ${length} caracteres.`; 


export const formSchema = yup
    .object({
      name: yup
        .string()
        .optional()
        .max(50, maxLengthErrorMessage(50))
        .test('sanitize', invalidStringErrorMessage, (value) => testText(value)),
      email: yup
        .string()
        .optional()
        .email(emailErrorMessage)
        .max(50, maxLengthErrorMessage(50)),
      message: yup
        .string()
        .required(requiredErrorMessage)
        .min(10, minLengthErrorMessage(10))
        .max(100, maxLengthErrorMessage(100))
        .test('sanitize', invalidStringErrorMessage , (value) => testText(value))
    })
    .required();