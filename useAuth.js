Apps/web/SRC/ganchos/useAuth.js

import { useEffect, useState } from 'react';
import pb from '@/lib/pocketbaseClient';

export function useAuth() {
  const [user, setUser] = useState(pb.authStore.record);

  useEffect(() => {
    const unsub = pb.authStore.onChange((_token, record) => setUser(record));
    return unsub;
  }, []);

  return {
    user,
    isAuthed: pb.authStore.isValid,
    login: (email, password) => pb.collection('users').authWithPassword(email, password),
    signup: async (email, password, name) => {
      await pb.collection('users').create({ email, password, passwordConfirm: password, name });
      return pb.collection('users').authWithPassword(email, password);
    },
    logout: () => pb.authStore.clear(),
  };
}
