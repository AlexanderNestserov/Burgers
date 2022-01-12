import { ProviderId } from 'firebase/auth';
import { useState, useEffect } from 'react';

export function useAuth(authFirebase) {
   const [authentication, setAuthentication] = useState(null);

   const provider = 'google';

   const auth = authFirebase();

   const login = () => provider;

   useEffect(() => {


   }, [authentication]);
   return { authentication, login };
}