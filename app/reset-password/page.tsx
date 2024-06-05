import ResetPasswordForm from "../ui/auth/ResetPasswordForm copy";

export default function Page() {
  return (
    <div className="bg-white px-10 md:py-8 w-full md:w-[425px] m-auto md:my-4 md:border md:rounded-md md:shadow-xl">
        <h2 className="text-center text-2xl font-bold text-blue-500 mb-4">
          Recuperar contraseña
        </h2>
        <ResetPasswordForm />
    </div>
  );
}
