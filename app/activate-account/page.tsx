import { activateAccountService } from '../lib/auth.service';
import ActivateAccount from '../ui/auth/ActivateAccount';
import ResetPasswordForm from '../ui/auth/ResetPasswordForm copy';

export default function Page({
  searchParams,
}: {
  searchParams?: {
    id?: string;
    code?: string;
  };
}) {
  const id = searchParams?.id;
  const code = searchParams?.code;
  return (
    <div className="bg-white px-10 md:py-8 w-full md:w-[425px] m-auto md:my-4 md:border md:rounded-md md:shadow-xl">
      <h2 className="text-center text-2xl font-bold text-orange-500 mb-4">
        Activando cuenta
      </h2>
      <ActivateAccount id={id} code={code} />
    </div>
  );
}
