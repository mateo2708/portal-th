import { useEffect } from 'react';
import { useAuth } from '@hooks/useAuth';
import { useRouter } from '@hooks/useRouter';

/**
 * @author MateoTG.
 * @hook useRequireAuth.
 * @description Hook to verify authentications on routes.
 */

const useRequireAuth = (redirectUrl = '/') => {
  const auth = useAuth();
  const router = useRouter();

  // If auth.user is false that means we're not
  // logged in and should redirect.
  useEffect(() => {
    if (auth.user === false) {
      router.push(redirectUrl);
    }
  }, [auth, router, redirectUrl]);

  return auth;
};

export default useRequireAuth;
