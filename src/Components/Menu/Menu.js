import React from 'react';
import styled from 'styled-components';
import dbMenu from '../DBMenu';
import { ListItem } from './ListItem';
import { DivBanner } from './DivBanner';

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

export const Menu = ({ setOpenItem }) => (
   <MenuStyled>
      <DivBanner />
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
   </MenuStyled>
);




