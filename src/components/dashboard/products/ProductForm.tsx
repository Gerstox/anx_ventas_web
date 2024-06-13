'use client';
import { Animation } from '@/components/InputAnimation';
import { ProductSchema } from '@/utils/schemas';
import { input_tailwind, label_input, tw_button } from '@/utils/tailwind-styles';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { FileUpload } from './FileUpload';

export default function ProductForm() {
  const schema = ProductSchema;
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(async (data) => {
    // TODO
  });

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      noValidate
      autoComplete="off"
      className="space-y-1"
    >
      <div>
        <label className={label_input} htmlFor="name">
          Nombre
        </label>
        <Animation errors={errors} field="name" />
        <input
          {...register('name')}
          placeholder="Nombre"
          type="text"
          className={`${input_tailwind} text-gray-700`}
        />
      </div>
      <div>
        <label className={label_input} htmlFor="quantity">
          Cantidad
        </label>
        <Animation errors={errors} field="quantity" />
        <input
          {...register('quantity')}
          placeholder="Cantidad"
          type="number"
          min={1}
          className={`${input_tailwind} text-gray-700`}
        />
      </div>
      <div>
        <label className={label_input} htmlFor="buyPrice">
          Precio de compra
        </label>
        <Animation errors={errors} field="buyPrice" />
        <input
          {...register('buyPrice')}
          placeholder="Precio de compra"
          type="number"
          min={0}
          className={`${input_tailwind} text-gray-700`}
        />
      </div>
      <div>
        <label className={label_input} htmlFor="sellPrice">
          Precio de venta
        </label>
        <Animation errors={errors} field="sellPrice" />
        <input
          {...register('sellPrice')}
          placeholder="Precio de venta"
          type="number"
          min={0}
          className={`${input_tailwind} text-gray-700`}
        />
      </div>
      <div>
        <label className={label_input} htmlFor="barcode">
          Código de barras
        </label>
        <Animation errors={errors} field="barcode" />
        <input
          {...register('barcode')}
          placeholder="Código de barras"
          type="text"
          className={`${input_tailwind} text-gray-700`}
        />
      </div>
      <FileUpload />
      <div>
        <button type="button" onClick={onSubmit} className={tw_button}>
          Crear producto
        </button>
      </div>
    </form>
  );
}
