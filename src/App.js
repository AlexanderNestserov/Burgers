import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { ModalItem } from './Components/Modal/ModlItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';


const firebaseConfig = {
  apiKey: "AIzaSyAqqJZ0FX7J5q2VT70uLDxoagpEH6hyyLM",
  authDomain: "burger-23d5c.firebaseapp.com",
  projectId: "burger-23d5c",
  storageBucket: "burger-23d5c.appspot.com",
  messagingSenderId: "534398103398",
  appId: "1:534398103398:web:4311c58cffc7e9bc6922a7"
};

firebase.initializeApp(firebaseConfig);

function App() {

  const authFirebase = firebase.auth;
  const auth = useAuth(authFirebase);
  const openItem = useOpenItem();
  const orders = useOrders();

  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Order  {...orders}{...openItem} />
      <Menu {...openItem} />
      {openItem.openItem && <ModalItem {...openItem} {...orders} />}
    </>

  );
}

export default App;
