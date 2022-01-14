import React from 'react';
import styled from 'styled-components';
import { ListItem } from './ListItem';
import { DivBanner } from './DivBanner';
import { useFetch } from '../Hooks/useFetch';

const MenuStyled = styled.main`
background-color:#ccc;
margin-top:80px;
margin-left:380px;
`;

const H2 = styled.h2`
font-size:40px;
text-align:center;
`;

const SectionMenu = styled.section`
padding:10px;
`;

export const Menu = ({ setOpenItem }) => {
   const res = useFetch();
   const dbMenu = res.response;
   return (
      <MenuStyled>
         <DivBanner />
         {
            res.response ?
               <>
                  <SectionMenu>
                     <H2>Сочные бургеры</H2>
                     <ListItem
                        itemList={dbMenu.burger}
                        setOpenItem={setOpenItem}
                     />
                  </SectionMenu>
                  <SectionMenu>
                     <H2>Напитки</H2>
                     <ListItem
                        itemList={dbMenu.other}
                        setOpenItem={setOpenItem}
                     />
                  </SectionMenu>
               </> :
               res.error ?
                  <div>Sorry, we will fix it soon...</div> :
                  <div>Loading...</div>
         }
      </MenuStyled>
   )
};




