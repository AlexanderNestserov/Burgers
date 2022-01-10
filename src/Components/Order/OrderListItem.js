import React from 'react';
import styled from 'styled-components';
import groupImage from '../images/Group.svg';
import { totalPriceItems } from '../Functions/secondaryFunction';
import { formatCurrency } from '../Functions/secondaryFunction';

const OrderItemStyled = styled.li`
display:flex;
margin:15px;
font-size:18px;
flex-wrap:wrap;
`;

const ItemName = styled.span`
flex-grow:1;
`;

const ItemPrice = styled.span`
margin-left:20px;
margin-right:20px;
min-width:65px;
text-align:right;
`;

const TrashButton = styled.button`
height:24px;
width:24px;
background-color:transparent;
border-color:transparent;
background-image:url(${groupImage});
background-position:center;
background-size:cover;
background-repeat:no-repeat;
`;

const Toppings = styled.div`
font-size:14px;
opacity:0.7;
width:100%;
`;

export const OrderListItem = ({ order }) => {
   const topping = order.topping.filter(item => item.checked)
      .map(item => item.name)
      .join(' , ');
   return (
      <OrderItemStyled>
         <ItemName>{order.name}  {order.choice}</ItemName>
         <span>{order.count}</span>
         <ItemPrice>{formatCurrency(totalPriceItems(order))} </ItemPrice>
         <TrashButton />
         {topping && <Toppings>Добавки:{topping}</Toppings>}
      </OrderItemStyled >
   )
};