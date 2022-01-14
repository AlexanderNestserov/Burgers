import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { ModalItem } from './Components/Modal/ModlItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';
import { useTitle } from './Components/Hooks/useTitle';


const firebaseConfig = {
  apiKey: "AIzaSyADQ3UJx2k34GEw1NyR_GuBK8782Ky0Hos",
  authDomain: "burgers-1d1d1.firebaseapp.com",
  projectId: "burgers-1d1d1",
  storageBucket: "burgers-1d1d1.appspot.com",
  messagingSenderId: "1067722181154",
  appId: "1:1067722181154:web:8ca686ffa48973d067187b"
};

firebase.initializeApp(firebaseConfig);

function App() {

  const auth = useAuth(firebase.auth);
  const openItem = useOpenItem();
  const orders = useOrders();
  useTitle(openItem.openItem);

  return (
    <>
      <GlobalStyle />
      <NavBar {...auth} />
      <Order
        {...orders}
        {...openItem}
        {...auth}
        firebaseDatabase={firebase.database}
      />
      <Menu {...openItem} />
      {openItem.openItem && <ModalItem {...openItem} {...orders} />}
    </>

  );
}

export default App;
