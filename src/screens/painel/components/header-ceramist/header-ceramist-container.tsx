import { useUser } from '@/core/hooks/use-user';
import { getCookies, deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

export function useHeaderCeramistContainer() {
  const router = useRouter();
  const { user, loading: isLoadingUser } = useUser();

  const handleLogout = async () => {
    const cookieStore = await getCookies();

    for (const cookie in cookieStore) {
      if (cookie.startsWith('sb-')) {
        deleteCookie(cookie);
      }
    }

    router.push('/auth/sign-in');
  };

  return {
    router,
    handleLogout,
    user,
    isLoadingUser,
  };
}
