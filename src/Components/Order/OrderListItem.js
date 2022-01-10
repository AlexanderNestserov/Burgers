import React from 'react';
import styled from 'styled-components';
import groupImage from '../images/Group.svg';
import { totalPriceItems } from '../Functions/secondaryFunction';

const OrderItemStyled = styled.li`
display:flex;
margin:15px;
font-size:18px;
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

export const OrderListItem = ({ order }) => (
   <OrderItemStyled>
      <ItemName>{order.name}</ItemName>
      <span>{order.count}</span>
      <ItemPrice>{totalPriceItems(order).toLocaleString('ru-Ru', { style: 'currency', currency: 'RUB' })} </ItemPrice>
      <TrashButton />
   </OrderItemStyled>
);