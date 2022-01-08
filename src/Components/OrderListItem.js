import React from 'react';
import styled from 'styled-components';
import groupImage from '../images/Group.svg'

const OrderItemStyled = styled.li`
display:flex;
margin:15px;
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
weight:24px;
background-color:transparent;
border-color:transparent;
background-image:url(${groupImage});
background-position:center;
background-size:cover;
background-repeat:no-repeat;
`;

export const OrderListItem = () => (
   <OrderItemStyled>
      <ItemName>JS Burger</ItemName>
      <span>2</span>
      <ItemPrice>750 P</ItemPrice>
      <TrashButton />
   </OrderItemStyled>
);