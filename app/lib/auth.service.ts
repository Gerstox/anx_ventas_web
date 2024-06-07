import { signIn } from 'next-auth/react';

const LOGIN_REDIRECT = process.env.NEXT_PUBLIC_LOGIN_REDIRECT || '/dashboard';

export const loginService = async (data) => {
  const email = data['email'];
  const password = data['password'];
  try {
    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });
    if (result.ok && result.status === 200) {
      return { ok: true, redirect: LOGIN_REDIRECT };
    }
    if (!result.ok && result.status === 401) {
      return { ok: false, message: 'Credenciales incorrectas' };
    }
  } catch (error) {
    console.error('Fetch Error:', error);
    throw new Error('Failed login.');
  }
};

export const registerService = async (data) => {
  const name = data['name'];
  const email = data['email'];
  const password = data['password'];

  const body = {
    name,
    email,
    password,
  };

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE}/auth/register`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      },
    );
    return response;
  } catch (error) {
    console.error('Fetch Error:', error);
    throw new Error('Failed register.');
  }
};

export const activateAccountService = async (id, code) => {
  console.log(id, code)
  const params = new URLSearchParams({
    id: id,
    code: code,
  });

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE}/auth/activate-account?${params}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    return response;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to activate user.');
  }
};

export const requestResetPasswordService = async (data) => {
  const email = data['email'];
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE}/auth/request-reset-password`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      },
    );
    return response;
  } catch (error) {
    console.error('Fetch Error:', error);
    throw new Error('Failed to activate user.');
  }
};

export const resetPasswordService = async (data) => {
  const password = data['password'];
  const resetPasswordToken = data['resetPasswordToken'];
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE}/auth/reset-password`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password, resetPasswordToken }),
      },
    );
    return response;
  } catch (error) {
    console.error('Fetch Error:', error);
    throw new Error('Failed to activate user.');
  }
};
