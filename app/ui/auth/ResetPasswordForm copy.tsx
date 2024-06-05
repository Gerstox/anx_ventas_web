'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Animation } from '../InputAnimation';
import { ResetPasswordSchema } from '../../utils/schemas';
import { input_tailwind, label_input } from '../../utils/tailwind-styles';
import RevealPasword from '../RevealPassword';
import { useState } from 'react';

export default function ResetPasswordForm() {
  const schema = ResetPasswordSchema;
  const [revealPassword, setRevealPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: '',
    },
    resolver: yupResolver(schema),
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
      <div>
        <button
          type="button"
          className="w-full rounded-md bg-blue-500 hover:bg-blue-600 text-blue-50 px-3 py-3 text-md font-semibold mt-3"
        >
          Recuperar
        </button>
      </div>
    </form>
  );
}
