import React from 'react';
import styled from 'styled-components';

const ToppingWrap = styled.div`
max-width:500px;
margin:0 auto;
column-count:2;
column-gap:20px;
`;

const ToppingLabel = styled.label`
cursor:pointer;
display:inline-block;
`;

const ToppingCheckBox = styled.input`
margin:15px 5px;
width:80px;
height:15px;
font-size:14px;
`;

export const Topping = ({ toppings, checkToppings }) => {
   return (
      <>
         <h3>Дополнительно:</h3>
         <ToppingWrap>
            {toppings.map((item, i) => (
               <ToppingLabel key={i}>
                  <ToppingCheckBox type="checkbox"
                     checked={item.checked}
                     onChange={() => checkToppings(i)}
                  />
                  {item.name}
               </ToppingLabel>
            ))}

         </ToppingWrap>
      </>
   )
}