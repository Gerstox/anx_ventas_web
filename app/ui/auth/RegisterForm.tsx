'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Animation } from '../InputAnimation';
import { RegisterSchema } from '../../utils/schemas';
import { useState } from 'react';
import { input_tailwind, label_input } from '../../utils/tailwind-styles';
import Link from 'next/link';
import RevealPasword from '../RevealPassword';

export default function RegisterForm() {
  const schema = RegisterSchema;
  const [revealPassword, setRevealPassword] = useState(false);
  const [revealPassword2, setRevealPassword2] = useState(false);

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
      className="space-y-2"
    >
      <div>
        <label className={label_input} htmlFor="name">
          Nombre completo
        </label>
        <Animation errors={errors} field="name" />
        <input
          {...register('name')}
          placeholder="Nombre completo"
          type="text"
          className={`${input_tailwind} text-gray-700`}
        />
      </div>
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
        <RevealPasword
          revealPassword={revealPassword}
          setRevealPassword={setRevealPassword}
        />
      </div>
      <div className='relative'>
        <label className={label_input} htmlFor="passwordConfirm">
          Confirmar contraseña
        </label>
        <Animation errors={errors} field="passwordConfirm" />
          <input
            {...register('passwordConfirm')}
            type={revealPassword2 ? 'text' : 'password'}
            placeholder="Confirmar contraseña"
            className={input_tailwind}
          />
          <RevealPasword
            revealPassword={revealPassword2}
            setRevealPassword={setRevealPassword2}
          />
      </div>
      <div>
        <button
          type="button"
          className="w-full rounded-md bg-blue-500 hover:bg-blue-600 text-blue-50 px-3 py-3 text-md font-semibold mt-3"
        >
          Registrarse
        </button>
        <Link className="block mt-2" href="/login">
          <div className="text-center text-blue-500 px-4 hover:underline">
            Iniciar sesión
          </div>
        </Link>
      </div>
    </form>
  );
}
