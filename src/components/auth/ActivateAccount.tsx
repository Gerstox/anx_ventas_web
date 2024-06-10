'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { error_message, success_message } from '@/utils/tailwind-styles';
import { activateAccountService } from '@/lib/auth.service';

import '@/components/globals.css';

export default function ActivateAccount({ id, code }) {
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const REDIRECT = process.env.NEXT_PUBLIC_LOGIN_REDIRECT;

  useEffect(() => {
    async function activateAccount() {
      const response = await activateAccountService(id, code);
      if (response.ok) {
        setLoading(false);
        setError(null);
        setMessage('Se ha activado su cuenta exitosamente');
        router.push(REDIRECT);
      } else {
        setLoading(false);
        setMessage(null);
        setError('Ha ocurrido un error activado su cuenta.');
      }
    }

    activateAccount();
  }, [id, code, REDIRECT, router]);

  
  return (
    <div className="flex flex-col items-center justify-center">
      {loading && <span className="loader"></span>}
      {message && (
        <span className={`text-center font-medium ${success_message} tex-md`}>
          {message}
        </span>
      )}
      {error && (
        <span className={`text-center font-medium ${error_message} text-md`}>
          {error}
        </span>
      )}
    </div>
  );
}
