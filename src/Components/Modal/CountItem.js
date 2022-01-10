import React from 'react';
import styled from 'styled-components';

const CountWrapper = styled.div`
display:flex;
justify-content:space-between;
margin-top:30px;
`;

const CountInput = styled.input`
width:50px;
font-size:20px;
border:1px dashed #000;
background-color:#299B01;
`;

const ButtonCount = styled.button`
color:black;
width:20px;
height:35px;
`;

export const CountItem = ({ count, setCount, onChange }) => {

   return (
      <CountWrapper>
         <span>Количество:</span>
         <div>
            <ButtonCount disabled={count <= 1} onClick={() => setCount(count - 1)}>-</ButtonCount>
            <CountInput type='number' min='1' max='100' value={count < 1 ? "" : count} onChange={onChange} />
            <ButtonCount onClick={() => setCount(Number(count) + 1)}>+</ButtonCount>
         </div>
      </CountWrapper>
   )
}