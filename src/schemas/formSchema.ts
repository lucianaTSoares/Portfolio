import * as yup from 'yup';

const requiredErrorMessage = 'Este campo deve ser preenchido.';
const emailErrorMessage = 'Email inválido.';
const minLengthErrorMessage = (length: number) => `Mínimo de ${length} caracteres.`;
const maxLengthErrorMessage = (length: number) => `Máximo de ${length} caracteres.`;  

export const formSchema = yup
    .object({
      name: yup
        .string()
        .required(requiredErrorMessage)
        .min(3, minLengthErrorMessage(3))
        .max(50, maxLengthErrorMessage(50)),
      message: yup
        .string()
        .required(requiredErrorMessage)
        .min(10, minLengthErrorMessage(10))
        .max(500, maxLengthErrorMessage(500)),
    })
    .required();