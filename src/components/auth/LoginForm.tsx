'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Link from 'next/link';

import { Animation } from '@/components/InputAnimation';
import RevealPasword from '@/components/RevealPassword';
import ButtonGoogle from '@/components/ButtonGoogle';
import { loginService } from '@/lib/auth.service';
import { LoginSchema } from '@/utils/schemas';
import {
  error_message,
  input_tailwind,
  label_input,
  tw_button,
} from '@/utils/tailwind-styles';

export default function LoginForm() {
  const [revealPassword, setRevealPassword] = useState(false);
  const [error, setError] = useState(null);
  const schema = LoginSchema;
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(async (data) => {
    const result = await loginService(data);
    if (result.ok) router.push(result.redirect);
    if (!result.ok) setError(result.message);
  });

  return (
    <div>
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
          <RevealPasword
            revealPassword={revealPassword}
            setRevealPassword={setRevealPassword}
          />
        </div>
        <div>
          {error && (
            <div className={`text-center ${error_message}`}>{error}</div>
          )}
          <Link className="block mt-2" href="/request-reset-password">
            <div className="text-center text-blue-600 px-4 hover:underline">
              ¿Olvidaste tu contraseña?
            </div>
          </Link>
          <button
            type="button"
            onClick={onSubmit}
            className={tw_button}
          >
            Iniciar sesión
          </button>
        </div>
      </form>
      <div className="flex flex-col gap-4 items-center justify-center my-4 border-t-2 border-gray-100">
        <span className="text-gray-500 text-sm mt-4">O inicia con</span>
        <ButtonGoogle />
      </div>
      <Link className="block mt-2" href="/register">
        <div className="text-center text-blue-600 px-4 hover:underline">
          Registrarse
        </div>
      </Link>
    </div>
  );
}
