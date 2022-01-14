import React from 'react';
import styled from 'styled-components';
import { ModalButton } from '../Style/ModalButton';
import { OrderListItem } from './OrderListItem';
import { totalPriceItems } from '../Functions/secondaryFunction';
import { formatCurrency } from '../Functions/secondaryFunction';
import { projection } from '../Functions/secondaryFunction';

const OrderStyled = styled.section`
position:fixed;
display:flex;
flex-direction:column;
top:80px;
left:0;
background:#fff;
width:380px;
height:90%;
box-shadow:3px 4px 5px rgba(0,0,0,0.25);
padding:20px;
`;

const OrderTitle = styled.h2`
text-align:center;
text-transform:uppercase;
font-weight:700;
margin-bottom:30px;
`;

const OrderContent = styled.div`
flex-grow:1;
`;

const OrderList = styled.ul`

`;

const Total = styled.div`
display:flex;
margin-bottom:30px;
margin-left:30px;
margin-right:30px;
& span:first-child{
flex-grow:1;
}
`;

const TotalPrice = styled.span`
display:inline-block;
text-align:right;
min-width:75px;
margin-left:40px;
}
`;

const EmptyList = styled.p`
text-align:center;

`;
const rulesData = {
   name: ['name'],
   price: ['price'],
   count: ['count'],
   topping: ['topping', arr => arr.filter(obj => obj.checked).map(obj =>
      obj.name), arr => arr.length ? arr : 'no topping'],
   choice: ['choice', item => item ? item : 'no choices'],
};

export const Order = ({ orders, setOrders, setOpenItem, authentication, login, firebaseDatabase }) => {
   const dataBase = firebaseDatabase();

   const sendOrder = () => {
      const newOrder = orders.map(projection(rulesData));
      dataBase.ref('orders').push().set({
         userName: authentication.displayName,
         email: authentication.email,
         order: newOrder,
      });
      setOrders([]);
   }
   const deleteItem = index => {
      const newOrders = [...orders];
      newOrders.splice(index, 1);
      setOrders(newOrders);
   };



   const total = orders.reduce((result, order) =>
      result += totalPriceItems(order), 0);

   const totalCounter = orders.reduce((result, order) =>
      result += order.count, 0);

   return (
      <OrderStyled>
         <OrderTitle> Ваш заказ</OrderTitle>
         <OrderContent>
            {orders.length ?
               <OrderList>
                  {orders.map((order, index) => <OrderListItem
                     key={index}
                     order={order}
                     deleteItem={deleteItem}
                     index={index}
                     setOpenItem={setOpenItem}
                  />)}
               </OrderList> :
               <EmptyList>
                  Список заказов пуст!
               </EmptyList>}
         </OrderContent>
         <Total>
            <span>Итого:</span>
            <span>{totalCounter}</span>
            <TotalPrice>{formatCurrency(total)}</TotalPrice>
         </Total>
         <ModalButton onClick={() => {
            if (authentication) {
               sendOrder(orders);
            } else {
               login();
            }
         }}>
            Заказать
         </ModalButton>
      </OrderStyled>
   );
};

