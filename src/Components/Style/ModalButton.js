import React from 'react';
import styled from 'styled-components';

export const ModalButton = styled.button`
width:200px;
height:50px;
background-color:#299B01;
color:black;
font -family:Roboto;
font-size:24px;
display:block;
margin:0 auto;
margin-top:30px;
border-radius:20px;
box-shadow:0 5px 1px rgba(0,0,0,0.5);
&:hover{
   background-color:yellow;
}
&:active{
   position: relative;
	top: 3px;
   background-color:#299B01;
   box-shadow:0 2px 1px rgba(0,0,0,0.5);
}
`;