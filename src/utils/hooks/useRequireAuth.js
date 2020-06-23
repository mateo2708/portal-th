import { useAuth } from '@hooks/useAuth';

/**
 * @author MateoTG.
 * @hook useRequireAuth.
 * @description Hook to verify authentications on routes.
 */

const useRequireAuth = () => {
  const auth = useAuth();
  const authLocal = JSON.parse(localStorage.getItem('authUser'));

  return auth.user || authLocal;
};

export default useRequireAuth;
