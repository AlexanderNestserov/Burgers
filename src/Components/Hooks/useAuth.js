
import { useState, useEffect } from 'react';

export function useAuth(authFirebase) {
   const [authentication, setAuthentication] = useState(null);

   const auth = authFirebase();
   const provider = new authFirebase.GoogleAuthProvider();
   const login = () => auth.signInWithPopup(provider);
   const logOut = () => auth.signOut()
      .catch(error => console.error());


   useEffect(() => {
      auth.onAuthStateChanged(user => {
         if (user) {
            setAuthentication(user);
         } else {
            setAuthentication(null);
         }
      })}, [authentication]);
   return { authentication, login, logOut };
}