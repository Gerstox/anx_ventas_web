'use client';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Animation } from '../InputAnimation';
import { RequestResetPasswordSchema } from '../../utils/schemas';
import { input_tailwind, label_input } from '../../utils/tailwind-styles';

export default function RequestResetPasswordForm() {
  const schema = RequestResetPasswordSchema;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
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
      <div>
        <button
          type="button"
          className="w-full rounded-md bg-blue-500 hover:bg-blue-600 text-blue-50 px-3 py-3 text-md font-semibold mt-3"
        >
          Solicitar
        </button>
      </div>
    </form>
  );
}
