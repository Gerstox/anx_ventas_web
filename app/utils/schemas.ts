import * as yup from 'yup';

export const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const LoginSchema = yup.object({
  email: yup
    .string()
    .required('Campo requerido')
    .trim()
    .matches(emailRegex, 'Ingresa un correo válido'),
  password: yup
    .string()
    .min(6, '6 caracteres mínimo')
    .max(20, '20 caracteres máximo')
    .required('Campo requerido'),
});

export const RegisterSchema = yup.object({
  name: yup.string().required('Campo requerido'),
  email: yup
    .string()
    .required('Campo requerido')
    .trim()
    .matches(emailRegex, 'Ingresa un correo válido'),
  password: yup
    .string()
    .min(6, '6 caracteres mínimo')
    .max(20, '20 caracteres máximo')
    .required('Campo requerido'),
  passwordConfirm: yup
    .string()
    .min(6, '6 caracteres mínimo')
    .max(20, '20 caracteres máximo')
    .required('Campo requerido')
    .oneOf([yup.ref('password')], 'Las contraseñas no coinciden'),
});

export const RequestResetPasswordSchema = yup.object({
  email: yup
    .string()
    .required('Campo requerido')
    .trim()
    .matches(emailRegex, 'Ingresa un correo válido'),
});

export const ResetPasswordSchema = yup.object({
  password: yup
    .string()
    .min(6, '6 caracteres mínimo')
    .max(20, '20 caracteres máximo')
    .required('Campo requerido'),
});
