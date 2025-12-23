import { useEffect, useState } from 'react';
import { supabase } from '../utils/lib/supabase';
import { IUser } from '../types/user.interface';

export function useUser() {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserData = async () => {
      const { data, error } = await supabase.auth.getUser();

      if (!error) setUser(data?.user.user_metadata as IUser);

      setLoading(false);
    };

    getUserData();
  }, []);

  return { user, loading };
}
