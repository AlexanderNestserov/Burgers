import React from 'react';
import styled from 'styled-components';

const ChoicesWrap = styled.div`
max-width:500px;
margin:0 auto;
column-count:2;
column-gap:20px;
`;

const ChoicesRadio = styled.input`
cursor:pointer;
margin-right:5px;
margin:15px 5px;
width:80px;
height:15px;
font-size:14px;

`;

const ChoicesLabel = styled.label`
cursor:pointer;
display:inline-block;

`;

export const Choices = ({ openItem, choice, changeChoice }) => {
   return (
      <>
         <h3>Ваш выбор:</h3>
         <ChoicesWrap>
            {openItem.choices.map((item, i) => (
               <ChoicesLabel key={i}>
                  <ChoicesRadio type="radio"
                     name='choices'
                     checked={choice === item}
                     value={item}
                     onChange={changeChoice}
                  />
                  {item}
               </ChoicesLabel>
            ))}
         </ChoicesWrap>
      </>
   )
}