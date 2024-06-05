'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Animation } from '../InputAnimation';
import { LoginSchema } from '../../utils/schemas';
import { useState } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { input_tailwind, label_input } from '../../utils/tailwind-styles';
import Link from 'next/link';

export default function LoginForm() {
  const schema = LoginSchema;
  const [revealPassword, setRevealPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
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
      <div className="relative">
        <label className={label_input} htmlFor="password">
          Contraseña
        </label>
        <Animation errors={errors} field="password" />
        <input
          {...register('password')}
          placeholder="Contraseña"
          type={revealPassword ? 'text' : 'password'}
          className={`${input_tailwind} text-gray-700`}
        />
        <div
          className="absolute top-9 right-3"
          onClick={() => setRevealPassword((revealPassword) => !revealPassword)}
        >
          {revealPassword ? (
            <IoMdEye className="text-blue-500 text-2xl" />
          ) : (
            <IoMdEyeOff className="text-blue-500 text-2xl" />
          )}
        </div>
      </div>
      <div>
        <button
          type="button"
          className="w-full rounded-md bg-blue-500 hover:bg-blue-600 text-blue-50 px-3 py-3 text-md font-semibold mt-3"
        >
          Iniciar sesión
        </button>
        <Link className="block mt-2" href="/request-reset-password">
          <div className="text-center text-blue-500 px-4 hover:underline">
            ¿Olvidaste tu contraseña?
          </div>
        </Link>
        <Link className="block mt-2" href="/register">
          <div className="text-center text-blue-500 px-4 hover:underline">
            Registrarse
          </div>
        </Link>
      </div>
    </form>
  );
}
