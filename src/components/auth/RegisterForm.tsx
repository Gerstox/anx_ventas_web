'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Link from 'next/link';

import { loginService, registerService } from '@/lib/auth.service';
import { Animation } from '@/components/InputAnimation';
import RevealPasword from '@/components/RevealPassword';
import { RegisterSchema } from '@/utils/schemas';

import {
  error_message,
  input_tailwind,
  label_input,
  tw_button,
} from '@/utils/tailwind-styles';

export default function RegisterForm() {
  const schema = RegisterSchema;
  const [revealPassword, setRevealPassword] = useState(false);
  const [revealPassword2, setRevealPassword2] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

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

  const onSubmit = handleSubmit(async (data) => {
    const response = await registerService(data);
    const jsonResponse = await response.json();
    if (response.ok) {
      const result = await loginService(data);
      if (result.ok) router.push(result.redirect);
      if (!result.ok) setError(result.message);
    }
    if (!response.ok) {
      setError(jsonResponse.message);
    }
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
      <div className="relative">
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
        {error && <div className={`text-center ${error_message}`}>{error}</div>}
        <button
          type="button"
          onClick={onSubmit}
          className={tw_button}
        >
          Registrarse
        </button>
        <Link className="block mt-2" href="/login">
          <div className="text-center text-blue-600 px-4 hover:underline">
            Iniciar sesión
          </div>
        </Link>
      </div>
    </form>
  );
}
