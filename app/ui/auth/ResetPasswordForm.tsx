'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Animation } from '../InputAnimation';
import { ResetPasswordSchema } from '../../utils/schemas';
import {
  error_message,
  input_tailwind,
  label_input,
  success_message,
} from '../../utils/tailwind-styles';
import RevealPasword from '../RevealPassword';
import { useState } from 'react';
import { resetPasswordService } from '@/app/lib/auth.service';
import { useRouter } from 'next/navigation';

export default function ResetPasswordForm({ token }) {
  const schema = ResetPasswordSchema;
  const REDIRECT = '/login';
  const messageText = 'Su contraseña ha sido cambiada exitosamente.';
  const errorText = 'Ha ocurrido un error, vuelva a intentarlo.';
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [revealPassword, setRevealPassword] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: '',
      resetPasswordToken: token,
    },
    resolver: yupResolver(schema),
  });

  setValue('resetPasswordToken', token);

  const onSubmit = handleSubmit(async (data) => {
    const response = await resetPasswordService(data);
    if (response.ok) {
      setMessage(messageText);
      setError(null);
      reset();
      router.push(REDIRECT);
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
      <div className="relative">
        <label className={label_input} htmlFor="password">
          Nueva contraseña
        </label>
        <Animation errors={errors} field="password" />
        <input
          {...register('password')}
          placeholder="Contraseña"
          type={revealPassword ? 'text' : 'password'}
          className={`${input_tailwind} text-gray-700`}
        />
        <RevealPasword
          revealPassword={revealPassword}
          setRevealPassword={setRevealPassword}
        />
      </div>
      <input {...register('resetPasswordToken')} type="hidden" />
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
          Recuperar
        </button>
      </div>
    </form>
  );
}
