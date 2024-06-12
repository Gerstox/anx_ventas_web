'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

import { requestResetPasswordService } from '@/lib/auth.service';
import { RequestResetPasswordSchema } from '@/utils/schemas';
import { Animation } from '@/components/InputAnimation';
import {
  error_message,
  input_tailwind,
  label_input,
  success_message,
} from '@/utils/tailwind-styles';

export default function RequestResetPasswordForm() {
  const schema = RequestResetPasswordSchema;
  const messageText =
    'Te hemos enviado un mensaje con un link para cambiar tu contraseña a la dirección de correo que nos has proporcionado';
  const errorText = 'Ha ocurrido un error';
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(async (data) => {
    const response = await requestResetPasswordService(data);
    if (response.ok) {
      setMessage(messageText);
      setError(null);
      reset();
    }
    if (!response.ok) {
      setError(errorText);
      setMessage(null);
    }
  });

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      noValidate
      autoComplete="off"
      className="space-y-3"
    >
      <div>
        <label className={label_input} htmlFor="email">
          Correo electrónico
        </label>
        <Animation errors={errors} field="email" />
        <input
          {...register('email')}
          placeholder="Correo electrónico"
          type="text"
          className={`${input_tailwind} text-gray-700`}
        />
      </div>
      <div>
        <div className="flex flex-col gap-4 items-center">
          {message && (
            <span
              className={`text-center font-medium ${success_message} tex-md`}
            >
              {message}
            </span>
          )}
          {error && (
            <span
              className={`text-center font-medium ${error_message} text-md`}
            >
              {error}
            </span>
          )}
        </div>
        <button
          type="button"
          onClick={onSubmit}
          className="w-full rounded-md bg-blue-500 hover:bg-blue-600 text-blue-50 px-3 py-3 text-md font-semibold mt-3"
        >
          Solicitar
        </button>
      </div>
    </form>
  );
}
