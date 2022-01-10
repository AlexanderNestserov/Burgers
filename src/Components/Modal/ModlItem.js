import React from 'react';
import styled from 'styled-components';
import { ModalButton } from '../Style/ModalButton';
import { CountItem } from '../Modal/CountItem';
import { useCount } from '../Hooks/useCount';
import { totalPriceItems } from '../Functions/secondaryFunction';

const Overlay = styled.div`
position:fixed;
display:flex;
justify-content:center;
align-items:center;
top:0;
left:0;
width:100%;
height:100%;
background-color: rgba(0, 0, 0, .5);
z-index:10;
`;

const Modal = styled.div`
margin-top:50px;
background-color:#fff;
width:600px;
height:500px;
font-family:Pacifico;
`;

const Banner = styled.div`
background-size:cover;
background-image:url(${({ img }) => img});
background-position:center;
height:200px;
width:100%;
`;

const Content = styled.section`
display:flex;
flex-direction:column;
justify-content:space-between;
padding:20px;
height:calc(100%-200px);
`;

const HeaderContent = styled.div`
display:flex;
justify-content:space-between;
font-size:24px;
font-weight:700;
font-family:'Pacifico';
`;

const TotalPriceItem = styled.div`
display:flex;
justify-content:space-between;
margin:20px;
`;

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {

   const counter = useCount();

   const closeModal = (e) => {
      if (e.target.id === "overlay") {
         setOpenItem(null)
      }
   };

   const order = {
      ...openItem,
      count: counter.count
   }

   const addToOrder = () => {
      setOrders([...orders, order]);
      setOpenItem(null);
   };



   return (
      <Overlay
         id="overlay"
         onClick={closeModal}
      >
         <Modal>
            <Banner img={openItem.img} />
            <Content>
               <HeaderContent>
                  <div>{openItem.name}</div>
                  <div>{openItem.price.toLocaleString('ru-Ru', { style: 'currency', currency: 'RUB' })}</div>
               </HeaderContent>
               <CountItem {...counter} />
               <TotalPriceItem>
                  <span>Price:</span>
                  <span>{totalPriceItems(order).toLocaleString('ru-Ru', { style: 'currency', currency: 'RUB' })}</span>
               </TotalPriceItem>
               <ModalButton onClick={addToOrder}>ADD</ModalButton>
            </Content>
         </Modal>
      </Overlay>
   )
};