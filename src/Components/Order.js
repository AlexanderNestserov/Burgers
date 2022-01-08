import React from 'react';
import styled from 'styled-components';
import { ModalButton } from './ModalButton';
import { OrderListItem } from './OrderListItem';

const OrderStyled = styled.section`
position:fixed;
display:flex;
flex-direction:column;
top:80px;
left:0;
background:#fff;
min-width:380px;
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
& span:first-child{
flex-grow:1;
}
`;

const TotalPrice = styled.span`
text-align:right;
min-width:65px;
margin-left:20px;
}
`;

export const Order = () => {
   return (
      <OrderStyled>
         <OrderTitle> your order</OrderTitle>
         <OrderContent>
            <OrderList>
               <OrderListItem />
               <OrderListItem />
               <OrderListItem />
            </OrderList>
         </OrderContent>
         <Total>
            <span>Total</span>
            <span>1</span>
            <TotalPrice>5850 P</TotalPrice>
         </Total>
         <ModalButton>
            Arrange
         </ModalButton>
      </OrderStyled>
   );
};