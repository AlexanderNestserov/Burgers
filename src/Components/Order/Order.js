import React from 'react';
import styled from 'styled-components';
import { ModalButton } from '../Style/ModalButton';
import { OrderListItem } from './OrderListItem';
import { totalPriceItems } from '../Functions/secondaryFunction';
import { formatCurrency } from '../Functions/secondaryFunction';

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

export const Order = ({ orders }) => {

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
                  {orders.map(order => <OrderListItem order={order} />)}
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
         <ModalButton>
            Заказать
         </ModalButton>
      </OrderStyled>
   );
};