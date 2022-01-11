import React from 'react';
import styled from 'styled-components';
import { ModalButton } from '../Style/ModalButton';
import { CountItem } from '../Modal/CountItem';
import { useCount } from '../Hooks/useCount';
import { totalPriceItems } from '../Functions/secondaryFunction';
import { formatCurrency } from '../Functions/secondaryFunction';
import { Topping } from './Topping';
import { Choices } from './Choices';
import { useTopping } from '../Hooks/useTopping';
import { useChoices } from '../Hooks/useChoices';


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
height:600px;
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
margin:10px 0;
`;

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {

   const counter = useCount(openItem.count);
   const toppings = useTopping(openItem);
   const choices = useChoices(openItem);
   const isEdit = openItem.index > -1;

   const closeModal = (e) => {
      if (e.target.id === "overlay") {
         setOpenItem(null)
      }
   };

   const order = {
      ...openItem,
      count: counter.count,
      topping: toppings.toppings,
      choice: choices.choice,
   }

   const editOrder = () => {
      const newOrders = [...orders];
      newOrders[openItem.index] = order;
      setOrders(newOrders);
      setOpenItem(null);
   };

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
                  <div>{formatCurrency(openItem.price)}</div>
               </HeaderContent>
               <CountItem {...counter} />
               {openItem.toppings && <Topping {...toppings} />}
               {openItem.choices && <Choices {...choices} openItem={openItem} />}
               <TotalPriceItem>
                  <span>Цена:</span>
                  <span>{formatCurrency(totalPriceItems(order))}</span>
               </TotalPriceItem>
               <ModalButton
                  onClick={isEdit ? editOrder : addToOrder}
                  disabled={order.choices && !order.choice}
               >{isEdit ? 'Изменить' : 'Добавить'}</ModalButton>
            </Content>
         </Modal>
      </Overlay>
   )
};